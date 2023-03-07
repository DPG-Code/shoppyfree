import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-12 w-full border-2 border-t-gray-300 flex flex-col items-center justify-center gap-12'>
      <section className='flex flex-wrap items-start justify-center gap-y-6'>
        <div className='w-64 flex flex-col'>
          <h3 className='mb-2 font-semibold'>Contact Info</h3>
          <p className='text-gray-400 text-sm font-medium'>+99 6675963</p>
          <p className='text-gray-400 text-sm font-medium'>
            shoppyfree@hotmail.com
          </p>
          <p className='text-gray-400 text-sm font-medium'>España - Valencia</p>
        </div>
        <div className='w-64 flex flex-col'>
          <h3 className='mb-2 font-semibold'>Popular</h3>
          <Link
            className='text-gray-400 text-sm font-medium'
            href='/products/man'
          >
            Products Man
          </Link>
          <Link
            className='text-gray-400 text-sm font-medium'
            href='/products/woman'
          >
            Products Woman
          </Link>
          <Link className='text-gray-400 text-sm font-medium' href='/favorites'>
            Favorites
          </Link>
          <Link className='text-gray-400 text-sm font-medium' href='/cart'>
            Shopping cart
          </Link>
        </div>
        <div className='w-64 flex flex-col'>
          <h3 className='mb-2 font-semibold'>Payments</h3>
          <p className='text-gray-400 text-sm font-medium'>Visa</p>
          <p className='text-gray-400 text-sm font-medium'>Mastercard</p>
          <p className='text-gray-400 text-sm font-medium'>American Express</p>
          <p className='text-gray-400 text-sm font-medium'>Carte Bancaire</p>
        </div>
      </section>
      <p className='text-xs font-semibold   lg:text-xl'>
        &#169; 2023 - All rights reserved
      </p>
    </footer>
  )
}
