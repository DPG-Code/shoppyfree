import { getFavorites } from '@/services/getFavorites'
import { useEffect, useState } from 'react'

export default function useFavorites(favoritesProducts) {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const uniqIds = [...new Set(favoritesProducts)]
    const favoritesFetch = async () => {
      return await getFavorites(uniqIds).then((favorites) => {
        setFavorites(favorites)
        setLoading(false)
      })
    }
    favoritesFetch()
  }, [favoritesProducts])

  return { favorites, loading }
}
