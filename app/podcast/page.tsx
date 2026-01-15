import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Mic, Play } from "lucide-react"

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Mic className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-playfair font-bold text-primary mb-4 uppercase tracking-[0.3em]">
            Y Lý Y Học Cổ Truyền
          </h1>
          <p className="max-w-2xl text-gray-600 font-montserrat text-lg leading-relaxed">
            Nơi chia sẻ những kiến thức tinh túy nhất về Đông y qua những cuộc trò chuyện gần gũi và sâu sắc. Lắng nghe để hiểu về cơ thể và tâm trí mình hơn mỗi ngày.
          </p>
        </div>

        {/* Coming Soon / Placeholder */}
        <div className="bg-cream p-12 text-center border border-border">
          <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Podcast Sắp Ra Mắt</h2>
          <p className="text-gray-600 font-montserrat mb-8 max-w-md mx-auto">
            Chúng tôi đang chuẩn bị những nội dung chất lượng nhất để gửi đến bạn. Hãy đăng ký bản tin để nhận thông báo ngay khi tập đầu tiên lên sóng.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full md:w-[350px] border border-border bg-white h-48 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                <Play className="text-primary/20 group-hover:text-primary/100 transition-all scale-150" size={48} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/20 w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
