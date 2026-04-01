import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { getPostBySlug } from "@/lib/services/post-service"
import { getCategoryBySlug } from "@/lib/services/category-service"
import { StandardLayout } from "@/components/blog/StandardLayout"
import { HerbLayout } from "@/components/blog/HerbLayout"
import { StorytellingLayout } from "@/components/blog/StorytellingLayout"
import { SchemaMarkup } from "@/components/blog/SchemaMarkup"

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

  // Tìm danh mục của bài viết
  // If the service doesn't let us search by ID easily, we can use getCategories and find
  // or add a getCategoryById to category-service.
  // Given category_id is in post, and we need the slug to use getCategoryBySlug, 
  // let's assume getPostBySlug might need to return category info or we fetch all categories.
  // Actually, I'll just use the ID from post if I can.
  // Wait, I'll check category-service again. It has getCategoryBySlug.
  // I'll add getCategoryById to category-service.
  const { getCategories } = await import("@/lib/services/category-service")
  const categories = await getCategories()
  const category = categories.find((c) => c.id === post.category_id)

  const defaultCategory = { id: '', name: 'Sức khỏe', slug: 'suc-khoe', template_type: 'standard' as const }
  const cat = category || defaultCategory

  // Hàm render layout tương ứng
  const renderLayout = () => {
    switch (cat.template_type) {
      case "herb_dictionary":
        return <HerbLayout post={post} category={cat} />
      case "storytelling":
        return <StorytellingLayout post={post} category={cat} />
      case "standard":
      default:
        return <StandardLayout post={post} category={cat} />
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
