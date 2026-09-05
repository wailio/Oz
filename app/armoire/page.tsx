"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { allProducts } from "@/lib/products"

const armoires = allProducts.filter((product) => product.category === "armoire").map((product) => ({
  ...product,
  image: product.images[0],
}))

export default function ArmoinePage() {
  return (
    <div className="relative">
      <Header />

      <main className="min-h-screen pt-20 md:pt-24" style={{ backgroundColor: "#eff0f1" }}>
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-8 md:py-12">
          <Link href="/" className="flex items-center gap-2 text-[#8b7344] hover:text-[#6f5b35] mb-6 md:mb-12 font-semibold text-xs md:text-base">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Retour
          </Link>

          {/* Header Section */}
          <div className="mb-8 md:mb-16">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-2 md:mb-4">Armoires</h1>
            <div className="h-0.5 md:h-1 w-16 md:w-32 bg-[#8b7344] mb-4 md:mb-8"></div>
            <p className="text-xs md:text-lg text-gray-700 max-w-3xl leading-relaxed hidden md:block">
              Découvrez notre collection d&apos;armoires modernes avec miroirs et rangements premium. Chaque pièce allie style et fonctionnalité.
            </p>
          </div>

          {/* Armoires Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-12">
            {armoires.map((armoire) => (
              <Link key={armoire.id} href={`/product/${armoire.id}`}>
                <div className="group cursor-pointer bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden bg-white h-48 md:h-96 flex items-center justify-center">
                    <img
                      src={armoire.image || "/placeholder.svg"}
                      alt={armoire.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="flex items-start justify-between mb-2 md:mb-4">
                      <div>
                        <h3 className="text-base md:text-2xl font-serif font-bold text-gray-900 mb-1 md:mb-2">{armoire.name}</h3>
                        <div className="h-0.5 w-8 md:w-12 bg-[#8b7344]"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs md:text-base mb-3 md:mb-6 leading-relaxed hidden md:block">{armoire.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#8b7344] font-bold text-base md:text-2xl">{armoire.price}</p>
                      <button className="bg-[#8b7344] hover:bg-[#6f5b35] text-white px-3 md:px-6 py-1 md:py-2 font-semibold transition-colors text-xs md:text-base">
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
