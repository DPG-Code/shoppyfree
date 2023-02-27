import Layout from '@/components/Layout'
import ProductDetail from '@/components/ProductDetail'
import connectMongoose from '@/lib/mongoose'
import { getProduct } from '../api/product'

export default function Product({ id, product }) {
  return (
    <Layout>
      <main className='px-16 pt-16 w-full h-auto flex'>
        <ProductDetail id={id} {...product} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id = '' } = context.query
  await connectMongoose()
  const product = await getProduct(id)

  return {
    props: {
      id,
      product: JSON.parse(JSON.stringify(product))
    }
  }
}
