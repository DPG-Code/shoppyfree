import type { APIRoute } from 'astro'
import { supabase } from '@/lib/supabase'

const categories = {
  'any': 1,
  't-shirts': 2,
  'pants': 3,
  'jackets': 4,
  'shoes': 5,
  'accessories': 6
}

export const GET: APIRoute = async ({ params }) => {
  const { category } = params
  const categoryId = categories[category as keyof typeof categories]

  const { data: products,error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id',categoryId)

  if (error) return new Response(JSON.stringify({ error: error.message }),{ status: 500 })

  if (!category || !(category in categories)) return new Response(JSON.stringify({ error: 'Invalid category' }),{ status: 500 })

  return new Response(JSON.stringify(products),{ status: 200 })
}

export function getStaticPaths() {
  return [
    { params: { category: 'any' } },
    { params: { category: 't-shirts' } },
    { params: { category: 'pants' } },
    { params: { category: 'jackets' } },
    { params: { category: 'shoes' } },
    { params: { category: 'accessories' } }
  ]
}