import Header from '../components/Header'

const PageLayout = ({ lang, home_url, website_name, website_description, menu_items, children }) => {
  return (
    <>
      <header className='flex flex-col justify-center items-center px-4 py-12 bg-gray-100 border-b-2 border-gray-200 border-solid'>
        <Header {...{ lang, home_url, website_name, website_description, menu_items }} />
      </header>

      <main className='flex justify-center items-center py-4' lang={lang === 'tw' ? 'zh-Hant-TW' : 'en'}>
        <div className='flex flex-col w-full max-w-full lg:max-w-3xl'>
          {children}
        </div>
      </main>

      <footer className='bg-gray-800 text-white text-center py-16'>
        Geng Zhi W. Fann
      </footer>
    </>
  )
}

export default PageLayout
