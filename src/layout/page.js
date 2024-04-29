import SocialBar from '../components/SocialBar'
import Header from '../components/Header'
import PropTypes from 'prop-types'

const PageLayout = ({ lang, children }) => {
  const lang_code = lang === 'tw' ? 'zh-Hant-TW' : 'en'

  return (
    <>
      <div
        id='page'
        className={`
          min-h-screen
          flex flex-col
        `}
      >
        <Header {...{ lang }} />

        <main className='flex-grow flex justify-center items-start py-4' lang={lang_code}>
          <div className='flex flex-col w-full max-w-full lg:max-w-3xl'>
            {children}
          </div>
        </main>


        <footer className='bg-gray-800 text-white text-center pt-8 pb-10' lang='en'>
          <SocialBar className='mb-4' />

          <div className='text-gray-500'>
            Wildsky's Blog © 2014-2024 All rights reserved
          </div>
        </footer>
      </div>

      <style jsx>{`
      `}</style>
    </>
  )
}

PageLayout.propTypes = {
  lang:                 PropTypes.string.isRequired,
  children:             PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default PageLayout
