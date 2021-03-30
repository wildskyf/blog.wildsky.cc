import Link from 'next/link'

const ReadMoreButton = ({ to }) => {
  return (
    <>
      <Link href={to}>
        <a className={`
          text-sm
          float-right font-sans rounded py-2 px-4 mx-8 -mt-8
          border-solid border-2 border-red-700 bg-white text-red-700
          hover:bg-red-700 hover:text-white
        `}>
          Read More
        </a>
      </Link>
    </>
  )
}

export default ReadMoreButton
