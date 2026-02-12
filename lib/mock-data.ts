export interface Category {
  id: string;
  name: string;
  slug: string;
  template_type: "standard" | "herb_portfolio" | "storytelling";
  parent_id?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published_at: string;
  category_id: string;
  featured_image_url: string;
  custom_fields?: Record<string, any>;
  author?: {
    name: string;
    avatar?: string;
  };
}

export const MOCK_CATEGORIES: Category[] = [
  // Parent 1: LÝ LUẬN Y HỌC CỔ TRUYỀN
  {
    id: "cat-1",
    name: "LÝ LUẬN Y HỌC CỔ TRUYỀN",
    slug: "ly-luan-y-hoc",
    template_type: "standard",
  },
  {
    id: "cat-1-1",
    name: "Lý Luận Căn Bản",
    slug: "ly-luan-can-ban",
    template_type: "standard",
    parent_id: "cat-1",
  },
  {
    id: "cat-1-2",
    name: "Từ Điển Thảo Mộc",
    slug: "tu-dien-thao-moc",
    template_type: "herb_portfolio",
    parent_id: "cat-1",
  },
  {
    id: "cat-1-3",
    name: "Ứng Dụng Lâm Sàng",
    slug: "ung-dung-lam-sang",
    template_type: "standard",
    parent_id: "cat-1",
  },

  // Parent 2: BLOG
  { id: "cat-2", name: "BLOG", slug: "blog", template_type: "standard" },
  {
    id: "cat-2-1",
    name: "Kiến Thức Dưỡng Sinh",
    slug: "kien-thuc-duong-sinh",
    template_type: "standard",
    parent_id: "cat-2",
  },
  {
    id: "cat-2-2",
    name: "Duyên Lành Hạnh Ngộ",
    slug: "duyen-lanh-hanh-ngo",
    template_type: "storytelling",
    parent_id: "cat-2",
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: "post-1",
    title: "Học thuyết Âm Dương trong dưỡng sinh đương đại",
    slug: "ly-luan-am-duong",
    excerpt:
      "Hiểu về sự cân bằng của vũ trụ ngay trong chính cơ thể mình để sống khỏe mạnh hơn mỗi ngày.",
    content: `<h2>1. Bản chất của Âm Dương</h2><p>Âm và Dương không phải là vật chất cụ thể mà là thuộc tính của mọi sự vật...</p><h2>2. Ứng dụng trong ăn uống</h2><p>Mùa hè thuộc Dương, nên bổ sung các thực phẩm mang tính Âm để thanh nhiệt...</p>`,
    published_at: "2025-02-10T08:00:00Z",
    category_id: "cat-1-1",
    featured_image_url:
      "https://images.unsplash.com/photo-1514416432279-50fac261c1dd?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Đông Y Sư Hải Lĩnh" },
  },
  {
    id: "post-2",
    title: "Nhân Sâm (Panax Ginseng)",
    slug: "nhan-sam",
    excerpt:
      "Vị thuốc đứng đầu trong Tứ Đại Danh Dược, biểu tượng của sự trường thọ và phục hồi.",
    content: `<p>Nhân sâm là loại thảo dược quý hiếm, có lịch sử sử dụng lâu đời trong Y học Cổ truyền Á Đông. Cây mọc ở vùng núi cao, hấp thụ tinh hoa đất trời qua nhiều năm tháng...</p><h2>Đặc điểm sinh học</h2><p>Nhân sâm là cây thảo lâu năm, cao khoảng 60-80cm. Rễ củ mập, thường chia thành nhiều nhánh trông giống hình người.</p>`,
    published_at: "2025-02-11T09:00:00Z",
    category_id: "cat-1-2",
    featured_image_url:
      "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=1974&auto=format&fit=crop",
    custom_fields: {
      gallery: [
        "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?q=80&w=1974&auto=format&fit=crop",
      ],
      quick_info: {
        ten_vi_thuoc: "Nhân Sâm",
        ten_tieng_anh: "Ginseng",
        ten_latinh: "Panax ginseng C. A. Mey.",
        ten_tieng_han: "人参 (Rénshēn)",
        ten_dia_phuong: "Sâm Cao Ly, Sâm Triều Tiên",
        tinh_vi: "Vị ngọt, hơi đắng, tính ôn",
        quy_kinh: "Phế, Tỳ, Tâm",
        cong_dung: "Đại bổ nguyên khí, phục mạch cố thoát, bổ tỳ ích phế",
        thanh_phan: "Saponin triterpenoid (Ginsenosides), tinh dầu, flavonoid",
        su_dung_an_toan:
          "Liều dùng 2-10g. Không dùng cho người đau bụng thể hàn, cao huyết áp kịch phát.",
      },
    },
  },
  {
    id: "post-3",
    title: "Tách trà ấm bên hiên nhà Hải Lĩnh",
    slug: "tach-tra-am",
    excerpt:
      "Ký ức về một buổi chiều thu khi tôi đón một vị khách đặc biệt ghé thăm quán trà.",
    content: `<p>Cơn gió heo may thổi qua khung cửa gỗ, mang theo hương thơm dịu nhẹ của hoàng cúc. Tôi ngồi đó, chậm rãi pha ấm trà mới...</p><blockquote>"Trà này thanh quá," vị khách khẽ thốt lên khi nhấp ngụm đầu tiên.</blockquote><p>Đôi mắt họ, vốn trĩu nặng ưu phiền, bỗng chốc thư giãn...</p>`,
    published_at: "2025-02-12T15:00:00Z",
    category_id: "cat-2-2",
    featured_image_url:
      "https://images.unsplash.com/photo-1594631252845-29fc4586c394?q=80&w=1974&auto=format&fit=crop",
    author: { name: "Thanh Trà" },
  },
  {
    id: "post-4",
    title: "Phác đồ điều trị mất ngủ bằng huyệt vị",
    slug: "phac-do-mat-ngu",
    excerpt:
      "Hướng dẫn cách bấm huyệt An Miên, Nội Quan và Thần Môn để có một giấc ngủ sâu và tự nhiên.",
    content: `
      <p>Trong Y học Cổ truyền, mất ngủ (thất miên) có liên quan mật thiết đến sự rối loạn của tạng Tâm và Can. Thay vì lạm dụng thuốc ngủ, việc tác động lên các huyệt đạo là giải pháp an toàn và bền vững.</p>
      
      <h2>1. Nguyên lý trị liệu bằng huyệt đạo</h2>
      <p>Bấm huyệt giúp điều hòa khí huyết, thư giãn hệ thần kinh trung ương và kích thích cơ thể sản sinh melatonin tự nhiên. Điều này tạo tiền đề cho một giấc ngủ sinh lý bền bỉ.</p>

      <h2>2. Nhóm huyệt đạo "Vàng" cho giấc ngủ</h2>
      
      <h3>2.1. Huyệt An Miên</h3>
      <p>Nằm ở vùng sau tai, ngay dưới xương chũm. Đúng như tên gọi, huyệt này tập trung hoàn toàn vào việc giúp cơ thể đi vào trạng thái ngủ sâu và giảm các giấc mơ xáo trộn.</p>

      <h3>2.2. Huyệt Thần Môn</h3>
      <p>Huyệt vị quan trọng nhất trên kinh Tâm. Nằm ở nếp gấp cổ tay, phía ngón út. Giúp định tâm, an thần, giảm căng thẳng hồi hộp sau một ngày làm việc mệt mỏi.</p>

      <h3>2.3. Huyệt Nội Quan</h3>
      <p>Nằm ở mặt trong cổ tay, cách nếp gấp cổ tay khoảng 2 thốn. Giúp thư giãn vùng ngực, hạ huyết áp nhẹ và giảm buồn nôn, hỗ trợ giấc ngủ cho người hay lo âu.</p>

      <h2>3. Hướng dẫn thực hiện phác đồ</h2>
      <p>Bạn nên thực hiện các bước sau khoảng 30 phút trước khi đi ngủ để đạt hiệu quả cao nhất:</p>
      <ol>
        <li><strong>Ngâm chân:</strong> Dùng nước ấm gừng muối để dẫn hỏa quy nguyên.</li>
        <li><strong>Dung lực:</strong> Dùng ngón cái ấn nhẹ vào huyệt An Miên (xoay tròn 2-3 phút).</li>
        <li><strong>Kiên trì:</strong> Thực hiện đều đặn cả hai bên để cân bằng dòng chảy năng lượng.</li>
      </ol>

      <h2>4. Những lưu ý quan trọng</h2>
      <p>Không nên bấm huyệt khi vùng da tại đó đang bị tổn thương hoặc viêm nhiễm. Phụ nữ mang thai cần tham khảo ý kiến chuyên gia trước khi thực hiện các kỹ thuật này.</p>
    `,
    published_at: "2025-02-12T10:00:00Z",
    category_id: "cat-1-3",
    featured_image_url:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    author: { name: "Lương Y Hải Lĩnh" },
  },
  {
    id: "post-5",
    title: "5 món ăn bài thuốc từ hạt sen cho mùa thu",
    slug: "mon-an-hat-sen",
    excerpt:
      "Hạt sen không chỉ ngon mà còn là vị thuốc quý giúp bổ tỳ, kiện vị và an thần cực tốt.",
    content: `
      <p>Mùa thu là mùa của hạt sen tươi. Trong Đông y, hạt sen (Liên nhục) có vị ngọt, tính bình, vào các kinh Tâm, Tỳ, Thận. Đây là thời điểm vàng để bồi bổ cơ thể bằng các món ăn từ sen.</p>
      
      <h2>1. Tác dụng kỳ diệu của Hạt Sen</h2>
      <p>Hạt sen có chứa nhiều protein, magie, kali và phốt pho, trong khi hàm lượng mỡ bão hòa và natri rất thấp. Theo các y thư cổ, hạt sen giúp:</p>
      <ul>
        <li>Bồi bổ tỳ vị, giúp ăn ngon hơn sau những ngày hè nóng nực.</li>
        <li>An thần, trị mất ngủ kéo dài và suy nhược thần kinh.</li>
        <li>Bổ thận, cố tinh, hỗ trợ sức khỏe sinh sản.</li>
      </ul>

      <h2>2. 5 món ăn bài thuốc phổ biến</h2>
      
      <h3>2.1. Chè hạt sen long nhãn</h3>
      <p>Đây là món ăn kinh điển giúp an thần, ngủ ngon, bồi bổ trí não. Long nhãn tính ấm kết hợp hạt sen tính bình tạo nên sự cân bằng tuyệt vời cho hệ thần kinh.</p>
      <p><strong>Cách làm:</strong> Hạt sen ninh nhừ, cho thêm long nhãn và đường phèn. Đun thêm 5 phút là có thể dùng được ngay.</p>

      <h3>2.2. Canh hạt sen hầm móng giò</h3>
      <p>Món ăn này cực tốt cho phụ nữ sau sinh hoặc người mới ốm dậy cần phục hồi thể trạng nhanh chóng và lợi sữa.</p>

      <h3>2.3. Cháo hạt sen thịt bằm</h3>
      <p>Dễ tiêu hóa, thích hợp cho trẻ nhỏ và người già gặp vấn đề về tiêu hóa vào mùa hanh khô, giúp kiện tỳ ích khí.</p>

      <h3>2.4. Hạt sen hầm gà ác</h3>
      <p>Đại bổ nguyên khí, giúp tăng cường hệ miễn dịch tự nhiên của cơ thể trước các đợt gió mùa thu đông.</p>

      <h3>2.5. Trà hạt sen tâm sen</h3>
      <p>Mặc dù tâm sen có vị đắng, nhưng khi kết hợp khéo léo với hạt sen sẽ tạo ra vị trà thanh khiết, giải độc gan hiệu quả và ổn định huyết áp.</p>

      <h2>3. Lưu ý khi sử dụng hạt sen</h2>
      <p>Mặc dù tốt nhưng không nên lạm dụng quá mức. Người đang bị táo bón nặng hoặc đầy bụng khó tiêu nên hạn chế dùng hạt sen tươi chưa chế biến kỹ.</p>
      <p>Hy vọng qua bài viết này, bạn sẽ có thêm những công thức tuyệt vời để chăm sóc gia đình mình trong tiết trời thu mát mẻ này!</p>
    `,
    published_at: "2025-02-12T08:00:00Z",
    category_id: "cat-2-1",
    featured_image_url:
      "https://images.unsplash.com/photo-1596797038530-2c39fa81046e?q=80&w=1974&auto=format&fit=crop",
    author: { name: "Dưỡng Sinh Viên" },
  },
];
