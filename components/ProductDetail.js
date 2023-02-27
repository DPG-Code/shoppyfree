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
      <article className='basis-3/6'>
        <img src={picture} alt={name} />
      </article>
      <aside className='basis-3/6 flex flex-col gap-2'>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <section className='flex gap-2'>
          <span className='px-2 py-1 border-[1px] border-gray-400'>{sex}</span>
          <span className='px-2 py-1 border-[1px] border-gray-400'>
            {category}
          </span>
        </section>
        <section className='flex gap-2'>
          <button className='mr-auto' onClick={addProductToFavorites}>
            <IconHeart active='active' width='18px' height='18px' />
          </button>
          <button
            className='px-2 py-1 border-[1px] border-gray-400 text-xs font-medium flex items-center justify-center gap-2'
            onClick={addProductToCart}
          >
            Add to cart <IconAddToCart width='18px' height='18px' />
          </button>
        </section>
      </aside>
    </>
  )
}
