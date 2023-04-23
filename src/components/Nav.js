import { useState } from 'react'
import { useWindowSize } from 'react-use'
import Link from 'next/link'
import main_menu_items_tw from '@/data/main-tw.json'
import main_menu_items_en from '@/data/main-en.json'

const menu_items_mapping = {
  tw: main_menu_items_tw,
  en: main_menu_items_en
}

const Nav = ({ lang }) => {
  const { width } = useWindowSize()
  const isDesktop = width >= 1024
  const [isNavOpen, setNavOpen] = useState(false)
  const homepage_link = lang === 'en' ? { label: '中文', path: '/' } : { label: 'english', path: '/en/' }

  const pages = menu_items_mapping[lang].filter(item => !['Languages'].includes(item.title))

  const toggleNav = () => setNavOpen(!isNavOpen)

  return (
    <>
      <div
        className='inline-block lg:hidden bg-white px-4 py-2 border-2 border-solid border-gray-200'
        onClick={toggleNav}
      >
        Menu
      </div>
      {
        (isDesktop || isNavOpen) && (
          <ul className="flex flex-col text-center lg:flex-row w-full lg:w-auto" onClick={toggleNav}>
            {
              pages.map(item => {
                return (
                  <li key={item.guid}>
                    <Link href={item.url} className={`
                      text-gray-700 text-xl font-semibold px-3 py-3 mx-1 cursor-pointer hover:text-red-700 w-full block
                      border-b-2 lg:border-b-0 border-gray-200 border-solid
                    `}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
            <li>
              <Link href={homepage_link.path} className={`
                text-gray-700 text-xl font-semibold px-3 py-3 mx-1 cursor-pointer hover:text-red-700 w-full block
                border-b-2 lg:border-b-0 border-gray-200 border-solid
              `}>
                {homepage_link.label}
              </Link>
            </li>
          </ul>
        )
      }
    </>
  )
}

export default Nav
