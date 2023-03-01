const { IconCart, IconHeart } = require('./Icons')

const PICTURES = {
  cart: <IconCart width='56px' height='56px' />,
  favorites: <IconHeart width='56px' height='56px' />
}

export default function EmptyPage({ message = 'Empty', picture = 'cart' }) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8 opacity-50'>
      {PICTURES[picture]}
      <p className='w-56 text-center	font-medium text-lg'>
        {message.toUpperCase()}
      </p>
    </div>
  )
}
