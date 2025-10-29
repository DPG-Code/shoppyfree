export interface Product {
  id: number
  created_at: Date
  name: string
  description: null | string
  price: number
  stock: number
  image_product: string[]
  category_id: number
  slug: string
  brand: string
  genre: number
}
