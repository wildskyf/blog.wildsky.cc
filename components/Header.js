import Nav from '../components/Nav'
import Link from 'next/link'

const Header = ({ home, name, description, menu }) => {
  return (
    <>
      <h1>
        <a href={home}>
          Homepage | {name}
        </a>
      </h1>
      <p>
        {description}
      </p>
      <nav>
        <Nav menu_items={menu.items} />
      </nav>
    </>
  )
}

export default Header
