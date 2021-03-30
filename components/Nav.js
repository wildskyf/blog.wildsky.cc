import { useState } from 'react'
import { useWindowSize } from 'react-use'
import Link from 'next/link'

const Nav = ({ menu_items }) => {
  const { width } = useWindowSize()
  const isDesktop = width >= 1024
  const [isNavOpen, setNavOpen] = useState(false)

  // TODO: i18n
  const items = menu_items.filter(item => {
    return !['Languages'].includes(item.title)
  })

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
              items.map(item => {
                return (
                  <li key={item.guid}>
                    <Link href={item.url}>
                      <a className={`
                        text-gray-700 text-xl font-semibold px-3 py-3 mx-1 cursor-pointer hover:text-red-700 w-full block
                        border-b-2 border-gray-200 border-solid
                      `}>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        )
      }
    </>
  )
}

export default Nav
