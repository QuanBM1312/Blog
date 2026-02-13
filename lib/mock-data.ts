export interface Category {
  id: string;
  name: string;
  slug: string;
  template_type: "standard" | "herb_dictionary" | "storytelling";
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
  // Parent 1: Y Lý Y Học Cổ Truyền
  {
    id: "cat-1",
    name: "Y Lý – Y Học Cổ Truyền",
    slug: "y-ly-y-hoc-co-truyen",
    template_type: "standard",
  },
  {
    id: "cat-1-1",
    name: "Lý Luận Cơ Bản",
    slug: "ly-luan-co-ban",
    template_type: "standard",
    parent_id: "cat-1",
  },
  {
    id: "cat-1-4", // New category
    name: "Pháp – Phương – Dược",
    slug: "phap-phuong-duoc",
    template_type: "standard",
    parent_id: "cat-1",
  },
  {
    id: "cat-1-3",
    name: "Ứng Dụng Lâm Sàng",
    slug: "ung-dung-lam-sang",
    template_type: "standard",
    parent_id: "cat-1",
  },
  {
    id: "cat-1-2",
    name: "Từ Điển Dược Liệu",
    slug: "tu-dien-duoc-lieu",
    template_type: "herb_dictionary",
    parent_id: "cat-1",
  },

  // Parent 2: BLOG
  { id: "cat-2", name: "Blog", slug: "blog", template_type: "standard" },
  {
    id: "cat-2-1",
    name: "Kiến Thức Dưỡng Sinh",
    slug: "kien-thuc-duong-sinh",
    template_type: "standard",
    parent_id: "cat-2",
  },
  {
    id: "cat-2-3", // New category
    name: "Từ Cây Cỏ",
    slug: "tu-cay-co",
    template_type: "standard",
    parent_id: "cat-2",
  },
  {
    id: "cat-2-2",
    name: "Bên Ấm Trà",
    slug: "ben-am-tra",
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
  {
    id: "post-6",
    title: "Phép Hãn (Làm ra mồ hôi) - Khi nào nên dùng?",
    slug: "phep-han-giai-bieu",
    excerpt:
      "Tìm hiểu về một trong Bát Pháp (8 phương pháp chữa bệnh) của Y học Cổ truyền dùng để trị các bệnh ở biểu (bên ngoài).",
    content: `
      <h2>1. Định nghĩa Phép Hãn</h2>
      <p>Phép Hãn (Hãn pháp) là phương pháp dùng thuốc làm cho ra mồ hôi để đưa tà khí (phong, hàn, thấp, nhiệt...) đang ở phần biểu (da lông, cơ nhục nông) ra ngoài. Đây là pháp điều trị cơ bản khi tà khí mới xâm nhập vào cơ thể.</p>
      
      <h2>2. Chỉ định</h2>
      <p>Dùng trong các trường hợp cảm mạo phong hàn, phong nhiệt, giai đoạn đầu của các bệnh truyền nhiễm, phong thấp đau nhức, thủy thũng (phù thũng) phần trên cơ thể.</p>

      <h2>3. Các bài thuốc tiêu biểu</h2>
      <ul>
        <li><strong>Ma Hoàng Thang:</strong> Trị cảm mạo phong hàn thể thực (không có mồ hôi, sợ lạnh nhiều).</li>
        <li><strong>Quế Chi Thang:</strong> Trị cảm mạo phong hàn thể hư (có mồ hôi, sợ gió).</li>
        <li><strong>Tang Cúc Ẩm:</strong> Trị cảm mạo phong nhiệt (sốt, đau họng, ho).</li>
      </ul>

      <h2>4. Lưu ý quan trọng</h2>
      <p>Không dùng phép hãn cho người đã mất nhiều tân dịch (mồ hôi trộm, nôn mửa, tiêu chảy nhiều), người già yếu khí huyết hư tổn nặng. Khi ra mồ hôi râm rấp là được, không nên cho ra quá nhiều gây vong dương (trụy tim mạch).</p>
    `,
    published_at: "2025-02-13T09:00:00Z",
    category_id: "cat-1-4", // Pháp – Phương – Dược
    featured_image_url:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1974&auto=format&fit=crop",
    author: { name: "Y Sư Tuệ Tâm" },
  },
  {
    id: "post-7",
    title: "Cây Sả - Hương thơm bình dị chữa bệnh",
    slug: "cay-sa-chua-benh",
    excerpt:
      "Không chỉ là gia vị quen thuộc, cây sả còn là vị thuốc nam quý giá với nhiều công dụng bất ngờ trong vườn nhà.",
    content: `
      <h2>1. Tổng quan về cây Sả</h2>
      <p>Sả (Cymbopogon) là loại cây cỏ sống lâu năm, mọc thành bụi. Toàn cây có mùi thơm đặc trưng của citral. Sả rất dễ trồng và phổ biến ở mọi vùng quê Việt Nam.</p>
      
      <h2>2. Công dụng chữa bệnh từ Sả</h2>
      <h3>2.1. Giải cảm, trị ho</h3>
      <p>Nồi nước xông lá sả cùng bưởi, hương nhu, tía tô... là phương thuốc dân gian hữu hiệu nhất để trị cảm cúm, giúp ra mồ hôi và nhẹ người nhanh chóng.</p>

      <h3>2.2. Tốt cho tiêu hóa</h3>
      <p>Tinh dầu sả giúp kích thích tiêu hóa, khử uế, trị đầy bụng, đau dạ dày, buồn nôn. Một tách trà sả gừng ấm là lựa chọn tuyệt vời sau bữa ăn nhiều dầu mỡ.</p>

      <h3>2.3. Khử mùi và đuổi muỗi</h3>
      <p>Trồng sả quanh nhà hoặc xông tinh dầu sả giúp xua đuổi muỗi và côn trùng hiệu quả, đồng thời tạo không gian thư giãn, giảm stress.</p>

      <h2>3. Cách làm trà Sả tắc mật ong</h2>
      <p>Đập dập 3 cây sả, nấu với 500ml nước trong 10 phút. Tắt bếp, thêm đường phèn hoặc mật ong, vắt thêm 2 quả tắc. Uống nóng hoặc lạnh đều rất ngon và bổ dưỡng.</p>
    `,
    published_at: "2025-02-13T10:00:00Z",
    category_id: "cat-2-3", // Từ Cây Cỏ
    featured_image_url:
      "https://images.unsplash.com/photo-1615485500704-8e990999dd95?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Người Yêu Cây" },
  },
];
