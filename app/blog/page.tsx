import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MOCK_POSTS, MOCK_CATEGORIES, Post, Category } from "@/lib/mock-data"

export default function BlogIndex() {
  const parentCategories = MOCK_CATEGORIES.filter(c => !c.parent_id);

  return (
    <>
    <Header />
    <main className="min-h-screen bg-background">
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-normal text-primary mb-20 uppercase tracking-[0.2em] text-center border-b border-primary/10 pb-10">
          Chuyên Mục Sức Khỏe
        </h1>

        <div className="space-y-24">
          {parentCategories.map((parent) => {
            const children = MOCK_CATEGORIES.filter(c => c.parent_id === parent.id);
            
            return (
              <div key={parent.id} className="space-y-12">
                {/* Parent Category Header */}
                <div className="flex items-center gap-6">
                  <h2 className="text-3xl font-playfair text-primary uppercase tracking-widest whitespace-nowrap">
                    {parent.name}
                  </h2>
                  <div className="h-[1px] bg-primary/20 w-full"></div>
                </div>

                {/* Subcategories Sections */}
                <div className="grid grid-cols-1 gap-16">
                  {children.map((child) => {
                    const childPosts = MOCK_POSTS.filter(p => p.category_id === child.id);
                    if (childPosts.length === 0) return null;

                    return (
                      <div key={child.id} className="space-y-8">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-playfair text-accent italic border-l-4 border-accent pl-4">
                            {child.name}
                          </h3>
                          <Link href={`/category/${child.slug}`} className="text-[10px] font-montserrat uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                            Xem tất cả &rarr;
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {childPosts.map((post) => (
                            <Link 
                              key={post.id} 
                              href={`/blog/${post.slug}`}
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
