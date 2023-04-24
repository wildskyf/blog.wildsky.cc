import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BiPaperclip } from 'react-icons/bi'

export default () => {
  return (
    <div className={`
      text-white
      flex text-2xl px-4 py-1 gap-6 justify-end
      bg-gradient-to-r from-brand-700 to-brand-900
    `}>
      <a href="https://twitter.com/wildskyf" target='_blank'>
        <AiFillTwitterSquare />
      </a>

      <a href="https://github.com/wildskyf" target='_blank'>
        <FaGithubSquare />
      </a>

      <a href="https://www.linkedin.com/in/wildsky/" target='_blank'>
        <AiFillLinkedin />
      </a>

      <a href="/files/reseme.pdf" target='_blank' download='wildsky.20220901.pdf'>
        <BiPaperclip />
      </a>
    </div>
  )
}
