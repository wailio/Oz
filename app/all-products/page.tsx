import { Suspense } from "react"
import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AllProductsClientContent from "./client-content"
import { Reveal } from "@/components/Reveal"

export const metadata = {
  title: "Tous les Produits | Mobenia Furniture",
  description: "Découvrez notre collection complète de meubles de luxe",
}

export default function AllProductsPage() {
  return (
    <div>
      <LuxuryHeader />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-36">
        <section className="pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Hero Section */}
            <div className="mb-10 md:mb-14">
              <Reveal delay={0}>
                <h1 className="text-xl md:text-3xl font-serif font-bold text-gray-900 mb-2 text-center">
                  Notre Collection Complète
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-center text-gray-600 text-xs md:text-sm mb-4">
                  Découvrez notre sélection exclusive de meubles de luxe
                </p>
              </Reveal>
              <div className="h-1 w-12 bg-[#8b7344] mx-auto"></div>
            </div>

            <Suspense
              fallback={
                <div className="flex justify-center items-center py-12">
                  <div className="text-gray-600">Chargement des produits...</div>
                </div>
              }
            >
              <AllProductsClientContent />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
