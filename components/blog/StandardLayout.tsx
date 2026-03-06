import { Post, Category } from '@/lib/mock-data';
import { Breadcrumbs } from './Breadcrumbs';
import { TableOfContents } from './TableOfContents';
import { GlobalCTA } from './GlobalCTA';
import { RelatedPosts } from './RelatedPosts';
import { formatPostContent } from '@/lib/services/content-processor';

interface StandardLayoutProps {
  post: Post;
  category: Category;
}

export function StandardLayout({ post, category }: StandardLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 pt-32">
      <Breadcrumbs items={[{ label: category.name }]} />
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <header className="mb-12 border-b border-border pb-8">
            <h1 className="text-4xl md:text-5xl font-playfair text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-montserrat text-muted-foreground uppercase tracking-widest">
              <span>{new Date(post.published_at).toLocaleDateString('vi-VN')}</span>
              {post.author && <span>Tác giả: {post.author.name}</span>}
            </div>
          </header>

          <div 
            id="post-content"
            className="prose prose-stone lg:prose-xl max-w-none font-montserrat leading-loose text-foreground/80"
            dangerouslySetInnerHTML={{ __html: formatPostContent(post.content) }}
          />

          {post.featured_image_url && (
            <div className="mt-16 mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="aspect-[16/9] w-full overflow-hidden border border-primary/10 shadow-sm bg-cream">
                <img 
                  src={post.featured_image_url} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}

          <GlobalCTA />
          <RelatedPosts currentPostId={post.id} categoryId={post.category_id} />
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 space-y-12">
          <div className="sticky top-32 space-y-12">
            <TableOfContents />
            
            <div className="p-6 border border-primary/10 bg-cream">
              <h4 className="font-playfair text-lg text-primary uppercase tracking-widest border-b border-primary/20 pb-4 mb-4">
                Thông tin thêm
              </h4>
              <p className="text-sm text-muted-foreground font-montserrat leading-relaxed">
                Các kiến thức y học cổ truyền được biên soạn bởi đội ngũ Hải Lĩnh Y Quán dựa trên các y thư cổ và kinh nghiệm lâm sàng.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
