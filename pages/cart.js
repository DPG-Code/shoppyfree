import Layout from '@/components/Layout'
import { ProductsContext } from '@/context/ProductsContext'
import useCart from '@/hooks/useCart'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export default function Cart() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const { cartProducts } = useCart(selectedProducts)

  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [name, setName] = useState('')
  const [email, setemail] = useState('')

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
      {!selectedProducts.length && <p>No products in your shopping cart</p>}
      {cartProducts.length &&
        cartProducts.map((productInfo) => {
          const amount = selectedProducts.filter(
            (id) => id === productInfo._id
          ).length
          if (amount === 0) return
          return (
            <Link href={`/product/${productInfo._id}`} key={productInfo._id}>
              <img src={productInfo.picture} alt={productInfo.name} />
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
            </Link>
          )
        })}
      <form action='/api/checkout' method='POST'>
        <input
          name='adress'
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type='text'
          placeholder='adress'
        />
        <input
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type='text'
          placeholder='city'
        />
        <input
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='name'
        />
        <input
          name='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type='text'
          placeholder='email'
        />
        <p>subtotal: {subtotal}</p>
        <p>delivery: {delivery}</p>
        <p>Total: {total}</p>
        <input
          type='hidden'
          name='products'
          value={selectedProducts.join(',')}
        />
        <button type='submit'>pay: {total}</button>
      </form>
    </Layout>
  )
}
