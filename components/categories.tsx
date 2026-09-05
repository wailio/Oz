"use client"

import { Armchair, BedDouble, LampDesk, PanelsTopLeft, Sofa, Table2 } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"

const categories = [
  { icon: Table2, label: "Salle à manger", href: "/all-products?category=salle-a-manger" },
  { icon: Sofa, label: "Canapés", href: "/all-products?category=sofas" },
  { icon: BedDouble, label: "Chambres", href: "/all-products?category=chambres" },
  { icon: LampDesk, label: "Armoire", href: "/all-products?category=armoire" },
  { icon: PanelsTopLeft, label: "Accessoires", href: "/all-products?category=accessories" },
]

export default function Categories() {
  return (
    <section className="relative py-4 md:py-8 overflow-hidden">
      {/* Luxury gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#315b86] via-[#234463] to-[#2a2418]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-6">
        <div className="mb-4 md:mb-6 relative inline-block w-full">
          <Reveal>
            <h2 className="text-lg md:text-2xl font-serif font-bold text-white mb-2 md:mb-3 text-center">Catégories</h2>
          </Reveal>
          <div className="h-0.5 md:h-1 w-12 md:w-20 mx-auto bg-gradient-to-r from-transparent via-[#8fb4d8] to-transparent"></div>
        </div>

        <div className="flex justify-start md:justify-center gap-2 md:gap-4 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible scrollbar-hide touch-pan-x -mx-3 px-3 md:mx-0 md:px-0">
          {categories.map((cat, idx) => {
            const Icon = cat.icon

            return (
              <Reveal key={idx} variant="pop" delay={idx * 80}>
              <Link href={cat.href} className="flex justify-center shrink-0">
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#8fb4d8]/80 bg-transparent px-3 py-2 transition-all duration-300 cursor-pointer group hover:border-[#ead49b] hover:bg-white/5 hover:shadow-lg w-[60px] h-20 md:w-[180px] md:h-24">
                  <Icon className="size-6 md:size-7 text-white stroke-[2] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <p className="font-sans text-[9px] md:text-sm font-medium text-white text-center leading-tight line-clamp-1 group-hover:text-[#8fb4d8] transition-colors duration-300">{cat.label}</p>
                </div>
              </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
