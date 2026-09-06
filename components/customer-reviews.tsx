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
  const hasAutoScrolled = useRef(false)

  useEffect(() => {
    const element = scrollContainerRef.current
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!element || isMobile) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAutoScrolled.current || prefersReducedMotion) return
      hasAutoScrolled.current = true
      window.setTimeout(() => element.scrollBy({ left: 350, behavior: "smooth" }), 250)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

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
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <section dir="ltr" id="offres" className="bg-[#0A0A0A] px-4 py-12 md:bg-white md:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-4 flex h-auto items-start justify-center md:mb-8 md:h-64">
            <h2 className="pt-4 text-center font-serif text-2xl font-bold text-[#F0EDE6] md:hidden md:pt-8 md:text-4xl">AVIS CLIENTS</h2>
            <div className="hidden w-full items-center gap-12 md:flex" aria-label="Laisser un avis Google">
              <div className="relative flex min-w-0 flex-1 flex-col justify-center pb-8 pl-4 lg:pl-10">
                <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.32em] text-[#bd8b3d]">AVIS CLIENTS</p>
                <h2 className="max-w-[520px] font-serif text-4xl font-normal leading-[1.08] text-gray-900 lg:text-5xl">
                  Votre avis<br />compte pour nous.
                </h2>
              </div>
              <div className="relative shrink-0 rounded-[14px] border border-[#c9964b] bg-white p-4 shadow-[0_12px_24px_rgba(90,64,25,0.1)] lg:w-[430px] lg:p-5">
                <div className="flex items-start gap-4">
                  <img src="/google-logo.png" alt="Google" className="h-12 w-12 object-contain" />
                  <div className="pt-0.5"><p className="font-sans text-[10px] uppercase tracking-wide text-gray-500">LAISSEZ-NOUS UN AVIS SUR</p><p className="font-serif text-3xl text-gray-900">Google</p></div>
                </div>
                <div className="mt-5 flex gap-2 border-b border-gray-100 pb-5" aria-label="5 étoiles">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-[#c98e34] text-[#c98e34]" aria-hidden="true" />)}</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Mobenia+Meuble" target="_blank" rel="noopener noreferrer" className="mt-2 flex h-8 items-center justify-between rounded-md bg-[#c89543] px-3 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#ad7930] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89543] focus-visible:ring-offset-2"><span>DONNER MON AVIS</span><span className="text-2xl font-normal" aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
        {/* Desktop - Horizontal Scroll with Mouse Hover Controls */}
        <div className="hidden md:block relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 flex flex-col items-start text-left p-6 rounded-lg bg-gray-50 border border-gray-200"
              >
                <img src={review.image} alt={`Avis de ${review.author}`} className="mb-4 h-auto w-full rounded-md border border-gray-200 object-contain" />
                <div className="flex gap-1 mb-3 justify-start">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium text-sm mb-3 leading-relaxed">
                  {review.text}
                </p>
                <p className="text-gray-900 font-semibold text-sm">{review.author}</p>
                <p className="text-gray-500 text-xs">{review.role}</p>
                <p className="text-gray-500 text-xs">{review.years}</p>
              </div>
            ))}
          </div>

          {/* Hover Controls - Left */}
          <button
            onClick={() => scroll('left')}
            aria-label="Avis précédents"
            className="absolute left-0 top-1/2 z-10 -translate-x-16 -translate-y-1/2 rounded-full bg-[#8b6508] p-3 text-white opacity-0 transition-opacity duration-300 hover:bg-[#654806] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6508] focus-visible:ring-offset-2 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Hover Controls - Right */}
          <button
            onClick={() => scroll('right')}
            aria-label="Avis suivants"
            className="absolute right-0 top-1/2 z-10 translate-x-16 -translate-y-1/2 rounded-full bg-[#8b6508] p-3 text-white opacity-0 transition-opacity duration-300 hover:bg-[#654806] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6508] focus-visible:ring-offset-2 group-hover:opacity-100"
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
