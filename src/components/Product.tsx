import { useState } from 'react'
import type { Product } from '@/types'

export default function Product({ data }: { data: Product }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [product,setProduct] = useState<Product>(data)
  const { id,name,price,slug,image_product } = product || {}

  return (
    <section className='products'>
      <h4>Product</h4>
      {
        product ? (
          <div className='products-grid'>
            <picture key={id}>
              <img width={'200px'} src={image_product ? image_product[0] : ''} alt={slug} />
              <p>{name}</p>
              <p>{price}</p>
            </picture>
          </div>
        ) : <p>Loading product...</p>
      }
    </section>
  )
}