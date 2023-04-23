import Link from 'next/link'

const Button = ({ className, to, text }) => {
  return (
    <Link href={to} className={`
      text-sm
      font-sans rounded py-2 px-4
      border-solid border-2 border-red-700 bg-white text-red-700
      hover:bg-red-700 hover:text-white
      ${className || ''}
    `}>
      {text}
    </Link>
  )
}

export default Button
