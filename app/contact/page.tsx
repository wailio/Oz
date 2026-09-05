"use client"

import { Suspense } from "react"
import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactContent from "./contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <LuxuryHeader />
      <Header />
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <ContactContent />
      </Suspense>
      <Footer hideMobileMap />
    </main>
  )
}
