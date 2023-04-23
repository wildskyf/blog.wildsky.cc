import SocialBar from '../components/SocialBar'
import Header from '../components/Header'
import PropTypes from 'prop-types'

const PageLayout = ({ lang, home_url, website_name, website_description, children }) => {
  const lang_code = lang === 'tw' ? 'zh-Hant-TW' : 'en'

  return (
    <div className='min-h-screen flex flex-col'>
      <SocialBar />

      <header className='flex flex-col justify-center items-center px-4 py-12 bg-gray-100 border-b-2 border-gray-200 border-solid'>
        <Header {...{ lang, home_url, website_name, website_description }} />
      </header>

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
  home_url:             PropTypes.string.isRequired,
  website_name:         PropTypes.string.isRequired,
  website_description:  PropTypes.string.isRequired,
  children:             PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default PageLayout
