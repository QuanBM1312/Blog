"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Radio } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Modal } from "@/components/Modal"
import { useState } from "react"

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

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: 'success',
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScK-saWEluIV-sEaZ7YSr9m9Yh_6nvyNn4IjPOF4iVIxg_4yg/formResponse";
    const formDataUrl = new URLSearchParams();

    formDataUrl.append("entry.524928883", formData.email); // Email

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataUrl.toString(),
      });
      setFormData({
        email: "",
      });
      setModalState({
        isOpen: true,
        title: "Đăng ký thành công!",
        message: "Cảm ơn bạn đã đăng ký nhận bản tin của Hải Lĩnh Y Quán. Chúng tôi sẽ gửi những thông tin hữu ích đến bạn sớm nhất.",
        type: 'success',
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalState({
        isOpen: true,
        title: "Có lỗi xảy ra",
        message: "Rất tiếc, quá trình đăng ký đã gặp sự cố. Vui lòng kiểm tra lại kết nối và thử lại.",
        type: 'error',
      });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="banner" className="relative w-full bg-[#f2ede3] pt-[76px] xl:pt-[92px]">
          <div className="w-full h-[40vh] sm:h-[60vh] xl:h-[80vh] overflow-hidden flex items-center justify-center">
            <img
              src="/Hero-Section.jpg"
              alt="Hero Section"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </section>

        <section id="intro" className="relative max-xl:py-12 py-20 overflow-hidden flex items-center" style={{ backgroundColor: '#F2EDE3' }}>
          {/* Background Image with Gradient Opacity */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "url('/Intro-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.15,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
            }}
          />

          <div className="max-w-screen mx-auto flex flex-col xl:flex-row items-center gap-6 xl:gap-16 relative z-10 px-6 w-full">
            {/* Mobile: Social Icons at Top */}
            <div className="xl:hidden flex gap-6 text-primary py-4 justify-center w-full">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram size={24} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Youtube size={24} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Radio size={24} /></Link>
            </div>

            {/* Circular Image */}
            <div className="flex justify-center xl:w-1/2">
              <img
                src="/infor.png"
                alt="Chủ nhân Hải Lĩnh Y Quán"
                className="w-[280px] h-[280px] xl:w-[500px] xl:h-[500px] object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>

            {/* Text Content */}
            <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start relative mt-4 xl:mt-0">
              {/* Desktop: Social Icons - Top Right */}
              <div className="hidden xl:flex absolute -top-10 right-0 gap-5 text-primary">
                <Link href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></Link>
                <Link href="#" className="hover:text-accent transition-colors"><Instagram size={24} /></Link>
                <Link href="#" className="hover:text-accent transition-colors"><Youtube size={24} /></Link>
                <Link href="#" className="hover:text-accent transition-colors"><Radio size={24} /></Link>
              </div>

              <div className="space-y-3 text-[#064E3B] text-left">
                <h2 className="text-xl xl:text-3xl text-center font-playfair font-bold mb-4">Xin Chào!</h2>

                <div className="space-y-2 font-semibold font-montserrat text-[12px] xl:text-[14px] leading-relaxed text-#064E3B">
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

        <section id="newsletter" className="bg-background py-10 xl:py-32 px-6 overflow-hidden min-h-[calc(100vh-76px)] xl:min-h-[calc(100vh-92px)] flex items-center">
          <div className="max-w-screen mx-auto flex flex-col xl:flex-row items-center gap-20">
            {/* Illustration Side */}
            <div className="w-full xl:w-2/5 flex justify-center order-1 md:order-2">
              <div className="relative group">
                <img
                  src="/form.jpg"
                  alt="Y Học Cổ Truyền"
                  className="w-full max-w-full h-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute -inset-4 border border-primary/5 rounded-full -z-10 animate-pulse"></div>
                <div className="absolute -inset-10 border border-primary/5 rounded-full -z-10 animate-pulse delay-700"></div>
              </div>
            </div>
            {/* Content Side */}
            <div className="w-full xl:w-1/2 space-y-12 order-1 items-center md:order-2 max-xl:mx-2">
              <div className="space-y-6">
                <h2 className="text-3xl xl:text-4xl font-playfair font-bold text-primary tracking-wide">
                  BẢN TIN
                </h2>
                <h2 className="text-4xl xl:text-[45px] font-playfair font-bold text-primary tracking-wide">
                  Y HỌC CỔ TRUYỀN
                </h2>
                <p className="font-montserrat text-lg text-primary/70 leading-relaxed">
                  Cùng Hải Lĩnh Y Quán lắng nghe cơ thể và phòng bệnh từ gốc.
                  Đăng ký để nhận các bài viết dưỡng sinh chuyên sâu cùng ưu đãi trị liệu đặc quyền gửi riêng cho bạn.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4 ">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-[#00ACB8] bg-white text-[15px] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#00ACB8]"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground font-montserrat font-bold tracking-[0.2em] transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl whitespace-nowrap"
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
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />
    </>
  )
}
