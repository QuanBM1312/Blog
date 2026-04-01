import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { getPostBySlug } from "@/lib/services/post-service"
import { StandardLayout } from "@/components/blog/StandardLayout"
import { HerbLayout } from "@/components/blog/HerbLayout"
import { StorytellingLayout } from "@/components/blog/StorytellingLayout"
import { SchemaMarkup } from "@/components/blog/SchemaMarkup"

interface PodcastPostProps {
  params: Promise<{ slug: string }>
}

export default async function PodcastPostPage({ params }: PodcastPostProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const { getCategories } = await import("@/lib/services/category-service")
  const categories = await getCategories()
  const category = categories.find((c) => c.id === post.category_id)

  const defaultCategory = { id: '', name: 'Y lý YHCT', slug: 'y-ly-yhct', template_type: 'standard' as const }
  const cat = category || defaultCategory

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
