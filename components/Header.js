import { useState } from 'react'
import { useWindowSize } from 'react-use'
import Link from 'next/link'
import Nav from '../components/Nav'

const Header = ({ home_url, website_name, website_description, menu_items }) => {
  const { width } = useWindowSize()
  const isDesktop = width >= 640
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <>
      <h1 className='font-title font-semibold lg:font-bold mt-3 mb-3 lg:mb-6 text-3xl lg:text-6xl text-gray-900 hover:text-red-700'>
        <Link href={home_url}><a>{website_name}</a></Link>
      </h1>
      <p className='mb-8 text-sm text-center lg:text-left'>
        {website_description}
      </p>
      <nav className='flex flex-col justify-center items-center w-full lg:w-auto select-none'>
        <div
          className='inline-block lg:hidden bg-white px-4 py-2 border-2 border-solid border-gray-200'
          onClick={() => setNavOpen(!isNavOpen)}
        >
          Menu
        </div>
        {
          (isDesktop || isNavOpen) && <Nav menu_items={menu_items} />
        }
      </nav>
    </>
  )
}

export default Header
