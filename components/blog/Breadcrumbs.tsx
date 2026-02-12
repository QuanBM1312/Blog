import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-[10px] md:text-xs font-montserrat uppercase tracking-widest text-muted-foreground mb-8">
      <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 text-primary/30" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
          ) : (
            <span className="text-primary font-bold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
