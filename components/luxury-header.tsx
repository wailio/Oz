"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Facebook, Gift, Instagram, Lightbulb, Mail, Music2, Sofa } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isSpecialPage = 
    pathname.startsWith("/rooms") || 
    pathname.startsWith("/inspirations") || 
    pathname.startsWith("/offers") || 
    pathname.startsWith("/all-products") || 
    pathname.startsWith("/contact") || 
    pathname === "/about"
  const isDarkHeaderPage = isSpecialPage && !isHomePage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine header style based on page
  let headerBgClass = "bg-white/95 backdrop-blur-md border-b border-gray-200/50"
  let topBarBgClass = "bg-gradient-to-r from-gray-50 to-gray-100"
  let headerTextColor = "text-gray-900"
  let topBarTextColor = "text-gray-600"

  if (isDarkHeaderPage) {
    // Glassy header for special pages
    headerBgClass = "bg-black/40 backdrop-blur-2xl border-b border-white/20 shadow-xl"
    topBarBgClass = "bg-black" // Keep top bar fully black
    headerTextColor = "text-white"
    topBarTextColor = "text-white"
  } else if (isHomePage) {
    // Home page - dynamic based on scroll
    if (isScrolled) {
      headerBgClass = "bg-white shadow-md"
      topBarBgClass = "bg-gray-50"
      headerTextColor = "text-gray-800"
      topBarTextColor = "text-gray-700"
    } else {
      headerBgClass = "bg-transparent"
      topBarBgClass = "bg-[#1a1a1a]"
      headerTextColor = "text-white"
      topBarTextColor = "text-white"
    }
  }

  return (
    <header dir="ltr" className="hidden md:block fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Thinner */}
      <div className={`w-full py-1 px-6 font-[var(--font-manrope)] tracking-[0.06em] ${topBarBgClass}`}>
        <div dir="ltr" className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-xs">
          {/* Left Side - Social Icons */}
          <div className="flex items-center gap-3">
            <Link href="https://facebook.com/p/Ozmeuble-100092552539793" target="_blank" rel="noopener noreferrer" className={`hover:text-[#a98661] transition-colors duration-300 ${topBarTextColor}`}>
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com/oz.meuble" target="_blank" rel="noopener noreferrer" className={`hover:text-[#a98661] transition-colors duration-300 ${topBarTextColor}`}>
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://tiktok.com/@oz.meuble" target="_blank" rel="noopener noreferrer" className={`hover:text-[#a98661] transition-colors duration-300 ${topBarTextColor}`}>
              <Music2 className="w-4 h-4" />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex -translate-x-6 items-center gap-6">
            <Link href="/rooms" className={`flex items-center gap-1 hover:text-[#a98661] transition-colors duration-300 ${topBarTextColor}`}>
              <Sofa className="h-3.5 w-3.5" aria-hidden="true" /> PIÈCES
            </Link>
            <span className={`${topBarTextColor}`}>•</span>
            <Link href="/inspirations" className={`flex items-center gap-1 hover:text-[#a98661] transition-colors duration-300 ${topBarTextColor}`}>
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" /> INSPIRATIONS
            </Link>
            <span className={`${topBarTextColor}`}>•</span>
            <Link href="/offers" className={`flex items-center gap-1 hover:text-[#a98661] transition-colors duration-300 ${topBarTextColor}`}>
              <Gift className="h-3.5 w-3.5" aria-hidden="true" /> OFFRES
            </Link>
          </div>

          {/* Right Side - Language switcher */}
          <div className="flex w-20 shrink-0 justify-end">
            <LanguageSwitcher textColor={topBarTextColor} compact />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Thinner with big logo */}
      <div className={`w-full py-2.5 px-6 ${headerBgClass}`}>
        <div dir="ltr" className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo - Simple and clean */}
          <Link href="/" className="site-logo flex items-center flex-shrink-0 hover:opacity-80 transition-opacity">
            <span className="group inline-block cursor-pointer">
              <Image
                src="/logo-oz-meuble-luxury.png"
                alt="Oz meuble"
                width={140}
                height={60}
                className="h-12 w-auto transition-transform duration-[450ms] ease-out group-hover:scale-[1.15] group-hover:rotate-[8deg]"
              />
            </span>
          </Link>

          {/* Center Menu - Compact */}
          <nav className="flex min-w-0 flex-1 items-center justify-center gap-6 px-6 font-[var(--font-manrope)] lg:gap-10 lg:px-10">
            <Link href="/all-products" className={`whitespace-nowrap font-[var(--font-montserrat)] text-sm font-medium tracking-[0.14em] transition-colors duration-300 hover:text-[#a98661] ${headerTextColor}`}>
              Produits
            </Link>
            <Link href="/contact" className={`whitespace-nowrap font-[var(--font-montserrat)] text-sm font-medium tracking-[0.14em] transition-colors duration-300 hover:text-[#a98661] ${headerTextColor}`}>
              Contact
            </Link>
            <Link href="/about" className={`whitespace-nowrap font-[var(--font-montserrat)] text-sm font-medium tracking-[0.14em] transition-colors duration-300 hover:text-[#a98661] ${headerTextColor}`}>
              À Propos
            </Link>
          </nav>

          {/* Right Side - Explorer Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/all-products">
              <Button className="rounded-md border border-[#8f7137]/70 bg-[#241d13]/90 px-6 py-2 font-[var(--font-manrope)] text-xs font-medium tracking-[0.08em] text-[#e1c47d] shadow-none transition-colors duration-300 hover:border-[#b18d4d] hover:bg-[#302516] hover:text-[#f0d99d]">
                Découvrir
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
