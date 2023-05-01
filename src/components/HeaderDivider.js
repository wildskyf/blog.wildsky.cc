import { chakra, Divider as ChaDivider, Center } from '@chakra-ui/react'
import { RiAnchorLine } from 'react-icons/ri'

const Divider = chakra(ChaDivider, {
  baseStyle: {
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderColor: '#921D25',
    filter: 'drop-shadow(1px 1px 5px #BA312D)'
  }
})

export default () => {
  return (
    <Center
      mt='20px'
      gap='40px'
      width='400px'
      maxWidth='80%'
      height='50px'
    >
      <Divider />

      <RiAnchorLine
        color='#BA312D'
        size='48px'
        style={{
          filter: 'drop-shadow(1px 1px 5px #BA312D)'
        }}
      />

      <Divider />
    </Center>
  )
}
