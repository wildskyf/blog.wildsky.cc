import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.wildsky.cc',
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
      i18n: {
        defaultLocale: 'tw',
        locales: {
          tw: 'zh-Hant-TW',
          en: 'en-US',
        },
      },
    }),
  ],
});
