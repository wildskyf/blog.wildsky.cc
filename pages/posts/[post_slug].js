import Head from '../../components/Head'
import Layout from '../../layout/post'
import Article from '../../components/Article'

import fetchPostShowPath from '../../libs/fetchPostShowPath'
import fetchPostShowData from '../../libs/fetchPostShowData'

export const PostComponent = (props) => {
  const { pageName, pageDesc } = props
  const { website_name, website_description, home_url, menu_items } = props
  const { post_feature_image_url, post_date, post_title, post_content } = props

  return (
    <>
      <Head {...{ pageName, pageDesc }} />
      <Layout {...{ home_url, website_name, website_description, menu_items }}>
        <Article
          feature_image_url={post_feature_image_url}
          date={post_date}
          title={post_title}
          content={post_content}
        />
      </Layout>
    </>
  )
}

const Post = (props) => {
  return (
    <PostComponent {...props}
      lang='tw'
      pageName={props.post_title}
      pageDesc={props.pageDesc}
    />
  )
}

export const getStaticPaths = async () => {
  const paths = await fetchPostShowPath({ lang: 'tw' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const ret_props = await fetchPostShowData({ post_slug: params.post_slug, lang: 'tw' })

  return {
    props: ret_props
  }
}

export default Post
