import connectMongoose from '@/lib/mongoose'
import { useState } from 'react'
import { getAllProducts } from './api/products'
import Product from '@/components/Product'
import Layout from '@/components/Layout'

export default function Home({ products }) {
  const [keyword, setKeyword] = useState('')

  const categories = [...new Set(products.map((p) => p.category))]

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
        <h1>Ecommerce</h1>
        {products.map((product) => (
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
  const products = await getAllProducts()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}
