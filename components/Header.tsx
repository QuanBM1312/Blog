"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/ve-chung-toi", label: "Về chúng tôi" },
    { href: "/triet-ly", label: "Triết lý" },
    { href: "/y-ly-yhct", label: "Y lý y học cổ truyền" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 w-full border-b border-border bg-background z-[9999] transition-all duration-300">
      <div className="xl:max-w-7xl max-w-screen mx-auto px-6 py-4 flex justify-between items-center bg-background relative">
        {/* Logo - Align with Brand Name as a solid block */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Hải Lĩnh Y Quán Logo" 
            className="h-12 w-auto xl:h-16 object-contain"
          />
          <h1 className="text-xl xl:text-[30px] font-playfair font-bold tracking-wide text-primary uppercase whitespace-nowrap translate-y-1">
            Hải Lĩnh Y Quán
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-12 text-[16px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase">
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

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`xl:hidden absolute z-[100] top-full left-0 w-full bg-background border-b border-border transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "opacity-100 translate-y-0 visible shadow-lg" : "opacity-0 -translate-y-4 invisible"
      }`}>
        <nav className="flex flex-col py-6 px-6 gap-6 text-[16px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-accent" : "hover:text-accent"
              } transition-colors py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
