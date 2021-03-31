import Head from '../components/Head'
import Layout from '../layout/page'
import Article from '../components/Article'

import fetchPageShowPath from '../libs/fetchPageShowPath'
import fetchPageShowData from '../libs/fetchPageShowData'

export const PageComponent = (props) => {
  const { pageName, pageDesc } = props
  const { website_name, website_description, home_url, menu_items } = props
  const { page_feature_image_url, page_title, page_content } = props

  return (
    <Layout {...{ lang: 'tw', home_url, website_name, website_description, menu_items }}>
      <Head  {...{ pageName, pageDesc }} />
      <Article
        feature_image_url={page_feature_image_url}
        title={page_title}
        content={page_content}
      />
    </Layout>
  )
}

const Page = (props) => {
  return (
    <PageComponent {...props}
      lang='tw'
      pageName={props.page_title}
      pageDesc={props.page_content.substring(0, 70)}
    />
  )
}

export const getStaticPaths = async () => {
  const paths = await fetchPageShowPath({ lang: 'tw' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const ret_props = await fetchPageShowData({ page_slug: params.page_slug, lang: 'tw' })
  return {
    props: ret_props
  }
}

export default Page
