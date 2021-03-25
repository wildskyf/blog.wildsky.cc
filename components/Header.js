import Nav from '../components/Nav'
import Link from 'next/link'

const Header = ({ page_name, home_url, website_name, website_description, menu_items }) => {
  return (
    <>
      <h1>
        {page_name} | <a href={home_url}>{website_name}</a>
      </h1>
      <p>
        {website_description}
      </p>
      <nav>
        <Nav menu_items={menu_items} />
      </nav>
    </>
  )
}

export default Header
