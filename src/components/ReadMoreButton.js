import Button from './Button'

const ReadMoreButton = ({ to }) => {
  return (
    <div className='flex justify-end w-full'>
      <Button
        className='mr-4'
        to={to} text='Read More'
      />
    </div>
  )
}

export default ReadMoreButton
