const { IconCart, IconHeart } = require('./Icons')

const PICTURES = {
  cart: <IconCart width='42px' height='42px' />,
  favorites: <IconHeart width='42px' height='42px' />
}

export default function EmptyPage({ message = 'Empty', picture = 'cart' }) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6 opacity-50'>
      {PICTURES[picture]}
      <p className='w-56 text-center	font-medium text-lg'>
        {message.toUpperCase()}
      </p>
    </div>
  )
}
