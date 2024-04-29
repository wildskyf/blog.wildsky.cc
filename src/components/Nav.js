import { useState } from 'react'
import { useWindowSize } from 'react-use'
import Link from '@/components/Link'
import main_menu_items_tw from '@/data/main-tw.json'
import main_menu_items_en from '@/data/main-en.json'

import { headerItemhoverEffect } from '@/components/Header'

const menu_items_mapping = {
  tw: main_menu_items_tw,
  en: main_menu_items_en
}

const Nav = ({ lang }) => {
  const { width } = useWindowSize()
  const [isNavOpen, setNavOpen] = useState(false)
  const homepage_link = lang === 'en' ? { label: '中文', path: '/' } : { label: 'english', path: '/en/' }

  const pages = menu_items_mapping[lang].filter(item => !['Languages'].includes(item.title))

  const toggleNav = () => setNavOpen(!isNavOpen)

  return (
    <nav className='flex flex-col justify-center items-center w-full lg:w-auto select-none'>
      <button
        className='inline-block lg:hidden px-4 py-2 border-2 border-solid text-gray-200 border-gray-200'
        onClick={toggleNav}
      >
        Menu
      </button>

      <ul
        className={`
          flex
          ${isNavOpen ? '' : 'max-lg:hidden'}
          capitalize flex text-center w-full lg:w-auto
          justify-center items-center
          flex-col lg:flex-row max-lg:flex-wrap
        `}
        onClick={toggleNav}
      >
        {
          pages.map(item => {
            return (
              <li key={item.guid} className={`
                  w-2/3 lg:w-full
              `}>
                <Link
                  href={item.url}
                  className={`
                    w-full
                    text-md font-thin px-2 py-3 mx-1 cursor-pointer block
                    border-b-2 lg:border-b-0 border-gray-200 border-solid
                  `}
                  sx={headerItemhoverEffect}
                >
                  {item.title}
                </Link>
              </li>
            )
          })
        }
        <li className={`
            w-2/3 lg:w-full
        `}>
          <Link
            href={homepage_link.path}
            className={`
              text-sm font-thin px-3 py-3 mx-1 cursor-pointer w-full block
              border-b-2 lg:border-b-0 border-gray-200 border-solid
            `}
            sx={headerItemhoverEffect}
          >
            {homepage_link.label}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
