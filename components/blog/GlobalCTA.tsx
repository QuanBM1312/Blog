import Link from 'next/link';

export function GlobalCTA() {
  return (
    <div className="my-16 p-8 md:p-12 border border-primary/20 bg-primary/5 text-center space-y-6">
      <p className="font-playfair text-xl md:text-2xl text-primary leading-relaxed max-w-2xl mx-auto">
        "Mời bạn ghé Hải Lĩnh Y Quán dùng một tách trà ấm và hàn huyên đôi câu chuyện sức khỏe cùng chúng tôi. Cánh cửa nơi đây luôn rộng mở chào đón bạn!"
      </p>
      <Link 
        href="/contact"
        className="inline-block bg-primary text-white font-montserrat font-bold py-4 px-10 uppercase tracking-widest hover:bg-accent transition-colors duration-300"
      >
        Liên Hệ Ngay
      </Link>
    </div>
  );
}
