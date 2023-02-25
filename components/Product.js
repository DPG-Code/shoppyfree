import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useContext } from 'react'
import { IconAddToCart, IconHeart } from './Icons'

export default function Product({ _id, name, price, picture }) {
  const { setSelectedProducts, setFavoritesProducts } =
    useContext(ProductsContext)

  const addProductToCart = () => {
    setSelectedProducts((prev) => [...prev, _id])
  }

  const addProductToFavorites = () => {
    setFavoritesProducts((prev) => [...prev, _id])
  }

  return (
    <>
      <Link className='w-full flex flex-col' href={`/product/${_id}`}>
        <img
          className='mb-4 h-36 w-full object-cover'
          src={picture}
          alt={name}
        />
        <p className='font-light text-xs overflow-hidden text-ellipsis whitespace-nowrap'>
          {name}
        </p>
        <p className='font-medium'>$ {price}</p>
      </Link>
      <footer className='flex'>
        <button className='mr-auto' onClick={addProductToFavorites}>
          <IconHeart active='active' width='18px' height='18px' />
        </button>
        <button
          className='px-2 py-1 border-[1px] border-gray-400 text-xs font-medium flex items-center justify-center gap-2'
          onClick={addProductToCart}
        >
          Add to cart <IconAddToCart width='18px' height='18px' />
        </button>
      </footer>
    </>
  )
}
