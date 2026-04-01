import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { getPostBySlug } from "@/lib/services/post-service"
import { getCategoryBySlug } from "@/lib/services/category-service"
import { StandardLayout } from "@/components/blog/StandardLayout"
import { HerbLayout } from "@/components/blog/HerbLayout"
import { StorytellingLayout } from "@/components/blog/StorytellingLayout"
import { SchemaMarkup } from "@/components/blog/SchemaMarkup"

export const dynamic = "force-dynamic"

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  // Unwrapping params (Next.js 15+ requirement)
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Tìm bài viết theo slug
  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const { getCategories } = await import("@/lib/services/category-service")
  const categories = await getCategories()
  const category = categories.find((c) => c.id === post.category_id)

  const defaultCategory = { id: '', name: 'Sức khỏe', slug: 'suc-khoe', template_type: 'standard' as const }
  const cat = category || defaultCategory

  // Hàm render layout tương ứng
  const renderLayout = () => {
    switch (cat.template_type) {
      case "herb_dictionary":
        return <HerbLayout post={post} category={cat} basePath="/suc-khoe" />
      case "storytelling":
        return <StorytellingLayout post={post} category={cat} basePath="/suc-khoe" />
      case "standard":
      default:
        return <StandardLayout post={post} category={cat} basePath="/suc-khoe" />
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SchemaMarkup post={post} category={cat} />
      <Header />
      <div className="flex-grow">
        {renderLayout()}
      </div>
      <Footer />
    </main>
  )
}
