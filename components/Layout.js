import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import Header from './Header'

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([])
      // add timeout for this message
      setSuccess(true)
    }
  }, [])
  return (
    <div>
      <Header />
      {success && <div>Compra hecha</div>}
      {children}
    </div>
  )
}
