import { supabase } from '../supabase'
import { Category as SupabaseCategory } from '../types/supabase'
import { Category as AppCategory } from '../mock-data'

export async function getCategories(): Promise<AppCategory[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return (data || []).map(mapSupabaseCategoryToAppCategory)
}

export async function getCategoryBySlug(slug: string): Promise<AppCategory | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error(`Error fetching category by slug ${slug}:`, error)
    return null
  }

  return mapSupabaseCategoryToAppCategory(data)
}

export async function getSubCategories(parentSlug: string): Promise<AppCategory[]> {
  // First get the parent ID
  const { data: parentData, error: parentError } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', parentSlug)
    .single()

  if (parentError || !parentData) {
    console.error(`Error fetching parent category ID for ${parentSlug}:`, parentError)
    return []
  }

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('parent_id', parentData.id)
    .order('name', { ascending: true })

  if (error) {
    console.error(`Error fetching subcategories for ${parentSlug}:`, error)
    return []
  }

  return (data || []).map(mapSupabaseCategoryToAppCategory)
}

function mapSupabaseCategoryToAppCategory(cat: SupabaseCategory): AppCategory {
  return {
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    template_type: (cat.template_type as any) || 'standard',
    parent_id: cat.parent_id || undefined
  }
}
