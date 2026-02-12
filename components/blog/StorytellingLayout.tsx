"use client";

import { Post, Category } from '@/lib/mock-data';
import { GlobalCTA } from './GlobalCTA';
import { RelatedPosts } from './RelatedPosts';

interface StorytellingLayoutProps {
  post: Post;
  category: Category;
}

export function StorytellingLayout({ post, category }: StorytellingLayoutProps) {
  return (
    <article className="animate-in fade-in duration-1000">
      {/* Hero Image Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <img 
          src={post.featured_image_url} 
          alt={post.title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6 text-center">
          <div className="max-w-4xl space-y-6">
            <span className="text-white/80 font-montserrat uppercase tracking-[0.4em] text-xs md:text-sm animate-in slide-in-from-top-4 duration-700">
              {category.name}
            </span>
            <h1 className="text-4xl md:text-7xl font-playfair text-white leading-tight drop-shadow-lg animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="flex justify-center mb-16 italic text-muted-foreground font-montserrat text-sm border-b border-border pb-8 w-fit mx-auto">
          <span>{post.author?.name}</span>
          <span className="mx-4 text-primary/30">•</span>
          <span>{new Date(post.published_at).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>

        <div 
          id="post-content"
          className="prose prose-stone prose-lg md:prose-2xl max-w-none font-montserrat leading-relaxed text-foreground/90 first-letter:text-6xl first-letter:font-playfair first-letter:mr-3 first-letter:float-left first-letter:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Custom Blockquote Styler in Storytelling */}
        <style jsx global>{`
          .prose blockquote {
            font-family: var(--font-dancing);
            font-size: 1.5em;
            color: var(--color-primary);
            border: none;
            padding: 2rem;
            text-align: center;
            background: var(--color-cream);
            margin: 4rem 0;
            position: relative;
          }
        `}</style>

        <GlobalCTA />
        <RelatedPosts currentPostId={post.id} categoryId={post.category_id} />
      </div>
    </article>
  );
}
