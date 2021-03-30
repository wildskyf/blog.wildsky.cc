import Head from 'next/head'
import Layout from '../layout/list'
import SocialTags from '../components/SocialTags'
import fetchIndexData from '../libs/fetchIndexData'

const Home = ({ website_name, website_description, home_url, menu_items, postList }) => {
  return (
    <>
      <Head>
        <SocialTags
          pageName='首頁'
          pageDesc='我是耿誌，網路上的代號是 Wildsky 。會開始寫部落格，首要原因是希望能記下遇過的問題或學會的新技能，也想著或許能幫助到哪個網路上陌生人。'
        />
      </Head>
      <Layout {...{ lang: 'tw', postList, next_page_path: '/page/2', website_name, website_description, home_url, menu_items }} />
    </>
  )
}

export const getStaticProps = async () => {
  const ret_props = await fetchIndexData({ lang: 'tw' })

  return {
    props: ret_props
  }
}

export default Home
