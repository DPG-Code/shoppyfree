import connectMongoose from '@/lib/mongoose'
import Product from '@/models/Product'

export async function getProduct(id) {
  return Product.findById({ _id: id }).exec()
}

export default async function handler(req, res) {
  await connectMongoose()
  const { id } = req.query

  try {
    res.json(await getProduct(id))
  } catch (error) {
    res.staus(404).json(error)
  }
}
