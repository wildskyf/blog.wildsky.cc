import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async (context) => {
  const postsTw = await getCollection('posts', ({ id }) => id.startsWith('tw/'));
  const postsEn = await getCollection('posts', ({ id }) => id.startsWith('en/'));

  // Function to clean HTML entities from description
  const cleanDescription = (html) => {
    if (!html) return '';

    // First decode HTML entities
    const decoded = html
      .replace(/&nbsp;/g, ' ')
      .replace(/&#038;/g, '&')
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8230;/g, '...')
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '—');

    // Remove any remaining HTML entities that might cause XML parsing issues
    // This regex will match &[word]; patterns
    const cleaned = decoded.replace(/&[a-zA-Z]+;/g, '');

    return cleaned;
  };

  return rss({
    title: "Wildsky's Blog",
    description: 'Dev blog about server hosting, web dev, and some of my daily stuffs.',
    site: context.site,
    items: [
      ...postsTw.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: cleanDescription(post.data.excerpt),
        link: `/posts/${post.data.slug}/`,
      })),
      ...postsEn.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: cleanDescription(post.data.excerpt),
        link: `/en/posts/${post.data.slug}/`,
      })),
    ],
  });
};
