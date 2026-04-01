import Link from 'next/link';
import { getPostsByCategory } from '@/lib/services/post-service';
import { getCategories } from '@/lib/services/category-service';

interface RelatedPostsProps {
  currentPostId: string;
  categoryId: string;
}

export async function RelatedPosts({ currentPostId, categoryId }: RelatedPostsProps) {
  // We need the category slug to use getPostsByCategory
  const categories = await getCategories();
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) return null;

  const allPostsInCat = await getPostsByCategory(category.slug);
  const related = allPostsInCat
    .filter(p => p.id !== currentPostId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-20 pt-12 border-t border-border">
      <h3 className="font-playfair text-2xl text-primary text-center mb-10 uppercase tracking-widest">
        Bài viết liên quan
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map((post) => (
          <Link key={post.id} href={`/suc-khoe/${post.slug}`} className="group block">
            <div className="aspect-[4/3] overflow-hidden mb-4 border border-border">
              <img 
                src={post.featured_image_url} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-playfair text-lg text-primary group-hover:text-accent transition-colors duration-300">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
