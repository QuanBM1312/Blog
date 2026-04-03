"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

function NavDropdown({ label, items }: { label: string, items: { href: string, text: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`flex items-center gap-1 font-montserrat font-bold tracking-[0.2em] uppercase transition-colors ${
        open ? "text-accent" : "text-primary hover:text-accent"
      }`}>
        {label}
        <ChevronDown size={12} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`
        absolute right-0 mt-4 w-56
        bg-background border border-border shadow-lg
        transition-all duration-200 ease-in-out z-50
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
      `}>
        <div className="py-3">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block px-5 py-3 font-montserrat text-sm font-bold tracking-[0.15em] uppercase text-primary hover:text-accent hover:bg-accent/5 transition-all"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/y-ly-yhct", label: "Y lý y học cổ truyền" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 w-full border-b border-border bg-background z-[9999] transition-all duration-300">
      <div className="xl:max-w-7xl max-w-screen mx-auto px-6 py-4 flex justify-between items-center bg-background relative">
        {/* Logo */}
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
        <nav className="hidden xl:flex gap-12 text-[16px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase items-center">
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
          <NavDropdown
            label="Về chúng tôi"
            items={[
              { href: "/ve-chung-toi", text: "Câu Chuyện Thương Hiệu" },
              { href: "/triet-ly", text: "Triết Lý Hải Lĩnh" },
            ]}
          />
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
        <nav className="flex flex-col py-6 px-6 gap-4 text-[16px] font-montserrat font-bold tracking-[0.2em] text-primary uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-accent" : "hover:text-accent"} transition-colors py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border pt-4 space-y-3">
            <p className="font-montserrat text-[10px] tracking-[0.2em] text-primary/40">VỀ CHÚNG TÔI</p>
            <Link href="/ve-chung-toi" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${pathname === "/ve-chung-toi" ? "text-accent" : "hover:text-accent"}`}>Câu Chuyện Thương Hiệu</Link>
            <Link href="/triet-ly" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${pathname === "/triet-ly" ? "text-accent" : "hover:text-accent"}`}>Triết Lý Hải Lĩnh</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
