import { ProductsContext } from '@/context/ProductsContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function Product({
  _id,
  name,
  description,
  price,
  picture,
  category
}) {
  const { setSelectedProducts, setFavoritesProducts } = useContext(ProductsContext)

  const addProductToCart = () => {
    setSelectedProducts((prev) => [...prev, _id])
  }

  const addProductToFavorites = () => {
    setFavoritesProducts((prev) => [...prev, _id])
  }

  return (
    <>
      <Link href={`/product/${_id}`}>
        <img src={picture} alt={name} />
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
      </Link>
      <button onClick={addProductToFavorites}>favorite</button>
      <button onClick={addProductToCart}>cart</button>
    </>
  )
}
