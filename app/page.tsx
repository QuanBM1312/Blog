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
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Introduction Section with Hero Illustration Background */}
      <section id="banner" className="relative overflow-hidden bg-background min-h-screen flex flex-col justify-end" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Hero Background Illustration */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/Hero-Section.jpg')",
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </section>

      <section id="intro" className="relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: "url('/Intro-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="max-w-screen mx-auto flex flex-row items-center gap-8 md:gap-16 relative z-10 px-6">
          {/* Left: Circular Image */}
          <div className="w-1/2 flex justify-center">
              <img 
                src="/infor.png" 
                alt="Chủ nhân Hải Lĩnh Y Quán" 
                className="w-[500px] h-[500px] max-md:w-[100px] max-md:h-[100px] object-cover rounded-full"
              />
          </div>

          {/* Right: Text Content */}
          <div className="w-1/2 flex flex-col relative">
            {/* Social Icons - Top Right */}
            <div className="absolute -top-10 right-0 flex gap-4 text-primary bg-cream/80 p-2 rounded-lg">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Radio size={20} /></Link>
            </div>

            <div className="space-y-3 text-[#064E3B]">
              <h2 className="text-3xl max-md:text-sm font-playfair font-bold text-left mb-4">Xin Chào!</h2>
              
              <div className="space-y-2 font-semibold font-montserrat text-[14px] max-md:text-[5px] leading-relaxed text-#064E3B">
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

      <section id="newsletter" className="bg-background overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Info */}
          <div className="w-full md:w-1/2 text-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-montserrat font-medium tracking-[0.2em] text-primary/70 uppercase">Bản tin</h3>
              <h2 className="text-4xl md:text-5xl font-playfair font-normal text-primary tracking-wide">Y HỌC CỔ TRUYỀN</h2>
            </div>
            
            <div className="w-1/2 h-[1px] bg-black mx-auto"></div>
            
            <div className="space-y-4">
              <p className="leading-relaxed text-lg font-montserrat text-primary">
                Cùng Hải Lĩnh Y Quán lắng nghe cơ thể và phòng bệnh từ gốc. 
                Đăng ký để nhận các bài viết dưỡng sinh chuyên sâu cùng ưu đãi đặc quyền gửi riêng cho bạn.
              </p>
            </div>
          </div>
          {/* Right Side: Signup Card */}
          <div className="w-full md:w-1/2 text-center">
            <div className="bg-white border border-black shadow-sm">
              <div className="mb-10 flex justify-center">
                <img 
                  src="/form.webp" 
                  alt="Newsletter Illustration" 
                  className="w-[150%] h-auto opacity-90"
                />
              </div>
              
              <div className="space-y-6 p-6 ">
                <p className="font-montserrat text-[15px] leading-relaxed text-black text-center">
                  Hãy đăng ký email của bạn để nhận bản tin miễn phí 
                  <br />
                  <strong className="text-black"> "Y HỌC CỔ TRUYỀN" </strong> 
                  ngay tuần này:
                </p>
                
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Nhập email của bạn" 
                    className="w-full px-4 py-4 border border-border focus:outline-none focus:border-primary transition-colors font-montserrat"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-4 font-montserrat font-bold tracking-[0.2em] transition-transform active:scale-[0.98]"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
