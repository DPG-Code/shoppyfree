import { getCart } from '@/services/getCart'
import { useEffect, useState } from 'react'

export default function useCart(selectedProducts) {
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)]
    const cartFetch = async () => {
      return await getCart(uniqIds).then((favorites) =>
        setCartProducts(favorites)
      )
    }
    cartFetch()
  }, [selectedProducts])

  return { cartProducts }
}
