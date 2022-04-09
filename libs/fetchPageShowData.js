import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data/globalConfig'

const fetchPageShowData = async ({ page_slug, lang }) => {
  const [ blog_info, menu_info, [page_info] ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/?_fields=name,description`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-${lang}`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/pages/?_fields=featured_media,better_featured_image,date,title,content&slug=${page_slug}`).then(jsonify)
  ])

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',
    menu_items: menu_info.items.map(item => ({
      guid: item.guid,
      url: `${item.url.replace(/https?:\/\/backend\.wildsky\.cc/, '')}/`,
      title: item.title
    })),

    page_feature_image_url: page_info?.better_featured_image?.source_url || null,
    page_title: page_info?.title.rendered || null,
    page_content: page_info?.content.rendered || null,
  }
}

export default fetchPageShowData
