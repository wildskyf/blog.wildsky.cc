import Link from 'next/link'

const Nav = ({ menu_items }) => {
  // TODO: i18n
  const items = menu_items.filter(item => {
    return !['Languages'].includes(item.title)
  })

  return (
    <ul className="flex flex-col text-center lg:flex-row w-full lg:w-auto">
      {
        items.map(item => {
          return (
            <li key={item.guid}>
              <Link href={item.url}>
                <a className={`
                  text-gray-700 text-xl font-semibold px-3 py-3 mx-1 cursor-pointer hover:text-red-700 transition-colors w-full block
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

export default Nav
