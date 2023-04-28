import { chakra } from '@chakra-ui/react'
import Nav from '@/components/Nav'
import Link from '@/components/Link'
import HeaderDivider from '@/components/HeaderDivider'
import blog_info from '@/data/blog_info.json'

export const headerItemhoverEffect = {
  color: '#ded8e3',
  textShadow: '1px 1px 5px #6EB0B2',
  transitionDuration: '.3s',

  _hover: {
    color: '#fff',
    textShadow: '1px 1px 5px #fff7dc',
  }
}

const Header = ({ lang }) => {
  const home_url = lang === 'en' ? '/en/' : '/'
  return (
    <chakra.header
      className={`
        flex flex-col justify-center items-center
        px-4 pt-4 pb-2
      `}
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
      <chakra.p className={`
        mb-8
        text-skadiWhite-400
        text-sm
        text-center
        lg:text-left
        font-thin
      `}
        textShadow='1px 1px 5px #6EB0B2'
      >
        {blog_info.description}
      </chakra.p>

      <Nav {...{ lang }} />

      <HeaderDivider />
    </chakra.header>
  )
}

export default Header
