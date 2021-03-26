import fetch from 'isomorphic-fetch'
import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const fetchPostShowData = async ({ lang }) => {
  const filterPostByTag = lang === 'en' ? 'tags_exclude=171' : 'tags=171' // tags 171 = 中文文章

  const post_res = await fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?${filterPostByTag}`, { method: 'HEAD' })
  const totalPage = Number(post_res.headers.get('x-wp-totalpages'))

  const post_slug_list_res = await Promise.all(
    Array(totalPage)
      .fill(0)
      .map((_,i) => fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?${filterPostByTag}&page=${i + 1}`).then(jsonify))
  )

  const posts = post_slug_list_res.reduce((ret, cut) => [...ret, ...cut], []).map(item => item.slug)

  const ret = posts.map((post) => ({
    params: { post_slug: post },
  }))

  return ret
}

export default fetchPostShowData
