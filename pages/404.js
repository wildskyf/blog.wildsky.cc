import Layout from '../layout/page'
import Head from '../components/Head'
import fetchLayoutData from '../libs/fetchLayoutData'
import Button from '../components/Button'

const LANG = 'en'

const NotFoundPage = (props) => {
  const pageName = '404 NotFound'
  const pageDesc = "That page can't be found."
  return (
    <>
      <Head {...{ pageName, pageDesc }} />
      <Layout { ...{ lang: LANG, ...props } }>
        <div className='flex justify-center items-center'>
          <div className='py-24 px-6 lg:px-0 lg:pl-48 w-full max-w-xl'>

            <h1 className='text-5xl font-bold text-gray-800'>
              { pageName }
            </h1>

            <p className='mb-8 inline-block text-5xl text-gray-300 whitespace-nowrap origin-bottom-left'>
              { pageDesc }
            </p>

            <Button
              to='/'
              text='back to home'
            />
          </div>
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
