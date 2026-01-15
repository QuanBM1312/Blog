import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

// Sample blog data - replace with actual database or CMS
const blogPosts: Record<string, any> = {
  "can-bang-am-duong": {
    title: "Cân Bằng Âm Dương trong Cuộc Sống Hiện Đại",
    date: "15 Tháng 1, 2025",
    category: "Triết Học TCM",
    content: `
      Âm và Dương là hai lực cơ bản trong vũ trụ, và sự cân bằng giữa chúng là chìa khóa để đạt được sức khỏe toàn diện.
      
      Trong cuộc sống hiện đại, chúng ta thường xuyên rơi vào tình trạng mất cân bằng. Quá nhiều công việc, áp lực, và ít ngủ 
      là dấu hiệu của sự thừa Yang. Ngược lại, thiếu hoạt động, căng thẳng tinh thần, và chế độ ăn uống thiếu dinh dưỡng dẫn đến 
      tình trạng Âm không đủ.
      
      Để duy trì cân bằng, hãy:
      - Ngủ đủ 7-8 tiếng mỗi đêm
      - Ăn cân bằng giữa thực phẩm ấm và lạnh
      - Tập luyện vừa phải như Tai Chi hoặc Yoga
      - Thư giãn tâm trí qua thiền định
      
      Hãy lắng nghe cơ thể bạn và tìm sự cân bằng trong từng khía cạnh của cuộc sống.
    `,
  },
  "nam-phan-tu-va-mua": {
    title: "Năm Phần Tử và Mùa Của Bạn",
    date: "10 Tháng 1, 2025",
    category: "Năm Phần Tử",
    content: `
      Năm Phần Tử – Gỗ, Lửa, Đất, Kim, Nước – đại diện cho năm mùa và năm cơ quan chính của cơ thể.
      
      Mỗi mùa có những đặc điểm riêng và yêu cầu về chăm sóc sức khỏe khác nhau:
      
      Mùa Xuân (Gỗ): Liên kết với gan và mật. Thời gian để bắt đầu lại, vận động nhẹ nhàng, ăn rau lá xanh.
      
      Mùa Hè (Lửa): Liên kết với tim và ruột non. Thời gian để phát triển sự khỏe mạnh, ăn thực phẩm mát dịu.
      
      Mùa Thu (Kim): Liên kết với phổi và ruột già. Thời gian để tĩnh tâm, ăn thực phẩm trắng như hành, tỏi.
      
      Mùa Đông (Nước): Liên kết với thận và bàng quang. Thời gian để nghỉ ngơi, uống nước ấm, ăn thực phẩm đen.
    `,
  },
  "thao-duoc-chua-lanh": {
    title: "Sức Mạnh Chữa Lành của Các Loại Thảo Dược",
    date: "5 Tháng 1, 2025",
    category: "Thảo Dược",
    content: `
      Các loại thảo dược truyền thống đã được sử dụng trong hàng ngàn năm để hỗ trợ sức khỏe và chữa lành các bệnh tật.
      
      Một số thảo dược quan trọng:
      
      Nhân Sâm (Ginseng): Tăng cường năng lượng, cải thiện miễn dịch, và giúp phục hồi sau bệnh tật.
      
      Lâm Hương (Reishi): Giảm căng thẳng, cải thiện giấc ngủ, và hỗ trợ thần kinh.
      
      Đương Quỵ (Angelica): Điều hòa kinh nguyệt, cải thiện lưu thông máu, và hỗ trợ sức khỏe phụ nữ.
      
      Hoài Sơn (Chinese Yam): Hỗ trợ tiêu hóa, tăng năng lượng, và cân bằng hệ tiêu hóa.
      
      Khi sử dụng thảo dược, hãy tham khảo ý kiến từ một chuyên gia Y học Cổ Truyền để đảm bảo an toàn và hiệu quả.
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
      <Header />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-playfair text-accent mb-4">Bài viết không tìm thấy</h1>
          <Link href="/" className="text-primary hover:text-accent transition-colors">
            Quay lại trang chủ
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta Info */}
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-montserrat uppercase tracking-widest text-primary">{post.category}</span>
            <span className="text-xs font-montserrat text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair text-accent leading-tight">{post.title}</h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          {post.content.split("\n").map((paragraph: string, index: number) => {
            const trimmed = paragraph.trim()
            if (!trimmed) return null

            if (trimmed.startsWith("-")) {
              return (
                <li key={index} className="font-montserrat text-lg text-muted-foreground leading-relaxed ml-6">
                  {trimmed.substring(1).trim()}
                </li>
              )
            }

            return (
              <p key={index} className="font-montserrat text-lg text-muted-foreground leading-relaxed">
                {trimmed}
              </p>
            )
          })}
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm font-montserrat uppercase tracking-widest text-primary hover:text-accent transition-colors"
          >
            ← Quay lại blog
          </Link>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  )
}
