export interface Products {
  id: number
  created_at: Date
  name: string
  description: string
  price: number
  stock: number
  image_product: string[] | null
  category_id: number
}
