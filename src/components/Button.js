import Link from 'next/link'

const Button = ({ className, to, text }) => {
  return (
    <Link href={to} className={`
      font-sans
      rounded
      py-2 px-4
      border-2 border-solid border-skadiWhite-500
      text-sm
      text-skadiWhite-500
      duration-300
      hover:bg-red-800 hover:border-red-800
      ${className || ''}
    `}>
      {text}
    </Link>
  )
}

export default Button
