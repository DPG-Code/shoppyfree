export const getProducts = async () => {
  return await fetch('/api/products')
    .then((res) => res.json())
    .then((data) => data)
}
