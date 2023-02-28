const PICTURES = {
  cart: '/empty.svg',
  favorites: '/nodata.svg'
}

export default function EmptyPage({ message = 'Empty', picture = 'cart' }) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8'>
      <img className='w-64 opacity-50' src={PICTURES[picture]} alt='picture' />
      <p className='w-56 text-center	font-medium text-lg'>
        {message.toUpperCase()}
      </p>
    </div>
  )
}
