export const dynamic = "force-dynamic"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { getBlogSections, getPostsByCategory } from "@/lib/services/post-service"

export default async function BlogIndex() {
  const sections = await getBlogSections('hai-linh-blog')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-primary mb-20 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center border-b border-primary/10 pb-10 break-words px-2">
            Chuyên Mục Sức Khỏe
          </h1>

          <div className="space-y-16">
            {sections.map(async (section) => {
              if (!section.post_category_slug) return null;

              const posts = await getPostsByCategory(section.post_category_slug);
              if (posts.length === 0 && section.post_format !== 'qna') return null;

              if (section.post_format === 'qna') {
                return (
                  <div key={section.id} className="space-y-8">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-xl sm:text-2xl font-playfair text-primary italic border-l-4 border-primary pl-4 sm:pl-6 break-words min-w-0 flex-shrink">
                        {section.title}
                      </h2>
                    </div>

                    <div className="border border-border">
                      {posts.length === 0 ? (
                        <p className="text-gray-400 font-montserrat text-sm italic p-8 text-center">
                          Nội dung đang được cập nhật.
                        </p>
                      ) : (
                        posts.map((post) => (
                          <div key={post.id} className="border-b border-border last:border-b-0">
                            <details className="group">
                              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors list-none">
                                <h3 className="font-playfair text-lg text-primary italic pr-8">
                                  {post.title}
                                </h3>
                                <span className="flex-shrink-0 text-primary group-open:rotate-180 transition-transform">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                              </summary>
                              <div className="px-6 pb-6 text-gray-600 font-montserrat text-sm leading-relaxed">
                                {post.excerpt && (
                                  <p className="mb-3">{post.excerpt}</p>
                                )}
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="inline-flex items-center gap-2 text-accent hover:text-primary text-xs tracking-widest uppercase transition-colors font-bold"
                                >
                                  Đọc chi tiết
                                  <span className="w-4 h-px bg-current"></span>
                                </Link>
                              </div>
                            </details>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <div key={section.id} className="space-y-8">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl sm:text-2xl font-playfair text-primary italic border-l-4 border-primary pl-4 sm:pl-6 break-words min-w-0 flex-shrink">
                      {section.title}
                    </h2>
                  </div>

                  {posts.length === 0 ? (
                    <p className="text-gray-400 font-montserrat text-sm italic py-12 text-center border border-border">
                      Nội dung đang được cập nhật.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {posts.map((post) => (
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

                            <span className="text-[10px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase border-b border-primary/20 w-fit pb-1 group-hover:border-accent group-hover:text-accent transition-all">
                              Đọc chi tiết
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
