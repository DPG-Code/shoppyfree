import { IconPayment } from '@/components/Icons'
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
      <main className='px-16 pt-16 w-full h-auto flex flex-col items-start justify-start gap-12'>
        <h2 className='w-full text-left font-medium text-2xl'>
          Cart{' '}
          {selectedProducts.length > 0 ? `(${selectedProducts.length})` : ''}
        </h2>
        {!selectedProducts.length && <p>No products in your shopping cart</p>}
        <section className='flex flex-col gap-6'>
          {cartProducts.length &&
            cartProducts.map((product) => {
              const amount = selectedProducts.filter(
                (id) => id === product._id
              ).length
              if (amount === 0) return
              return (
                <div className='w-96 flex gap-6' key={product._id}>
                  <article className='flex items-center justify-center'>
                    <Link href={`/product/${product._id}`} key={product._id}>
                      <img
                        className='h-20 object-cover'
                        src={product.picture}
                        alt={product.name}
                      />
                    </Link>
                  </article>
                  <aside className='w-full flex flex-col gap-1'>
                    <p className='text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap'>
                      {product.name}
                    </p>
                    <h2 className='text-lg font-medium'>$ {product.price}</h2>
                    <div className='flex items-center justify-start gap-3'>
                      <button
                        className='px-2 bg-gray-200'
                        onClick={() => removeMoreThisProduct(product._id)}
                      >
                        <span className='font-semibold'>-</span>
                      </button>
                      <span className='text-lg font-semibold'>
                        {
                          selectedProducts.filter((id) => id === product._id)
                            .length
                        }
                      </span>
                      <button
                        className='px-2 bg-emerald-500'
                        onClick={() => addMoreThisProduct(product._id)}
                      >
                        <span className='font-semibold text-white'>+</span>
                      </button>
                    </div>
                  </aside>
                </div>
              )
            })}
        </section>
        <form
          action='/api/checkout'
          method='POST'
          className='w-full flex flex-col gap-2'
        >
          <input
            className='py-1 w-full border-b-[1px] border-gray-400 outline-0'
            name='adress'
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            type='text'
            placeholder='Adress'
          />
          <input
            className='py-1 w-full border-b-[1px] border-gray-400 outline-0'
            name='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type='text'
            placeholder='City'
          />
          <input
            className='py-1 w-full border-b-[1px] border-gray-400 outline-0'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name'
          />
          <input
            className='py-1 w-full border-b-[1px] border-gray-400 outline-0'
            name='email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type='text'
            placeholder='Email'
          />
          <p className='mt-6 font-semibold'>
            <span className='text-gray-400 font-medium'>Subtotal: </span>${' '}
            {Number.parseFloat(subtotal).toFixed(2)}
          </p>
          <p className='font-semibold'>
            <span className='text-gray-400 font-medium'>Delivery: </span>
            {delivery > 0 ? `$${delivery}` : 'FREE'}
          </p>
          <p className='font-semibold'>
            <span className='text-gray-400 font-medium'>Total: </span>${' '}
            {Number.parseFloat(total).toFixed(2)}
          </p>
          <input
            type='hidden'
            name='products'
            value={selectedProducts.join(',')}
          />
          <button
            className={`mt-6 mx-auto px-32 py-2 ${
              selectedProducts.length > 0 ? 'bg-emerald-500' : 'bg-gray-300'
            } flex items-center justify-center gap-2`}
            type='submit'
            disabled={selectedProducts.length > 0 ? false : true}
          >
            <span className='text-white font-semibold'>PAY</span>
            <IconPayment />
          </button>
        </form>
      </main>
    </Layout>
  )
}
