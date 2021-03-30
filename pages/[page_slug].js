import Layout from '../layout/page'
import Article from '../components/Article'

import fetchPageShowPath from '../libs/fetchPageShowPath'
import fetchPageShowData from '../libs/fetchPageShowData'

const Page = (props) => {
  const { website_name, website_description, home_url, page_feature_image_url, page_title, menu_items, page_content } = props

  return (
    <Layout {...{ lang: 'tw', home_url, website_name, website_description, menu_items }}>
      <Article
        feature_image_url={page_feature_image_url}
        title={page_title}
        content={page_content}
      />
    </Layout>
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
