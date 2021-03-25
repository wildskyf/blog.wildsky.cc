import Header from '../components/Header'

const PageLayout = ({ page_name = 'Homepage', home_url, website_name, website_description, menu_items, children }) => {
  return (
    <>
      <header>
        <Header {...{ page_name, home_url, website_name, website_description, menu_items }} />
      </header>

      {children}
    </>
  )
}

export default PageLayout
