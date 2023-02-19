import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

export default function Header() {
  const router = useRouter()
  const { pathname } = router
  const { selectedProducts } = useContext(ProductsContext)
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/cart'>Cart {selectedProducts.length}</Link>
    </header>
  )
}
