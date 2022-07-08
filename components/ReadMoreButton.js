import Button from './Button'

const ReadMoreButton = ({ to }) => {
  return (
    <div className='flex justify-end'>
      <Button to={to} text='Read More' />
    </div>
  )
}

export default ReadMoreButton
