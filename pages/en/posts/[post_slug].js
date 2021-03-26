import Layout from '../../../layout/post'
import Article from '../../../components/Article'

import fetchPostShowPath from '../../../libs/fetchPostShowPath'
import fetchPostShowData from '../../../libs/fetchPostShowData'

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
  const paths = await fetchPostShowPath({ lang: 'en' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const ret_props = await fetchPostShowData({ post_slug: params.post_slug, lang: 'en' })

  return {
    props: ret_props
  }
}

export default Post
