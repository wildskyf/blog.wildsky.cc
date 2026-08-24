import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { shouldIndexPath, normalizePathname } from './src/utils/indexPolicy.mjs';
import {
  collectPostTranslationPairs,
  collectTagPostCounts,
  getSitemapTranslationLinks,
} from './scripts/sitemapPolicy.mjs';

const siteUrl = 'https://blog.wildsky.cc';
const tagPostCounts = collectTagPostCounts(import.meta.dirname);
const postTranslationPairs = collectPostTranslationPairs(import.meta.dirname);
const sitemapTranslationLinks = getSitemapTranslationLinks(siteUrl, postTranslationPairs);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  outDir: './out',
  i18n: {
    defaultLocale: 'tw',
    locales: ['en', 'tw'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/page/1': '/',
    '/en/page/1': '/en',
    '/feed.xml': '/rss.xml',
    '/index.xml': '/rss.xml',
    '/en/tags/C': '/en/tags/C-sharp',
    '/posts/vim-buffer-winodw-tab': '/posts/vim-buffer-window-tab',
    '/tags/沈默證據': '/tags/沉默證據',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    sitemap({
      filter(page) {
        const pathname = normalizePathname(page);
        return shouldIndexPath(pathname, tagPostCounts.get(pathname));
      },
      serialize(item) {
        const links = sitemapTranslationLinks.get(normalizePathname(item.url));
        if (links) item.links = links;
        return item;
      },
    }),
  ],
});
