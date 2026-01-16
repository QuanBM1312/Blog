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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Top Left Align */}
        <Link href="/" className="flex items-center gap-4 group">
          <img 
            src="/logo.png" 
            alt="Hải Lĩnh Y Quán Logo" 
            className="w-[8%] h-[8%] object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-playfair font-bold tracking-[0.1em] text-primary uppercase leading-tight">
              Hải Lĩnh
            </span>
            <span className="text-[10px] md:text-xs font-montserrat tracking-[0.3em] text-primary/70 uppercase">
              Y Quán
            </span>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="flex gap-8 md:gap-12 text-[12px] font-montserrat font-medium tracking-[0.2em] text-primary uppercase">
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
