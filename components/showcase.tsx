"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

export default function Showcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      title: "Salle à manger",
      itemCount: "1500+",
      description: "Tables élégantes et chaises modernes",
      subcategories: ["Table Moderne", "Chaises Ergonomiques", "Ensemble Complet"],
      image: "/products/1-salle-a-manger.jpg",
      link: "/all-products?category=chairs"
    },
    {
      id: 2,
      title: "Canapés",
      itemCount: "750+",
      description: "Collection de sofas premium et confortables",
      subcategories: ["Canapé Blanc", "Canapé Design", "Ensemble Canapés"],
      image: "/products/2-canapes.jpg",
      link: "/all-products?category=sofas"
    },
    {
      id: 3,
      title: "Chambres",
      itemCount: "600+",
      description: "Meubles de chambre modernes et élégants",
      subcategories: ["Lits Plateforme", "Armoires Design", "Ensembles Complets"],
      image: "/products/4-chambres.jpg",
      link: "/all-products?category=bedroom"
    }
  ]

  return (
    <section className="py-8 md:py-20 relative" style={{ backgroundColor: "#eff0f1" }}>
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.link} className="group">
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80 md:h-96 bg-white">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Content Area */}
                <div className="p-4 md:p-6 h-32 md:h-40 flex flex-col justify-between">
                  <div>
                    <p className="text-[#a98661] text-sm md:text-base font-bold mb-2">{product.itemCount} Items</p>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3">{product.description}</p>
                  </div>
                  
                  {/* Subcategories */}
                  <div className="space-y-1">
                    {product.subcategories.slice(0, 3).map((subcat, idx) => (
                      <p key={idx} className="text-xs text-gray-500">{subcat}</p>
                    ))}
                    {product.subcategories.length > 3 && (
                      <p className="text-xs text-gray-500">+ {product.subcategories.length - 3} more</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View - Carousel with Selection Animation */}
        <div className="md:hidden">
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedId(selectedId === product.id ? null : product.id)}
                className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 w-full bg-white"
              >
                {/* Collapsed State */}
                {selectedId !== product.id && (
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="text-left flex-1">
                      <h3 className="text-sm font-bold text-gray-900">{product.title}</h3>
                      <p className="text-xs text-[#a98661] font-semibold">{product.itemCount} Items</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}

                {/* Expanded State */}
                {selectedId === product.id && (
                  <div className="flex flex-col animate-fadeIn">
                    {/* Larger Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    
                    {/* Content */}
                    <div className="p-3">
                      <p className="text-[#a98661] text-xs font-bold mb-1">{product.itemCount} Items</p>
                      <h3 className="text-base font-serif font-bold text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                      
                      {/* Subcategories */}
                      <div className="grid grid-cols-2 gap-1 mb-3">
                        {product.subcategories.map((subcat, idx) => (
                          <p key={idx} className="text-xs text-gray-500">{subcat}</p>
                        ))}
                      </div>

                      {/* View Products Link */}
                      <Link
                        href={product.link}
                        className="inline-block w-full bg-[#a98661] hover:bg-[#061632] text-white font-bold py-2 px-4 rounded transition-colors text-center text-xs"
                      >
                        View Products
                      </Link>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
