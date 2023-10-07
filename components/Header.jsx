import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { IconCart, IconHeart } from './Icons'

export default function Header() {
  const { selectedProducts } = useContext(ProductsContext)

  const router = useRouter()
  const { pathname } = router

  return (
    <header className='z-50 w-full sticky top-0'>
      <nav className='px-10 w-full h-16 bg-white flex items-center justify-between   lg:px-32 lg:h-24'>
        <Link href='/'>
          <img className='w-14   lg:w-24' src='/logo.png' alt='logo-home' />
        </Link>
        <div className='flex gap-2   sm:gap-6   lg:gap-10   xl:gap-14'>
          <Link
            className={`pb-1 font-medium border-b-2 ${
              pathname == '/products/man'
                ? 'border-black'
                : 'border-transparent'
            } text-xs hover:border-black transition hover:duration-100 ease-in-out   lg:text-xl   xl:text-2xl`}
            href='/products/man'
          >
            MAN
          </Link>
          <Link
            className={`pb-1 font-medium border-b-2 ${
              pathname == '/products/woman'
                ? 'border-black'
                : 'border-transparent'
            } text-xs hover:border-black transition hover:duration-100 ease-in-out   lg:text-xl   xl:text-2xl`}
            href='/products/woman'
          >
            WOMAN
          </Link>
        </div>
        <div className='flex gap-2   lg:gap-6   xl:gap-12'>
          <Link className='xl:scale-125' href='/favorites'>
            <IconHeart active='active' />
          </Link>
          <Link className='flex relative   xl:scale-125' href='/cart'>
            <IconCart active='active' />
            <span
              className={`w-5 h-5 flex items-center justify-center ${
                selectedProducts.length === 0 ? 'bg-gray-400' : 'bg-red-500'
              } border-2 border-white rounded-full text-[8px] text-white absolute -top-1.5 -right-3`}
            >
              {selectedProducts.length < 10 ? selectedProducts.length : '9+'}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
