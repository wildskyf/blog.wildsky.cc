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
      hover:bg-skadiRed-700 hover:border-skadiRed-700
      ${className || ''}
    `}>
      {text}
    </Link>
  )
}

export default Button
