import { Post, Category } from '@/lib/mock-data';

interface SchemaMarkupProps {
  post: Post;
  category: Category;
}

export function SchemaMarkup({ post, category }: SchemaMarkupProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": category.template_type === 'herb_dictionary' ? "MedicalWebPage" : "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featured_image_url,
    "datePublished": post.published_at,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Hải Lĩnh Y Quán"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
