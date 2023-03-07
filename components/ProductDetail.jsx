import { ProductsContext } from '@/context/ProductsContext'
import { useContext, useState } from 'react'
import { IconAddToFavorites } from './Icons'

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
  const [imgProduct, setImgProduct] = useState(picture)

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
          src={imgProduct}
          alt={name}
        />
      </article>
      <aside className='w-full h-auto flex flex-col items-start justify-start gap-4   lg:gap-6 lg:w-auto lg:basis-3/6'>
        <h2 className='font-medium text-xl   sm:text-5xl'>
          {name.toUpperCase()}
        </h2>
        <p className='text-gray-600 font-medium   sm:text-3xl'>{description}</p>
        <section className='flex gap-4   sm:gap-6'>
          <p className='text-gray-500   sm:text-xl'>
            Genre: <span className='text-black font-medium'>{sex}</span>
          </p>
          <p className='text-gray-500   sm:text-xl'>
            Category: <span className='text-black font-medium'>{category}</span>
          </p>
        </section>
        <h3 className='font-semibold text-2xl   sm:text-4xl'>$ {price}</h3>
        <section className='w-auto flex gap-6   sm:gap-10'>
          <button
            className='px-10 py-2 bg-black flex items-center justify-center   sm:px-20 sm:py-3'
            onClick={addProductToCart}
          >
            <span className='text-white text-xs font-medium    sm:text-base'>
              ADD TO CART
            </span>
          </button>
          <button
            className='fill-none stroke-black hover:fill-red-600 hover:stroke-red-700 transition hover:duration-200 ease-in-out'
            onClick={addProductToFavorites}
          >
            <IconAddToFavorites width='30px' height='30px' />
          </button>
        </section>
        <footer className='mt-6 w-full flex flex-wrap gap-4'>
          {[picture, ...imgs].map((img, i) => (
            <button onClick={() => setImgProduct(img)}>
              <img
                key={i}
                className={`w-32 h-32 object-cover border-[1px] ${
                  img == imgProduct ? 'border-gray-600' : 'border-transparent'
                }`}
                src={img}
                alt={img}
              />
            </button>
          ))}
        </footer>
      </aside>
    </>
  )
}
