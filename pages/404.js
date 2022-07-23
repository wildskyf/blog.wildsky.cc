import Layout from '../layout/page'
import Head from '../components/Head'
import fetchLayoutData from '../libs/fetchLayoutData'
import Button from '../components/Button'

const LANG = 'en'

const NotFoundPage = (props) => {
  const errorCode = '404'
  const pageName = 'Not Found'
  const pageDesc = "That page can't be found."
  return (
    <>
      <Head {...{ pageName, pageDesc }} />
      <Layout { ...{ lang: LANG, ...props } }>

        <div className={
          `flex flex-col justify-center border p-8 opacity-20 hover:opacity-100 duration-200`
        }>
          <div className='flex justify-center gap-x-2'>
            <div className='text-9xl cursor-default text-red-700'>
              {errorCode}
            </div>

            <Button
              to='/'
              className='text-4xl'
              text={<>Back<br/ >To<br />Home</>}
            />
          </div>

          <div className={`
            flex justify-center text-9xl cursor-default text-gray-700
          `}>
            {pageName}
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
