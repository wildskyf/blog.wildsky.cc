import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';
import {
  collectPostTranslationPairs,
  collectTagPostCounts,
  getSitemapTranslationLinks,
} from './sitemapPolicy.mjs';
import { normalizePathname, shouldIndexPath } from '../src/utils/indexPolicy.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const outputDirectory = join(projectRoot, 'out');
const tagPostCounts = collectTagPostCounts(projectRoot);
const postTranslationPairs = collectPostTranslationPairs(projectRoot);
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
const expectedAlternateLinkCount = [
  ...getSitemapTranslationLinks('https://blog.wildsky.cc', postTranslationPairs).values(),
].reduce((total, links) => total + links.length, 0);
assert.equal(
  alternateLinkCount,
  expectedAlternateLinkCount,
  'Only verified bilingual core pages and translated posts should emit sitemap hreflang links.'
);

for (const [twPath, enPath] of postTranslationPairs) {
  for (const [routePath, otherPath, selfLang, otherLang, buttonLabel] of [
    [twPath, enPath, 'zh-Hant-TW', 'en-US', 'Read in English'],
    [enPath, twPath, 'en-US', 'zh-Hant-TW', '閱讀中文版'],
  ]) {
    const html = readFileSync(htmlPathForRoute(routePath), 'utf8');
    const $ = load(html);
    const languageLinks = $('head link[rel="alternate"][hreflang]')
      .map((_, element) => ({
        hreflang: $(element).attr('hreflang'),
        href: $(element).attr('href'),
      }))
      .get();

    assert.deepEqual(
      languageLinks,
      [
        { hreflang: selfLang, href: new URL(routePath, 'https://blog.wildsky.cc').toString() },
        { hreflang: otherLang, href: new URL(otherPath, 'https://blog.wildsky.cc').toString() },
      ],
      `HTML hreflang mismatch for ${routePath}`
    );

    const translationLink = $('a.ds-translation-link');
    assert.equal(translationLink.length, 1, `Missing translation button for ${routePath}`);
    assert.equal(
      translationLink.attr('href'),
      otherPath,
      `Translation target mismatch for ${routePath}`
    );
    assert.equal(
      translationLink.attr('hreflang'),
      otherLang,
      `Translation language mismatch for ${routePath}`
    );
    assert.equal(
      translationLink.text().trim(),
      buttonLabel,
      `Translation label mismatch for ${routePath}`
    );
  }
}

const unpairedPostHtml = readFileSync(
  htmlPathForRoute('/en/posts/crashloopbackoff-when-deploying-elasticsearch-using-kubernetes-2/'),
  'utf8'
);
const $unpairedPost = load(unpairedPostHtml);
assert.equal(
  $unpairedPost('head link[rel="alternate"][hreflang]').length,
  0,
  'Unpaired posts must not emit hreflang links.'
);
assert.equal(
  $unpairedPost('a.ds-translation-link').length,
  0,
  'Unpaired posts must not display a translation button.'
);

console.log(
  JSON.stringify({
    sitemapUrls: sitemapPaths.size,
    indexableTagPages: [...tagPostCounts].filter(([path, count]) => shouldIndexPath(path, count))
      .length,
    noindexTagPages: [...tagPostCounts].filter(([path, count]) => !shouldIndexPath(path, count))
      .length,
    translatedPostPairs: postTranslationPairs.length,
    hreflangLinks: alternateLinkCount,
  })
);
