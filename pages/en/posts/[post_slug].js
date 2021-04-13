import { PostComponentFactory, getStaticPathsFactory, getStaticPropsFactory } from '../../posts/[post_slug]'

const LANG = 'en'

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
