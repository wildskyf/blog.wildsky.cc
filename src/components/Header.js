import Link from 'next/link'
import Nav from '../components/Nav'
import blog_info from '@/data/blog_info.json'

const Header = ({ lang }) => {
  const home_url = lang === 'en' ? '/en/' : '/'
  return (
    <>
      <h1 className='font-title font-semibold lg:font-bold mt-3 mb-3 lg:mb-6 text-3xl lg:text-6xl text-gray-900 hover:text-red-700'>
        <Link href={home_url}>
          {blog_info.name}
        </Link>
      </h1>
      <p className='mb-8 text-sm text-center lg:text-left'>
        {blog_info.description}
      </p>
      <nav className='flex flex-col justify-center items-center w-full lg:w-auto select-none'>
        <Nav {...{ lang }} />
      </nav>
    </>
  )
}

export default Header
