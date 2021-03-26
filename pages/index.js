import Layout from '../layout/list'
import fetchIndexData from '../libs/fetchIndexData'

const Home = ({ website_name, website_description, home_url, menu_items, postList }) => {
  return (
    <Layout {...{ lang: 'tw', postList, next_page_path: '/page/2', website_name, website_description, home_url, menu_items }} />
  )
}

export const getStaticProps = async () => {
  const ret_props = await fetchIndexData({ lang: 'tw' })

  return {
    props: ret_props
  }
}

export default Home
