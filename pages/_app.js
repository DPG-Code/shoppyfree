import ProductsContextProvider from '@/context/ProductsContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  )
}
