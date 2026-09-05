'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function ShowcaseHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.showcase-item')
          elements.forEach((el, index) => {
            const delay = index * 0.2
            ;(el as HTMLElement).style.animation = `popInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards`
            ;(el as HTMLElement).style.opacity = '0'
          })
        }
      })
    }, { threshold: 0.1 })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes slideFromLeftBounce {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotate(-5deg);
          }
          60% {
            transform: translateX(10px) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes slideFromRightBounce {
          0% {
            opacity: 0;
            transform: translateX(100px) rotate(5deg);
          }
          60% {
            transform: translateX(-10px) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes scaleUpFade {
          0% {
            opacity: 0;
            transform: scale(0.6) translateY(40px);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes lightPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 165, 116, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(212, 165, 116, 0.5);
          }
        }

        @keyframes floatGently {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .showcase-item:nth-child(1) {
          opacity: 0;
          animation: slideFromLeftBounce 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .showcase-item:nth-child(2) {
          opacity: 0;
          animation: scaleUpFade 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }

        .showcase-item:nth-child(3) {
          opacity: 0;
          animation: slideFromRightBounce 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }

        .showcase-item:hover {
          animation: lightPulse 2s infinite !important;
        }

        .showcase-image-left {
          animation: none;
        }

        .showcase-image-right {
          animation: none;
        }

        .showcase-image-left:hover,
        .showcase-image-right:hover {
          animation: none !important;
        }

        .decorator-shape {
          animation: floatGently 5s ease-in-out infinite;
        }

        .decorator-shape.rotate {
          animation: floatGently 6s ease-in-out infinite;
        }
      `}</style>

      {/* Desktop - 3 Column Layout */}
      <section ref={containerRef} className="hidden md:block py-0 bg-white relative overflow-hidden">
        {/* Decorative luxury shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#a98661]/20 rounded-full decorator-shape" style={{ opacity: 0.6 }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-[#a98661]/20 rotate-45 decorator-shape" style={{ opacity: 0.5 }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-[#a98661]/30 decorator-shape rotate" style={{ opacity: 0.4 }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 border-2 border-[#a98661]/15 rounded-3xl decorator-shape" style={{ opacity: 0.5 }}></div>

        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#a98661" strokeWidth="2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#a98661" strokeWidth="2" />
        </svg>

        <div className="flex items-center justify-center gap-8 px-6 lg:px-12 min-h-screen relative z-10">
          {/* Left Image */}
          <div className="showcase-item flex-shrink-0 w-1/4 flex flex-col justify-between relative overflow-hidden group h-[500px] cursor-pointer transition-all duration-500 select-none">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Ik6kS6vRPmOFU4gcSF7z0UhAZDGShz.jpg"
              alt="Modern Living Room"
              className="absolute inset-0 w-full h-full object-cover showcase-image-left group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

            <div className="relative z-20 px-6 pt-8 flex flex-col flex-1 justify-between">
              <div className="text-white">
                <p className="text-xs font-serif mb-1 opacity-80 group-hover:opacity-100 transition-opacity">PREMIUM INTERIORS</p>
                <p className="text-lg font-serif font-bold group-hover:text-yellow-100 transition-colors">2026</p>
              </div>
            </div>

            <div className="relative z-20 px-6 pb-8">
              <h2 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors">MODERN LIVING</h2>
              <p className="text-sm font-serif text-white/90 mb-4">Transform your space with curated contemporary designs</p>
              <Link href="/all-products?category=interior">
                <button className="border-2 border-white text-white px-5 py-2 font-serif uppercase text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer group-hover:shadow-lg">
                  MORE
                </button>
              </Link>
            </div>
          </div>

          {/* Center Content - Promotional Banners */}
          <div className="showcase-item center-content flex-1 grid grid-cols-2 gap-0 relative z-20 overflow-hidden">
            {/* Banner 1: Sofas/Canapés */}
            <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-[500px]">
              <div className="absolute inset-0 opacity-30">
                <img
                  src="/products/2-canapes.jpg"
                  alt="Canapés"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 px-8 flex flex-col justify-center h-full w-full max-w-md">
                <div>
                  <h2 className="text-4xl font-serif font-light text-white mb-2 tracking-wide">
                    PERFECT<br />ARMCHAIR
                  </h2>
                  <p className="text-lg text-gray-300 font-light italic mb-6">
                    New Collection
                  </p>
                  <Link href="/all-products?category=sofas">
                    <button className="bg-white text-red-600 px-6 py-2 font-serif font-bold text-xs tracking-widest uppercase hover:bg-gray-100 transition-all duration-300">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Banner 2: Dining/Salle à Manger */}
            <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-yellow-900 to-amber-900 min-h-[500px]">
              <div className="absolute inset-0 opacity-40">
                <img
                  src="/products/1-salle-a-manger.jpg"
                  alt="Table Sets"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 px-8 flex flex-col justify-center h-full w-full max-w-md">
                <div>
                  <h2 className="text-4xl font-serif font-light text-white mb-2 tracking-wide">
                    TABLE<br />SETS<br />WITH<br />CHAIRS
                  </h2>
                  <p className="text-lg text-amber-100 font-light italic mb-6">
                    Up To -30%
                  </p>
                  <Link href="/all-products?category=chairs">
                    <button className="bg-white text-amber-900 px-6 py-2 font-serif font-bold text-xs tracking-widest uppercase hover:bg-gray-100 transition-all duration-300">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="showcase-item flex-shrink-0 w-1/4 flex flex-col justify-between relative overflow-hidden group h-[500px] cursor-pointer transition-all duration-500 select-none">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-YEUeqvNEaVRSsuLyvMGCwxIJjDlhDS.jpg"
              alt="Contemporary Design"
              className="absolute inset-0 w-full h-full object-cover showcase-image-right group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

            <div className="relative z-20 px-6 pt-8">
              {/* Empty space for balance */}
            </div>

            <div className="relative z-20 px-6 pb-8">
              <h2 className="text-2xl font-serif font-bold text-white mb-2 text-right group-hover:text-yellow-100 transition-colors">DESIGNER SPACES</h2>
              <p className="text-sm font-serif text-white/90 mb-4 text-right">Luxury meets functionality in every piece</p>
              <div className="flex justify-end">
                <Link href="/all-products?category=kitchen">
                  <button className="border-2 border-white text-white px-5 py-2 font-serif uppercase text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer group-hover:shadow-lg">
                    MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile - Stacked Sections */}
      <section className="md:hidden bg-white relative overflow-hidden">
        {/* Small decorative shapes for mobile */}
        <div className="absolute top-10 left-5 w-16 h-16 border border-[#a98661]/20 rounded-full decorator-shape pointer-events-none" style={{ opacity: 0.4 }}></div>
        <div className="absolute bottom-10 right-5 w-20 h-20 border border-[#a98661]/20 rotate-45 decorator-shape pointer-events-none" style={{ opacity: 0.3 }}></div>
        
        {/* Left section */}
        <div className="showcase-item relative h-64 overflow-hidden flex flex-col justify-between cursor-pointer">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Ik6kS6vRPmOFU4gcSF7z0UhAZDGShz.jpg"
            alt="Modern Living Room"
            className="absolute inset-0 w-full h-full object-cover showcase-image-left"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 px-3 pt-4 flex-1">
            <p className="text-xs font-serif text-white/80">LUXURY 2026</p>
          </div>

          <div className="relative z-10 px-3 pb-4">
            <h2 className="text-base font-serif font-bold text-white mb-2">MODERN LIVING</h2>
            <Link href="/all-products?category=interior">
              <button className="border border-white text-white px-3 py-1.5 font-serif uppercase text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all cursor-pointer">
                MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Center section - Promotional Banners */}
        <div className="showcase-item grid grid-cols-1 gap-0 relative z-20">
          {/* Banner 1: Sofas/Canapés */}
          <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 opacity-30">
              <img
                src="/products/2-canapes.jpg"
                alt="Canapés"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 px-4 flex flex-col justify-center h-full w-full">
              <div>
                <h2 className="text-2xl font-serif font-light text-white mb-1 tracking-wide">
                  PERFECT<br />ARMCHAIR
                </h2>
                <p className="text-sm text-gray-300 font-light italic mb-3">
                  New Collection
                </p>
                <Link href="/all-products?category=sofas">
                  <button className="bg-white text-red-600 px-4 py-1.5 font-serif font-bold text-xs tracking-widest uppercase hover:bg-gray-100 transition-all duration-300">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Banner 2: Dining/Salle à Manger */}
          <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-yellow-900 to-amber-900">
            <div className="absolute inset-0 opacity-40">
              <img
                src="/products/1-salle-a-manger.jpg"
                alt="Table Sets"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 px-4 flex flex-col justify-center h-full w-full">
              <div>
                <h2 className="text-2xl font-serif font-light text-white mb-1 tracking-wide">
                  TABLE<br />SETS<br />WITH<br />CHAIRS
                </h2>
                <p className="text-sm text-amber-100 font-light italic mb-3">
                  Up To -30%
                </p>
                <Link href="/all-products?category=chairs">
                  <button className="bg-white text-amber-900 px-4 py-1.5 font-serif font-bold text-xs tracking-widest uppercase hover:bg-gray-100 transition-all duration-300">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="showcase-item relative h-64 overflow-hidden flex flex-col justify-between cursor-pointer">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-YEUeqvNEaVRSsuLyvMGCwxIJjDlhDS.jpg"
            alt="Contemporary Design"
            className="absolute inset-0 w-full h-full object-cover showcase-image-right"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 px-3 pt-4 flex-1"></div>

          <div className="relative z-10 px-3 pb-4">
            <h2 className="text-base font-serif font-bold text-white mb-2 text-right">DESIGNER SPACES</h2>
            <div className="flex justify-end">
              <Link href="/all-products?category=kitchen">
                <button className="border border-white text-white px-3 py-1.5 font-serif uppercase text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all cursor-pointer">
                  MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
