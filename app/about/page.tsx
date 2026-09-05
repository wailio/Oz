"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import LuxuryHeader from "@/components/luxury-header"

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "up" | "left" | "right" | "scale"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-variant": variant,
  } as CSSProperties

  return (
    <div ref={ref} className={`luxury-reveal ${isVisible ? "luxury-reveal-visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  )
}

function RevealOnLoad({ children, className = "", delay = 0, variant = "up" }: Omit<Parameters<typeof Reveal>[0], "children"> & { children: ReactNode }) {
  return (
    <div
      className={`luxury-reveal luxury-reveal-visible ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-variant": variant } as CSSProperties}
    >
      {children}
    </div>
  )
}

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Footer from "@/components/footer"
import { Diamond, Feather, Headset } from "lucide-react"

export default function AboutPage() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null)
  const resetValue = (index: number) => {
    setExpandedValue((current) => (current === index ? null : index))
  }

  return (
    <main className="min-h-screen bg-white">
      <LuxuryHeader />
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-8 px-4 md:pt-48 md:pb-16 md:px-12 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f]">
        <div className="max-w-6xl mx-auto text-center">
          <RevealOnLoad delay={80}>
            <h1 className="whitespace-nowrap text-xl md:text-4xl font-serif font-bold text-white mb-3">
              À Propos Oz meuble
            </h1>
            <div className="mx-auto mt-2 h-7 w-full max-w-[320px] overflow-visible opacity-90 md:mt-3 md:max-w-[440px]" aria-hidden="true">
              <svg viewBox="0 0 360 34" className="about-underline h-full w-full overflow-visible">
                <path d="M7 18 C55 5, 83 28, 128 17 S205 6, 246 18 S306 27, 353 10" fill="none" stroke="#d4af5f" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
          </RevealOnLoad>
          <RevealOnLoad delay={220}>
            <p className="text-xs md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="md:hidden">Des collections de mobilier sélectionnées pour allier élégance, confort et design intemporel.</span><span className="hidden md:inline">Nous nous consacrons à apporter le luxe et l&apos;élégance à votre maison grâce à des collections de mobilier minutieusement sélectionnées qui allient design intemporel et confort moderne.</span>
            </p>
          </RevealOnLoad>
        </div>
      </section>
      <style>{`
        .about-underline path {
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          animation: heroUnderlineDraw 700ms ease-out 900ms forwards;
        }
        @keyframes heroUnderlineDraw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-underline path { stroke-dashoffset: 0; animation: none; }
        }
      `}</style>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delay={0}>
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-serif font-bold text-white md:text-3xl"><span>Notre Mission</span><img src="/logo-oz-meuble.png" alt="" className="h-8 w-8 object-contain md:hidden" /></h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-gray-300 text-xs md:text-lg leading-relaxed mb-4 font-light">
                  Chez Oz meuble, nous croyons que votre maison doit refléter votre style personnel et vos valeurs. Notre mission est de fournir des meubles exceptionnels qui transforment les espaces en havres de confort et d&apos;élégance.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-gray-300 text-xs md:text-lg leading-relaxed font-light">
                  Nous travaillons avec les meilleurs artisans et fournisseurs pour garantir que chaque pièce de notre collection répond à nos normes rigoureuses en matière de qualité, de conception et de durabilité.
                </p>
              </Reveal>
            </div>
            <Reveal delay={450} variant="scale" className="hidden items-center justify-center md:flex">
              <div className="mission-logo-float">
                <img
                  src="/logo-oz-meuble.png"
                  alt="Logo Oz meuble"
                  className="mission-logo-sway h-auto w-full max-w-[220px] object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#171717] px-0 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-0">
          <Reveal>
            <h2 className="mb-14 text-center font-serif text-2xl font-medium tracking-wide text-[#f5f2ea] md:text-3xl">Nos Valeurs Fondamentales</h2>
          </Reveal>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
            <Reveal delay={0}>
              <div onClick={() => resetValue(0)} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") resetValue(0) }} className={`group flex h-full min-h-[300px] cursor-pointer flex-col border border-[#403c35] bg-[#121212] p-6 transition-colors duration-500 hover:border-[#a8864e] md:p-10 ${expandedValue === 0 ? "border-[#a8864e]" : ""}`}>
                <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#8e7040] text-[#b4945b]"><Diamond aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} /></div>
                <div className="mb-4 flex flex-col items-start gap-3"><h3 className="font-serif text-xl font-medium tracking-wide text-[#f5f2ea] md:text-2xl">Excellence</h3></div><div className="mb-8 h-px w-12 bg-[#a8823f]" aria-hidden="true" />
                <p className={`${expandedValue === 0 ? "line-clamp-none" : "line-clamp-2"} text-sm font-light leading-6 tracking-wide text-[#aaa59b] md:text-base`}>Nous poursuivons l&apos;excellence dans chaque détail, de la conceptualisation du design à la livraison finale. La qualité n&apos;est jamais compromise.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div onClick={() => resetValue(1)} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") resetValue(1) }} className={`group flex h-full min-h-[300px] cursor-pointer flex-col border border-[#403c35] bg-[#121212] p-6 transition-colors duration-500 hover:border-[#a8864e] md:p-10 ${expandedValue === 1 ? "border-[#a8864e]" : ""}`}>
                <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#8e7040] text-[#b4945b]"><Feather aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} /></div>
                <div className="mb-4 flex flex-col items-start gap-3"><h3 className="font-serif text-xl font-medium tracking-wide text-[#f5f2ea] md:text-2xl">Authenticité</h3></div><div className="mb-8 h-px w-12 bg-[#a8823f]" aria-hidden="true" />
                <p className={`${expandedValue === 1 ? "line-clamp-none" : "line-clamp-2"} text-sm font-light leading-6 tracking-wide text-[#aaa59b] md:text-base`}>Chaque pièce raconte une histoire. Nous croyons en un design authentique qui résiste à l&apos;épreuve du temps, sans tendances ni artifices.</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div onClick={() => resetValue(2)} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") resetValue(2) }} className={`group flex h-full min-h-[300px] cursor-pointer flex-col border border-[#403c35] bg-[#121212] p-6 transition-colors duration-500 hover:border-[#a8864e] md:p-10 ${expandedValue === 2 ? "border-[#a8864e]" : ""}`}>
                <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#8e7040] text-[#b4945b]"><Headset aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} /></div>
                <div className="mb-4 flex flex-col items-start gap-3"><h3 className="font-serif text-xl font-medium tracking-wide text-[#f5f2ea] md:text-2xl">Service Client</h3></div><div className="mb-8 h-px w-12 bg-[#a8823f]" aria-hidden="true" />
                <p className={`${expandedValue === 2 ? "line-clamp-none" : "line-clamp-2"} text-sm font-light leading-6 tracking-wide text-[#aaa59b] md:text-base`}>Votre satisfaction est notre priorité. Nous offrons un soutien complet avant, pendant et après votre achat.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal variant="left" className="order-2 md:order-1">
              <div
              className="overflow-hidden rounded-[10px] bg-[#2a2a2a] md:h-96"
              style={{
                boxShadow: "-20px 20px 40px rgba(0,0,0,0.45), 20px -10px 50px rgba(212,175,95,0.18)",
                border: "1px solid rgba(212,175,95,0.25)",
              }}
            >
              <Image
                src="/about-history.jpg"
                alt="Our Story"
                width={500}
                height={400}
                className="h-auto w-full object-contain md:h-full md:object-cover"
              />
              </div>
            </Reveal>
            <Reveal variant="right" className="order-1 md:order-2">
              <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Notre Histoire</h2>
              <p className="text-gray-300 text-xs md:text-lg leading-relaxed mb-4 font-light">
                Fondée avec une vision de redéfinir le mobilier de luxe, Oz meuble a commencé comme un projet passionné pour apporter des pièces soigneusement sélectionnées et de haute qualité aux clients discernants.
              </p>
              <p className="text-gray-300 text-xs md:text-lg leading-relaxed mb-4 font-light">
                Au fil des années, nous sommes devenus une destination de confiance pour le mobilier de luxe, reconnue pour notre engagement envers un design exceptionnel, un savoir-faire de qualité et un service client exceptionnel.
              </p>
              <p className="text-gray-300 text-xs md:text-lg leading-relaxed font-light">
                Aujourd&apos;hui, nous continuons à évoluer, en recherchant constamment des innovations en matière de design tout en honorant les principes intemporels qui définissent la vie de luxe.
              </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Prêt à Transformer Votre Espace ?</h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light">
              Explorez nos collections soigneusement sélectionnées et découvrez les pièces parfaites pour élever votre maison.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/all-products">
              <Button className="bg-[#8b7344] hover:bg-[#6f5b35] text-white px-8 py-3 font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
                Explorer Collection
              </Button>
            </a>
            <a href="/contact">
              <Button className="border-2 border-[#8b7344] text-white hover:bg-[#8b7344] hover:text-white px-8 py-3 font-semibold cursor-pointer transition-all duration-300">
                Nous Contacter
              </Button>
            </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
