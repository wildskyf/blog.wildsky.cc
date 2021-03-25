import Link from 'next/link'

const Nav = ({ menu_items }) => {
  // TODO: i18n
  const items = menu_items.filter(item => {
    return !['Languages'].includes(item.title)
  })

  return (
    <ul className="flex flex-row">
      {
        items.map(item => {
          return (
            <li key={item.guid} className='text-gray-700 text-xl font-semibold px-3 py-3 mx-1 cursor-pointer hover:text-red-700 transition-colors'>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Nav
