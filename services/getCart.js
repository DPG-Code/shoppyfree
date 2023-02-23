export const getCart = async (uniqIds) => {
  return await fetch(`/api/products?ids=${uniqIds.join(',')}`)
    .then((res) => res.json())
    .then((data) => data)
}
