import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const fetchPostShowPath = async ({ post_slug, lang }) => {
  const [ blog_info, menu_info, [post_info] ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/?_fields=name,description`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-${lang}`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts/?_fields=featured_media,better_featured_image,date,title,content&slug=${post_slug}`).then(jsonify)
  ])

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',
    menu_items: menu_info.items.map(item => ({
      guid: item.guid,
      url: `${item.url.replace(/https?:\/\/blog\.wildsky\.cc/, '')}/`,
      title: item.title
    })),

    post_feature_image_url: post_info?.better_featured_image?.source_url || null,
    post_date: post_info?.date || null,
    post_title: post_info?.title.rendered || null,
    post_content: post_info?.content.rendered || null,
  }
}

export default fetchPostShowPath
