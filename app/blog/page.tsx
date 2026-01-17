import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cân Bằng Âm Dương trong Cuộc Sống Hiện Đại",
    excerpt: "Khám phá cách duy trì cân bằng âm dương giữa nhịp sống bận rộn của thời đại ngày nay.",
    date: "15 Tháng 1, 2025",
    category: "Triết Học TCM",
    slug: "can-bang-am-duong",
  },
  {
    id: "2",
    title: "Năm Phần Tử và Mùa Của Bạn",
    excerpt: "Tìm hiểu cách năm phần tử liên kết với các mùa và cách chúng ảnh hưởng đến sức khỏe của bạn.",
    date: "10 Tháng 1, 2025",
    category: "Năm Phần Tử",
    slug: "nam-phan-tu-va-mua",
  },
  {
    id: "3",
    title: "Sức Mạnh Chữa Lành của Các Loại Thảo Dược",
    excerpt: "Khám phá các loại thảo dược truyền thống và những lợi ích tự nhiên của chúng đối với sức khỏe.",
    date: "5 Tháng 1, 2025",
    category: "Thảo Dược",
    slug: "thao-duoc-chua-lanh",
  },
]

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-playfair font-normal text-primary mb-12 uppercase tracking-widest text-center">
          Blog Sức Khỏe
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group border border-border bg-white hover:shadow-lg transition-all p-8 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-montserrat uppercase tracking-[0.2em] text-accent font-bold">
                  {post.category}
                </span>
                <span className="text-[10px] font-montserrat text-gray-400">
                  {post.date}
                </span>
              </div>
              
              <h2 className="text-2xl font-playfair font-normal text-primary mb-4 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 font-montserrat text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              
              <span className="text-[11px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase border-b border-primary w-fit pb-1 group-hover:border-accent group-hover:text-accent transition-all">
                Đọc thêm
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
