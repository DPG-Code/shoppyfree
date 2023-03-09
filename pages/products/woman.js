import Layout from '@/components/Layout'
import ProductsPage from '@/components/ProductsPage'
import useProducts from '@/hooks/useProducts'
import { useState } from 'react'

export default function Woman() {
  const [keyword, setKeyword] = useState('')
  const [titlePage, setTitlePage] = useState('all products')
  const [productsByCategory, setProductsByCategory] = useState([])

  const { productsDatabase, loading } = useProducts('man')
  let products = productsDatabase

  const categories = [
    'all products',
    ...new Set(products.map((p) => p.category))
  ]

  const filterCategories = (category) => {
    if (category === 'all products') {
      setProductsByCategory([])
      setTitlePage('all products')
    } else {
      setProductsByCategory(
        products.filter((product) => product.category === category)
      )
      setTitlePage(category)
    }
  }

  if (keyword !== '')
    products = products.filter((product) =>
      product.name.toLowerCase().includes(keyword)
    )

  return (
    <Layout title='Woman products'>
      <ProductsPage
        keyword={keyword}
        setKeyword={setKeyword}
        titlePage={titlePage}
        categories={categories}
        filterCategories={filterCategories}
        productsByCategory={productsByCategory}
        products={products}
        loading={loading}
      />
    </Layout>
  )
}
