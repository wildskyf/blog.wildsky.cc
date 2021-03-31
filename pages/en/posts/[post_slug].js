import { PostComponent } from '../../posts/[post_slug]'

import fetchPostShowPath from '../../../libs/fetchPostShowPath'
import fetchPostShowData from '../../../libs/fetchPostShowData'

const Post = (props) => {
  return (
    <PostComponent {...props}
      lang='en'
      pageName={props.post_title}
      pageDesc={props.pageDesc}
    />
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
