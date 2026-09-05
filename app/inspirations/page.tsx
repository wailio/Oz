import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Gem, Lightbulb, Scaling, Shuffle, type LucideIcon } from "lucide-react"
import { allProducts } from "@/lib/products"

export default function InspirationsPage() {
  const inspirations = allProducts

  return (
    <main className="min-h-screen bg-[#f7f1e5] bg-[url('/inspirations-wallpaper.png')] bg-repeat bg-top bg-[length:auto_32rem]">
      <LuxuryHeader />
      <Header />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .inspiration-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .inspiration-card:nth-child(1) { animation-delay: 0.1s; }
        .inspiration-card:nth-child(2) { animation-delay: 0.2s; }
        .inspiration-card:nth-child(3) { animation-delay: 0.3s; }
        .inspiration-card:nth-child(4) { animation-delay: 0.4s; }
        .inspiration-card:nth-child(5) { animation-delay: 0.5s; }
        .inspiration-card:nth-child(6) { animation-delay: 0.6s; }

        .inspiration-card:hover .inspiration-image {
          transform: scale(1.1);
          filter: brightness(1.15);
        }
      `}</style>

      {/* Hero Section */}
      <div className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-base md:text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight md:mb-4">
            Get <span className="text-[#a89163]">Inspired</span> by Design
          </h1>
          <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Explore design styles and interior trends that will transform your living spaces.
          </p>
        </div>
      </div>

      {/* Inspirations Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {inspirations.map((item, idx) => (
              <div
                key={item.id}
                className="inspiration-card group rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-28 md:h-80 overflow-hidden bg-gray-300">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="inspiration-image w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-2 md:p-6 bg-white">
                  <h3 className="text-xs md:text-xl font-serif font-bold text-gray-900 mb-1 md:mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-2 md:mb-4 text-[10px] md:text-sm leading-relaxed font-light line-clamp-1 md:line-clamp-2">
                    {item.description}
                  </p>
                  <div className="text-xs md:text-sm font-semibold text-[#a89163] mb-2 md:mb-4">{item.price}</div>

                  <Link href={`/product/${item.id}`}>
                    <button className="w-full border border-[#a89163] text-[#a89163] px-2 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-[10px] md:text-sm hover:bg-[#a89163] hover:text-white transition-all duration-300">
                      Explore Style
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Tips Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg md:text-3xl font-serif font-bold text-gray-900 text-center mb-6 md:mb-12">
            Design Tips & Ideas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
            {([
              [Shuffle, "Mix & Match", "Combine styles for a personal space."],
              [Scaling, "Proportion", "Balance statement pieces with accents."],
              [Lightbulb, "Lighting", "Layer light to set the mood."],
              [Gem, "Quality", "Choose fewer pieces that last."],
            ] as [LucideIcon, string, string][]).map(([Icon, title, description]) => (
              <div key={title} className="bg-white p-3 md:p-8 rounded-lg md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-1 flex size-6 items-center justify-center rounded-full border border-[#a89163] text-[#8b7344] md:mb-3 md:size-10"><Icon className="size-3 md:size-5" aria-hidden="true" /></div>
                <h3 className="text-[11px] md:text-lg font-serif font-bold text-gray-900 mb-1 md:mb-3">{title}</h3>
                <p className="text-[10px] md:text-base text-gray-700 leading-tight md:leading-relaxed font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Ready to Redesign Your Space?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
            Find the perfect pieces from our collection or consult with our design experts.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/all-products">
              <button className="bg-[#a89163] hover:bg-[#8b7344] text-white px-6 md:px-8 py-2 md:py-3 font-semibold text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Browse Collection
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-[#a89163] text-[#a89163] px-6 md:px-8 py-2 md:py-3 font-semibold text-sm md:text-base rounded-lg hover:bg-[#a89163] hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="h-24 bg-[#f7f1e5] bg-[url('/inspirations-wallpaper.png')] bg-repeat bg-top bg-[length:auto_32rem] md:h-40"
      />

      <Footer />
    </main>
  )
}
