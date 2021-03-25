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
            <li key={item.guid} className='font-bold py-3 mx-3'>
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
