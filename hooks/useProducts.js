import { getProducts } from '@/services/getProducts'
import { useEffect, useState } from 'react'

export default function useProducts(sex) {
  const [productsDatabase, setProductsDatabase] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const productsFetch = async () => {
      return await getProducts().then((data) => {
        const productsFiltered = data.filter((p) => p.sex !== sex)
        setProductsDatabase(productsFiltered)
        setLoading(false)
      })
    }
    productsFetch()
  }, [])

  return { productsDatabase, loading }
}
