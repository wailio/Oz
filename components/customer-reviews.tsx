'use client'

import { useEffect, useState, useRef } from 'react'
import { Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const reviews = [
  { image: "/review-rahim.png", author: "Rahim Hamdi", role: "1 avis", rating: 5, years: "il y a 3 ans", text: "Soyez les bienvenus" },
  { image: "/review-mehdi.png", author: "Mehdi", role: "", rating: 5, years: "il y a 3 mois", text: "" },
  { image: "/review-zakaria.png", author: "ZAKARIA BENAMARA", role: "1 avis · 1 photo", rating: 2, years: "il y a 8 mois", text: "Bon produit" },
  { image: "/review-illyes.png", author: "Illyes Hamdi", role: "1 avis", rating: 5, years: "il y a 3 ans", text: "" },
]

const mobileReviews = [
  { author: "redouane naoui", rating: 5, text: "Très bien reçu 10/10 merci mon fils" },
  { author: "Omar Merfoud", rating: 5, text: "J'ai bien reçu ma commande merci de votre professionnalisme" },
  { author: "Naoui Lila", rating: 5, text: "Très bien reçu merci" },
  { author: "Islam Abriche", rating: 5, text: "Merci pour votre sérieux" },
  { author: "Kouider Khadidja", rating: 5, text: "Les pro bravo Oz" },
  { author: "Isseri Nassereddine", rating: 5, text: "10/10" },
  { author: "Rania Dirar", rating: 5, text: "10/10" },
  { author: "Khalouf Aziz", rating: 4, text: "Meilleur site" },
  { author: "Moncef djelloul Djafer cherif", rating: 5, text: "Vous avez un livreur très charmant" },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!isMobile || prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % mobileReviews.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    const card = container?.firstElementChild
    if (!container || !(card instanceof HTMLElement)) return

    const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0
    const scrollAmount = card.getBoundingClientRect().width + gap
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  return (
    <section dir="ltr" id="offres" className="bg-[#0A0A0A] px-4 py-12 md:px-6 md:py-20">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-4 flex h-auto items-start justify-center md:mb-8 md:h-64">
            <h2 className="pt-4 text-center font-serif text-2xl font-bold text-[#F0EDE6] md:hidden md:pt-8 md:text-4xl">AVIS CLIENTS</h2>
            <div className="hidden w-full items-start justify-between md:flex" aria-label="Laisser un avis Google">
              <div className="pl-4 pt-4 lg:pl-10">
                <h2 className="font-serif text-4xl font-normal leading-tight text-[#F0EDE6] lg:text-5xl">Ce Que Disent Nos Clients</h2>
                <div className="mt-6 h-px w-14 bg-[#F0EDE6]" />
              </div>
              <div className="flex w-[220px] flex-col gap-2 rounded-[5px] border border-[#3b3325] bg-[#171717] px-4 py-3">
                <div className="flex items-start gap-3">
                  <img src="/google-logo.png" alt="Google" className="mt-1 h-5 w-5 shrink-0 object-contain" />
                  <div className="min-w-0 flex-1"><p className="font-sans text-[8px] uppercase tracking-[0.16em] text-[#807b72]">LAISSEZ-NOUS UN AVIS SUR</p><p className="font-sans text-xl leading-5 text-[#F0EDE6]">Google</p></div>
                </div>
                <div className="flex gap-0.5" aria-label="5 étoiles">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-4 w-4 fill-[#b4883d] text-[#b4883d]" aria-hidden="true" />)}</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Mobenia+Meuble" target="_blank" rel="noopener noreferrer" className="flex h-10 w-full items-center justify-between bg-[#b4883d] px-3 font-sans text-[9px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#956e2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b4883d] focus-visible:ring-offset-2"><span>DONNER MON AVIS</span><span className="text-xl font-normal" aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
        {/* Desktop - Horizontal Scroll with Mouse Hover Controls */}
        <div className="hidden md:block relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-hidden scroll-smooth px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {mobileReviews.map((review) => (
              <div key={review.author} className="flex h-52 w-[calc((100%-3.75rem)/4)] shrink-0 flex-col items-start border border-[#292929] bg-[#151515] px-6 py-6 text-left">
                <div className="mb-5 flex gap-1" aria-label={`${review.rating} étoiles`}>
                  {Array.from({ length: review.rating }, (_, index) => <Star key={index} className="h-4 w-4 fill-[#b4883d] text-[#b4883d]" aria-hidden="true" />)}
                </div>
                <p className="font-sans text-sm leading-6 text-[#d0d0d0]">&quot;{review.text}&quot;</p>
                <p className="mt-auto font-sans text-sm font-bold text-[#F0EDE6]">{review.author}</p>
              </div>
            ))}
          </div>

          {/* Hover Controls - Left */}
          <button
            onClick={() => scroll('left')}
            aria-label="Avis précédents"
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-[#F0EDE6] p-3 text-[#171717] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b4883d] focus-visible:ring-offset-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Hover Controls - Right */}
          <button
            onClick={() => scroll('right')}
            aria-label="Avis suivants"
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 bg-[#F0EDE6] p-3 text-[#171717] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b4883d] focus-visible:ring-offset-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile - Simplified Carousel */}
        <div className="md:hidden">
          <div className="relative mx-auto max-w-sm px-5">
            <div className="min-h-[230px] rounded-xl border border-white/[0.08] bg-[#161616] p-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-opacity duration-400 ease-in-out">
              <div className="mb-5 flex justify-center gap-1" aria-label={`${mobileReviews[currentIndex].rating} étoiles`}>
                {Array.from({ length: mobileReviews[currentIndex].rating }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#A8823F] text-[#A8823F]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-pretty font-sans text-sm leading-6 text-[#B0B0B0]">&quot;{mobileReviews[currentIndex].text}&quot;</p>
              <p className="mt-6 font-sans text-sm font-bold text-[#F0EDE6]">{mobileReviews[currentIndex].author}</p>
            </div>
            <button
              onClick={() => setCurrentIndex((previous) => (previous - 1 + mobileReviews.length) % mobileReviews.length)}
              aria-label="Avis précédent"
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#A8823F] p-2.5 text-white shadow-lg transition-colors hover:bg-[#8f6d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8823F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCurrentIndex((previous) => (previous + 1) % mobileReviews.length)}
              aria-label="Avis suivant"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#A8823F] p-2.5 text-white shadow-lg transition-colors hover:bg-[#8f6d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8823F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2" aria-label="Choisir un avis">
            {mobileReviews.map((review, index) => (
              <button key={review.author} onClick={() => setCurrentIndex(index)} aria-label={`Afficher l'avis de ${review.author}`} aria-current={index === currentIndex ? "true" : undefined} className={`h-2 w-2 rounded-full border transition-colors ${index === currentIndex ? "border-[#A8823F] bg-[#A8823F]" : "border-[#737373] bg-transparent"}`} />
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
