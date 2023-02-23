const { Schema, models, model } = require('mongoose')

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: String,
  category: String,
  sex: String,
  picture: String,
  imgs: [String]
})

const Product = models?.Product || model('Product', ProductSchema)

export default Product
