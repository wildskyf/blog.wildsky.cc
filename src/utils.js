import { base_url } from '@/data/blog_info';

export const jsonify = (r) => r.json();

export const articleMapper = (post_info) => {
  // Extract slug from ID since data.slug seems unreliable
  let slug = post_info.data.slug;

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
    abs_feature_image: `${base_url}/images/${post_info.data.feature_image}`,
    feature_image_url: post_info.data.feature_image
      ? `/images/${post_info.data.feature_image}`
      : '',
    feature_image_caption: post_info.data.feature_image_caption ?? null,
    excerpt: post_info.data.excerpt,
    tags: post_info.data.tags || [],
    category: post_info.data.category || null,
  };
};
