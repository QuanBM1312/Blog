'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function VeChungToiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 px-6 bg-[#F2EDE3] border-b border-primary/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h4 className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-primary/50">
              VỀ HẢI LĨNH Y QUÁN
            </h4>
            <h1 className="font-playfair text-4xl md:text-6xl font-normal text-primary">
              Câu Chuyện Thương Hiệu
            </h1>
          </div>
        </section>

        {/* ─── Content ─── */}
        <section className="max-w-4xl mx-auto px-6 py-20 space-y-20">

          {/* Chapter 1: Giới thiệu */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent flex-shrink-0"></div>
              <h2 className="font-playfair text-2xl md:text-3xl text-primary">
                Câu Chuyện Khởi Nguồn
              </h2>
            </div>
            <div className="space-y-5 font-montserrat text-[14px] leading-[1.9] text-gray-700">
              <p>
                Cảm ơn bạn đã ghé thăm Hải Lĩnh Y Quán. Đây không chỉ là một không gian chăm sóc sức khỏe, mà là tâm huyết của những người đam mê sưu tầm và nghiên cứu những giá trị tinh túy của Y học Cổ truyền.
              </p>
              <p>
                Hải Lĩnh Y Quán ra đời như một "trạm dừng chân an yên" — nơi bạn tìm lại sự cân bằng cho cơ thể và lắng nghe nhịp điệu của chính mình sau những bộn bề cuộc sống.
              </p>
            </div>
          </div>

          {/* Chapter 2: Founder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8">
            <div className="aspect-[4/5] overflow-hidden border border-border shadow-lg">
              <img
                src="/infor.png"
                alt="Chủ nhân Hải Lĩnh Y Quán"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-accent flex-shrink-0"></div>
                <h3 className="font-playfair text-xl text-primary italic">
                  Người sáng lập
                </h3>
              </div>
              <div className="space-y-4 font-montserrat text-[14px] leading-[1.9] text-gray-700">
                <p>
                  Xuất phát từ niềm say mê với cây cỏ và triết lý dưỡng sinh phương Đông, Hải Lĩnh Y Quán được phát triển với mong muốn gìn giữ và chia sẻ những phương pháp chăm sóc sức khỏe thuận tự nhiên.
                </p>
                <p>
                  Tại đây, chúng tôi tập trung vào Tư vấn lối sống, Liệu pháp Dưỡng sinh và sử dụng Thảo mộc lành tính để hỗ trợ nâng cao thể trạng.
                </p>
                <p>
                  Chúng tôi tin rằng, hiểu đúng về cơ thể là bước đầu tiên để sống khỏe. Mỗi lời khuyên hay liệu trình tại đây đều chứa đựng sự tận tâm, giúp bạn bồi bổ Thân - Tâm và tìm thấy sự thư thái mỗi ngày.
                </p>
              </div>
              <div className="flex gap-4 pt-2">
                <Link href="#" className="p-2 border border-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="p-2 border border-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="p-2 border border-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                  <Youtube size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Chapter 3: Địa chỉ */}
          <div className="space-y-8 border-t border-primary/10 pt-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent flex-shrink-0"></div>
              <h2 className="font-playfair text-2xl md:text-3xl text-primary">
                Ghé Thăm Y Quán
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-montserrat text-sm font-bold text-primary mb-1">Địa chỉ</p>
                    <p className="font-montserrat text-[13px] text-gray-600 leading-relaxed">
                      Số 3 Ngách 262/65/22 Thôn Khoan Tế, Xã Bát Tràng, Gia Lâm, Hà Nội
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-montserrat text-sm font-bold text-primary mb-1">Hotline</p>
                    <p className="font-montserrat text-[13px] text-gray-600">0979217119</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-montserrat text-sm font-bold text-primary mb-1">Website</p>
                    <p className="font-montserrat text-[13px] text-gray-600">hailinhyquan.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-montserrat text-sm font-bold text-primary mb-1">Podcast</p>
                    <p className="font-montserrat text-[13px] text-gray-600">Bên ấm trà — Y học Cổ Truyền</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="py-12 border-t border-b border-primary/10 text-center space-y-6">
            <p className="font-playfair text-xl italic text-primary max-w-xl mx-auto leading-relaxed">
              "Hãy cùng Hải Lĩnh Y Quán bắt đầu hành trình lắng nghe cơ thể — vì một cuộc sống khỏe mạnh, cân bằng và thư thái."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="px-8 py-3 bg-primary text-primary-foreground font-montserrat font-bold tracking-[0.15em] uppercase hover:bg-accent transition-all text-sm"
              >
                Đọc bài viết
              </Link>
              <Link
                href="/y-ly-yhct"
                className="px-8 py-3 border border-primary text-primary font-montserrat font-bold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all text-sm"
              >
                Y Lý Y Học Cổ Truyền
              </Link>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
