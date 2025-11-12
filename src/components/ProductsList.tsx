import { useState } from 'react'
import type { Product } from '@/types'

export default function ProductsList({ data }: { data: Product[] }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products,setProducts] = useState<Product[]>(data)

  return (
    <section className='products'>
      <h4>Products List</h4>
      {
        products.length > 0 ? (
          <div className='products-grid'>
            {
              products.map((product: Product) => (
                <picture key={product.id}>
                  <img src={product.image_product ? product.image_product[0] : ''} alt={product.slug} />
                  <a href={`/product/${product.slug}`}>
                    <span>{product.name}</span>
                  </a>
                  <p>{product.price}</p>
                </picture>
              ))
            }
          </div>
        ) : <p>Loading products...</p>
      }
    </section>
  )
}