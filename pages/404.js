import Layout from '../layout/page'
import Head from '../components/Head'
import fetchLayoutData from '../libs/fetchLayoutData'

const LANG = 'en'

const NotFoundPage = (props) => {
  const pageName = '404 NotFound'
  const pageDesc = "That page can't be found."
  return (
    <>
      <Head {...{ pageName, pageDesc }} />
      <Layout { ...{ lang: LANG, ...props } }>
        <div className='py-32 flex flex-col justify-center items-center'>
          <h1 className='mb-8 text-5xl font-bold mb-4 text-gray-800'>
            { pageName }
          </h1>
          <p className='mb-24 text-lg text-gray-500'>
            { pageDesc }
          </p>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const ret_props = await fetchLayoutData({ lang: LANG })
  return { props: ret_props }
}

export default NotFoundPage
