import { ProductsContext } from '@/context/ProductsContext'
import { useContext } from 'react'
import { IconAddToCart, IconHeart } from './Icons'

export default function ProductDetail({
  id,
  name,
  description,
  price,
  category,
  sex,
  picture,
  imgs
}) {
  const { setSelectedProducts, setFavoritesProducts } =
    useContext(ProductsContext)

  const addProductToCart = () => {
    setSelectedProducts((prev) => [...prev, id])
  }

  const addProductToFavorites = () => {
    setFavoritesProducts((prev) => [...prev, id])
  }
  return (
    <>
      <article className='w-full flex items-center justify-center    lg:w-auto lg:basis-3/6 lg:overflow-hidden'>
        <img
          className='h-72   lg:h-[600px] lg:object-cover'
          src={picture}
          alt={name}
        />
      </article>
      <aside className='w-full h-auto flex flex-col items-start justify-start gap-4   lg:gap-6 lg:w-auto lg:basis-3/6'>
        <h2 className='font-semibold text-xl   sm:text-3xl'>
          {name.toUpperCase()}
        </h2>
        <p className='text-gray-500 font-normal   sm:text-2xl'>{description}</p>
        <h3 className='font-bold text-3xl   sm:text-5xl'>$ {price}</h3>
        <section className='flex gap-4   sm:gap-6'>
          <p className='text-gray-500   sm:text-xl'>
            Genre: <span className='text-black font-medium'>{sex}</span>
          </p>
          <p className='text-gray-500   sm:text-xl'>
            Category: <span className='text-black font-medium'>{category}</span>
          </p>
        </section>
        <section className='w-auto flex gap-4   sm:gap-8'>
          <button
            className='px-6 py-2 bg-black flex items-center justify-center   sm:px-12 sm:py-3'
            onClick={addProductToCart}
          >
            <span className='text-white text-xs font-medium    sm:text-base'>
              ADD TO CART
            </span>
          </button>
          <button className='mr-auto' onClick={addProductToFavorites}>
            <IconHeart active='active' width='24px' height='24px' />
          </button>
        </section>
      </aside>
    </>
  )
}
