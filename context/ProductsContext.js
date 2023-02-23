import { createContext } from 'react'
import useLocalStorageState from 'use-local-storage-state'

export const ProductsContext = createContext({})

export default function ProductsContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart', {
    defaultValue: []
  })
  const [favoritesProducts, setFavoritesProducts] = useLocalStorageState('favorites', {
    defaultValue: []
  })

  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts, favoritesProducts, setFavoritesProducts}}>
      {children}
    </ProductsContext.Provider>
  )
}
