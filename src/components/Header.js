import { chakra } from '@chakra-ui/react'
import Nav from '@/components/Nav'
import Link from '@/components/Link'
import blog_info from '@/data/blog_info.json'

export const headerItemhoverEffect = {
  transitionDuration: '.3s',
  _hover: {
    color: '#fff',
    textShadow: '1px 1px 5px #fff7dc'
  }
}

const Header = ({ lang }) => {
  const home_url = lang === 'en' ? '/en/' : '/'
  return (
    <chakra.header
      className={`
        flex flex-col justify-center items-center
        px-4 pt-12 pb-4
        text-skadiWhite-400
      `}
      textShadow='1px 1px 5px #6EB0B2'
    >
      <h1
        className={`
          font-thin
          mt-3 mb-3 lg:mb-6
          text-3xl lg:text-6xl
        `}
      >
        <Link
          href={home_url}
          sx={headerItemhoverEffect}
        >
          {blog_info.name}
        </Link>
      </h1>
      <p className={`
        mb-8
        text-sm
        text-center
        lg:text-left
        font-thin
      `}>
        {blog_info.description}
      </p>
      <Nav {...{ lang }} />
    </chakra.header>
  )
}

export default Header
