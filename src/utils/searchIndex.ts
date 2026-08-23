import dayjs from 'dayjs';
import type { CollectionEntry } from 'astro:content';
import { articleMapper } from '@/utils';

export type SearchLocale = 'tw' | 'en';

const toPlainText = (markdown: string) =>
  markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const buildSearchIndex = (
  posts: CollectionEntry<'posts-tw'>[] | CollectionEntry<'posts-en'>[],
  lang: SearchLocale
) =>
  posts
    .map((post) => {
      const mapped = articleMapper(post);
      const content = toPlainText(post.body ?? '');
      const fallbackExcerpt = content.length > 180 ? `${content.slice(0, 180).trim()}…` : content;

      return {
        title: mapped.title,
        url: `${lang === 'en' ? '/en' : ''}/posts/${mapped.slug}`,
        timestamp: new Date(mapped.date).getTime(),
        date:
          lang === 'en'
            ? dayjs(mapped.date).format('MMM D, YYYY')
            : dayjs(mapped.date).format('YYYY.MM.DD'),
        excerpt: mapped.excerpt || fallbackExcerpt,
        tags: mapped.tags,
        category: mapped.category || '',
        content,
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ timestamp: _timestamp, ...entry }) => entry);
