import { getProducts } from '@/services/getProducts'
import { useEffect, useState } from 'react'

export default function useProducts(sex) {
  const [productsDatabase, setProductsDatabase] = useState([])

  useEffect(() => {
    const productsFetch = async () => {
      return await getProducts().then((data) => {
        const productsFiltered = data.filter((p) => p.sex !== sex)
        setProductsDatabase(productsFiltered)
      })
    }
    productsFetch()
  }, [])

  return { productsDatabase }
}
