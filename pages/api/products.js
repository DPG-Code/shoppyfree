import connectMongoose from '@/lib/mongoose'
import Product from '@/models/Product'

export async function getAllProducts() {
  return Product.find({})
}

export default async function handler(req, res) {
  await connectMongoose()
  const { ids, favs } = req.query

  if (ids) {
    const idsArray = ids.split(',')
    res.json(
      await Product.find({
        _id: { $in: idsArray }
      })
    )
  } else if (favs) {
    const idsArray = favs.split(',')
    res.json(
      await Product.find({
        _id: { $in: idsArray }
      })
    )
  } else {
    res.json(await getAllProducts())
  }
}
