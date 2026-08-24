import { base_url } from '@/data/blog_info';
import { getTagRouteSegment } from '@/utils/indexPolicy.mjs';

export { getTagRouteSegment } from '@/utils/indexPolicy.mjs';

export const jsonify = (r) => r.json();

/**
 * 由 markdown 原文估算閱讀分鐘數。
 * 中文 500 字／分、拉丁 220 字／分；程式碼區塊、圖片、標記符號先剝掉。
 * 原本只活在文章頁的 page factory 裡，索引列也要用同一個數字，故抽出共用。
 */
export const computeReadingMinutes = (rawBody = '') => {
  const text = rawBody
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~\-]/g, ' ');

  const cjkCount = (text.match(/[㐀-鿿豈-﫿]/g) ?? []).length;
  const latinText = text.replace(/[㐀-鿿豈-﫿]/g, ' ');
  const wordCount = latinText.trim() ? latinText.trim().split(/\s+/).length : 0;

  return Math.max(1, Math.ceil(cjkCount / 500 + wordCount / 220));
};

export const formatReadingTime = (minutes, lang) =>
  lang === 'en' ? `${minutes} min` : `${minutes} 分鐘`;

export const getTagPath = (tag, lang) =>
  `${lang === 'en' ? '/en' : ''}/tags/${encodeURIComponent(getTagRouteSegment(tag))}`;

export const articleMapper = (post_info) => {
  // Extract slug from ID since data.slug seems unreliable
  let slug = post_info.data.slug;
  const featureImage = post_info.data.feature_image;

  if (!slug && post_info.id) {
    // Extract the part after the date from the filename
    const filename = post_info.id.replace(/^(tw|en)\//, '').replace(/\.md$/, '');
    const match = filename.match(/^\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}_(.+)$/);
    slug = match ? match[1] : filename;
  }

  return {
    title: post_info.data.title,
    slug: slug,
    date: post_info.data.date,
    guid: post_info.data.guid,
    abs_feature_image: featureImage ? `${base_url}/images/${featureImage}` : '',
    feature_image_url: featureImage ? `/images/${featureImage}` : '',
    feature_image_caption: post_info.data.feature_image_caption ?? null,
    excerpt: post_info.data.excerpt,
    tags: post_info.data.tags || [],
    category: post_info.data.category || null,
    // body 只在 collection entry 上有；article.astro 只傳 frontmatter，故為 null
    readingMinutes: post_info.body ? computeReadingMinutes(post_info.body) : null,
  };
};
