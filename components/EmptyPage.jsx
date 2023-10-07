const { IconCart, IconHeart } = require('./Icons')

const PICTURES = {
  cart: <IconCart active='active' width='42px' height='42px' />,
  favorites: <IconHeart active='active' width='42px' height='42px' />
}

export default function EmptyPage({ message = 'Empty', picture = 'cart' }) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6'>
      {PICTURES[picture]}
      <p className='w-56 text-center text-gray-400 font-bold text-lg   xl:w-96 xl:text-2xl'>
        {message.toUpperCase()}
      </p>
    </div>
  )
}
