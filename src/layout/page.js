import SocialBar from '../components/SocialBar'
import Header from '../components/Header'
import PropTypes from 'prop-types'

const PageLayout = ({ lang, children }) => {
  const lang_code = lang === 'tw' ? 'zh-Hant-TW' : 'en'

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-brand-300 to-brand-900'>
      <SocialBar />

      <Header {...{ lang }} />

      <main className='flex-grow flex justify-center items-start py-4' lang={lang_code}>
        <div className='flex flex-col w-full max-w-full lg:max-w-3xl'>
          {children}
        </div>
      </main>

      <footer className='bg-gray-800 text-white text-center py-16' lang='en'>
        Geng Zhi W. Fann
      </footer>
    </div>
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
