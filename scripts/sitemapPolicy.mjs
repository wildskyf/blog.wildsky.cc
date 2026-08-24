import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getTagRouteSegment, normalizePathname } from '../src/utils/indexPolicy.mjs';

const parseInlineList = (rawList, sourcePath) => {
  const items = [];
  let current = '';
  let quote = null;

  for (let index = 0; index < rawList.length; index += 1) {
    const character = rawList[index];

    if ((character === '"' || character === "'") && rawList[index - 1] !== '\\') {
      quote = quote === character ? null : (quote ?? character);
      continue;
    }

    if (character === ',' && quote === null) {
      items.push(current.trim());
      current = '';
      continue;
    }

    current += character;
  }

  if (quote !== null) throw new Error(`Unclosed quote in tags frontmatter: ${sourcePath}`);
  if (current.trim()) items.push(current.trim());

  return items.filter(Boolean);
};

const collectLocaleTagCounts = (directory, localePrefix) => {
  const counts = new Map();

  for (const filename of readdirSync(directory).filter((file) => file.endsWith('.md'))) {
    const sourcePath = join(directory, filename);
    const source = readFileSync(sourcePath, 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter) continue;

    const tagsLine = frontmatter[1].match(/^tags:\s*\[([^\]]*)\]\s*$/m);
    if (!tagsLine) {
      if (/^tags:/m.test(frontmatter[1])) {
        throw new Error(`Tags must stay an inline YAML list for sitemap generation: ${sourcePath}`);
      }
      continue;
    }

    for (const tag of parseInlineList(tagsLine[1], sourcePath)) {
      const path = normalizePathname(
        `${localePrefix}/tags/${encodeURIComponent(getTagRouteSegment(tag))}`
      );
      counts.set(path, (counts.get(path) ?? 0) + 1);
    }
  }

  return counts;
};

export const collectTagPostCounts = (projectRoot) => {
  const counts = new Map();
  const sources = [
    [join(projectRoot, 'src/content/posts-tw'), ''],
    [join(projectRoot, 'src/content/posts-en'), '/en'],
  ];

  for (const [directory, localePrefix] of sources) {
    for (const [path, count] of collectLocaleTagCounts(directory, localePrefix)) {
      counts.set(path, count);
    }
  }

  return counts;
};

const TRANSLATION_PAIRS = [
  ['/', '/en/'],
  ['/about/', '/en/about-en/'],
  ['/archive/', '/en/archive/'],
  ['/categories/', '/en/categories/'],
  ['/donate/', '/en/donate-en/'],
  ['/experiences/', '/en/experiences-en/'],
  ['/freelancer/', '/en/freelancer-en/'],
  ['/more-links/', '/en/more-links-en/'],
  ['/tags/', '/en/tags/'],
];

export const getSitemapTranslationLinks = (siteUrl) => {
  const linksByPath = new Map();

  for (const [twPath, enPath] of TRANSLATION_PAIRS) {
    const links = [
      { lang: 'zh-Hant-TW', url: new URL(twPath, siteUrl).toString() },
      { lang: 'en-US', url: new URL(enPath, siteUrl).toString() },
    ];
    linksByPath.set(normalizePathname(twPath), links);
    linksByPath.set(normalizePathname(enPath), links);
  }

  return linksByPath;
};
