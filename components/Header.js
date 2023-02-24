import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

export default function Header() {
  const router = useRouter()
  const { pathname } = router // add selected
  const { selectedProducts } = useContext(ProductsContext)
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/products/man'>Man</Link>
      <Link href='/products/woman'>Woman</Link>
      <Link href='/favorites'>Favorites</Link>
      <Link href='/cart'>Cart {selectedProducts.length}</Link>
    </header>
  )
}
