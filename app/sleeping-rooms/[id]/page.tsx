"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
  details: string
  materials: string
  dimensions: string
}

const sleepingRooms: Product[] = [
  {
    id: 4,
    name: "Platform Bed",
    price: "15,990 DZD",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-WqD6WHlfVzagkg1eQI33kEAmpGAEbx.jpg",
    description: "Contemporary platform bed with clean lines and durability",
    details: "Low-profile design with built-in storage and premium construction",
    materials: "Solid wood frame with quality slats",
    dimensions: 'W: 86" x D: 84" x H: 12" (Queen)',
  },
  {
    id: 5,
    name: "Luxury Storage Bed",
    price: "18,990 DZD",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-WqD6WHlfVzagkg1eQI33kEAmpGAEbx.jpg",
    description: "Queen-size bed with built-in drawer storage and premium mattress",
    details: "Functional storage with easy-access drawers and premium mattress",
    materials: "Solid wood frame with upholstered drawer fronts",
    dimensions: 'W: 86" x D: 84" x H: 48" (Queen)',
  },
  {
    id: 6,
    name: "Minimalist Bed Frame",
    price: "12,990 DZD",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-WqD6WHlfVzagkg1eQI33kEAmpGAEbx.jpg",
    description: "Sleek low-profile bed frame with solid wood construction",
    details: "Minimalist aesthetic with premium solid wood construction",
    materials: "Solid walnut wood with natural finish",
    dimensions: 'W: 86" x D: 84" x H: 10" (Queen)',
  },
  {
    id: 7,
    name: "Premium Bedroom Set",
    price: "34,990 DZD",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-WqD6WHlfVzagkg1eQI33kEAmpGAEbx.jpg",
    description: "Complete bedroom ensemble with bed, nightstands, and dresser",
    details: "Complete bedroom solution with matching furniture and premium quality",
    materials: "Solid wood construction throughout, quality hardware",
    dimensions: 'Bed: 86" x 84" x 48", Nightstands: 24" x 18" x 24", Dresser: 54" x 20" x 36"',
  },
]

export default function SleepingRoomProductPage({ params }: { params: { id: string } }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.id])

  const product = sleepingRooms.find((p) => p.id === Number.parseInt(params.id))
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#eff0f1" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Product not found</h1>
          <Link href="/sleeping-rooms">
            <Button className="bg-[#8b7344] hover:bg-[#6f5b35]">Back to Sleeping Rooms</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inquiry submitted:", { product: product.name, ...formData })
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="relative">
      <Header />

      <main className="min-h-screen pt-20" style={{ backgroundColor: "#eff0f1" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            href="/sleeping-rooms"
            className="flex items-center gap-2 text-[#8b7344] hover:text-[#6f5b35] mb-8 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à la collection
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
              <div className="w-full max-h-[600px] flex items-center justify-center bg-white overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              {/* Product Details Section */}
              <div className="mb-12">
                <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-4xl font-bold text-[#8b7344] mb-8">{product.price}</p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.description}</p>

                <div className="bg-white/80 backdrop-blur-sm p-8 mb-12 border-l-4 border-[#8b7344]">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-[#8b7344] uppercase tracking-wider mb-2">Details</h3>
                      <p className="text-gray-800 text-base">{product.details}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#8b7344] uppercase tracking-wider mb-2">Materials</h3>
                      <p className="text-gray-800 text-base">{product.materials}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#8b7344] uppercase tracking-wider mb-2">Dimensions</h3>
                      <p className="text-gray-800 text-base">{product.dimensions}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg border-t-4 border-[#8b7344]">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Request Information</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#8b7344] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#8b7344] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#8b7344] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#8b7344] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#8b7344] hover:bg-[#6f5b35] text-white py-3 text-base font-semibold transition-colors"
                  >
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
