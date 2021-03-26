import fetch from 'isomorphic-fetch'
import { BACKEND_ENDPOINT } from '../data'

const fetchPaginationShowPath = async ({ lang }) => {
  const filterPostByTag = lang === 'en' ? 'tags_exclude=171' : 'tags=171'
  const post_res = await fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?${filterPostByTag}`, { method: 'HEAD' }) // tags 171 = 中文文章
  const totalPage = Number(post_res.headers.get('x-wp-totalpages'))

  return Array(totalPage)
    .fill(0)
    .map((_, i) => ({ params: { page_num: String(i + 1) } }))
}

export default fetchPaginationShowPath
