import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Globe, Music } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        {/* Column 1: Brand & Contact */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group mb-4">
            <img 
              src="/logo.png" 
              alt="Hải Lĩnh Y Quán Logo" 
              className="h-20 w-auto object-contain"
            />
            <span className="text-xl md:text-[24px] font-playfair font-normal tracking-[0.15em] text-primary-foreground uppercase whitespace-nowrap translate-y-1">
              Hải Lĩnh Y Quán
            </span>
          </Link>
          <div className="space-y-2 text-[13px] font-montserrat leading-relaxed text-primary-foreground/70">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-accent" />
              <p>Số 3 Ngách 262/65/22 Thôn Khoan Tế, Xã Bát Tràng, Gia Lâm, Hà Nội</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-accent" />
              <p>Hotline: 0979217119</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={16} className="shrink-0 text-accent" />
              <p>Website: hailinhyquan.com</p>
            </div>
          </div>
        </div>

        {/* Columns 2 & 3: Support Info + Social (grouped on tablet, separate on desktop) */}
        <div className="space-y-8 md:col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Column 2: Chuyên mục */}
          <div className="space-y-4">
            <h2 className="text-lg font-playfair font-normal tracking-widest uppercase border-b border-accent/20 pb-2 inline-block">
              Chuyên Mục
            </h2>
            <div className="space-y-2 text-[13px] font-montserrat leading-relaxed text-primary-foreground/70">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <Link href="/blog" className="hover:text-accent transition-colors">Kiến thức Dưỡng sinh</Link>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <Link href="/y-ly-yhct" className="hover:text-accent transition-colors">Y Lý Y Học Cổ Truyền</Link>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <Link href="/ve-chung-toi" className="hover:text-accent transition-colors">Về chúng tôi</Link>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <Link href="/shop" className="hover:text-accent transition-colors">Khóa học</Link>
              </p>
            </div>
          </div>

          {/* Column 3: Hỗ trợ & Kết nối */}
          <div className="space-y-4">
            <h2 className="text-lg font-playfair font-normal tracking-widest uppercase border-b border-accent/20 pb-2 inline-block">
              Hỗ Trợ & Kết Nối
            </h2>
            <div className="space-y-2 text-[13px] font-montserrat leading-relaxed text-primary-foreground/70">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Hotline 24/7: 0979217119
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Tư vấn dưỡng sinh chuyên sâu
              </p>
            </div>
            <div className="pt-4">
              <div className="flex gap-3">
                <Link href="#" className="p-2 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="p-2 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="p-2 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                  <Youtube size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
