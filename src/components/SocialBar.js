import { chakra } from '@chakra-ui/react'
import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BiPaperclip } from 'react-icons/bi'
import { headerItemhoverEffect } from '@/components/Header'

const StyledLink = chakra('a', {
  baseStyle: {
    ...headerItemhoverEffect
  }
})

export default ({ className, ...props }) => (
  <div
    className={`
      flex text-2xl px-4 py-1 gap-6 justify-center
      ${className}
    `}
    {...props}
  >
    <StyledLink href="https://twitter.com/wildskyf" target='_blank'>
      <AiFillTwitterSquare />
    </StyledLink>

    <StyledLink href="https://github.com/wildskyf" target='_blank'>
      <FaGithubSquare />
    </StyledLink>

    <StyledLink href="https://www.linkedin.com/in/wildsky/" target='_blank'>
      <AiFillLinkedin />
    </StyledLink>

    <StyledLink href="/files/reseme.pdf" target='_blank' download='wildsky.20220901.pdf'>
      <BiPaperclip />
    </StyledLink>
  </div>
)
