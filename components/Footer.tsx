import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Globe, Music } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-[#800000] text-white py-8 px-24">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        {/* Column 1: Brand & Contact */}
        <div className="space-y-6">
          <h2 className="text-2xl font-montserrat font-bold tracking-wider">QUỐC Y ĐƯỜNG</h2>
          <div className="space-y-4 text-sm font-montserrat leading-relaxed">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0" />
              <p>Số 3 Ngách 262/65/22 Thôn Khoan Tế, Xã Bát Tràng, Gia Lâm, Hà Nội</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <p>Hotline : 0979217119</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={18} className="shrink-0" />
              <p>Website : Hailinhyquan.com</p>
            </div>
          </div>
        </div>

        {/* Column 2: Support Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-montserrat font-bold tracking-wider">THÔNG TIN HỖ TRỢ</h2>
          <div className="space-y-4 text-sm font-montserrat leading-relaxed">
            <p>Hotline 24/7: 0979217119</p>
          </div>
        </div>

        {/* Column 3: Social & Map */}
        <div className="space-y-6">
          <h2 className="text-2xl font-montserrat font-bold tracking-wider">THÔNG TIN LIÊN HỆ</h2>
          <div className="flex gap-4 mb-6">
            <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#800000] transition-all">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#800000] transition-all">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#800000] transition-all">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#800000] transition-all">
              <Music size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
