"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { Headphones, ShieldCheck, Sparkles, Sofa } from "lucide-react"
import type { LucideIcon } from "lucide-react"

function FeatureCard({ icon: Icon, title, children, tall = false }: { icon: LucideIcon; title: string; children: React.ReactNode; tall?: boolean }) {
  return (
    <div className={`group flex ${tall ? "h-80" : "h-64"} flex-col justify-between rounded-[9px] border border-[rgba(0,0,0,0.06)] bg-[#E8E6E0] p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#c8a264]`}>
      <div>
        <Icon className="mb-7 size-8 stroke-[1.15] text-[#c8a264] transition-transform duration-500 group-hover:scale-105" aria-hidden="true" />
        <div className="mb-4 h-px w-8 bg-[#c8a264]" />
        <h3 className="font-serif text-[22px] font-normal text-[#0a0a0a]">{title}</h3>
        <p className="mt-5 text-sm leading-[1.6] text-[#555555]">{children}</p>
      </div>
      <span className="flex translate-x-0 items-center justify-end text-lg text-[#c8a264] opacity-70 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true">→</span>
    </div>
  )
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      
      setMousePos({ x, y })

      const icons = containerRef.current.querySelectorAll('.icon-3d')
      icons.forEach((icon) => {
        const el = icon as HTMLElement
        const rotateX = y * 15
        const rotateY = x * 15
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`
      })
    }

    const handleMouseLeave = () => {
      const icons = containerRef.current?.querySelectorAll('.icon-3d')
      icons?.forEach((icon) => {
        const el = icon as HTMLElement
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
      })
    }

    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)
    container?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove)
      container?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="bg-[#111827] px-4 py-8 md:bg-white md:px-8 md:py-24 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-16 text-center">
          <Reveal>
            <h2 className="text-xl font-serif font-semibold text-white md:text-[44px] md:text-[#0a0a0a]">
              Pourquoi <span className="text-[#a98661] md:hidden">nous choisir</span><span className="hidden md:inline text-[#a98661]">choisir Oz meuble</span>
            </h2>
          </Reveal>
        </div>

        {/* Mobile Layout - Simple List */}
        <div className="md:hidden space-y-0">
          <Reveal variant="pop" delay={0}>
          <div className="bg-[#1B2433] p-3 border-b border-gray-600 flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <div className="text-xl text-[#a98661] icon-3d transition-transform duration-200">✦</div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">Solutions Complètes</h3>
              <p className="text-[11px] text-gray-300">Gestion complète de votre projet</p>
            </div>
          </div>
          </Reveal>
          <Reveal variant="pop" delay={100}>
          <div className="bg-[#1B2433] p-3 border-b border-gray-600 flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <div className="text-xl text-[#a98661] icon-3d transition-transform duration-200">◆</div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">Support 24/7</h3>
              <p className="text-[11px] text-gray-300">Assistance continue et fiable</p>
            </div>
          </div>
          </Reveal>
          <Reveal variant="pop" delay={200}>
          <div className="bg-[#1B2433] p-3 flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <div className="text-xl text-[#a98661] icon-3d transition-transform duration-200">★</div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">Qualité Supérieure</h3>
              <p className="text-[11px] text-gray-300">Meilleurs matériaux garantis</p>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Desktop Layout - editorial luxury grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6">
          <Reveal variant="pop" delay={0}>
            <FeatureCard icon={Sparkles} title="Solutions Complètes">
              Nous gérons chaque aspect de votre projet d&apos;ameublement, vous faisant gagner du temps et des ressources.
            </FeatureCard>
          </Reveal>
          <Reveal variant="pop" delay={100}>
            <FeatureCard icon={Headphones} title="Support Après-Vente">
              Nous nous engageons à fournir un support continu et un service après-vente pour répondre à vos besoins.
            </FeatureCard>
          </Reveal>
          <Reveal variant="pop" delay={200}>
            <FeatureCard icon={ShieldCheck} title="Absence de Restrictions">
              Nous nous associons à tous les fournisseurs pour offrir la plus large sélection de solutions d&apos;ameublement.
            </FeatureCard>
          </Reveal>
          <Reveal variant="pop" delay={300} className="md:col-span-2">
            <Link
              href="/about"
              className="group relative flex h-80 items-end overflow-hidden rounded-[9px] border border-[#8c6c3e]/70 bg-cover bg-center transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a264]"
              style={{
                backgroundImage: "none",
              }}
            >
              <div className="absolute inset-[-2%] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]" style={{ backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%206%20sept.%202026%2C%2015_02_36-rWE2FAXbMloFB0paRmCb97icC1WOMZ.png)" }} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,22,36,0.88)_0%,rgba(15,22,36,0.8)_18%,rgba(15,22,36,0.62)_34%,rgba(15,22,36,0.38)_50%,rgba(15,22,36,0.16)_66%,rgba(15,22,36,0.04)_82%,transparent_100%)] transition-opacity duration-700 group-hover:opacity-85" />
              <div className="relative z-10 max-w-2xl border-l border-[#c8a264] p-8 text-white">
                <h3 className="font-serif text-3xl font-normal">Qualité Supérieure</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
                  Nos partenariats avec les meilleurs fournisseurs nous donnent accès aux meilleurs matériaux et processus de contrôle qualité.
                </p>
              </div>
            </Link>
          </Reveal>
          <Reveal variant="pop" delay={400}>
            <FeatureCard icon={Sofa} title="Mobilier Personnalisé" tall>
              Nous spécialisons dans la création de meubles sur mesure qui correspondent parfaitement à votre vision unique et vos besoins.
            </FeatureCard>
          </Reveal>
        </div>
      </div>
      <style>{`
        @keyframes mobileIconTurn {
          0%, 12% { transform: rotateY(0deg); }
          28% { transform: rotateY(360deg); }
          100% { transform: rotateY(360deg); }
        }
        @media (max-width: 767px) and (prefers-reduced-motion: no-preference) {
          .icon-3d { animation: mobileIconTurn 3s ease-in-out infinite; transform-style: preserve-3d; }
        }
      `}</style>
    </section>
  )
}
