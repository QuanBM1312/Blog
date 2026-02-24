'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { getPosts } from '@/lib/services/post-service'
import { getCategories } from '@/lib/services/category-service'
import { Post, Category } from '@/lib/mock-data'

export default function TestSupabasePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debug, setDebug] = useState<Record<string, any>>({})

  useEffect(() => {
    async function loadData() {
      console.log('Starting Supabase diagnostic...')
      const debugInfo: Record<string, any> = {
        urlFound: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        keyFound: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 15)}...` : 'MISSING',
      }
      setDebug(debugInfo)

      try {
        console.log('Fetching raw categories...')
        const { data: catData, error: catError, status: catStatus } = await supabase
          .from('categories')
          .select('*')
          .limit(1)
        
        debugInfo.catStatus = catStatus
        if (catError) {
          console.error('Cat Error:', catError)
          setError(`Categories Error: ${catError.message} (${catError.code})`)
          setDebug({ ...debugInfo, catError })
          setLoading(false)
          return
        }
        debugInfo.rawCategoriesCount = catData?.length ?? 0
        console.log('Raw Categories Count:', debugInfo.rawCategoriesCount)

        console.log('Fetching raw posts...')
        const { data: postData, error: postError, status: postStatus } = await supabase
          .from('posts')
          .select('*')
          .limit(1)
        
        debugInfo.postStatus = postStatus
        if (postError) {
          console.error('Post Error:', postError)
          setError(`Posts Error: ${postError.message} (${postError.code})`)
          setDebug({ ...debugInfo, postError })
          setLoading(false)
          return
        }
        debugInfo.rawPostsCount = postData?.length ?? 0
        console.log('Raw Posts Count:', debugInfo.rawPostsCount)

        setDebug({ ...debugInfo })

        console.log('Running service layer fetches...')
        const [p, c] = await Promise.all([getPosts(), getCategories()])
        setPosts(p)
        setCategories(c)
        console.log('Finished loading data.')
      } catch (err) {
        console.error('Catch Error:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) return (
    <div className="p-8 space-y-4">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <p>Loading data from Supabase... Check browser console for logs.</p>
    </div>
  )

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Supabase Diagnostic Tool</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className={`p-4 rounded-lg border ${debug.urlFound && debug.keyFound ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <h3 className="font-bold mb-2">Environment Variables</h3>
          <ul className="text-sm space-y-1">
            <li>URL: {debug.urlFound ? '✅ Found' : '❌ Missing'} ({debug.urlValue})</li>
            <li>Key: {debug.keyFound ? '✅ Found' : '❌ Missing'}</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
          <h3 className="font-bold mb-2">Connection Status</h3>
          <ul className="text-sm space-y-1">
            <li>Categories Status: {debug.catStatus ?? 'N/A'} (Count: {debug.rawCategoriesCount ?? '?'})</li>
            <li>Posts Status: {debug.postStatus ?? 'N/A'} (Count: {debug.rawPostsCount ?? '?'})</li>
          </ul>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p className="font-bold">Error Detected:</p>
          <p>{error}</p>
        </div>
      )}

      {debug.rawCategoriesCount === 0 && debug.rawPostsCount === 0 && !error && (
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg">
          <p className="font-bold">⚠️ Data is Empty (Likely RLS)</p>
          <p className="text-sm">Connection worked, but Supabase returned 0 rows. This is the classic symptom of <strong>Row Level Security (RLS)</strong> being enabled without a public read policy.</p>
          <p className="mt-2 text-sm font-semibold">Solution: Go to Supabase Dashboard -&gt; Policies -&gt; Enable "SELECT" for public/anon on 'posts' and 'categories' tables.</p>
        </div>
      )}
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Mapped Categories ({categories.length})</h2>
        {categories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <div key={cat.id} className="p-4 border rounded shadow-sm bg-card hover:bg-accent/50 transition-colors">
                <p className="font-medium">{cat.name}</p>
                <p className="text-xs text-muted-foreground">{cat.slug}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic p-4 border rounded bg-slate-50">No categories mapped from Supabase data.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Mapped Posts ({posts.length})</h2>
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="p-4 border rounded shadow-sm bg-card hover:bg-accent/50 transition-colors">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">ID: {post.id} | Slug: {post.slug}</p>
                <p className="line-clamp-2 text-sm">{post.excerpt}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic p-4 border rounded bg-slate-50">No posts mapped from Supabase data.</p>
        )}
      </section>

      <div className="text-xs text-center text-muted-foreground mt-12">
        Supabase Integration Diagnostic Tool v2
      </div>
    </div>
  )
}
