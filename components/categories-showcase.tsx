'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BedDouble, LampDesk, MapPin, Sofa, Table2, PanelsTopLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  { name: 'Salon', icon: Sofa },
  { name: 'Chambres', icon: BedDouble },
  { name: 'Salle à manger', icon: Table2 },
  { name: 'Éclairage', icon: LampDesk },
  { name: 'Décor', icon: PanelsTopLeft },
]

export default function CategoriesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 7
  const totalSlides = Math.ceil(categories.length / itemsPerView)

  const goToSlide = (index: number) => {
    setCurrentIndex(index % totalSlides)
  }

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-12 md:mb-20">
          DISCOVER OUR BEST!
        </h2>

        {/* Desktop — compact luxury row matching the reference proportions */}
        <div className="hidden md:flex items-center justify-center gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.name}
                href={`/all-products?category=${encodeURIComponent(cat.name.toLowerCase())}`}
                className="group flex h-24 w-[180px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-[#c4a56a]/80 bg-transparent px-4 text-white transition-all duration-300 hover:bg-[#5a452b]/35"
              >
                <Icon className="size-7 stroke-[1.7] text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <h3 className="text-sm font-medium text-white">{cat.name}</h3>
              </Link>
            )
          })}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden mb-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.name}
                  href={`/all-products?category=${encodeURIComponent(cat.name.toLowerCase())}`}
                  className="flex w-28 shrink-0 flex-col items-center gap-3 rounded-lg border border-[#a98661]/70 bg-[#4b3a24]/80 p-4 text-white transition-all hover:bg-[#5a452b]"
                >
                  <Icon className="size-8 stroke-[1.7] text-white" aria-hidden="true" />
                  <h3 className="text-xs font-medium text-white text-center">{cat.name}</h3>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Avis Google Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://maps.app.goo.gl/cjjvrBX2X2M2UMbv5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#a98661] hover:bg-[#8f6f4d] text-white rounded-lg py-3 px-6 text-sm md:text-base font-semibold transition-colors"
          >
            <MapPin size={18} />
            Avis Google
          </a>
        </div>
      </div>
    </section>
  )
}
