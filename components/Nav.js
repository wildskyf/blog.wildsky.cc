import Link from 'next/link'

const Nav = ({ menu_items }) => {
  // TODO: i18n
  const items = menu_items.filter(item => {
    return !['Languages'].includes(item.title)
  })

  return (
    <ul>
      {
        items.map(item => {
          return (
            <li key={item.guid}>
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
