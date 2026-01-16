import Link from "next/link"
import { Facebook, Instagram, Youtube, Radio } from "lucide-react"
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
      <Header />

      {/* Introduction Section with Hero Illustration Background */}
      <section id="intro" className="relative pb-5 overflow-hidden bg-cream min-h-[100vw] flex flex-col justify-end">
        {/* Hero Background Illustration */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/Hero-Section.png')",
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10 px-6">
          {/* Left: Circular Image */}
          <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="/infor.png" 
                alt="Chủ nhân Hải Lĩnh Y Quán" 
                className="w-[500px] h-[500px] object-cover rounded-full"
              />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col  relative">
            {/* Social Icons - Top Right */}
            <div className="absolute -top-10 right-0 flex gap-4 text-primary bg-cream/80 p-2 rounded-lg">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Radio size={20} /></Link>
            </div>

            <div className="space-y-4 text-dark pb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">Xin Chào!</h2>
              
              <div className="space-y-3 font-semibold text-[15px] leading-relaxed text-black">
                <p>
                  Cảm ơn bạn đã ghé thăm Hải Lĩnh Y Quán. 
                  Đây không chỉ là một không gian chăm sóc sức khỏe, mà là tâm huyết của những người đam mê sưu tầm và nghiên cứu những giá trị tinh túy của Y học Cổ truyền.
                </p>
                <p>
                  Hải Lĩnh Y Quán ra đời như một "trạm dừng chân an yên"—nơi bạn tìm lại sự cân bằng cho cơ thể và lắng nghe nhịp điệu của chính mình sau những bộn bề cuộc sống.
                </p>
                <p>
                  Xuất phát từ niềm say mê với cây cỏ và triết lý dưỡng sinh phương Đông, Hải Lĩnh Y Quán được phát triển với mong muốn gìn giữ và chia sẻ những phương pháp chăm sóc sức khỏe thuận tự nhiên. 
                  Tại đây, chúng tôi tập trung vào Tư vấn lối sống, Liệu pháp Dưỡng sinh và sử dụng Thảo mộc lành tính để hỗ trợ nâng cao thể trạng.
                </p>
                <p>
                  Chúng tôi tin rằng, hiểu đúng về cơ thể là bước đầu tiên để sống khỏe. 
                  Mỗi lời khuyên hay liệu trình tại đây đều chứa đựng sự tận tâm, giúp bạn bồi bổ Thân - Tâm và tìm thấy sự thư thái mỗi ngày.
                </p>
                <p>
                  🌱Mời bạn kết nối: Đừng ngần ngại nhắn tin cho chúng tôi để bắt đầu hành trình lắng nghe cơ thể. Hoặc đơn giản là ghé lại Y Quán, dùng một tách trà ấm và hàn huyên đôi câu chuyện sức khỏe cùng chúng tôi. Cánh cửa nơi đây luôn rộng mở chào đón bạn!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Services Section - Modern Zen Grid */}
      {/* <section id="blog" className="py-24 px-6 bg-cream/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary tracking-widest uppercase">
              BÀI VIẾT & DƯỠNG SINH
            </h2>
            <div className="w-20 h-[2px] bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-primary/5 flex flex-col h-full"
              >
                <div className="p-10 space-y-6 flex flex-col h-full">
                  <div className="space-y-4 flex-grow">
                    <span className="text-[10px] font-montserrat font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-primary/60 text-sm font-montserrat leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-primary/5 flex justify-between items-center mt-auto">
                    <span className="text-[11px] font-montserrat text-primary/40 uppercase tracking-wider">
                      {post.date}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-[12px] font-montserrat font-bold text-primary hover:text-accent transition-colors flex items-center gap-2 group/link"
                    >
                      XEM THÊM 
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section - Refactored Modern Zen Layout */}
      <section id="newsletter" className="bg-background py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* Illustration Side */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative group">
              <img 
                src="/form.webp" 
                alt="Y Học Cổ Truyền" 
                className="w-full max-w-full h-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute -inset-4 border border-primary/5 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -inset-10 border border-primary/5 rounded-full -z-10 animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-12 order-1 md:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary tracking-wide">
                Y HỌC CỔ TRUYỀN
              </h2>
              <p className="font-montserrat text-lg text-primary/70 leading-relaxed max-w-lg">
                Cùng Hải Lĩnh Y Quán lắng nghe cơ thể và phòng bệnh từ gốc. 
                Đăng ký để nhận các bài viết dưỡng sinh chuyên sâu cùng ưu đãi trị liệu đặc quyền gửi riêng cho bạn.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-grow px-6 py-4 bg-white border border-border focus:outline-none focus:border-primary transition-all font-montserrat text-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-10 py-4 font-montserrat font-bold tracking-[0.2em] transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
