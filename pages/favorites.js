import Layout from '@/components/Layout'
import { useContext } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import useFavorites from '@/hooks/useFavorites'
import { lazy, Suspense } from 'react'
import EmptyPage from '@/components/EmptyPage'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Loader from '@/components/Loader'
import SkeletonProduct from '@/components/SkeletonProduct'

const ProductLazy = lazy(() => import('@/components/Product'))

export default function Home() {
  const { favoritesProducts } = useContext(ProductsContext)
  const { favorites, loading } = useFavorites(favoritesProducts)

  const [favoriteRef] = useAutoAnimate()

  return (
    <Layout>
      <main className='px-10 py-16 w-full h-auto flex flex-col items-center justify-start gap-6   lg:px-32 lg:py-20 lg:gap-12'>
        <h2 className='w-full text-left font-medium text-2xl   lg:text-3xl'>
          FAVORITES
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <section
            ref={favoriteRef}
            className='w-full grid grid-cols-products gap-10   lg:gap-12'
          >
            {favoritesProducts.length
              ? favorites.map((product) => (
                  <div key={product._id}>
                    <Suspense fallback={<SkeletonProduct />}>
                      <ProductLazy {...product} />
                    </Suspense>
                  </div>
                ))
              : ''}
          </section>
        )}
        {!favoritesProducts.length && (
          <EmptyPage message='No favorites products' picture='favorites' />
        )}
      </main>
    </Layout>
  )
}
