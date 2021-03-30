import Layout from '../layout/list'
import Head from '../components/Head'
import fetchIndexData from '../libs/fetchIndexData'

export const HomeComponent = (props) => {
  const { lang, pageName, pageDesc } = props
  const path_prefix = lang === 'en' ? '/en' : ''

  return (
    <>
      <Head {...{ pageName, pageDesc }} />
      <Layout {...{ next_page_path: `${path_prefix}/page/2`, ...props }} />
    </>
  )
}

const Home = (props) => {
  return (
    <HomeComponent {...props}
      lang='tw'
      pageName='首頁'
      pageDesc='我是耿誌，網路上的代號是 Wildsky 。會開始寫部落格，首要原因是希望能記下遇過的問題或學會的新技能，也想著或許能幫助到哪個網路上陌生人。'
    />
  )
}

export const getStaticProps = async () => {
  const ret_props = await fetchIndexData({ lang: 'tw' })

  return {
    props: ret_props
  }
}

export default Home
