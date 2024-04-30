import { defineConfig } from 'astro/config'
import loadConfig from 'tailwindcss/loadConfig'
import tailwind from '@astrojs/tailwind'
import sitemap from "@astrojs/sitemap"
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.wildsky.cc',
  outDir: './out',
  i18n: {
    defaultLocale: "tw",
    locales: ["en", "tw"]
  },
  redirects: {
    '/page/1': '/',
    '/en/page/1': '/en'
  },
  integrations: [
    UnoCSS(),
    tailwind({
      configFile: './tailwind.config.js',
      applyBaseStyles: true,
      nesting: true
    }),
    sitemap({
      i18n: {
        defaultLocale: 'tw',
        locales: {
          tw: 'zh-Hant-TW',
          en: 'en-US',
        },
      },
    })
  ]
});
