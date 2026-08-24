import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';
import YAML from 'yaml';
import { getCanonicalTags } from '../src/data/tagPolicy.mjs';
import { selectRelatedPosts } from '../src/utils/relatedPosts.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const outputDirectory = join(projectRoot, 'out');

const parseScalar = (source, key) => {
  const value = source.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
  return value ? YAML.parse(value) : null;
};

const slugFromFilename = (filename) =>
  filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}_/, '');

const collections = [
  { lang: 'tw', directory: 'src/content/posts-tw', routePrefix: '' },
  { lang: 'en', directory: 'src/content/posts-en', routePrefix: '/en' },
];

const summary = {};

for (const { lang, directory, routePrefix } of collections) {
  const canonicalTags = getCanonicalTags(lang);
  const entries = readdirSync(join(projectRoot, directory))
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const source = readFileSync(join(projectRoot, directory, filename), 'utf8');
      const tags = parseScalar(source, 'tags') ?? [];
      const slug = parseScalar(source, 'slug') ?? slugFromFilename(filename);

      assert.ok(Array.isArray(tags), `${filename}: tags must be an array`);
      assert.ok(tags.length <= 3, `${filename}: keep at most three tags`);
      assert.equal(new Set(tags).size, tags.length, `${filename}: duplicate tags`);
      for (const tag of tags) {
        assert.ok(canonicalTags.has(tag), `${filename}: non-canonical tag ${tag}`);
      }

      return {
        id: filename,
        data: {
          category: parseScalar(source, 'category'),
          date: parseScalar(source, 'date'),
          slug,
          tags,
        },
      };
    });

  const tagCounts = new Map();
  let relatedLinkPages = 0;
  let relatedLinks = 0;

  for (const entry of entries) {
    for (const tag of entry.data.tags) tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);

    const route = `${routePrefix}/posts/${entry.data.slug}/`;
    const htmlPath = join(outputDirectory, route.slice(1), 'index.html');
    assert.ok(existsSync(htmlPath), `Missing built article ${route}`);

    const $ = load(readFileSync(htmlPath, 'utf8'));
    const actualLinks = $('.ds-related-link')
      .map((_, element) => $(element).attr('href'))
      .get();
    const expectedLinks = selectRelatedPosts(entry, entries).map(
      ({ entry: related }) => `${routePrefix}/posts/${related.data.slug}/`
    );

    assert.deepEqual(actualLinks, expectedLinks, `${route}: related posts mismatch`);
    assert.equal(
      new Set(actualLinks).size,
      actualLinks.length,
      `${route}: duplicate related links`
    );
    assert.ok(!actualLinks.includes(route), `${route}: related posts must not link to itself`);

    for (const href of actualLinks) {
      assert.ok(
        existsSync(join(outputDirectory, href.slice(1), 'index.html')),
        `${route}: missing related target ${href}`
      );
    }

    if (actualLinks.length > 0) relatedLinkPages += 1;
    relatedLinks += actualLinks.length;
  }

  summary[lang] = {
    posts: entries.length,
    taggedPosts: entries.filter((entry) => entry.data.tags.length > 0).length,
    uniqueTags: tagCounts.size,
    indexableTagCandidates: [...tagCounts.values()].filter((count) => count >= 3).length,
    relatedLinkPages,
    relatedLinks,
  };
}

console.log(JSON.stringify(summary));
