import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
}

// Sample blog data - replace with actual data source
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-cream sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/" className="text-xl font-playfair font-normal tracking-wide text-accent">
            Hải Lĩnh Y Quán
          </Link>
          <nav className="flex gap-8 text-sm font-montserrat text-muted-foreground">
            <Link href="/" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-playfair text-accent mb-6">Thuận tự nhiên</h1>
        <p className="text-2xl font-playfair text-primary mb-8">Dưỡng tâm lành</p>
        <p className="text-lg font-montserrat text-muted-foreground max-w-2xl mx-auto">
          Khám phá sự khôn ngoan của Y Học Cổ Truyền và cách sống cân bằng với tự nhiên để tìm thấy sức khỏe toàn diện.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-border pb-12 last:border-b-0">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-montserrat uppercase tracking-widest text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs font-montserrat text-muted-foreground">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-playfair text-accent hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-lg font-montserrat text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm font-montserrat uppercase tracking-widest text-primary hover:text-accent transition-colors mt-4"
                >
                  Đọc thêm →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-24">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-montserrat text-muted-foreground mb-6">
            Liên hệ:{" "}
            <a href="tel:0979217119" className="text-accent hover:text-primary transition-colors">
              0979 217 119
            </a>{" "}
            (Phone/Zalo)
          </p>
          <p className="font-montserrat text-xs text-muted-foreground">Thôn Khoan Tế, Bát Tràng, Gia Lâm, Hà Nội</p>
          <p className="font-montserrat text-xs text-muted-foreground mt-6">
            © 2025 Hải Lĩnh Y Quán. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
