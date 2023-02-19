import connectMongoose from '@/lib/mongoose'
import Product from '@/models/Product'

export async function getAllProducts() {
  return Product.find().exec()
}

export default async function handler(req, res) {
  await connectMongoose()
  const { ids } = req.query
  if (ids) {
    const idsArray = ids.split(',')
    res.json(
      await Product.find({
        _id: { $in: idsArray }
      }).exec()
    )
  } else {
    res.json(await getAllProducts())
  }
}
