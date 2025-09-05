# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual blog built with Astro, supporting Traditional Chinese (tw) and English (en). The site is deployed at https://blog.wildsky.cc.

## Development Commands

```bash
# Development server
yarn dev       # or yarn start

# Build for production
yarn build     # or yarn out (outputs to ./out directory)

# Preview production build
yarn preview

# Create new article (requires slug parameter)
yarn new <article-slug>
# or directly: sh ./newArticle.sh <article-slug>
```

## Architecture & Structure

### Content Management

- **Posts**: Located in `src/content/posts/tw/` (Chinese) and `src/content/posts/en/` (English)
- Posts follow naming pattern: `YYYY-MM-DD-HH-MM-SS_slug.md`
- Content schema defined in `src/content/config.ts` with frontmatter: title, date, slug, excerpt, feature_image, guid, updated, tags, reference

### Internationalization (i18n)

- Default locale: `tw` (Traditional Chinese)
- Supported locales: `tw`, `en`
- Translation utilities in `src/i18n/utils.ts` and `src/i18n/translations.ts`
- URL structure: `/` for default locale, `/en/` prefix for English

### Page Routing

- Static pages: Markdown files in `src/pages/` (about, bookshelf, donate, experiences, etc.)
- Dynamic routes:
  - `/posts/[...slug]` - Individual blog posts
  - `/page/[...page]` - Pagination pages
  - Both routes replicated under `/en/` for English version

### Styling

- Tailwind CSS v4 with Vite plugin
- UnoCSS for icon support (planning to replace with react-icons)
- Custom letter spacing for Chinese (`tw-normal: 0.02em`)

### Key Configuration

- `astro.config.mjs` - Main Astro configuration with i18n settings
- `PAGINATION_PER_PAGE_COUNT = 16` in `src/data/globalConfig.js`
- Output directory: `./out`

## Creating New Content

To add a new blog post:

1. Run `yarn new <slug>` to generate template
2. Edit the created file in `src/content/posts/tw/` or manually create in `/en/` for English
3. Fill in the frontmatter fields
4. Write content in Markdown

## Build Output

The site builds to the `./out` directory and includes:

- Static HTML pages
- RSS feed at `/rss.xml`
- Sitemap generation with i18n support
