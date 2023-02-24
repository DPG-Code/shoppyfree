import Layout from '@/components/Layout'
import { useContext } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import useFavorites from '@/hooks/useFavorites'
import Link from 'next/link'

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
            <Link href={`/product/${product._id}`} key={product._id}>
              <img src={product.picture} alt={product.name} />
              <p>{product.name}</p>
              <button onClick={() => addRemoveFavorites(product._id)}>
                {favorites.includes(product._id) ? 'remove' : 'added'}
              </button>
            </Link>
          ))
        ) : (
          <p>No favorites products</p>
        )}
      </main>
    </Layout>
  )
}
