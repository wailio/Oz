"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Gift, Lightbulb, Menu, Sofa, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navClasses = isHomePage
    ? isScrolled
      ? "bg-black/35 backdrop-blur-2xl border border-white/25 shadow-xl"
      : "bg-black/25 backdrop-blur-2xl border border-white/20"
    : "bg-black/35 backdrop-blur-2xl border border-white/25 shadow-xl"

  const textClasses = isHomePage ? (isScrolled ? "text-white" : "text-white") : "text-white"
  const textClassesMobile = isHomePage ? (isScrolled ? "text-white" : "text-white") : "text-white"

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 px-3">
      <nav
        className={`max-w-6xl w-full px-3 py-2 flex items-center justify-between rounded-md font-[var(--font-manrope)] tracking-[0.05em] transition-all duration-300 ${navClasses}`}
      >
        <Link href="/" className="site-logo flex items-center gap-2">
          <span className="group inline-block cursor-pointer">
            <Image
              src="/logo-oz-meuble-luxury.png"
              alt="Oz meuble"
              width={120}
              height={50}
              className="h-10 w-auto transition-transform duration-[450ms] ease-out group-hover:scale-[1.15] group-hover:rotate-[8deg]"
            />
          </span>
          <span className="font-serif text-[11px] font-medium tracking-[0.08em] text-white sm:text-xs">Oz meuble</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/all-products" className="hidden sm:inline-block">
            <Button
              className="rounded-md border border-[#8f7137]/70 bg-[#241d13]/90 px-3 py-1.5 font-[var(--font-manrope)] text-xs font-medium tracking-[0.06em] text-[#e1c47d] shadow-none hover:border-[#b18d4d] hover:bg-[#302516] hover:text-[#f0d99d]"
            >
              Découvrir
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 rounded-lg transition-colors duration-300 hover:bg-white/20 text-white`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`fixed top-12 left-3 right-3 rounded-lg border transition-all duration-300 bg-black/35 backdrop-blur-2xl border-white/25`}
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            {/* Top line items */}
            <div className="pb-2 border-b border-gray-300/50 flex flex-col gap-2">
              <Link
                href="/rooms"
                className={`transition-colors py-1.5 text-xs font-medium text-white hover:text-[#a98661]`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2"><Sofa className="h-4 w-4" aria-hidden="true" /> PIÈCES</span>
              </Link>
              <Link
                href="/inspirations"
                className={`transition-colors py-1.5 text-xs font-medium text-white hover:text-[#a98661]`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2"><Lightbulb className="h-4 w-4" aria-hidden="true" /> INSPIRATIONS</span>
              </Link>
              <Link
                href="/offers"
                className={`transition-colors py-1.5 text-xs font-medium text-white hover:text-[#a98661]`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2"><Gift className="h-4 w-4" aria-hidden="true" /> OFFRES & PROMOTIONS</span>
              </Link>
            </div>

            {/* Main nav items */}
            <Link
              href="/all-products"
              className={`font-[var(--font-montserrat)] font-medium transition-colors py-2 text-sm text-white hover:text-[#a98661]`}
              onClick={() => setIsOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/contact"
              className={`font-[var(--font-montserrat)] font-medium transition-colors py-2 text-sm text-white hover:text-[#a98661]`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className={`font-[var(--font-montserrat)] font-medium transition-colors py-2 text-sm text-white hover:text-[#a98661]`}
              onClick={() => setIsOpen(false)}
            >
              À Propos
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
