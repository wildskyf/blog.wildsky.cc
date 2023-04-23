import Link from 'next/link'
import Nav from '../components/Nav'

const Header = ({ lang, home_url, website_name, website_description }) => {
  return (
    <>
      <h1 className='font-title font-semibold lg:font-bold mt-3 mb-3 lg:mb-6 text-3xl lg:text-6xl text-gray-900 hover:text-red-700'>
        <Link href={home_url}>{website_name}</Link>
      </h1>
      <p className='mb-8 text-sm text-center lg:text-left'>
        {website_description}
      </p>
      <nav className='flex flex-col justify-center items-center w-full lg:w-auto select-none'>
        <Nav {...{ lang }} />
      </nav>
    </>
  )
}

export default Header
