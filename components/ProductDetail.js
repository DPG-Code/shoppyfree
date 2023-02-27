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
      <article className='w-full flex items-center justify-center'>
        <img className='h-72' src={picture} alt={name} />
      </article>
      <aside className='w-full h-auto flex flex-col items-start justify-start gap-3'>
        <h2 className='font-semibold text-xl'>{name.toUpperCase()}</h2>
        <p className='text-gray-500 font-normal'>{description}</p>
        <h3 className='font-bold text-3xl'>$ {price}</h3>
        <section className='flex gap-4'>
          <p className='text-gray-500'>
            Genre: <span className='text-black font-medium'>{sex}</span>
          </p>
          <p className='text-gray-500'>
            Category: <span className='text-black font-medium'>{category}</span>
          </p>
        </section>
        <section className='w-auto flex gap-4'>
          <button
            className='px-6 py-2 bg-black flex items-center justify-center gap-2'
            onClick={addProductToCart}
          >
            <span className='text-white text-xs font-medium'>ADD TO CART</span>
          </button>
          <button className='mr-auto' onClick={addProductToFavorites}>
            <IconHeart active='active' width='18px' height='18px' />
          </button>
        </section>
      </aside>
    </>
  )
}
