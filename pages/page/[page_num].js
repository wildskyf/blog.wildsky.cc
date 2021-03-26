import Layout from '../../layout/list'
import fetchPaginationShowPath from '../../libs/fetchPaginationShowPath'
import fetchPaginationShowData from '../../libs/fetchPaginationShowData'

const PaginationPage = ({ website_name, website_description, home_url, menu_items, postList, total_page_num, current_page_num }) => {
  const is_last_page = total_page_num === current_page_num

  return (
    <Layout {...{
      postList,
      previous_page_path: `/page/${current_page_num - 1}`,
      next_page_path: !is_last_page && `/page/${current_page_num + 1}`,
      website_name,
      website_description,
      home_url,
      menu_items
    }} />
  )
}

export const getStaticPaths = async () => {
  const paths = await fetchPaginationShowPath({ lang: 'tw' })
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  if (params.page_num === 1) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  const ret_props = await fetchPaginationShowData({ page_num: params.page_num, lang: 'tw' })

  return {
    props: ret_props
  }
}

export default PaginationPage
