import { useState } from 'react'
import { IconPayment, IconX } from './Icons'

export default function FormCheackout({
  subtotal,
  delivery,
  total,
  selectedProducts,
  goToPay
}) {
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [name, setName] = useState('')
  const [email, setemail] = useState('')

  return (
    <div className='z-50 py-12 w-full min-h-screen flex items-center justify-center backdrop-blur  fixed top-0 left-0'>
      <form
        action='/api/checkout'
        method='POST'
        className='px-6 py-16 bg-white w-72 flex flex-col gap-2 rounded-sm drop-shadow-2xl relative  lg:w-[620px] lg:gap-8'
      >
        <input
          className='py-1 w-full border-b-2 border-gray-300 outline-0   lg:py-2 lg:text-3xl'
          name='adress'
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type='text'
          placeholder='Adress'
          required
        />
        <input
          className='py-1 w-full border-b-2 border-gray-300 outline-0   lg:py-2 lg:text-3xl'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type='text'
          placeholder='City'
          required
        />
        <input
          className='py-1 w-full border-b-2 border-gray-300 outline-0   lg:py-2 lg:text-3xl'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
          required
        />
        <input
          className='py-1 w-full border-b-2 border-gray-300 outline-0   lg:py-2 lg:text-3xl'
          name='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type='text'
          placeholder='Email'
          required
        />
        <div className='my-6 flex flex-col gap-2   lg:gap-6'>
          <p className='font-semibold   lg:text-2xl'>
            <span className='mr-2 text-gray-400 font-medium'>Subtotal:</span>$
            {Number.parseFloat(subtotal).toFixed(2)}
          </p>
          <p className='font-semibold   lg:text-2xl'>
            <span className='mr-2 text-gray-400 font-medium'>Delivery:</span>
            {delivery > 0 ? `$${delivery}` : 'FREE'}
          </p>
          <p className='font-semibold   lg:text-2xl'>
            <span className='mr-2 text-gray-400 font-medium'>Total:</span>$
            {Number.parseFloat(total).toFixed(2)}
          </p>
        </div>
        <input
          type='hidden'
          name='products'
          value={selectedProducts.join(',')}
        />
        <button
          className={`w-full py-1.5 ${
            selectedProducts.length > 0 ? 'bg-black' : 'bg-gray-300'
          } flex items-center justify-center gap-2    lg:px-56 lg:py-4 lg:gap-4`}
          type='submit'
          disabled={selectedProducts.length > 0 ? false : true}
        >
          <span className='text-white font-semibold   lg:text-2xl'>PAY</span>
          <IconPayment />
        </button>
        <button
          className='absolute top-3 right-3 opacity-50'
          onClick={goToPay}
          type='button'
        >
          <IconX />
        </button>
      </form>
    </div>
  )
}
