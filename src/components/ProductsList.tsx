import { useEffect,useState } from 'react'
import type { Products } from '@/types'

export default function ProductsList() {
  const [products,setProducts] = useState<Products[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setProducts(data)
        console.log('Products:',data)
      } catch (error) {
        console.error('Error fetching products:',error)
      }
    }
    getProducts()
  },[])

  return (
    <>
      <p>Products List</p>
      {
        JSON.stringify(products)
      }
    </>
  )
}