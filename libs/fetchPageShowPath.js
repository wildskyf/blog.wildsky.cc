import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const fetchPageShowPath = async ({ lang }) => {
  const page_info = await fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-${lang}`).then(jsonify)

  return page_info.items
    .map(item => item.url.replace(/^https?:\/\/blog\.wildsky\.cc/, ''))
    .filter(item => item && !['#pll_switcher'].includes(item))
    .map((page) => {
      const page_slug = page.replace(/^https?:\/\/blog\.wildsky\.cc/, '').replace(/^\/en\//, '').replace(/\//g, '')
      return {
        params: { page_slug }
      }
    })
}

export default fetchPageShowPath
