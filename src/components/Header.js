import { chakra } from '@chakra-ui/react'
import Nav from '@/components/Nav'
import Link from '@/components/Link'
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
        flex flex-row justify-center items-center
        px-4 pt-3 pb-0 lg:pb-3
      `}
    >
      <div className={`
        w-full max-w-screen-lg
        flex flex-col lg:flex-row justify-between items-center
      `}>
        <h1
          className={`
            font-thin
            my-16 lg:my-0
            text-4xl lg:text-2xl
          `}
        >
          <Link
            href={home_url}
            sx={headerItemhoverEffect}
          >
            {blog_info.name}
          </Link>
        </h1>

        <Nav {...{ lang }} />
      </div>
    </chakra.header>
  )
}

export default Header
