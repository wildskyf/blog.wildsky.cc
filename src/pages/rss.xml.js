import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { load } from 'cheerio';
import { authorProfile } from '@/data/author';

const FEED_TITLE = "Wildsky's Blog";
const FEED_DESCRIPTION =
  'Dev blog about server hosting, web dev, and some of my daily stuffs.';
const ATOM_XMLNS = 'http://www.w3.org/2005/Atom';
const DC_XMLNS = 'http://purl.org/dc/elements/1.1/';

const cleanDescription = (text = '') =>
  text
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&#8217;|&#39;|&apos;/g, "'")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .trim();

const getSlug = (post) => {
  if (post.data.slug) return post.data.slug;
  const filename = post.id.replace(/^(tw|en)\//, '').replace(/\.md$/, '');
  const match = filename.match(/^\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}_(.+)$/);
  return match ? match[1] : filename;
};

const toAbsoluteUrl = (url, site) => {
  if (!url || !url.startsWith('/')) return url;
  return new URL(url, site).toString();
};

const absolutizeHtmlUrls = (html, site) => {
  if (!html) return '';

  const rewriteSrcset = (srcset) =>
    srcset
      .split(',')
      .map((candidate) => {
        const trimmed = candidate.trim();
        if (!trimmed) return trimmed;

        const [url, ...descriptor] = trimmed.split(/\s+/);
        const normalizedUrl = toAbsoluteUrl(url, site);

        return [normalizedUrl, ...descriptor].join(' ').trim();
      })
      .join(', ');

  const $ = load(html, null, false);

  $('[href], [src], [poster]').each((_, element) => {
    for (const attr of ['href', 'src', 'poster']) {
      const value = $(element).attr(attr);
      if (!value) continue;
      $(element).attr(attr, toAbsoluteUrl(value, site));
    }
  });

  $('[srcset]').each((_, element) => {
    const value = $(element).attr('srcset');
    if (!value) return;
    $(element).attr('srcset', rewriteSrcset(value));
  });

  return $.html();
};

const getPostContentHtml = async (post, site) => {
  const html = post.rendered?.html;

  if (!html) {
    throw new Error(`Unable to render full RSS content for post "${getSlug(post)}".`);
  }

  return absolutizeHtmlUrls(html, site);
};

const getCategories = (post) => {
  const categories = [...(post.data.tags ?? [])];

  if (post.data.category) {
    categories.push(post.data.category);
  }

  return [...new Set(categories)];
};

const transformPostToRssItem = async ({ post, isEn, site }) => {
  const prefix = isEn ? '/en' : '';
  const content = await getPostContentHtml(post, site);

  return {
    title: post.data.title,
    pubDate: post.data.date,
    description: cleanDescription(post.data.excerpt),
    content,
    categories: getCategories(post),
    link: `${prefix}/posts/${getSlug(post)}/`,
    customData: `<dc:creator>${authorProfile.name}</dc:creator>`,
  };
};

export const GET = async (context) => {
  const postsTw = await getCollection('posts-tw');
  const postsEn = await getCollection('posts-en');

  const items = (
    await Promise.all([
      ...postsTw.map((post) =>
        transformPostToRssItem({ post, isEn: false, site: context.site })
      ),
      ...postsEn.map((post) =>
        transformPostToRssItem({ post, isEn: true, site: context.site })
      ),
    ])
  ).sort((a, b) => b.pubDate - a.pubDate);

  const feedUrl = new URL('/rss.xml', context.site).toString();
  const lastBuildDate = (items[0]?.pubDate ?? new Date()).toUTCString();

  return rss({
    stylesheet: '/assets/pretty-feed-v3.xsl',
    title: FEED_TITLE,
    description: FEED_DESCRIPTION,
    site: context.site,
    xmlns: {
      atom: ATOM_XMLNS,
      dc: DC_XMLNS,
    },
    customData: [
      `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
      `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    ].join(''),
    items,
  });
};
