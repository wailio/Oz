'use client'

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { allProducts, getProduct } from "@/lib/products"
import { Reveal } from "@/components/Reveal"
import { ProductImageReveal } from "@/components/ProductImageReveal"

/* Legacy inline catalog removed; lib/products.ts is the source of truth. */
/*
  // Canapés (Sofas)
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
  // Chambres (Bedrooms)
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
  // Salle à Manger (Dining)
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
] */

export default function ProductDetailContent({ productId }: { productId: string }) {
  const product = getProduct(productId)
  const [quantity, setQuantity] = useState(1)
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const relatedProductsRef = useRef<HTMLDivElement>(null)

  if (!product) {
    return (
      <div className="pt-8 md:pt-12 pb-12 md:pb-20 text-center">
        <h1 className="text-2xl font-bold text-[#f4efe6] mb-4">Produit non trouvé</h1>
        <Link href="/">
          <button className="px-8 py-3 bg-[#a98661] text-white rounded-lg">Retour à l&apos;accueil</button>
        </Link>
      </div>
    )
  }

  const selectedColor = product.colors?.[selectedColorIndex]
  const galleryImages = selectedColor?.images ?? product.images
  const activeImage = galleryImages[selectedImageIndex] ?? galleryImages[0]
  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id,
  )

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id])
  }

  return (
    <div className="pt-24 md:pt-48 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#a9b6c5]">
            <Link href="/" className="hover:text-[#f4efe6]">Accueil</Link>
            <span>›</span>
            <Link href="/all-products" className="hover:text-[#f4efe6]">Produits</Link>
            <span>›</span>
            <span className="text-[#f4efe6] font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 md:items-start">
          {/* Product Images */}
          <div className="flex flex-col gap-3">
            <div className="relative flex aspect-square items-center justify-center overflow-visible md:overflow-hidden bg-[#0b1728] p-3 md:p-6 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <ProductImageReveal key={selectedColorIndex} src={activeImage} alt={`${product.name} — ${selectedColor?.name ?? "Marron"}`} />
              {galleryImages.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Photo précédente"
                    onClick={() => setSelectedImageIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)}
                    className="absolute left-[-1.25rem] top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full md:left-3 border border-[#d8b878]/60 bg-[#241b12]/55 text-[#f4d79a] shadow-[0_4px_18px_rgba(36,27,18,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-sm transition-all hover:scale-110 hover:border-[#f4d79a] hover:bg-[#8a6a32]/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b878]"
                  >
                    <ChevronLeft className="size-8 stroke-[1.5]" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Photo suivante"
                    onClick={() => setSelectedImageIndex((current) => (current + 1) % galleryImages.length)}
                    className="absolute right-[-1.25rem] top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full md:right-3 border border-[#d8b878]/60 bg-[#241b12]/55 text-[#f4d79a] shadow-[0_4px_18px_rgba(36,27,18,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-sm transition-all hover:scale-110 hover:border-[#f4d79a] hover:bg-[#8a6a32]/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b878]"
                  >
                    <ChevronRight className="size-8 stroke-[1.5]" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
            <Reveal delay={250}>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1 md:hidden">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    aria-label={`Voir la photo ${idx + 1}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`flex-shrink-0 aspect-square w-16 rounded-lg overflow-hidden bg-[#0b1728] transition-all ${
                      selectedImageIndex === idx
                        ? 'border-2 border-[#8a6a32] scale-105 shadow-[0_0_0_2px_rgba(138,106,50,0.2)]'
                        : 'border-2 border-[#1d3857] hover:border-[#8a6a32]'
                    }`}
                  >
                    <img src={img} alt={`Vue ${idx + 1} de ${product.name}`} className="size-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start space-y-3 pt-6 md:space-y-4 md:pt-16">
            <Reveal delay={0}>
              <div>
                <p className="text-xs md:text-sm text-[#a9b6c5] font-medium mb-1">IdealInstitute</p>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-[#f4efe6] mb-2">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl font-bold text-[#f4d79a]">{product.price}</span>
                  {product.originalPrice && <span className="text-base md:text-lg text-gray-400 line-through">{product.originalPrice}</span>}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gray-300 text-sm">★</span>)}
                </div>
                <span className="text-xs text-[#a9b6c5]">0 Reviews</span>
              </div>

              <div className="flex flex-col gap-3">
                {product.colors && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Finition :</span>
                    <div className="flex gap-2" role="radiogroup" aria-label="Choisir la finition">
                      {product.colors.map((color, index) => (
                        <button
                          key={color.name}
                          type="button"
                          role="radio"
                          aria-checked={selectedColorIndex === index}
                          aria-label={`Finition ${color.name}`}
                          onClick={() => { setSelectedColorIndex(index); setSelectedImageIndex(0) }}
                          className={`relative size-9 overflow-hidden rounded-full border-2 bg-[#0b1728] p-0.5 transition-transform ${selectedColorIndex === index ? "border-[#8a6a32] scale-110 shadow-[0_0_0_2px_rgba(138,106,50,0.22)]" : "border-gray-300 hover:border-[#8a6a32]"}`}
                        >
                          <img src={color.swatch} alt="" aria-hidden="true" className="size-full rounded-full object-cover" />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs text-[#a9b6c5]">{selectedColor?.name}</span>
                  </div>
                )}
                <div className="flex flex-col gap-1.5 text-xs md:text-sm text-gray-700">
                  <div className="flex items-start gap-2"><span className="text-[#8a6a32]">✓</span><span>{product.dimension ? `${product.dimension}, pensée pour un rangement quotidien.` : "Armoire spacieuse, pensée pour un rangement quotidien."}</span></div>
                  <div className="flex items-start gap-2"><span className="text-[#8a6a32]">✓</span><span>Ensemble coordonné avec lit, chevets, commode et miroir assortis.</span></div>
                  <div className="flex items-start gap-2"><span className="text-[#8a6a32]">✓</span><span>{product.colors && product.colors.length === 1 ? `Finition ${product.colors[0].name.toLowerCase()} lumineuse et intemporelle.` : `${product.colors?.length ?? 0} finitions disponibles : ${product.colors?.map((color) => color.name.toLowerCase()).join(", ")}.`}</span></div>
                </div>
              </div>
            </Reveal>

            <div className="h-px bg-gray-200 my-1"></div>

            <Reveal delay={300}>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 md:px-3 py-1.5 text-[#a9b6c5] hover:bg-gray-100 text-sm">−</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-10 text-center border-l border-r border-gray-300 py-1.5 text-sm text-black" min="1" />
                <button onClick={() => setQuantity(quantity + 1)} className="px-2 md:px-3 py-1.5 text-[#a9b6c5] hover:bg-gray-100 text-sm">+</button>
              </div>
              <Link href={`/contact?subject=Commande&message=${encodeURIComponent(`Je souhaite commander ce produit: ${product.name} (${selectedColor?.name ?? "Marron"})`)}#form`}>
                <button className="flex-1 md:flex-auto px-6 md:px-8 py-2 md:py-2.5 bg-[#1E1912] hover:bg-[#00030A] text-white font-semibold rounded-lg transition-colors text-sm md:text-base">Commandez maintenant</button>
              </Link>
            </div>

              <button onClick={() => toggleFavorite(product.id)} className="flex items-center gap-2 text-xs md:text-sm text-[#a9b6c5] hover:text-[#a98661] transition-colors">
                <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-current text-[#a98661]" : ""}`} />
                <span>Ajouter à la liste de souhaits</span>
              </button>
            </Reveal>

            <Reveal delay={250}>
              <div className="hidden md:flex gap-2 overflow-x-auto pb-1 pt-2 md:pl-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    aria-label={`Voir la photo ${idx + 1}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`flex-shrink-0 aspect-square w-20 rounded-lg overflow-hidden bg-[#0b1728] transition-all ${
                      selectedImageIndex === idx
                        ? 'border-2 border-[#8a6a32] scale-105 shadow-[0_0_0_2px_rgba(138,106,50,0.2)]'
                        : 'border-2 border-[#1d3857] hover:border-[#8a6a32]'
                    }`}
                  >
                    <img src={img} alt={`Vue ${idx + 1} de ${product.name}`} className="size-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Description Section */}
        <Reveal delay={0} className="mb-12 md:mb-16">
          <div className="bg-gradient-to-b from-gray-50 to-white p-4 md:p-8 rounded-lg">
            <h2 className="text-base md:text-lg font-serif font-bold text-[#f4efe6] mb-3">À propos de la collection {product.name}</h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3">{product.description}</p>
            <p className="text-[#a9b6c5] text-xs md:text-sm leading-relaxed">Ses lignes structurées, ses finitions soignées et ses rangements généreux composent un ensemble durable, conçu pour accompagner votre quotidien avec confort et élégance.</p>
          </div>
        </Reveal>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mb-12 md:mb-16">
            <h2 className="inline-block border-b border-[#0B2A4A] px-1 pb-2 text-base md:text-xl font-serif font-semibold tracking-wide text-[#0B2A4A] shadow-[0_2px_3px_-2px_rgba(11,42,74,0.45)] mb-4 md:mb-6">RELATED PRODUCTS</h2>
            <div ref={relatedProductsRef} className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide touch-pan-x" style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
              {relatedProducts.map((relProduct, i) => (
                <Reveal key={relProduct.id} delay={i * 100}>
                  <Link href={`/product/${relProduct.id}`}>
                    <div className="group flex-shrink-0 w-32 md:w-40 bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
                    <div className="relative aspect-square w-full bg-[#0b1728] overflow-hidden rounded-t-lg">
                      {relProduct.discount && <div className="absolute top-1.5 left-1.5 bg-red-600 text-white px-1.5 py-0.5 rounded text-[10px] font-bold z-10">-{relProduct.discount}%</div>}
                      <img src={relProduct.images[0]} alt={relProduct.name} className="h-full w-full scale-110 object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.16]" />
                      <button onClick={(e) => { e.preventDefault(); toggleFavorite(relProduct.id) }} className="absolute top-1.5 right-1.5 bg-[#0b1728] rounded-full p-1.5 hover:bg-gray-100 transition-colors">
                        <Heart className={`w-3 h-3 ${favorites.includes(relProduct.id) ? "fill-red-600 text-red-600" : "text-[#a9b6c5]"}`} />
                      </button>
                    </div>
                    <div className="p-1.5 md:p-2 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[8px] md:text-[9px] text-[#a9b6c5] mb-0.5">IdealInstitute</p>
                        <h3 className="text-[9px] md:text-xs font-bold text-[#f4efe6] line-clamp-2">{relProduct.name}</h3>
                      </div>
                      <div className="pt-1.5 border-t border-[#1d3857] mt-1.5">
                        <div className="flex justify-between items-center gap-1">
                          <span className="text-[8px] md:text-xs font-bold text-[#f4d79a]">{relProduct.price}</span>
                          {relProduct.originalPrice && <span className="text-[7px] md:text-[8px] text-gray-400 line-through">{relProduct.originalPrice}</span>}
                        </div>
                      </div>
                    </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="pt-8 md:pt-12 border-t border-[#1d3857]">
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2 md:gap-3 p-4 md:p-6 bg-[#0b1728] rounded-xl border border-[#1d3857] shadow-sm justify-center">
              {['Tous les Produits', 'Chaises', 'Canapés', 'Chambres', 'Éclairage', 'Accessoires'].map((category) => (
                <Link key={category} href="/all-products">
                  <button className="px-2 md:px-4 py-1.5 md:py-2 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm bg-gray-900 text-white hover:bg-[#a98661] border border-gray-300 whitespace-nowrap">
                    {category}
                  </button>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
