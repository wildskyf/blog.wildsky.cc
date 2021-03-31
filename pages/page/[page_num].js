import Head from '../../components/Head'
import Layout from '../../layout/list'
import fetchPaginationShowPath from '../../libs/fetchPaginationShowPath'
import fetchPaginationShowData from '../../libs/fetchPaginationShowData'

export const PaginationPageComponent = (props) => {
  const { lang, pageName, pageDesc } = props
  const { website_name, website_description, home_url, menu_items } = props
  const { postList, current_page_num, total_page_num } = props
  const path_prefix = lang === 'en' ? '/en' : ''
  const is_last_page = total_page_num === current_page_num

  return (
    <>
      <Head  {...{ pageName, pageDesc }} />
      <Layout {...{
        lang,
        postList,
        previous_page_path: `${path_prefix}/page/${current_page_num - 1}`,
        next_page_path: !is_last_page && `${path_prefix}/page/${current_page_num + 1}`,
        website_name,
        website_description,
        home_url,
        menu_items
      }} />
    </>
  )

}

const PaginationPage = (props) => {
  return (
    <PaginationPageComponent {...props}
      lang='tw'
      pageName={`文章列表 第${props.current_page_num}頁`}
      pageDesc='我是耿誌，網路上的代號是 Wildsky 。會開始寫部落格，首要原因是希望能記下遇過的問題或學會的新技能，也想著或許能幫助到哪個網路上陌生人。'
    />
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
