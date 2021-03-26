import Layout from '../../../layout/list'
import fetchPaginationShowPath from '../../../libs/fetchPaginationShowPath'
import fetchPaginationShowData from '../../../libs/fetchPaginationShowData'

const EnPaginationPage = ({ website_name, website_description, home_url, menu_items, postList, total_page_num, current_page_num }) => {
  const is_first_page = current_page_num === 1
  const is_last_page = total_page_num === current_page_num

  return (
    <Layout {...{
      postList,
      previous_page_path: !is_first_page && `/en/page/${current_page_num - 1}`,
      next_page_path: !is_last_page && `/en/page/${current_page_num + 1}`,
      website_name,
      website_description,
      home_url,
      menu_items
    }} />
  )
}

export const getStaticPaths = async () => {
  const paths = await fetchPaginationShowPath({ lang: 'en' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  if (params.page_num === 1) {
    return {
      redirect: {
        destination: '/en',
        permanent: true
      }
    }
  }

  const ret_props = await fetchPaginationShowData({ page_num: params.page_num, lang: 'en' })

  return {
    props: ret_props
  }
}

export default EnPaginationPage
