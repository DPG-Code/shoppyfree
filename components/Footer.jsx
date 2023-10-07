import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-12 w-full border-2 border-t-gray-300 flex flex-col items-center justify-center gap-12   lg:gap-24'>
      <section className='flex flex-wrap items-center justify-center gap-6'>
        <article className='w-64 flex flex-col items-center justify-center'>
          <h3 className='mb-2 font-bold   lg:mb-4 lg:text-2xl'>Contact Info</h3>
          <div className='text-gray-400 text-sm font-medium flex flex-col items-center justify-center    lg:text-lg   xl:text-xl'>
            <p>+99 6675963</p>
            <p>shoppyfree@hotmail.com</p>
            <p>España - Valencia</p>
          </div>
        </article>
        <article className='w-64 flex flex-col items-center justify-center'>
          <h3 className='mb-2 font-bold   lg:mb-4 lg:text-2xl'>Popular</h3>
          <div className='text-gray-400 text-sm font-medium flex flex-col items-center justify-center    lg:text-lg   xl:text-xl'>
            <Link className='hover:text-gray-600' href='/products/man'>
              Products Man
            </Link>
            <Link className='hover:text-gray-600' href='/products/woman'>
              Products Woman
            </Link>
            <Link className='hover:text-gray-600' href='/favorites'>
              Favorites
            </Link>
            <Link className='hover:text-gray-600' href='/cart'>
              Shopping cart
            </Link>
          </div>
        </article>
        <article className='w-64 flex flex-col items-center justify-center'>
          <h3 className='mb-2 font-bold   lg:mb-4 lg:text-2xl'>Payments</h3>
          <div className='text-gray-400 text-sm font-medium flex flex-col items-center justify-center    lg:text-lg   xl:text-xl'>
            <p>Visa</p>
            <p>Mastercard</p>
            <p>American Express</p>
            <p>Carte Bancaire</p>
          </div>
        </article>
      </section>
      <p className='text-sm font-bold   lg:text-xl'>
        &#169; 2023 - All rights reserved
      </p>
    </footer>
  )
}
