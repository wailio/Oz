"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Truck, Check } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { useLanguage } from "@/components/language-provider"

export default function Hero() {
  const { locale } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    "/hero-room-1.png",
    "/hero-room-2.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative">
      {/* Main Hero with Rolling Images */}
      <div className="relative w-full h-[520px] md:h-[700px] lg:h-[850px] overflow-hidden">
        {/* Image Carousel */}
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Hero room ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,25,18,0.45)] via-[rgba(30,25,18,0.6)] to-[rgba(30,25,18,0.82)]"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-8 text-center md:px-6 md:pb-0">
          <div className="flex max-w-3xl flex-col items-center">
            <Reveal delay={0}>
              <p className="font-sans text-[5px] font-semibold tracking-[2px] text-[#d4af5f] md:text-[13px] md:tracking-[5px]">MOBENIA FURNITURE</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-1 text-balance leading-none md:mt-[22px]">
                <span className="block font-[family-name:var(--font-playfair)] text-[20px] font-normal leading-tight text-[#f5f2ea] md:text-[30px]">Meubles uniques pour</span>
                <span className={`relative mt-0 inline-block px-1 pb-4 font-normal leading-none text-[#d4af5f] md:mt-2 md:pb-8 ${locale === "ar" ? "font-[family-name:var(--font-amiri)] text-[clamp(2.5rem,11vw,4.8rem)] md:text-[4.5rem]" : "font-[family-name:var(--font-great-vibes)] text-[clamp(3.35rem,15vw,6.5rem)]"}`}>
                  espaces modernes
                  <svg aria-hidden="true" viewBox="0 0 360 34" className="hero-underline absolute bottom-0 left-1/2 h-5 w-[88%] -translate-x-1/2 overflow-visible md:h-7 md:w-[115%]">
                    <path d="M7 18 C55 5, 83 28, 128 17 S205 6, 246 18 S306 27, 353 10" fill="none" stroke="#d4af5f" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-[300px] font-sans text-sm font-normal leading-6 text-[#efece4] md:mt-[38px] md:max-w-[440px] md:text-[17px] md:leading-[1.5]">
                Des meubles conçus pour transformer votre espace
              </p>
            </Reveal>
            <Reveal delay={360}>
              <Link href="/contact" className="mt-5 inline-block md:mt-7">
                <Button className="min-h-11 rounded-[2px] border border-[#d4af5f] bg-[#1E1912] px-5 py-3 font-serif text-[10px] font-normal uppercase tracking-[2px] text-[#d4af5f] shadow-none hover:bg-[#d4af5f] hover:text-[#1E1912] focus-visible:bg-[#d4af5f] focus-visible:text-[#1E1912] md:px-8 md:py-[13px] md:text-xs md:tracking-[3px]">
                  Nous contacter
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Image carousel indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 md:w-10 bg-white"
                  : "w-2 md:w-3 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Delivery Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1E1912] via-[#1E1912] to-[#8b7344] text-white py-4 md:py-6 px-4 md:px-6 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:opacity-70">
        <Reveal delay={480} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="delivery-benefit flex items-center justify-center gap-3">
            <Check className="delivery-benefit-icon w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#7E8EA6]" />
            <span className="text-xs md:text-base font-medium text-white">Livraison + montage dans les 58 wilayas</span>
          </div>
          <div className="delivery-benefit flex items-center justify-center gap-3 [animation-delay:1.1s]">
            <Truck className="delivery-benefit-icon w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#7E8EA6]" />
            <span className="text-xs md:text-base font-medium text-white">Gratuit sur Alger – Blida – Boumerdès – Médéa – Tipaza</span>
          </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        .hero-underline path {
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          animation: heroUnderlineDraw 700ms ease-out 900ms forwards;
        }
        @keyframes heroUnderlineDraw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-underline path { stroke-dashoffset: 0; animation: none; }
        }
      `}</style>
    </section>
  )
}
