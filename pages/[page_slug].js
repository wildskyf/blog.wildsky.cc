import Head from '../components/Head'
import Layout from '../layout/page'
import Article from '../components/Article'

import fetchPageShowPath from '../libs/fetchPageShowPath'
import fetchPageShowData from '../libs/fetchPageShowData'

const LANG = 'tw'

export const PageComponentFactory = lang => (props) => {
  const { pageName, pageDesc } = props
  const { website_name, website_description, home_url, menu_items } = props
  const { page_feature_image_url, page_title, page_content } = props

  return (
    <Layout {...{ lang, home_url, website_name, website_description, menu_items }}>
      <Head  {...{ pageName, pageDesc }} />
      <Article
        feature_image_url={page_feature_image_url}
        title={page_title}
        content={page_content}
      />
    </Layout>
  )
}

export const getStaticPathsFactory = lang => async () => {
  const list = await fetchPageShowPath({ lang })
  const paths = list.map(page_slug => ({ params: { page_slug } }))

  return { paths, fallback: false }
}

export const getStaticPropsFactory = lang => async ({ params }) => {
  const ret_props = await fetchPageShowData({ page_slug: params.page_slug, lang })
  return { props: ret_props }
}

const Page = (props) => {
  const PageComponent = PageComponentFactory(LANG)
  return (
    <PageComponent {...props}
      lang={LANG}
      pageName={props.page_title}
      pageDesc={props.page_content && props.page_content.substring(0, 70)}
      pageImage={props.page_feature_image_url}
    />
  )
}

export const getStaticPaths = getStaticPathsFactory(LANG)
export const getStaticProps = getStaticPropsFactory(LANG)
export default Page
