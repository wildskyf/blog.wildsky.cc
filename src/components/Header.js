import Link from 'next/link'
import Nav from '../components/Nav'
import blog_info from '@/data/blog_info.json'

const Header = ({ lang }) => {
  const home_url = lang === 'en' ? '/en/' : '/'
  return (
    <header className={`
      flex flex-col justify-center items-center
      px-4 py-12
      text-white
    `}>
      <h1 className={`
        font-title
        font-semibold
        lg:font-bold
        mt-3 mb-3 lg:mb-6
        text-3xl lg:text-6xl
        hover:text-brand-300
      `}>
        <Link href={home_url}>
          {blog_info.name}
        </Link>
      </h1>
      <p className='mb-8 text-sm text-center lg:text-left'>
        {blog_info.description}
      </p>
      <Nav {...{ lang }} />
    </header>
  )
}

export default Header
