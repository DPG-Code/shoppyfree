import Layout from "@/components/Layout"
import connectMongoose from "@/lib/mongoose"
import { useRouter } from "next/router"

export default function Product() {
  const router = useRouter()
  const {id} = router.query
  return (
    <Layout>
      <main>
        <p>details: {id}</p>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  await connectMongoose()

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}