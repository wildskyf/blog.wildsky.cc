import Layout from '../layout/list'
import fetchIndexData from '../libs/fetchIndexData'

const EnHome = ({ website_name, website_description, home_url, menu_items, postList }) => {
  return (
    <Layout {...{ lang: 'en', postList, next_page_path: '/en/page/2', website_name, website_description, home_url, menu_items }} />
  )
}

export const getStaticProps = async () => {
  const ret_props = await fetchIndexData({ lang: 'en' })

  return {
    props: ret_props
  }
}

export default EnHome
