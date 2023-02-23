import Layout from '@/components/Layout'
import { useContext } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import useFavorites from '@/hooks/useFavorites'

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
      <main>
        <h1>Favorites</h1>
        {favoritesProducts.length ? (
          favorites.map((product) => (
            <div key={product._id}>
              {product.name}
              <button onClick={() => addRemoveFavorites(product._id)}>
                {favorites.includes(product._id) ? 'remove' : 'added'}
              </button>
            </div>
          ))
        ) : (
          <p>No favorites products</p>
        )}
      </main>
    </Layout>
  )
}
