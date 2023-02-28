import Layout from '@/components/Layout'
import ProductDetail from '@/components/ProductDetail'
import connectMongoose from '@/lib/mongoose'
import { getProduct } from '../api/product'

export default function Product({ id, product }) {
  return (
    <Layout title={product.name}>
      <main className='px-10 pt-16 w-full h-auto flex flex-col gap-6   lg:px-32 lg:py-24 lg:flex-row lg:gap-0'>
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
