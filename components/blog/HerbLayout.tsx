import { Post, Category } from '@/lib/mock-data';
import { Breadcrumbs } from './Breadcrumbs';
import { GlobalCTA } from './GlobalCTA';
import { RelatedPosts } from './RelatedPosts';

interface HerbLayoutProps {
  post: Post;
  category: Category;
}

export function HerbLayout({ post, category }: HerbLayoutProps) {
  const info = post.custom_fields?.quick_info || {};
  const gallery = post.custom_fields?.gallery || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 pt-32">
      <Breadcrumbs items={[{ label: category.name, href: '/tu-dien-thao-moc' }]} />

      {/* Top Section: Gallery & Info Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] overflow-hidden border border-border shadow-sm">
            <img 
              src={post.featured_image_url} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {gallery.slice(1).map((img: string, i: number) => (
              <div key={i} className="aspect-square overflow-hidden border border-border">
                <img src={img} alt={`${post.title}-${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-cream p-8 border border-primary/10 shadow-sm flex flex-col justify-center">
          <h1 className="text-4xl font-playfair text-primary mb-6 border-b-2 border-accent/20 pb-4">
            {info.ten_vi_thuoc || post.title}
          </h1>
          
          <div className="space-y-4 text-sm font-montserrat">
            {[
              { label: 'Tên tiếng Anh', value: info.ten_tieng_anh },
              { label: 'Tên Latinh', value: info.ten_latinh, italic: true },
              { label: 'Tên tiếng Hán', value: info.ten_tieng_han },
              { label: 'Tên địa phương', value: info.ten_dia_phuong },
              { label: 'Tính vị', value: info.tinh_vi },
              { label: 'Quy kinh', value: info.quy_kinh },
              { label: 'Công dụng chính', value: info.cong_dung, highlight: true },
              { label: 'Thành phần', value: info.thanh_phan },
              { label: 'Sử dụng an toàn', value: info.su_dung_an_toan, warning: true },
            ].map((item, idx) => item.value && (
              <div key={idx} className={`grid grid-cols-3 py-2 border-b border-primary/5 last:border-0`}>
                <span className="text-primary font-bold uppercase tracking-wider text-[10px]">{item.label}</span>
                <span className={`col-span-2 text-foreground/80 ${item.italic ? 'italic' : ''} ${item.highlight ? 'text-primary font-medium' : ''} ${item.warning ? 'text-accent italic' : ''}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto space-y-12 mb-20">
        <div id="post-content" className="prose prose-stone md:prose-xl max-w-none font-montserrat leading-loose text-foreground/80">
          <h2 className="font-playfair text-3xl text-primary mb-8 text-center uppercase tracking-widest">Chi tiết & Giai thoại</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      <GlobalCTA />
      <RelatedPosts currentPostId={post.id} categoryId={post.category_id} />
    </div>
  );
}
