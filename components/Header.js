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
    <header className='w-full sticky top-0'>
      <nav className='px-16 w-full h-16 flex items-center justify-between'>
        <Link className='font-normal' href='/'>
          ShopyFree
        </Link>
        <div className='flex gap-4'>
          <Link
            className={`font-${
              pathname == '/products/man' ? 'medium' : 'light'
            }`}
            href='/products/man'
          >
            MAN
          </Link>
          <Link
            className={`font-${
              pathname == '/products/woman' ? 'medium' : 'light'
            }`}
            href='/products/woman'
          >
            WOMAN
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link href='/favorites'>
            <IconHeart active={pathname == '/favorites' && 'active'} />
          </Link>
          <Link className='flex relative' href='/cart'>
            <IconCart active={pathname == '/cart' && 'active'} />
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
