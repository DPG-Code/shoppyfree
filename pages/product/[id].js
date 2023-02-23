import Layout from '@/components/Layout'
import connectMongoose from '@/lib/mongoose'
import { getProduct } from '../api/product'

export default function Product({ id, product }) {
  const { name, description, price, category, sex, picture, imgs } = product

  return (
    <Layout>
      <main>
        {
          <div>
            {name}
            {description}
            {price}
            {category}
            {sex}
            {picture}
          </div>
        }
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
