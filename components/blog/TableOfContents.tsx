"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('#post-content h2, #post-content h3'));
    const tocItems = headings.map((h, index) => {
      const id = h.id || `heading-${index}`;
      h.id = id;
      return {
        id,
        text: h.textContent || '',
        level: parseInt(h.tagName.substring(1))
      };
    });
    setToc(tocItems);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: '0px 0px -80% 0px' });

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  return (
    <nav className="space-y-4">
      <h4 className="font-playfair text-lg text-primary uppercase tracking-widest border-b border-primary/20 pb-2">
        Mục lục
      </h4>
      <ul className="space-y-4 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin">
        {toc.map((item) => (
          <li 
            key={item.id} 
            className={cn(
              "text-sm font-montserrat transition-all duration-300",
              item.level === 3 ? "ml-4" : "",
              activeId === item.id ? "text-accent font-bold translate-x-1" : "text-muted-foreground hover:text-primary"
            )}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
