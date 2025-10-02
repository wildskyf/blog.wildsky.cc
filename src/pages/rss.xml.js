import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async (context) => {
  const postsTw = await getCollection('posts-tw');
  const postsEn = await getCollection('posts-en');

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

  const transformPostToRssItem = ({ post, isEn }) => {
    const prefix = isEn ? '/en' : '';

    return {
      title: post.data.title,
      pubDate: post.data.date,
      description: cleanDescription(post.data.excerpt),
      link: `${prefix}/posts/${post.slug}/`,
    };
  }

  const items = [
    ...postsTw.map((post) => transformPostToRssItem({ post, isEn: false })),
    ...postsEn.map((post) => transformPostToRssItem({ post, isEn: true })),
  ].sort((a,b) => b.pubDate - a.pubDate);

  return rss({
    stylesheet: '/assets/pretty-feed-v3.xsl',
    title: "Wildsky's Blog",
    description: 'Dev blog about server hosting, web dev, and some of my daily stuffs.',
    site: context.site,
    items,
  });
};
