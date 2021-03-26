import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const fetchPaginationShowData = async ({ page_num, lang }) => {
  const filterPostByTag = lang === 'en' ? 'tags_exclude=171' : 'tags=171'  // tags 171 = 中文文章

  const [ blog_info, menu_info, post_res ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/?_fields=name,description`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-${lang}`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?_fields=featured_media,better_featured_image,link,slug,date,guid,title,excerpt&${filterPostByTag}&page=${page_num}`)
  ])

  const totalPage = Number(post_res.headers.get('x-wp-totalpages'))
  const post_info = await post_res.json()

  return {
    website_name: blog_info.name,
    website_description: blog_info.description,
    home_url: '/',

    menu_items: menu_info.items.map(item => ({
      guid: item.guid,
      url: `${item.url.replace(/https?:\/\/blog\.wildsky\.cc/, '')}/`,
      title: item.title
    })),

    postList: post_info.map(post => {
      return {
        guid: post?.guid?.rendered || null,
        date: post?.date || null,
        slug: post?.slug || null,
        link: post?.link.replace(/https?:\/\/blog\.wildsky\.cc/, '') || null,
        title: post?.title?.rendered || null,
        excerpt: post?.excerpt?.rendered || null,
        feature_image_url: post?.better_featured_image?.source_url || null
      }
    }),

    current_page_num: Number(page_num),
    total_page_num: Number(totalPage)
  }
}

export default fetchPaginationShowData
