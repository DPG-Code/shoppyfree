import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useContext } from 'react'
import { IconAddToCart, IconAddToFavorites } from './Icons'

export default function Product({ _id, name, price, picture }) {
  const { setSelectedProducts, favoritesProducts, setFavoritesProducts } =
    useContext(ProductsContext)

  const addProductToCart = () => {
    setSelectedProducts((prev) => [...prev, _id])
  }

  const addProductToFavorites = () => {
    if (favoritesProducts.includes(_id)) {
      const positionId = favoritesProducts.indexOf(_id)
      if (positionId !== -1) {
        setFavoritesProducts((prev) => {
          return prev.filter((product, i) => i !== positionId)
        })
      }
    } else setFavoritesProducts((prev) => [...prev, _id])
  }

  return (
    <>
      <Link
        className='z-30 w-full flex flex-col gap-2'
        href={`/product/${_id}`}
      >
        <img
          className='h-52 w-full object-cover   lg:h-72'
          src={picture}
          alt={name}
        />
        <p className='font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap   lg:text-lg'>
          {name.toUpperCase()}
        </p>
        <p className='font-medium text-base   lg:text-lg'>$ {price}</p>
      </Link>
      <button
        className='py-2 border-[1px] border-gray-300 flex items-center justify-center gap-2'
        onClick={addProductToCart}
      >
        <span className='text-xs font-semibold'>ADD TO CART</span>
        <IconAddToCart width='18px' height='18px' />
      </button>
      <button
        className='z-40 p-1.5 bg-white rounded-full absolute top-2 right-2 fill-none stroke-black hover:fill-red-600 hover:stroke-red-700 transition hover:duration-200 ease-in-out'
        onClick={addProductToFavorites}
      >
        <IconAddToFavorites width='20px' height='20px' />
      </button>
    </>
  )
}
