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
  const post_res = await fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?tags=171`, { method: 'HEAD' }) // tags 171 = 中文文章
  const totalPage = Number(post_res.headers.get('x-wp-totalpages'))

  const post_slug_list_res = await Promise.all(
    Array(totalPage - 1)
      .fill(0)
      .map((_,i) => fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts?tags=171&page=${i + 1}`).then(jsonify))
  )

  const posts = post_slug_list_res.reduce((ret, cut) => [...ret, ...cut], []).map(item => item.slug)
  const paths = posts.map((post) => ({
    params: { post_slug: post },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const [ blog_info, menu_info, [post_info] ] = await Promise.all([
    fetch(`${BACKEND_ENDPOINT}/wp-json/?_fields=name,description`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/menus/v1/menus/main-tw`).then(jsonify),
    fetch(`${BACKEND_ENDPOINT}/wp-json/wp/v2/posts/?_fields=featured_media,better_featured_image,date,title,content&slug=${params.post_slug}`).then(jsonify)
  ])

  return {
    props: {
      website_name: blog_info.name,
      website_description: blog_info.description,
      home_url: '/',
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
