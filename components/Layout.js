import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import OrderSuccess from './OrderSuccess'

export default function Layout({ children, title = 'home' }) {
  const { setSelectedProducts } = useContext(ProductsContext)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([])
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 6000)
      return () => {
        clearTimeout(timer)
        setSuccess(true)
      }
    }
  }, [])

  return (
    <div className='relative flex flex-col'>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header />
      {success && <OrderSuccess />}
      {children}
      <Footer />
    </div>
  )
}
