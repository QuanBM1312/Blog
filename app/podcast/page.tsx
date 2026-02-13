import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MOCK_POSTS, MOCK_CATEGORIES } from "@/lib/mock-data"
import Link from "next/link"

export default function PodcastPage() {
  // Get subcategories of "Y Lý – Y Học Cổ Truyền" category (cat-1)
  const ylCategory = MOCK_CATEGORIES.find(cat => cat.slug === "y-ly-y-hoc-co-truyen")
  const subcategories = MOCK_CATEGORIES.filter(cat => cat.parent_id === ylCategory?.id)

  return (
    <>
    <Header />
    <main className="min-h-screen bg-background">
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-primary mb-20 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center border-b border-primary/10 pb-10 break-words px-2">
          Y Lý Y Học Cổ Truyền
        </h1>

        <div className="space-y-16">
          {subcategories.map((child) => {
            const childPosts = MOCK_POSTS.filter(p => p.category_id === child.id);
            if (childPosts.length === 0) return null;

            return (
              <div key={child.id} className="space-y-8">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl sm:text-2xl font-playfair text-primary italic border-l-4 border-primary pl-4 sm:pl-6 break-words min-w-0 flex-shrink">
                    {child.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {childPosts.map((post) => (
                    <Link 
                      key={post.id} 
                      href={`/podcast/${post.slug}`}
                      className="group border border-border bg-white hover:shadow-xl transition-all flex flex-col h-full overflow-hidden"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.featured_image_url} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-[10px] font-montserrat text-gray-400 mb-3">
                          {new Date(post.published_at).toLocaleDateString("vi-VN")}
                        </span>
                        
                        <h4 className="text-xl font-playfair font-normal text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        
                        <p className="text-gray-600 font-montserrat text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <span className="text-[10px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase border-b border-primary/20 w-fit pb-1 group-hover:border-accent group-hover:text-accent group-hover:border-accent/50 transition-all">
                          Đọc chi tiết
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
    </>
  )
}
