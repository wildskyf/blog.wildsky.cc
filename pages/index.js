import fetch from 'isomorphic-fetch'

import Layout from '../layout/list'

import { jsonify } from '../utils'
import { BACKEND_ENDPOINT } from '../data'

const Home = ({ website_name, website_description, home_url, menu_items, postList }) => {
  return (
    <Layout {...{ postList, next_page_num: 2, website_name, website_description, home_url, menu_items }} />
  )
}

export const getStaticProps = async (context) => {
  // TODO: i18n
  const [ blog_info, menu_info, post_info ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?tags=171`).then(jsonify) // tags 171 = 中文文章
  ])

  const ret_props = {
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
    })
  }

  return {
    props: ret_props
  }
}

export default Home
