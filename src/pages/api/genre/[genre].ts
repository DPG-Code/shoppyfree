import type { APIRoute } from 'astro'
import { supabase } from '@/lib/supabase'

const genres = {
  'men': 1,
  'women': 2,
  'unisex': 3
}

export const GET: APIRoute = async ({ params }) => {
  const { genre } = params
  const genreId = genres[genre as keyof typeof genres]

  const { data: products,error } = await supabase
    .from('products')
    .select('*')
    .eq('genre_id',genreId)

  if (error) return new Response(JSON.stringify({ error: error.message }),{ status: 500 })

  if (!genre || !(genre in genres)) return new Response(JSON.stringify({ error: 'Invalid genre' }),{ status: 500 })

  return new Response(JSON.stringify(products),{ status: 200 })
}

export function getStaticPaths() {
  return [
    { params: { genre: 'men' } },
    { params: { genre: 'women' } },
    { params: { genre: 'unisex' } }
  ]
}
