import { supabase } from '../supabase'
import { Post as SupabasePost } from '../types/supabase'
import { Post as AppPost } from '../mock-data'

export async function getPosts(): Promise<AppPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*, author:users(name)')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return (data || []).map(mapSupabasePostToAppPost)
}

export async function getPostBySlug(slug: string): Promise<AppPost | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*, author:users(name)')
    .eq('status', 'published')
    .maybeSingle()

  if (error) {
    console.error(`Error fetching post by slug ${slug}:`, error)
    return null
  }

  return data ? mapSupabasePostToAppPost(data) : null
}

export async function getPostsByCategory(categorySlug: string): Promise<AppPost[]> {
  // First get the category ID
  const { data: categoryData, error: categoryError } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .maybeSingle()

  if (categoryError || !categoryData) {
    console.error(`Error fetching category ID for ${categorySlug}:`, categoryError)
    return []
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*, author:users(name)')
    .eq('category_id', (categoryData as any).id)
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error)
    return []
  }

  return (data || []).map(mapSupabasePostToAppPost)
}

function mapSupabasePostToAppPost(post: any): AppPost {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: post.content || '',
    published_at: post.published_at || post.created_at,
    category_id: post.category_id || '',
    featured_image_url: post.image_url || '',
    status: post.status || 'published',
    custom_fields: (post.custom_fields as Record<string, any>) || undefined,
    author: post.author ? { name: post.author.name } : undefined
  }
}
