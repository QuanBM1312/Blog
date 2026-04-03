'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TrietLyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 px-6 bg-[#F2EDE3] border-b border-primary/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h4 className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-primary/50">
              TRIẾT LÝ HẢI LĨNH
            </h4>
            <h1 className="font-playfair text-4xl md:text-6xl font-normal text-primary">
              Triết Lý Hải Lĩnh
            </h1>
          </div>
        </section>

        {/* ─── Content ─── */}
        <section className="max-w-4xl mx-auto px-6 py-20 space-y-20">

          {/* Chapter 1: Lý tưởng */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent flex-shrink-0"></div>
              <h2 className="font-playfair text-2xl md:text-3xl text-primary">
                Lý Tưởng Của Hải Lĩnh
              </h2>
            </div>
            <div className="space-y-5 font-montserrat text-[14px] leading-[1.9] text-gray-700">
              <p>
                Chúng tôi tin rằng, hiểu đúng về cơ thể là bước đầu tiên để sống khỏe. Mỗi lời khuyên hay liệu trình tại đây đều chứa đựng sự tận tâm, giúp bạn bồi bổ Thân - Tâm và tìm thấy sự thư thái mỗi ngày.
              </p>
              <p>
                Mỗi tách trà, mỗi bài thuốc, mỗi lời tư vấn đều xuất phát từ triết lý nhất quán: <em className="text-primary font-semibold">"Phòng bệnh hơn chữa bệnh, thuận tự nhiên là điều trị."</em>
              </p>
              <p>
                Hải Lĩnh Y Quán không chỉ chia sẻ kiến thức — mà còn đồng hành cùng bạn trên con đường dưỡng sinh, giúp bạn nhận ra rằng sức khỏe chân chính đến từ sự cân bằng giữa Thân - Tâm - Khí.
              </p>
            </div>
          </div>

          {/* Chapter 2: Ba trụ cột */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent flex-shrink-0"></div>
              <h2 className="font-playfair text-2xl md:text-3xl text-primary">
                Ba Trụ Cột Hải Lĩnh
              </h2>
            </div>

            <div className="space-y-0 border border-border">
              {/* Pillar 1 */}
              <div className="p-8 border-b border-border">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair text-xl text-primary">01</span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-playfair text-xl text-primary italic">Dưỡng Sinh</h3>
                    <p className="font-montserrat text-[13px] text-gray-600 leading-relaxed">
                      Chúng tôi tin rằng phòng bệnh hơn chữa bệnh. Qua kiến thức Y học Cổ Truyền, chúng tôi hướng dẫn bạn cách sống thuận tự nhiên, cân bằng âm dương, và duy trì sức khỏe bền vững.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 border-b border-border">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair text-xl text-primary">02</span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-playfair text-xl text-primary italic">Thảo Mộc</h3>
                    <p className="font-montserrat text-[13px] text-gray-600 leading-relaxed">
                      Tinh hoa từ cây cỏ thiên nhiên là nguyên liệu cốt lõi. Chúng tôi tuyển chọn và nghiên cứu các bài thuốc cổ truyền, kết hợp với tri thức Đông y để mang đến giải pháp an toàn, lành tính.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair text-xl text-primary">03</span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-playfair text-xl text-primary italic">Kết Nối</h3>
                    <p className="font-montserrat text-[13px] text-gray-600 leading-relaxed">
                      Hải Lĩnh Y Quán là nơi gặp gỡ của những người cùng chung niềm đam mê dưỡng sinh. Qua podcast "Bên ấm trà", các bài viết chuyên sâu, và cộng đồng thực hành, chúng tôi kết nối những tâm hồn yêu thiên nhiên.
                    </p>
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
