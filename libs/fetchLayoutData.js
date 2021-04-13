import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const fetchLayoutData = async ({ lang }) => {
  const [ blog_info, menu_info ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/?_fields=name,description`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-${lang}`).then(jsonify),
  ])

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: lang === 'en' ? '/en/' : '/',

    menu_items: menu_info.items.map(item => ({
      guid: item.guid,
      url: `${item.url.replace(/https?:\/\/blog\.wildsky\.cc/, '')}/`,
      title: item.title
    }))
  }
}

export default fetchLayoutData
