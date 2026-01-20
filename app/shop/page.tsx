import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookOpen, Star } from "lucide-react"

export default function ShopPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-background">
      
      <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-playfair font-bold text-primary mb-4 uppercase tracking-[0.3em]">
            Học Viện Hải Lĩnh
          </h1>
          <p className="max-w-2xl text-gray-600 font-montserrat text-lg leading-relaxed">
            Nâng cao kiến thức chăm sóc sức khỏe chủ động qua các khóa học chuyên sâu từ Hải Lĩnh Y Quán.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2].map((i) => (
            <div key={i} className="group border border-border bg-white overflow-hidden flex flex-col h-full hover:shadow-xl transition-all">
              <div className="h-64 bg-cream flex items-center justify-center relative">
                 <img 
                  src={`/form.jpg`} 
                  alt="Course Thumbnail" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-[10px] uppercase font-montserrat tracking-widest font-bold">
                  Sắp mở
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">(Chưa có đánh giá)</span>
                </div>
                
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
                  {i === 1 ? "Dưỡng Sinh Thuận Tự Nhiên Cơ Bản" : "Kiến Thức Thảo Mộc Trong Đời Sống"}
                </h2>
                
                <p className="text-gray-600 font-montserrat text-sm leading-relaxed mb-6 flex-grow">
                  {i === 1 
                    ? "Tìm hiểu về các phương pháp dưỡng sinh đơn giản để duy trì sức khỏe trong cuộc sống hiện đại thông qua ăn uống và vận động."
                    : "Khám phá thế giới thảo mộc quanh ta và cách ứng dụng chúng một cách an toàn, hiệu quả để bảo vệ gia đình."}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <span className="text-xl font-montserrat font-bold text-primary">Liên hệ</span>
                  <button className="bg-black text-white px-6 py-3 text-[11px] font-montserrat font-bold tracking-[0.2em] uppercase hover:bg-black/80 transition-all">
                    Đăng ký tư vấn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
