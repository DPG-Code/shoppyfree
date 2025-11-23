import { useState } from 'react'
import type { Product } from '@/types'

export default function ProductsList({ data }: { data: Product[] }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products,setProducts] = useState<Product[]>(data)

  return (
    <section className='flex flex-col justify-center items-center gap-6'>
      <h4 className='text-2xl font-bold p-4'>Products List</h4>
      {
        products.length > 0 ? (
          <section className='products-grid p-12'>
            {
              products.map((product: Product) => (
                <div key={product.id} className='flex flex-col justify-center items-center gap-2'>
                  <picture className='w-32 h-44 overflow-hidden rounded-md'>
                    <img
                      src={product.image_product ? product.image_product[0] : ''}
                      alt={product.slug}
                      className='w-full h-full object-cover' />
                  </picture>
                  <a href={`/product/${product.slug}`} className='w-full'>
                    <p className='truncate text-center'>{product.name}</p>
                  </a>
                  <span className='w-full text-center text-xl font-semibold'>${product.price}</span>
                </div>
              ))
            }
          </section>
        ) : <p>Loading products...</p>
      }
    </section>
  )
}