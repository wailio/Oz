import { Suspense } from 'react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import LuxuryHeader from "@/components/luxury-header"
import ProductDetailContent from "./product-detail-content"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div>
      <LuxuryHeader />
      <Header />

      <main className="bg-white">
        <Suspense fallback={<div className="py-12 text-center">Chargement...</div>}>
          <ProductDetailContent productId={id} />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
