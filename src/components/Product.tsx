import { useState } from 'react'
import type { Product } from '@/types'

export default function Product({ data }: { data: Product }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [product,setProduct] = useState<Product>(data)
  const { id,name,price,slug,image_product } = product || {}

  return (
    <section className='flex flex-col items-center justify-center p-4 gap-4'>
      <h4 className='text-2xl font-semibold'>Product detail:</h4>
      {
        product ? (
          <section className='flex flex-col items-center justify-center gap-3'>
            <picture key={id} className='w-full flex justify-center items-center'>
              <img
                src={image_product ? image_product[0] : ''}
                alt={slug}
                className='w-72 h-auto object-cover'
              />
            </picture>
            <div className='w-full flex justify-center items-center gap-2'>
              {
                image_product && image_product.length > 0 ? (
                  image_product.map((imgUrl,index) => (
                    <picture key={index}>
                      <img
                        src={imgUrl}
                        alt={slug}
                        className='w-24 h-auto object-cover'
                      />
                    </picture>
                  ))
                ) : null
              }
            </div>
            <p>{name}</p>
            <span className='text-2xl font-semibold'>{price}</span>
          </section>
        ) : <p>Loading product...</p>
      }
    </section>
  )
}