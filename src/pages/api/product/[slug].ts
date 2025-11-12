import type { APIRoute } from "astro"
import { supabase } from "@/lib/supabase"

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params

  const { data: product,error } = await supabase
    .from('products')
    .select('*')
    .eq('slug',slug)
    .single()

  if (error) return new Response(JSON.stringify({ error: error.message }),{ status: 500 })

  return new Response(JSON.stringify(product),{ status: 200 })
}