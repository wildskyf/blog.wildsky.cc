import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data/globalConfig'

const fetchPageShowPath = async ({ lang }) => {
  const page_info = await fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-${lang}`).then(jsonify)

  return page_info.items
    .map(item => {
      return item.url
        .replace(/^https?:\/\/(blog|backend)\.wildsky\.cc\//, '')
        .replace(/^https?:\/\/blog.wildsky.cc$/, '/')
        .replace(/\/$/, '')
        .replace(/^en\/?/, '')
    })
    .filter(item => item && !['#pll_switcher'].includes(item))
    .map((page) => {
      const page_slug = page

      return {
        params: { page_slug }
      }
    })
}

export default fetchPageShowPath
