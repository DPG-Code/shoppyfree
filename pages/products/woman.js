import { IconSearch } from '@/components/Icons'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import connectMongoose from '@/lib/mongoose'
import { useState } from 'react'
import { getAllProducts } from '../api/products'

export default function Woman({ products }) {
  const [keyword, setKeyword] = useState('')
  const [titlePage, setTitlePage] = useState('all products')
  const [productsByCategory, setProductsByCategory] = useState([])
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
      <main className='px-10 py-16 w-full h-auto flex flex-col items-center justify-start gap-8   lg:px-32 lg:py-20 lg:gap-12'>
        <div className='w-64 flex items-center relative   lg:w-96'>
          <input
            className='py-1 w-full border-b-[1px] border-black outline-0   lg:py-2 lg:text-xl'
            type='text'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Shoes, Clothes, etc...'
          />
          <IconSearch className='absolute right-0' />
        </div>
        <h2 className='w-full text-left font-medium text-2xl   lg:text-3xl'>
          {titlePage.toUpperCase()}
        </h2>
        <div className='w-full flex gap-2 overflow-x-scroll snap-x scrollbar-hide   lg:gap-4'>
          {categories.map((category) => (
            <button
              className={`snap-start ${
                titlePage === category
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-black border-gray-400'
              } px-3 py-1 border-[1px] hover:bg-black hover:text-white hover:border-black   lg:text-lg`}
              onClick={() => filterCategories(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <section className='w-full grid grid-cols-products gap-10   lg:gap-12'>
          {productsByCategory.length > 0
            ? productsByCategory.map((product) => (
                <div
                  className='w-full flex flex-col gap-2   lg:gap-4'
                  key={product._id}
                >
                  <Product {...product} />
                </div>
              ))
            : products.map((product) => (
                <div
                  className='w-full flex flex-col gap-2   lg:gap-4'
                  key={product._id}
                >
                  <Product {...product} />
                </div>
              ))}
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  await connectMongoose()
  const productsDatabse = await getAllProducts()
  const products = productsDatabse.filter((p) => p.sex !== 'man')

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}
