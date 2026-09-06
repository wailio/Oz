'use client'

import { useRef } from 'react'
import { Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const reviews = [
  { text: 'Très bien reçu 10/10 merci mon fils', author: 'redouane naoui', rating: 5 },
  { text: "J'ai bien reçu ma commande merci de votre professionnalisme", author: 'Omar Merfoud', rating: 5 },
  { text: 'Très bien reçu merci', author: 'Naoui Lila', rating: 5 },
  { text: 'Merci pour votre sérieux', author: 'Islam Abriche', rating: 5 },
  { text: 'Les pro bravo Oz', author: 'Kouider Khadidja', rating: 5 },
  { text: '10/10', author: 'Isseri Nassereddine', rating: 5 },
  { text: '10/10', author: 'Rania Dirar', rating: 5 },
  { text: 'Meilleur site', author: 'Khalouf Aziz', rating: 4 },
  { text: 'Vous avez un livreur très charmant', author: 'Moncef djelloul Djafer cherif', rating: 5 },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className={`h-4 w-4 ${index < rating ? 'fill-[#a8823f] text-[#a8823f]' : 'text-[#4b4b4b]'}`} aria-hidden="true" />
      ))}
    </div>
  )
}

export default function CustomerReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({ left: direction === 'right' ? 330 : -330, behavior: 'smooth' })
  }

  return (
    <section dir="ltr" id="offres" className="bg-[#0A0A0A] px-4 py-14 text-white md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-center md:justify-between">
            <div className="shrink-0">
              <h2 className="font-serif text-3xl font-normal leading-tight text-[#F0EDE6] md:text-5xl">Ce Que Disent Nos Clients</h2>
              <div className="mt-5 h-px w-14 bg-[#F0EDE6]" />
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-end">
              <div className="flex w-full items-center gap-4 rounded-[5px] border border-[rgba(212,175,95,0.2)] bg-[#161616] px-4 py-3 md:w-auto md:min-w-[510px] md:gap-5">
                <img src="/google-logo.png" alt="Google" className="h-5 w-5 shrink-0 object-contain" />
                <div className="shrink-0 leading-none"><p className="text-[8px] uppercase tracking-[0.12em] text-[#777]">LAISSEZ-NOUS UN AVIS SUR</p><p className="mt-1 text-xl text-[#F0EDE6]">Google</p></div>
                <Stars rating={5} />
                <a href="https://www.google.com/maps/search/?api=1&query=Oz+meuble+Birkhadem" target="_blank" rel="noopener noreferrer" className="ml-auto flex shrink-0 items-center gap-2 bg-[#a8823f] px-[18px] py-[10px] text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#c19a55]">DONNER MON AVIS <span className="text-base" aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-center gap-3 md:gap-4">
            <button onClick={() => scroll('left')} aria-label="Avis précédents" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] bg-[#E8E6E0] text-[#1A1A1A] transition-colors hover:bg-white"><span aria-hidden="true">‹</span></button>
            <div ref={scrollContainerRef} className="flex min-w-0 snap-x gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {reviews.map((review) => (
                <article key={review.author} className="flex min-h-[192px] w-[280px] flex-shrink-0 snap-start flex-col border border-[rgba(255,255,255,0.08)] bg-[#141414] p-6 md:w-[calc((100%-60px)/4)]">
                  <Stars rating={review.rating} />
                  <p className="mt-5 text-sm leading-6 text-[#B0B0B0]">&quot;{review.text}&quot;</p>
                  <p className="mt-auto pt-6 text-sm font-bold text-[#F0EDE6]">{review.author}</p>
                </article>
              ))}
            </div>
            <button onClick={() => scroll('right')} aria-label="Avis suivants" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] bg-[#E8E6E0] text-[#1A1A1A] transition-colors hover:bg-white"><span aria-hidden="true">›</span></button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
