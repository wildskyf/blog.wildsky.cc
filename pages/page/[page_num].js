import Layout from '../../layout/list'

import { jsonify } from '../../utils'
import { BACKEND_ENDPOINT } from '../../data'

const PaginationPage = ({ website_name, website_description, home_url, menu_items, postList, total_page_num, current_page_num }) => {
  const is_last_page = total_page_num === current_page_num

  return (
    <Layout {...{
      postList,
      previous_page_num: current_page_num - 1,
      next_page_num: !is_last_page && (current_page_num + 1),
      website_name,
      website_description,
      home_url,
      menu_items
    }} />
  )
}

export const getStaticPaths = async () => {
  const post_res = await fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?tags=171`, { method: 'HEAD' }) // tags 171 = 中文文章
  const totalPage = Number(post_res.headers.get('x-wp-totalpages'))

  const paths = Array(totalPage)
    .fill(0)
    .map((_, i) => ({ params: { page_num: String(i + 1) } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  if (params.page_num === 1) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  const [ blog_info, menu_info, post_res ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?tags=171&page=${params.page_num}`) // tags 171 = 中文文章
  ])

  const totalPage = Number(post_res.headers.get('x-wp-totalpages'))
  const post_info = await post_res.json()

  return {
    props: {
      website_name: blog_info.name,
      website_description: blog_info.description,
      home_url: blog_info.home.replace('https://blog.wildsky.cc', ''),

      menu_items: menu_info.items.map(item => ({
        guid: item.guid,
        url: `${item.url.replace('https://blog.wildsky.cc', '')}/`,
        title: item.title
      })),

      postList: post_info.map(post => {
        return {
          guid: post?.guid?.rendered,
          date: post?.date,
          slug: post?.slug,
          link: post?.link.replace('https://blog.wildsky.cc', ''),
          title: post?.title?.rendered,
          excerpt: post?.excerpt?.rendered,
          feature_image_url: post?.better_featured_image?.source_url || null
        }
      }),

      current_page_num: Number(params.page_num),
      total_page_num: Number(totalPage)
    }
  }
}

export default PaginationPage
