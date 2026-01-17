"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "#footer", label: "Về chúng tôi" },
    { href: "/shop", label: "Khóa học" },
  ]

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo - Align with Brand Name as a solid block */}
        <Link href="/" className="flex items-center gap-4 group">
          <img 
            src="/logo.png" 
            alt="Hải Lĩnh Y Quán Logo" 
            className="h-20 w-auto object-contain"
          />
          <h1 className="text-xl md:text-[30px] font-playfair font-bold tracking-wide text-primary uppercase whitespace-nowrap">
            Hải Lĩnh Y Quán
          </h1>
        </Link>
        
        {/* Navigation */}
        <nav className="flex gap-8 md:gap-12 text-[18px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-accent" : "hover:text-accent"
              } transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
