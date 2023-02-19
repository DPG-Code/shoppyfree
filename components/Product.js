import { ProductsContext } from '@/context/ProductsContext'
import { useContext } from 'react'

export default function Product({
  _id,
  name,
  description,
  price,
  picture,
  category
}) {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const addProduct = () => {
    setSelectedProducts((prev) => [...prev, _id])
  }

  return (
    <>
      <img src={picture} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <button onClick={addProduct}>add</button>
    </>
  )
}
