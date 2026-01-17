import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Hải Lĩnh Y Quán - Traditional Chinese Medicine",
  description: "Discover the wisdom of Traditional Chinese Medicine. Live with nature, heal the mind.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable} ${dancingScript.variable}`}>
      <body className={`font-montserrat antialiased bg-cream text-dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
