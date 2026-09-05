"use client"

import Link from "next/link"
import { Reveal } from "@/components/Reveal"

export default function PromotionalBanners() {
  return (
    <section className="w-full" id="promotional-banners">
      <div className="h-6 md:h-12 bg-white"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Banner 1: Perfect Armchair */}
        <Reveal variant="pop" delay={0}>
        <div className="promo-card relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-30">
            <img
              src="/products/2-canapes.jpg"
              alt="Perfect Armchair"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overlay" />

          {/* Content Overlay */}
          <div className="content relative z-10 px-8 md:px-12 flex flex-col justify-center h-full w-full">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-2 tracking-wide">
                FAUTEUIL<br />PARFAIT
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-light italic mb-6">
                Nouvelle Collection
              </p>
              <Link href="/all-products?category=sofas">
                <button className="btn bg-white text-red-600 px-6 md:px-8 py-2 md:py-3 font-serif font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300">
                  ACHETER MAINTENANT
                </button>
              </Link>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Banner 2: Table Sets with Chairs */}
        <Reveal variant="pop" delay={150}>
        <div className="promo-card relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-yellow-900 to-amber-900">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-40">
            <img
              src="/products/1-salle-a-manger.jpg"
              alt="Table Sets with Chairs"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overlay" />

          {/* Content Overlay */}
          <div className="content relative z-10 px-8 md:px-12 flex flex-col justify-center h-full w-full">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-2 tracking-wide">
                ENSEMBLES<br />DE TABLE<br />AVEC<br />CHAISES
              </h2>
              <p className="text-lg md:text-xl text-amber-100 font-light italic mb-6">
                Jusqu&apos;à -30%
              </p>
              <Link href="/all-products?category=chambres">
                <button className="btn bg-white text-amber-900 px-6 md:px-8 py-2 md:py-3 font-serif font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300">
                  ACHETER MAINTENANT
                </button>
              </Link>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
      
      <div className="h-6 md:h-12 bg-white"></div>
    </section>
  )
}
