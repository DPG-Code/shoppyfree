import connectMongoose from "@/lib/mongoose"
import Product from "@/models/Product"

export default async function handler(req, res) {
  await connectMongoose()
  const {id} = req.query

  const product = await Product.findById({_id: id})
  res.json(product)
}