"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Sofa, Bed, Armchair } from "lucide-react"
import { allProducts as catalogProducts } from "@/lib/products"
import { Reveal } from "@/components/Reveal"

const allProducts = catalogProducts

/* Legacy inline catalog removed; lib/products.ts is the source of truth. */
/*
    id: 1,
    name: "Canapés Sectionnels Beige",
    price: "32,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1--lzF5JpbtxjzuoLqkBOnun0vROEqEUM.png",
    description: "Ensemble canapé modulable avec sièges confortables et design contemporain",
    category: "sofas",
  },
  {
    id: 2,
    name: "Chambre Bois Massif Complète",
    price: "42,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2--LT69Fp8yDeqVesEMnPbV1Vp6dT6vcn.png",
    description: "Ensemble chambre en bois noble avec lit double et armoire",
    category: "chambres",
  },
  {
    id: 3,
    name: "Lit Plateforme Beige Premium",
    price: "24,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3--xibVNqUSqy8rcbXS9vCakiFKMfHEgW.png",
    description: "Lit design avec tête de lit capitonnée et rangements intégrés",
    category: "chambres",
  },
  {
    id: 4,
    name: "Chambre Grise Moderne",
    price: "38,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4--PzHUzJJQwqMSmBkQHqnWEAXPuqiGne.png",
    description: "Suite chambre avec miroir et rangements modernes",
    category: "chambres",
  },
  {
    id: 5,
    name: "Table Salle à Manger Bois Moderne",
    price: "28,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5--fGdAtjdw4UyqcC2kgXsSw95lpD0gH6.png",
    description: "Table de salle à manger avec chaises design et miroir mural",
    category: "salle-a-manger",
  },
  {
    id: 6,
    name: "Ensemble Table Bois Sculptée",
    price: "34,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6--Lg9J9UmCoaicHqq56OizLZ04FhkrAL.png",
    description: "Table de salle à manger en bois massif avec 6 chaises",
    category: "salle-a-manger",
  },
  {
    id: 7,
    name: "Table Marbre Blanc Élégante",
    price: "26,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7--HQSBCXxTMXqvTdhwvEh6vE0HRM0ALZ.png",
    description: "Table de salle à manger en marbre blanc avec chaises grises",
    category: "salle-a-manger",
  },
  {
    id: 8,
    name: "Table Classique Bois Foncé",
    price: "31,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8--vaObrjsnbwwjtgFBSXm7LbD1bzyyzG.png",
    description: "Table de salle à manger élégante avec chaises et miroir",
    category: "salle-a-manger",
  },
  {
    id: 9,
    name: "Armoire Coulissante Blanche",
    price: "19,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9--WtuPBrTSG9iosuccrJ4MdQerxt5HAb.png",
    description: "Armoire avec portes coulissantes et miroir intégré",
    category: "armoire",
  },
  {
    id: 10,
    name: "Armoire Bois Noir Moderne",
    price: "22,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10--Oiu63bo4oiKdeIAiICTn24XMtap3xX.png",
    description: "Armoire design avec miroirs coulissants et rangements",
    category: "armoire",
  },
  {
    id: 11,
    name: "Armoire Miroir 3 Portes",
    price: "18,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11--Eyp1DAPC0P6vfP6JEPlLyb8YsbFQPh.png",
    description: "Armoire à portes coulissantes avec miroir de haute qualité",
    category: "armoire",
  },
  {
    id: 12,
    name: "Tables Gigognes Blanches",
    price: "8,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12--d5ZGimmzW9zP8HXujiuu6ZsDlBQqdb.png",
    description: "Ensemble de 3 tables gigognes en blanc avec pieds naturels",
    category: "accessories",
  },
  {
    id: 13,
    name: "Fauteuil Moderne et Table Verre",
    price: "12,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13--fq6tyoBjOezfgFP4FmXJuA0Jpkqpnh.png",
    description: "Fauteuil design avec table basse en verre moderne",
    category: "accessories",
  },
  {
    id: 14,
    name: "Commode Bois avec Miroir",
    price: "14,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14--cgs8MbgIEJUQ7NuZmWwcCgdy9y0YCY.png",
    description: "Commode en bois avec miroir supérieur et rangements",
    category: "accessories",
  },
  {
    id: 15,
    name: "Meuble TV Mur Design",
    price: "16,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15--B1F5UcTa70JPPUz5bwMumloDnXG7D2.png",
    description: "Unité murale avec vitrine et rangements pour téléviseur",
    category: "accessories",
  },
  {
    id: 16,
    name: "Vitrine Bois Massif",
    price: "15,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16--8nb2yKJZqTrKXn37TbchgRPgAIZfCJ.png",
    description: "Vitrine élégante avec portes vitrées et rangements intérieurs",
    category: "accessories",
  },
] */

const categories = [
  { id: "all", name: "Tous les Produits", icon: null },
  { id: "salle-a-manger", name: "Salle à manger", icon: Armchair },
  { id: "sofas", name: "Canapés", icon: Sofa },
  { id: "chambres", name: "Chambres", icon: Bed },
  { id: "armoire", name: "Armoire", icon: null },
  { id: "accessories", name: "Accessoires", icon: null },
]

export default function AllProductsClientContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches)
  }, [])

  useEffect(() => {
    if (initialCategory && initialCategory !== selectedCategory) {
      setSelectedCategory(initialCategory)
    }
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return allProducts
    return allProducts.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="w-full">
      {/* Category Filters */}
      <Reveal delay={200}>
      <div className="mb-10 md:mb-14">
        <div className="flex flex-wrap gap-2 md:gap-3 p-4 md:p-6 bg-white rounded-xl border border-gray-200 shadow-sm justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCategory(category.id)
              }}
              className={`px-3 md:px-5 py-2 md:py-2.5 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-[#8b7344] text-white shadow-lg scale-105"
                  : "bg-[#f3eee5] text-[#6f5b35] hover:bg-[#e5d8bd] border border-[#c9b184]"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.name}
            </button>
          ))}
        </div>
      </div>
      </Reveal>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div>
          <h2 className="text-base md:text-xl font-serif font-bold text-gray-900 mb-6 text-center">
            {selectedCategory === "all" ? "Tous les Produits" : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product, i) => (
            <Reveal key={`${selectedCategory}-${product.id}`} variant="pop" immediate={isDesktop && i < 4} delay={Math.min(i * 60, 300)}>
            <Link href={`/product/${product.id}`}>
              <div className="group h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-[#8b7344] cursor-pointer flex flex-col">
                {/* Image */}
                <div className="relative aspect-square w-full bg-white overflow-hidden rounded-t-xl">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-2 md:p-3 lg:p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-[11px] md:text-sm lg:text-base font-serif font-bold text-gray-900 mb-1 group-hover:text-[#a98661] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-[8px] md:text-xs text-gray-600 leading-4 mb-2 h-8 overflow-hidden line-clamp-2 hidden md:block">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-xs md:text-sm lg:text-base font-bold text-[#1E1912]">
                      {product.price}
                    </span>
                    <button className="px-2 md:px-3 py-1 bg-[#1E1912] hover:bg-[#00030A] text-white rounded-lg font-semibold transition-colors text-[8px] md:text-xs lg:text-sm">
                      Voir
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found in this category</p>
        </div>
      )}
    </div>
  )
}
