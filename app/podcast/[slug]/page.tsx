import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MOCK_POSTS, MOCK_CATEGORIES } from "@/lib/mock-data"
import { StandardLayout } from "@/components/blog/StandardLayout"
import { HerbLayout } from "@/components/blog/HerbLayout"
import { StorytellingLayout } from "@/components/blog/StorytellingLayout"
import { SchemaMarkup } from "@/components/blog/SchemaMarkup"

interface PodcastPostProps {
  params: Promise<{ slug: string }>
}

export default async function PodcastPostPage({ params }: PodcastPostProps) {
  // Unwrapping params (Next.js 15+ requirement)
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Tìm bài viết theo slug
  const post = MOCK_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return notFound()
  }

  // Tìm danh mục của bài viết
  const category = MOCK_CATEGORIES.find((c) => c.id === post.category_id)

  if (!category) {
    return notFound()
  }

  // Hàm render layout tương ứng
  const renderLayout = () => {
    switch (category.template_type) {
      case "herb_dictionary":
        return <HerbLayout post={post} category={category} />
      case "storytelling":
        return <StorytellingLayout post={post} category={category} />
      case "standard":
      default:
        return <StandardLayout post={post} category={category} />
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SchemaMarkup post={post} category={category} />
      <Header />
      <div className="flex-grow">
        {renderLayout()}
      </div>
      <Footer />
    </main>
  )
}
