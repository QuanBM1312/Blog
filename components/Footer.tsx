import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Globe, Music } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        {/* Column 1: Brand & Contact */}
        <div className="space-y-8">
          <Link href="/" className="flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-sm border border-primary-foreground/10 shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="Hải Lĩnh Y Quán Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-playfair font-bold tracking-[0.2em] text-accent uppercase">
                  Hải Lĩnh
                </span>
                <span className="block text-sm md:text-base font-montserrat tracking-[0.4em] text-accent/80 uppercase">
                  Y Quán
                </span>
              </div>
            </div>
          </Link>
          <div className="space-y-5 text-[14px] font-montserrat leading-relaxed text-primary-foreground/70">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="mt-1 shrink-0 text-accent" />
              <p>Số 3 Ngách 262/65/22 Thôn Khoan Tế, Xã Bát Tràng, Gia Lâm, Hà Nội</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={20} className="shrink-0 text-accent" />
              <p>Hotline: 0979217119</p>
            </div>
            <div className="flex items-center gap-4">
              <Globe size={20} className="shrink-0 text-accent" />
              <p>Website: hailinhyquan.com</p>
            </div>
          </div>
        </div>

        {/* Column 2: Support Info */}
        <div className="space-y-8">
          <h2 className="text-xl font-playfair font-bold tracking-widest uppercase border-b border-accent/20 pb-4 inline-block">
            Thông Tin Hỗ Trợ
          </h2>
          <div className="space-y-4 text-[14px] font-montserrat leading-relaxed text-primary-foreground/70">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              Hotline 24/7: 0979217119
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              Tư vấn dưỡng sinh chuyên sâu
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              Chăm sóc khách hàng tận tâm
            </p>
          </div>
        </div>

        {/* Column 3: Social & Connect */}
        <div className="space-y-8">
          <h2 className="text-xl font-playfair font-bold tracking-widest uppercase border-b border-accent/20 pb-4 inline-block">
            Kết Nối Với Chúng Tôi
          </h2>
          <div className="flex gap-5">
            <Link href="#" className="p-3 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="p-3 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="p-3 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
