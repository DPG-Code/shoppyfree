import Layout from '@/components/Layout'
import Product from '@/components/Product'
import connectMongoose from '@/lib/mongoose'
import { useState } from 'react'
import { getAllProducts } from '../api/products'

export default function Man({ products }) {
  const [keyword, setKeyword] = useState('')
  const [productsByCategory, setProductsByCategory] = useState([])
  const categories = ['all', ...new Set(products.map((p) => p.category))]

  const filterCategories = (category) => {
    if (category === 'all') setProductsByCategory(products)
    else
      setProductsByCategory(
        products.filter((product) => product.category === category)
      )
  }

  if (keyword !== '')
    products = products.filter((product) =>
      product.name.toLowerCase().includes(keyword)
    )

  return (
    <Layout>
      <main>
        <input
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='search...'
        />
        <h2>Poducts</h2>
        {categories.map((category) => (
          <button onClick={() => filterCategories(category)} key={category}>
            {category}
          </button>
        ))}
        {productsByCategory.length > 0
          ? productsByCategory.map((product) => (
              <div key={product._id}>
                <Product {...product} />
              </div>
            ))
          : products.map((product) => (
              <div key={product._id}>
                <Product {...product} />
              </div>
            ))}
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  await connectMongoose()
  const productsDatabse = await getAllProducts()
  const products = productsDatabse.filter((p) => p.sex !== 'woman')

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}
