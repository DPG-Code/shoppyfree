import { useEffect,useState } from 'react'
import type { Product } from '@/types'

export default function ProductsList() {
  const [products,setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:',error)
      }
    }
    getProducts()
  },[])

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
                  <p>{product.name}</p>
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