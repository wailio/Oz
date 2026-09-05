import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { allProducts } from "@/lib/products"

export default function RoomsPage() {
  const roomCategories = allProducts.map((product) => ({
    ...product,
    title: product.name,
    image: product.images[0],
    products: 1,
  }))

  /* The previous hardcoded room collection cards have been replaced by the current catalog. */
  /* const legacyRoomCategories = [
    {
      title: "Living Rooms",
      description: "Sophisticated seating arrangements and entertainment spaces",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1--QMMFW2jARhQf9FppihBIJ01Z6c0H9X.png",
      products: 24
    },
    {
      title: "Bedrooms",
      description: "Luxurious comfort with premium mattresses and elegant furnishings",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3--W6QQQI8tMlBZLfnb0RbrnqbCQBHy6W.png",
      products: 18
    },
    {
      title: "Dining Spaces",
      description: "Exquisite dining tables and chairs for memorable meals",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5--7QVdVuMdwJx3KfHPhOs8bcKXRXiQxI.png",
      products: 15
    },
    {
      title: "Elegant Collections",
      description: "Premium furniture with sophisticated design and craftsmanship",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6--UeK63cZTMrnU9xkYOdC20PSNnc3oWx.png",
      products: 12
    },
    {
      title: "Modern Spaces",
      description: "Contemporary designs for the modern home",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7--sErgIlvkZBQSqgS7hca06ZeLKBplGp.png",
      products: 16
    },
    {
      title: "Designer Bedrooms",
      description: "Luxury bedroom sets with premium finishes",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2--rl6lzQ44tsNhI5PwtR8D2Rm1R6UXpd.png",
      products: 10
    }
  ] */
  
  return (
    <main className="min-h-screen bg-white">
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .room-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .room-card:nth-child(1) { animation-delay: 0.1s; }
        .room-card:nth-child(2) { animation-delay: 0.2s; }
        .room-card:nth-child(3) { animation-delay: 0.3s; }
        .room-card:nth-child(4) { animation-delay: 0.4s; }
        .room-card:nth-child(5) { animation-delay: 0.5s; }
        .room-card:nth-child(6) { animation-delay: 0.6s; }

        .room-card:hover img {
          transform: scale(1.08);
          filter: brightness(1.1);
        }
      `}</style>

      {/* Hero Section */}
      <div className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Explore Our <span className="text-[#a98661]">Room Collections</span>
          </h1>
          <p className="text-xs md:text-lg text-gray-700 max-w-2xl mx-auto font-light">
            Discover curated collections designed to transform every space in your home into a sanctuary of luxury and comfort.
          </p>
        </div>
      </div>

      {/* Room Categories Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {roomCategories.map((room, idx) => (
              <div
                key={room.id}
                className="room-card group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-44 md:h-72 overflow-hidden bg-gray-200">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>

                <div className="p-3 md:p-6 bg-white">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-light">
                    {room.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#a98661]">
                      {room.products} Products
                    </span>
                    <Link href={`/product/${room.id}`}>
                      <button className="border border-[#a98661] text-[#a98661] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#a98661] hover:text-white transition-all duration-300">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Space Buffer */}
      <div className="h-12 md:h-16 bg-white"></div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
            Browse our complete collection or contact our designers for custom solutions tailored to your space.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/all-products">
              <button className="bg-[#a98661] hover:bg-[#061632] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                View All Products
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
