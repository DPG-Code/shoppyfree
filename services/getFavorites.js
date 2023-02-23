export const getFavorites = async (uniqIds) => {
  return await fetch(`/api/products?favs=${uniqIds.join(',')}`)
    .then((res) => res.json())
    .then((data) => data)
}
