import Nav from '../components/Nav'

const Header = ({ home_url, website_name, website_description, menu_items }) => {
  return (
    <>
      <h1 className='font-bold mt-3 mb-6 text-6xl'>
        <a href={home_url} className='text-6xl'>{website_name}</a>
      </h1>
      <p className='mb-8 text-sm'>
        {website_description}
      </p>
      <nav>
        <Nav menu_items={menu_items} />
      </nav>
    </>
  )
}

export default Header
