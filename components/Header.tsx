"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/#footer", label: "Về chúng tôi" },
    { href: "/podcast", label: "Y lý y học cổ truyền" },
    { href: "/shop", label: "Khóa học" },
  ]

  return (
    <header className="border-b border-border bg-cream z-50">
      <div className="max-w-[1450px] mx-auto px-6 py-10 flex justify-between items-center">
        <Link href="/" className="text-2xl font-montserrat font-bold tracking-[0.3em] text-primary uppercase">
          Hải Lĩnh Y Quán
        </Link>
        <nav className="flex gap-10 text-[11px] font-montserrat font-medium tracking-[0.2em] text-primary uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-gray-400" : "hover:text-gray-400"
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
