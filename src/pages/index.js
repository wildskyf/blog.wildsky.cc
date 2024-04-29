import Layout from '../layout/list'
import Head from '../components/Head'
import SocialBar from '../components/SocialBar'
import Divider from '../components/Divider'
import fetchIndexData from '../libs/fetchIndexData'


const LANG = 'tw'

export const HomeComponentFactory = lang => (props) => {
  const { pageName, pageDesc } = props
  const path_prefix = lang === 'en' ? '/en' : ''

  return (
    <>
      <Head {...{ pageName, pageDesc }} />

      <Layout
        isHomePage
        {...{ next_page_path: `${path_prefix}/page/2`, ...props }}
        beforeLayout={(
          <article className='block py-16 px-4'>
            <h1 className='text-3xl font-bold mb-4'>
              Welcome to my blog!
            </h1>

            <p className='text-lg text-gray-400 mb-4'>
              Dev blog about server hosting, web dev, and some of my daily stuffs.
            </p>

            <SocialBar className='mb-4' />

            <div className='w-full flex justify-center'>
              <Divider />
            </div>
          </article>
        )}
      />
    </>
  )
}

export const getStaticPropsFactory = lang => async () => {
  const ret_props = await fetchIndexData({ lang })
  return { props: ret_props }
}

const Home = (props) => {
  const HomeComponent = HomeComponentFactory(LANG)
  return (
    <HomeComponent {...props}
      lang={LANG}
      pageName='首頁'
      pageDesc='我是耿誌，網路上的代號是 Wildsky 。會開始寫部落格，首要原因是希望能記下遇過的問題或學會的新技能，也想著或許能幫助到哪個網路上陌生人。'
    />
  )
}

export const getStaticProps = getStaticPropsFactory(LANG)
export default Home
