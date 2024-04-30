import { base_url } from '@/data/blog_info'

export const jsonify = r => r.json()

export const articleMapper = post_info => {
  return {
    title: post_info.data.title,
    slug: post_info.data.slug,
    date: post_info.data.date,
    guid: post_info.data.guid,
    abs_feature_image: `${base_url}/images/${post_info.data.feature_image}`,
    feature_image_url: post_info.data.feature_image ? `/images/${post_info.data.feature_image}` : '',
    excerpt: post_info.data.excerpt,
  }
}
