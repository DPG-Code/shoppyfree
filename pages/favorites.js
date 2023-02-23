import Layout from '@/components/Layout'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/context/ProductsContext'

export default function Home() {
  const { favoritesProducts, setFavoritesProducts } =
    useContext(ProductsContext)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const uniqIds = [...new Set(favoritesProducts)]
    fetch(`/api/products?favs=${uniqIds.join(',')}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data))
  }, [favoritesProducts])

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
