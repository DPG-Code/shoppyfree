import Layout from '@/components/Layout'
import { useContext } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import useFavorites from '@/hooks/useFavorites'
import Product from '@/components/Product'

export default function Home() {
  const { favoritesProducts, setFavoritesProducts } =
    useContext(ProductsContext)
  const { favorites } = useFavorites(favoritesProducts)

  const addRemoveFavorites = (id) => {
    if (favoritesProducts.includes(id)) {
      const positionId = favoritesProducts.indexOf(id)
      if (positionId !== -1) {
        setFavoritesProducts((prev) => {
          return prev.filter((product, i) => i !== positionId)
        })
      }
    }
    return
  }

  return (
    <Layout>
      <main className='px-10 py-16 w-full h-auto flex flex-col items-center justify-start gap-6'>
        <h2 className='w-full text-left font-medium text-2xl'>FAVORITES</h2>
        <section className='w-full flex flex-wrap gap-x-4 gap-y-8'>
          {favoritesProducts.length ? (
            favorites.map((product) => (
              <div className='w-40 flex flex-col gap-4' key={product._id}>
                <Product {...product} />
              </div>
            ))
          ) : (
            <p>No favorites products</p>
          )}
        </section>
      </main>
    </Layout>
  )
}
