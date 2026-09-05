"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Gift, Lightbulb, Sofa } from "lucide-react"

export default function HomepageLuxuryHeader() {
  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="w-full py-3 px-6" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 text-white text-sm">
          <Link href="/rooms" className="flex items-center gap-2 hover:text-[#a98661] transition-colors duration-300">
            <Sofa className="h-4 w-4" aria-hidden="true" /> ROOMS
          </Link>
          <Link href="/inspirations" className="flex items-center gap-2 hover:text-[#a98661] transition-colors duration-300">
            <Lightbulb className="h-4 w-4" aria-hidden="true" /> INSPIRATIONS
          </Link>
          <Link href="/offers" className="flex items-center gap-2 hover:text-[#a98661] transition-colors duration-300">
            <Gift className="h-4 w-4" aria-hidden="true" /> OFFERS & PROMOTIONS
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar - Overlay on hero background */}
      <div className="w-full py-5 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="site-logo flex items-center flex-shrink-0 hover:opacity-80 transition-opacity">
            <span className="group inline-block cursor-pointer">
              <Image
                src="/logo-oz-meuble.png"
                alt="Oz meuble"
                width={400}
                height={120}
                className="h-24 w-auto transition-transform duration-[450ms] ease-out group-hover:scale-[1.15] group-hover:rotate-[8deg]"
              />
            </span>
          </Link>

          {/* Center Menu */}
          <nav className="flex items-center gap-12 flex-1 justify-center px-12">
            <Link href="/all-products" className="text-white font-semibold hover:text-yellow-200 transition-colors duration-300 text-lg">
              Produits
            </Link>
            <Link href="/contact" className="text-white font-semibold hover:text-yellow-200 transition-colors duration-300 text-lg">
              Contact
            </Link>
            <Link href="/about" className="text-white font-semibold hover:text-yellow-200 transition-colors duration-300 text-lg">
              About Us
            </Link>
          </nav>

          {/* Right Side - Only Explorer Button */}
          <div className="flex items-center gap-6">
            <Link href="/all-products">
              <Button className="bg-[#a98661] hover:bg-[#061632] text-white px-8 py-3 font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 text-base">
                Explorer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
