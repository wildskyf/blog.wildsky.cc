import Head from '../../components/Head'
import Layout from '../../layout/page'
import Article from '../../components/Article'

import fetchPostShowPath from '../../libs/fetchPostShowPath'
import fetchPostShowData from '../../libs/fetchPostShowData'

const LANG = 'tw'

export const PostComponentFactory = lang => (props) => {
  const { pageName, pageDesc, pageImage } = props
  const { post_feature_image_url, post_date, post_title, post_content } = props

  return (
    <>
      <Head {...{ pageName, pageDesc, pageImage }} />
      <Layout {...{ lang }}>
        <Article
          className={lang === 'tw' ? 'tracking-tw-normal' : ''}
          feature_image_url={post_feature_image_url}
          date={post_date}
          title={post_title}
          content={post_content}
        />
      </Layout>
    </>
  )
}

export const getStaticPathsFactory = lang => async () => {
  const paths = await fetchPostShowPath({ lang })
  return { paths, fallback: false }
}

export const getStaticPropsFactory = lang => async ({ params }) => {
  const ret_props = await fetchPostShowData({ post_slug: params.post_slug, lang })

  return {
    props: ret_props
  }
}


const Post = (props) => {
  const PostComponent = PostComponentFactory(LANG)
  return (
    <PostComponent {...props}
      lang={LANG}
      pageName={props.post_title}
      pageDesc={props.pageDesc}
      pageImage={props.post_feature_image_url}
    />
  )
}

export const getStaticPaths = getStaticPathsFactory(LANG)
export const getStaticProps = getStaticPropsFactory(LANG)
export default Post
