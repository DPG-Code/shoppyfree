import EmptyPage from '@/components/EmptyPage'
import FormCheackout from '@/components/FormCheckout'
import { IconX } from '@/components/Icons'
import Layout from '@/components/Layout'
import { ProductsContext } from '@/context/ProductsContext'
import useCart from '@/hooks/useCart'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Cart() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const { cartProducts } = useCart(selectedProducts)
  const [checkout, setCheckout] = useState(false)

  const [clearRef] = useAutoAnimate()
  const [itemsCartRef] = useAutoAnimate()

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
  const cleanCart = () => {
    setSelectedProducts((prev) => [])
  }

  const deleteItemFromCart = (id) => {
    setSelectedProducts((prev) => prev.filter((p) => p !== id))
  }

  const goToPay = () => {
    setCheckout(!checkout)
  }

  let subtotal = 0
  let delivery = 0
  if (selectedProducts.length > 0) {
    for (let id of selectedProducts) {
      const price = cartProducts.find((p) => p._id === id)?.price
      subtotal += Number(price)
    }
  }
  let total = subtotal + delivery

  return (
    <Layout>
      <main
        ref={clearRef}
        className='px-10 py-16 w-full h-auto flex flex-col items-start justify-start gap-12   lg:px-32 lg:py-20 lg:gap-16'
      >
        <header className='w-full flex items-center justify-between'>
          <h2 className='text-left font-medium text-2xl   lg:text-3xl'>
            CART{' '}
            {selectedProducts.length > 0 ? `(${selectedProducts.length})` : ''}
          </h2>
          <button className='font-medium text-gray-400' onClick={cleanCart}>
            clear cart
          </button>
        </header>
        {!selectedProducts.length && (
          <EmptyPage
            message='No products in your shopping cart'
            picture='cart'
          />
        )}
        <section
          ref={itemsCartRef}
          className='w-full flex flex-col items-center justify-center gap-12   sm:gap-8'
        >
          {cartProducts.length
            ? cartProducts.map((product) => {
                const amount = selectedProducts.filter(
                  (id) => id === product._id
                ).length
                if (amount === 0) return
                return (
                  <div
                    className='w-52 flex flex-col items-center justify-between gap-2 relative   sm:w-full sm:flex-row sm:gap-0'
                    key={product._id}
                  >
                    <section className='flex items-center justify-center'>
                      <Link href={`/product/${product._id}`} key={product._id}>
                        <img
                          className='h-32 object-cover   sm:h-20   lg:h-44'
                          src={product.picture}
                          alt={product.name}
                        />
                      </Link>
                    </section>
                    <article className='w-full flex flex-col gap-1   sm:w-64   lg:gap-3 lg:w-96'>
                      <p className='text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap   lg:text-2xl'>
                        {product.name.toUpperCase()}
                      </p>
                      <div className='flex gap-2 text-xs text-gray-500'>
                        <span>
                          {product.sex.charAt(0).toUpperCase() +
                            product.sex.slice(1)}
                        </span>{' '}
                        |
                        <span>
                          {product.category.charAt(0).toUpperCase() +
                            product.category.slice(1)}
                        </span>
                      </div>
                      <h2 className='text-lg font-medium   lg:text-2xl'>
                        $ {product.price}
                      </h2>
                    </article>
                    <div className='w-full flex items-start justify-start gap-3   sm:w-auto sm:items-center   lg:gap-4'>
                      <button
                        onClick={() => removeMoreThisProduct(product._id)}
                      >
                        <span className='font-semibold opacity-50   lg:text-lg'>
                          -
                        </span>
                      </button>
                      <span className='text-lg font-semibold   lg:text-xl'>
                        {
                          selectedProducts.filter((id) => id === product._id)
                            .length
                        }
                      </span>
                      <button onClick={() => addMoreThisProduct(product._id)}>
                        <span className='font-semibold   lg:text-lg'>+</span>
                      </button>
                    </div>
                    <button
                      className='absolute top-2 right-2 opacity-50   sm:relative sm:top-0 sm:right-0'
                      onClick={() => deleteItemFromCart(product._id)}
                    >
                      <IconX />
                    </button>
                  </div>
                )
              })
            : ''}
        </section>
        {checkout && (
          <FormCheackout
            subtotal={subtotal}
            delivery={delivery}
            total={total}
            selectedProducts={selectedProducts}
            goToPay={goToPay}
          />
        )}
        <button
          className={`mt-6 mx-auto px-24 py-2 ${
            selectedProducts.length > 0 ? 'bg-black' : 'bg-gray-300'
          } lg:px-56 lg:py-4 lg:gap-4`}
          disabled={selectedProducts.length > 0 ? false : true}
          onClick={goToPay}
        >
          <span className='text-white font-semibold   lg:text-2xl'>
            CHECKOUT
          </span>
        </button>
      </main>
    </Layout>
  )
}
