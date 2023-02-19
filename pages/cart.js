import Layout from '@/components/Layout'
import { ProductsContext } from '@/context/ProductsContext'
import { useContext, useEffect, useState } from 'react'

export default function Cart() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)]
    fetch(`/api/products?ids=${uniqIds.join(',')}`)
      .then((res) => res.json())
      .then((data) => setCartProducts(data))
  }, [selectedProducts])

  const addMoreThisProduct = (id) => {
    setSelectedProducts((prev) => [...prev, id])
  }
  const removeMoreThisProduct = (id) => {
    const positionId = selectedProducts.indexOf(id)
    if (positionId !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((product, i) => i !== positionId)
      })
    }
  }

  let subtotal = 0
  let delivery = 4.5
  if (selectedProducts.length > 0) {
    for (let id of selectedProducts) {
      const price = cartProducts.find((p) => p._id === id)?.price
      subtotal += Number(price)
    }
  }
  let total = subtotal + delivery

  return (
    <Layout>
      {!cartProducts.length && <p>No products in your shopping cart</p>}
      {cartProducts.length &&
        cartProducts.map((productInfo) => (
          <div key={productInfo._id}>
            <h2>{productInfo.name}</h2>{' '}
            <div>
              <button onClick={() => removeMoreThisProduct(productInfo._id)}>
                -
              </button>
              {selectedProducts.filter((id) => id === productInfo._id).length}
              <button onClick={() => addMoreThisProduct(productInfo._id)}>
                +
              </button>
            </div>
          </div>
        ))}
      <form></form>
      <p>subtotal: {subtotal}</p>
      <p>delivery: {delivery}</p>
      <p>Total: {total}</p>
      <button>pay: {total}</button>
    </Layout>
  )
}
