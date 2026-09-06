"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { allProducts as catalogProducts, type Product } from "@/lib/products"
import { Reveal } from "@/components/Reveal"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

const arabicProductDescriptions: Record<number, string> = {
  1: "أريكة سرير رمادية واسعة بمقعد عميق وسرير مريح.",
  2: "تكوين معياري فاتح مع أريكة استرخاء ومقاعد صغيرة متناسقة.",
  3: "أريكة زاوية كبيرة من القماش الرمادي مع أريكة استرخاء واسعة.",
  4: "طقم صالون بثلاثة مقاعد مع كراسي وطاولة قهوة بتصميم مميز.",
  5: "صالون دافئ بمقعدين وثلاثة مقاعد مع وسائد زخرفية.",
  6: "مجموعة ECLIPSE الدافئة تضم سريرًا مزدوجًا وطاولتي جانبية وخزانة أدراج بمرآة وخزانة أنيقة. صُممت لخلق غرفة متناغمة ومريحة وراقية.",
  17: "مجموعة ORION تضم سريرًا مزدوجًا وطاولتي جانبية وخزانة أدراج بمرآة وخزانة منزلقة. تصميمها منظم وأنيق وعملي، مع خزانة بعرض 2.20 متر.",
  19: "مجموعة غرفة AYLA تضم سريرًا مزدوجًا وطاولتي جانبية وخزانة أدراج بمرآة وخزانة منزلقة. تصميم أنيق وعملي لغرفة راقية.",
  20: "صالون MINOTTI معياري من القماش الأبيض، صُمم لمساحة واسعة ومريحة وعصرية. تتكيف عناصره مع منزلكم لخلق مساحة معيشة أنيقة ومرحبة.",
  22: "صالون ARISTA من القماش الأبيض العاجي، يضم أرائك وكراسي متناسقة لمساحة معيشة مريحة وراقية.",
  23: "صالون ryna من القماش الفاتح، بمقاعد واسعة وكراسي متناسقة وتفاصيل دافئة لمنزل مرحب.",
  24: "صالون Carolina من القماش الفاتح، بتكوين أنيق وخطوط عصرية ومقاعد مريحة وتشطيبات متقنة.",
  25: "صالون Panda من القماش الأبيض العاجي، مجموعة مرحبة وراقية تضم أريكة وكراسي وتفاصيل زخرفية متناسقة.",
  26: "مجموعة TFK البيضاء تضم سريرًا مزدوجًا وطاولتي جانبية وخزانة أدراج بمرآة وخزانة أنيقة، لغرفة متناغمة ومريحة وراقية.",
  27: "غرفة عصرية مع خزانة ملابس منزلقة ولوح رأس مبطن.",
  28: "حل قابل للتحويل مثالي لغرفة إضافية أنيقة.",
  29: "مجموعة طاولة مستديرة ومقاعد أنيقة لغرفة طعام مشرقة.",
  30: "طاولة زجاجية سوداء قابلة للتمديد مع كراسٍ مبطنة.",
  31: "طاولة من الخشب الصلب مع ستة كراسٍ بطابع كلاسيكي خالد.",
  32: "مجموعة دافئة من خشب البلوط مع طاولة مستطيلة وكراسٍ مريحة.",
  33: "خزانة ملابس بيضاء عصرية بأبواب منزلقة ومساحات تخزين واسعة.",
  34: "خزانة بثلاثة أبواب مع مرايا وعلاقة ملابس وأدراج مدمجة.",
  35: "طاولة قهوة سوداء عصرية بسطح لامع ومساحة تخزين خفية.",
  36: "طاولة جانبية بيضاء بخطوط ناعمة وتشطيب من الخشب الطبيعي.",
  37: "طاولة طعام K&B بخطوط أنيقة، متوفرة بأربعة تشطيبات لتكوين منزل متناغم.",
  38: "طاولة طعام ALBA بخطوط ناعمة وعصرية، مع خيارين أنيقين لتنسيق مساحتكم.",
  39: "طاولة طعام OVALIS بيضاء بتصميم بيضاوي أنيق، مع كراسٍ مريحة لغرفة طعام راقية.",
  40: "طاولة طعام من الزجاج البني، أنيقة ومضيئة، مثالية لغرفة طعام دافئة.",
  41: "طاولة طعام Louzi بيضاء بتصميم أنيق، مع سطح زجاجي وكراسٍ مبطنة لغرفة راقية.",
  42: "طاولة طعام RONDE بسطح زجاجي، متوفرة بالأبيض العاجي والبني لغرفة أنيقة وودية.",
}

interface LegacyProduct {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  description: string
  discount?: number
  category?: "sofas" | "chambres" | "accessories" | "salle-a-manger" | "armoire"
}

const legacyProducts: LegacyProduct[] = [
  // Canapés (Sofas) - ID 1
  {
    id: 1,
    name: "Canapés Sectionnels Beige",
    price: "32,990 DZD",
    originalPrice: "42,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1--lzF5JpbtxjzuoLqkBOnun0vROEqEUM.png",
    description: "Ensemble canapé modulable avec sièges confortables et design contemporain",
    discount: 23,
    category: "sofas"
  },

  // Chambres (Bedrooms) - IDs 2, 3, 4
  {
    id: 2,
    name: "Chambre Bois Massif Complète",
    price: "42,990 DZD",
    originalPrice: "54,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2--LT69Fp8yDeqVesEMnPbV1Vp6dT6vcn.png",
    description: "Ensemble chambre en bois noble avec lit double et armoire",
    discount: 22,
    category: "chambres"
  },
  {
    id: 3,
    name: "Lit Plateforme Beige Premium",
    price: "24,990 DZD",
    originalPrice: "31,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3--xibVNqUSqy8rcbXS9vCakiFKMfHEgW.png",
    description: "Lit design avec tête de lit capitonnée et rangements intégrés",
    discount: 22,
    category: "chambres"
  },
  {
    id: 4,
    name: "Chambre Grise Moderne",
    price: "38,990 DZD",
    originalPrice: "49,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4--PzHUzJJQwqMSmBkQHqnWEAXPuqiGne.png",
    description: "Suite chambre avec miroir et rangements modernes",
    discount: 22,
    category: "chambres"
  },

  // Salle à Manger (Dining) - IDs 5, 6, 7, 8
  {
    id: 5,
    name: "Table Salle à Manger Bois Moderne",
    price: "28,990 DZD",
    originalPrice: "37,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5--fGdAtjdw4UyqcC2kgXsSw95lpD0gH6.png",
    description: "Table de salle à manger avec chaises design et miroir mural",
    discount: 24,
    category: "salle-a-manger"
  },
  {
    id: 6,
    name: "Ensemble Table Bois Sculptée",
    price: "34,990 DZD",
    originalPrice: "44,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6--Lg9J9UmCoaicHqq56OizLZ04FhkrAL.png",
    description: "Table de salle à manger en bois massif avec 6 chaises",
    discount: 22,
    category: "salle-a-manger"
  },
  {
    id: 7,
    name: "Table Marbre Blanc Élégante",
    price: "26,990 DZD",
    originalPrice: "34,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7--HQSBCXxTMXqvTdhwvEh6vE0HRM0ALZ.png",
    description: "Table de salle à manger en marbre blanc avec chaises grises",
    discount: 23,
    category: "salle-a-manger"
  },
  {
    id: 8,
    name: "Table Classique Bois Foncé",
    price: "31,990 DZD",
    originalPrice: "41,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8--vaObrjsnbwwjtgFBSXm7LbD1bzyyzG.png",
    description: "Table de salle à manger élégante avec chaises et miroir",
    discount: 24,
    category: "salle-a-manger"
  },

  // Armoire (Wardrobes) - IDs 9, 10, 11
  {
    id: 9,
    name: "Armoire Coulissante Blanche",
    price: "19,990 DZD",
    originalPrice: "25,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9--WtuPBrTSG9iosuccrJ4MdQerxt5HAb.png",
    description: "Armoire avec portes coulissantes et miroir intégré",
    discount: 23,
    category: "armoire"
  },
  {
    id: 10,
    name: "Armoire Bois Noir Moderne",
    price: "22,990 DZD",
    originalPrice: "29,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10--Oiu63bo4oiKdeIAiICTn24XMtap3xX.png",
    description: "Armoire design avec miroirs coulissants et rangements",
    discount: 23,
    category: "armoire"
  },
  {
    id: 11,
    name: "Armoire Miroir 3 Portes",
    price: "18,990 DZD",
    originalPrice: "24,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11--Eyp1DAPC0P6vfP6JEPlLyb8YsbFQPh.png",
    description: "Armoire à portes coulissantes avec miroir de haute qualité",
    discount: 24,
    category: "armoire"
  },

  // Accessoires (Accessories) - IDs 12, 13, 14, 15, 16
  {
    id: 12,
    name: "Tables Gigognes Blanches",
    price: "8,990 DZD",
    originalPrice: "11,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12--d5ZGimmzW9zP8HXujiuu6ZsDlBQqdb.png",
    description: "Ensemble de 3 tables gigognes en blanc avec pieds naturels",
    discount: 25,
    category: "accessories"
  },
  {
    id: 13,
    name: "Fauteuil Moderne et Table Verre",
    price: "12,990 DZD",
    originalPrice: "16,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13--fq6tyoBjOezfgFP4FmXJuA0Jpkqpnh.png",
    description: "Fauteuil design avec table basse en verre moderne",
    discount: 24,
    category: "accessories"
  },
  {
    id: 14,
    name: "Commode Bois avec Miroir",
    price: "14,990 DZD",
    originalPrice: "19,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14--cgs8MbgIEJUQ7NuZmWwcCgdy9y0YCY.png",
    description: "Commode en bois avec miroir supérieur et rangements",
    discount: 25,
    category: "accessories"
  },
  {
    id: 15,
    name: "Meuble TV Mur Design",
    price: "16,990 DZD",
    originalPrice: "22,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15--B1F5UcTa70JPPUz5bwMumloDnXG7D2.png",
    description: "Unité murale avec vitrine et rangements pour téléviseur",
    discount: 26,
    category: "accessories"
  },
  {
    id: 16,
    name: "Vitrine Bois Massif",
    price: "15,990 DZD",
    originalPrice: "21,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16--8nb2yKJZqTrKXn37TbchgRPgAIZfCJ.png",
    description: "Vitrine élégante avec portes vitrées et rangements intérieurs",
    discount: 27,
    category: "accessories"
  }
]

function ProductCard({ product, favorites, toggleFavorite, immediate = false }: { product: Product; favorites: number[]; toggleFavorite: (id: number) => void; immediate?: boolean }) {
  const card = (
    <Link href={`/product/${product.id}`}>
      <div className="group flex-shrink-0 w-40 md:w-[350px] bg-[#1A1A1A] rounded-none overflow-hidden transition-colors duration-300 cursor-pointer flex flex-col">
          <div className="relative aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#111111]">
            {product.discount && <div className="absolute left-2 top-2 z-10 rounded bg-[rgba(15,15,15,0.85)] px-2.5 py-1 text-[10px] font-bold text-white">-{product.discount}%</div>}
            <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover transition-[filter] duration-300 group-hover:brightness-105" />
            <button onClick={(e) => { e.preventDefault(); toggleFavorite(product.id) }} aria-label={`Ajouter ${product.name} aux favoris`} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,0.4)] transition-colors hover:bg-[rgba(0,0,0,0.6)]">
              <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-white text-white" : "text-white"}`} />
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-[#1A1A1A] p-4 md:p-5">
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-[0.12em] text-[#A8926A]">IdealInstitute</p>
              <h3 className="line-clamp-2 text-sm font-bold text-[#F5F2EA] md:text-base">{product.name}</h3>
              <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-[#9A9A9A] md:text-xs">{product.description}</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm font-bold text-[#F5F2EA] md:text-base">{product.price}</span>
              {product.originalPrice && <span className="text-[10px] text-[#6B6B6B] line-through md:text-xs">{product.originalPrice}</span>}
            </div>
          </div>
        </div>
      </Link>
  )

  return immediate ? (
    <div key={product.id} className="animate-fade-in-up">
      {card}
    </div>
  ) : (
    <Reveal key={product.id} delay={0}>{card}</Reveal>
  )
}

export default function Products() {
  const { locale } = useLanguage()
  const pathname = usePathname()
  const isProductsPage = pathname === "/products" || pathname === "/all-products" || pathname?.endsWith("/page")
  const [favorites, setFavorites] = useState<number[]>([])
  const nosProduitRef = useRef<HTMLDivElement>(null)
  const modelesPretsRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)

  useEffect(() => {
    const element = nosProduitRef.current
    if (!element) return

  if (window.matchMedia("(max-width: 767px)").matches) return
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAutoScrolled.current || prefersReducedMotion) return
      hasAutoScrolled.current = true
      window.setTimeout(() => element.scrollBy({ left: 420, behavior: "smooth" }), 250)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const scrollCarouselByCard = (element: HTMLDivElement | null, direction: "left" | "right") => {
    if (!element) return
    const card = element.querySelector<HTMLElement>(":scope > div")
    const step = card ? card.getBoundingClientRect().width + 16 : 208
    element.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    })
  }

  const scrollNosProduits = (direction: "left" | "right") => {
    scrollCarouselByCard(nosProduitRef.current, direction)
  }

  const scrollModelesPrets = (direction: "left" | "right") => {
    scrollCarouselByCard(modelesPretsRef.current, direction)
  }

  // Feature the new Eclipse bedroom in the main homepage product lane so it is visible without relying on the secondary section.
  const nosProduits = catalogProducts.filter(
    (p) => p.category === "sofas" || p.category === "salle-a-manger" || p.id === 6,
  )
  const modelesPrets = catalogProducts
    .filter((p) => p.category === "chambres" || p.category === "salle-a-manger")
    .sort((a, b) => (a.id === 6 ? -1 : b.id === 6 ? 1 : 0))

  return (
    <section dir="ltr" className="relative overflow-hidden bg-[#0A0A0A] py-8 md:py-16 lg:py-24" id="products">

      <div className="relative z-10 mx-auto max-w-7xl px-3 md:px-6">
        {/* NOS PRODUITS Section */}
        <div className="relative z-10 mb-8 md:mb-12">
          <Reveal>
            <h2 className="mb-6 text-left font-[family-name:var(--font-cormorant)] text-[32px] font-light italic uppercase tracking-[2px] text-[#F0EDE6] md:text-[42px]">NOS PRODUITS</h2>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div dir="ltr" className="relative left-0 md:left-1/2 md:w-screen md:-translate-x-1/2">
            <button
              type="button"
              aria-label="Produits précédents"
              onClick={() => scrollNosProduits("left")}
              className="absolute left-1 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#E8E6E0] text-[#1A1A1A] transition-colors hover:bg-[#F0EDE6] md:left-auto md:right-12 md:h-9 md:w-9"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Produits suivants"
              onClick={() => scrollNosProduits("right")}
              className="absolute right-1 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#E8E6E0] text-[#1A1A1A] transition-colors hover:bg-[#F0EDE6] md:right-0 md:h-9 md:w-9"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div
              ref={nosProduitRef}
              dir="ltr"
              className="flex w-full min-w-0 gap-2 overflow-x-auto overflow-y-visible overscroll-x-auto overscroll-y-visible px-1 pb-2 scrollbar-hide scroll-auto md:gap-6 md:px-[12%] md:scroll-smooth md:[mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]"
              style={{ WebkitOverflowScrolling: "touch", overscrollBehaviorX: "auto" }}
            >
            {nosProduits.map((product, i) => (
              <div key={product.id} className="shrink-0">
                <ProductCard
                  immediate={i === 0 || isProductsPage}
                  product={locale === "ar" && arabicProductDescriptions[product.id] ? { ...product, description: arabicProductDescriptions[product.id] } : product}
                  favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Modèles Pr��ts Section */}
        <div className="relative z-10 mb-8 md:mb-12">
          <Reveal>
            <h2 className="mb-6 text-left font-[family-name:var(--font-cormorant)] text-[32px] font-light italic tracking-[2px] text-[#F0EDE6] md:text-[42px]">Modèles prêts</h2>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div dir="ltr" className="relative left-0 md:left-1/2 md:w-screen md:-translate-x-1/2">
            <button
              type="button"
              aria-label="Modèles précédents"
              onClick={() => scrollModelesPrets("left")}
              className="absolute left-1 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#E8E6E0] text-[#1A1A1A] transition-colors hover:bg-[#F0EDE6] md:left-auto md:right-12 md:h-9 md:w-9"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Modèles suivants"
              onClick={() => scrollModelesPrets("right")}
              className="absolute right-1 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#E8E6E0] text-[#1A1A1A] transition-colors hover:bg-[#F0EDE6] md:right-0 md:h-9 md:w-9"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div
              ref={modelesPretsRef}
              dir="ltr"
              className="flex w-full min-w-0 gap-2 overflow-x-auto overflow-y-visible overscroll-x-auto overscroll-y-visible px-1 pb-2 scrollbar-hide scroll-auto md:gap-6 md:px-[12%] md:scroll-smooth md:[mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]"
              style={{ WebkitOverflowScrolling: "touch", overscrollBehaviorX: "auto" }}
            >
              {modelesPrets.map((product, i) => (
                <div key={product.id} className="shrink-0">
                  <ProductCard
                    immediate={i === 0 || isProductsPage}
                    product={locale === "ar" && arabicProductDescriptions[product.id] ? { ...product, description: arabicProductDescriptions[product.id] } : product}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Show All Button */}
        <Reveal delay={200}>
          <div className="mt-8 md:mt-12 flex justify-center">
            <Link href="/all-products">
              <button className="border-2 border-gray-900 text-gray-900 px-8 md:px-12 py-2 md:py-3 font-serif uppercase text-xs md:text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
              SHOW ALL PRODUCTS
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
