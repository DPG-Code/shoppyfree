import { getFavorites } from '@/services/getFavorites'
import { useEffect, useState } from 'react'

export default function useFavorites(favoritesProducts) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const uniqIds = [...new Set(favoritesProducts)]
    const favoritesFetch = async () => {
      return await getFavorites(uniqIds).then((favorites) =>
        setFavorites(favorites)
      )
    }
    favoritesFetch()
  }, [favoritesProducts])

  return { favorites }
}
