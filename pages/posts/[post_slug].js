import Layout from '../../layout/post'
import Article from '../../components/Article'

import { jsonify } from '../../utils'
import { BACKEND_ENDPOINT } from '../../data'

const Post = (props) => {
  const { website_name, website_description, home_url, post_feature_image_url, post_date, post_title, menu_items, post_content } = props

  return (
    <Layout {...{ home_url, website_name, website_description, menu_items }}>
      <Article
        feature_image_url={post_feature_image_url}
        date={post_date}
        title={post_title}
        content={post_content}
      />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const post_info = await fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?tags=171`).then(jsonify) // tags 171 = 中文文章

  const posts = post_info
    .map(item => item.slug)

  const paths = posts.map((post) => ({
    params: { post_slug: post },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const [ blog_info, menu_info, [post_info] ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts/?slug=${params.post_slug}`).then(r => r.json())
  ])

  return {
    props: {
      website_name: blog_info.name,
      website_description: blog_info.description,
      home_url: blog_info.home,
      menu_items: menu_info.items.map(item => ({
        guid: item.guid,
        url: `${item.url.replace('https://blog.wildsky.cc', '')}/`,
        title: item.title
      })),

      post_feature_image_url: post_info?.better_featured_image?.source_url || null,
      post_date: post_info?.date,
      post_title: post_info?.title.rendered,
      post_content: post_info?.content.rendered,
    }
  }
}

export default Post
