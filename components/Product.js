import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useContext } from 'react'
import { IconAddToCart, IconHeart } from './Icons'

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
      <Link className='w-full flex flex-col' href={`/product/${_id}`}>
        <img
          className='mb-4 h-36 w-full object-cover'
          src={picture}
          alt={name}
        />
        <p className='font-normal text-xs overflow-hidden text-ellipsis whitespace-nowrap'>
          {name}
        </p>
        <p className='font-semibold'>$ {price}</p>
      </Link>
      <footer className='flex'>
        <button
          className='mr-auto px-5 py-1.5 bg-emerald-500 flex items-center justify-center gap-2'
          onClick={addProductToCart}
        >
          <span className='text-white text-xs font-medium'>ADD TO</span>
          <IconAddToCart width='16px' height='16px' />
        </button>
        <button onClick={addProductToFavorites}>
          <IconHeart active='active' width='20px' height='20px' />
        </button>
      </footer>
    </>
  )
}
