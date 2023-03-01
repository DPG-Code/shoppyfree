import Layout from '@/components/Layout'
import { useContext } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import useFavorites from '@/hooks/useFavorites'
import Product from '@/components/Product'
import EmptyPage from '@/components/EmptyPage'

export default function Home() {
  const { favoritesProducts } = useContext(ProductsContext)
  const { favorites } = useFavorites(favoritesProducts)

  return (
    <Layout>
      <main className='px-10 py-16 w-full h-auto flex flex-col items-center justify-start gap-6   lg:px-32 lg:py-20 lg:gap-12'>
        <h2 className='w-full text-left font-medium text-2xl   lg:text-3xl'>
          FAVORITES
        </h2>
        <section className='w-full grid grid-cols-products gap-10   lg:gap-12'>
          {favoritesProducts.length ? (
            favorites.map((product) => (
              <div
                className='w-full flex flex-col gap-2   lg:gap-4'
                key={product._id}
              >
                <Product {...product} />
              </div>
            ))
          ) : (
            <EmptyPage message='No favorites products' picture='favorites' />
          )}
        </section>
      </main>
    </Layout>
  )
}
