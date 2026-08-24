import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectTagPostCounts } from './sitemapPolicy.mjs';
import { normalizePathname, shouldIndexPath } from '../src/utils/indexPolicy.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const outputDirectory = join(projectRoot, 'out');
const tagPostCounts = collectTagPostCounts(projectRoot);
const sitemapFiles = readdirSync(outputDirectory).filter((file) => /^sitemap-\d+\.xml$/.test(file));

assert.ok(sitemapFiles.length > 0, 'Build the site before checking its index policy.');

const sitemapXml = sitemapFiles
  .map((file) => readFileSync(join(outputDirectory, file), 'utf8'))
  .join('\n');
const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    normalizePathname(new URL(match[1]).pathname)
  )
);

const htmlPathForRoute = (routePath) => {
  const decodedPath = decodeURIComponent(normalizePathname(routePath));
  if (decodedPath === '/404/') return join(outputDirectory, '404.html');
  return decodedPath === '/'
    ? join(outputDirectory, 'index.html')
    : join(outputDirectory, decodedPath.slice(1), 'index.html');
};

const assertRobotsPolicy = (routePath, shouldIndex) => {
  const htmlPath = htmlPathForRoute(routePath);
  assert.ok(existsSync(htmlPath), `Missing built HTML for ${routePath}`);

  const html = readFileSync(htmlPath, 'utf8');
  const hasNoindex = /<meta name="robots" content="noindex, follow">/.test(html);
  assert.equal(hasNoindex, !shouldIndex, `Robots policy mismatch for ${routePath}`);
  assert.equal(
    sitemapPaths.has(normalizePathname(routePath)),
    shouldIndex,
    `Sitemap policy mismatch for ${routePath}`
  );
};

for (const routePath of ['/search/', '/en/search/', '/page/2/', '/404/']) {
  assertRobotsPolicy(routePath, false);
}

for (const [routePath, postCount] of tagPostCounts) {
  assertRobotsPolicy(routePath, shouldIndexPath(routePath, postCount));
}

for (const routePath of ['/', '/about/', '/archive/', '/en/', '/en/about-en/', '/en/archive/']) {
  assert.ok(sitemapPaths.has(normalizePathname(routePath)), `Expected ${routePath} in sitemap`);
}

const alternateLinkCount = [...sitemapXml.matchAll(/<xhtml:link\b/g)].length;
assert.equal(
  alternateLinkCount,
  36,
  'Only the nine verified bilingual core-page pairs should emit hreflang links.'
);

console.log(
  JSON.stringify({
    sitemapUrls: sitemapPaths.size,
    indexableTagPages: [...tagPostCounts].filter(([path, count]) => shouldIndexPath(path, count))
      .length,
    noindexTagPages: [...tagPostCounts].filter(([path, count]) => !shouldIndexPath(path, count))
      .length,
    hreflangLinks: alternateLinkCount,
  })
);
