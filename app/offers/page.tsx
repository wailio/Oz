import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Award, CheckCircle, Truck } from "lucide-react"

export default function OffersPage() {
  const currentOffers = [
    {
      title: "Summer Sofas Sale",
      discount: "25%",
      description: "Premium sofas and couches at unbeatable prices",
      validUntil: "June 30, 2026",
      products: 32
    },
    {
      title: "Bedroom Clearance",
      discount: "30%",
      description: "Beds, nightstands, and bedroom accessories",
      validUntil: "July 15, 2026",
      products: 24
    },
    {
      title: "Dining Set Bundles",
      discount: "20%",
      description: "Complete dining room packages at special prices",
      validUntil: "June 25, 2026",
      products: 18
    },
    {
      title: "Office Furniture",
      discount: "15%",
      description: "Professional and ergonomic home office solutions",
      validUntil: "July 10, 2026",
      products: 22
    },
    {
      title: "Outdoor Collection",
      discount: "35%",
      description: "Weather-resistant outdoor furniture and accessories",
      validUntil: "July 31, 2026",
      products: 28
    },
    {
      title: "Accessory Bundles",
      discount: "Free Shipping",
      description: "Free delivery on orders over $500",
      validUntil: "Ongoing",
      products: 15
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <LuxuryHeader />
      <Header />

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulse-offer {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .offer-card {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0;
        }

        .offer-card:nth-child(1) { animation-delay: 0.1s; }
        .offer-card:nth-child(2) { animation-delay: 0.2s; }
        .offer-card:nth-child(3) { animation-delay: 0.3s; }
        .offer-card:nth-child(4) { animation-delay: 0.4s; }
        .offer-card:nth-child(5) { animation-delay: 0.5s; }
        .offer-card:nth-child(6) { animation-delay: 0.6s; }

        .discount-badge {
          animation: pulse-offer 2s ease-in-out infinite;
        }

        .offer-card:hover {
          transform: translateY(-8px);
        }
      `}</style>

      {/* Hero Section */}
      <div className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            Offres & Promotions Exclusives
          </h1>
          <p className="text-xs md:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Découvrez nos offres limitées sur nos collections de mobilier premium. Faites de grandes économies sur les styles que vous aimez.
          </p>
        </div>
      </div>

      {/* Active Promotions */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-12 text-center">
            Promotions Actuelles
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {currentOffers.map((offer, idx) => (
              <div
                key={idx}
                className="offer-card bg-[#2a2a2a] border border-[#a89163] rounded-xl md:rounded-2xl overflow-hidden hover:border-[#d2b979] transition-all duration-500 shadow-md hover:shadow-xl"
              >
                {/* Discount Badge */}
                <div className="discount-badge bg-[#8b7344] text-white px-2 py-2 md:px-6 md:py-4 text-center">
                  <div className="text-lg md:text-4xl font-bold font-serif">
                    {offer.discount}
                  </div>
                  <div className="text-[9px] md:text-sm font-semibold mt-0.5 md:mt-1">RABAIS</div>
                </div>

                {/* Card Content */}
                <div className="p-2 md:p-6">
                  <h3 className="text-xs md:text-xl font-serif font-bold text-white mb-1 md:mb-2 line-clamp-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-300 mb-2 md:mb-4 text-[10px] md:text-sm leading-tight md:leading-relaxed font-light line-clamp-2">
                    {offer.description}
                  </p>

                  <div className="bg-[#1f1f1f] rounded-lg p-2 md:p-4 mb-2 md:mb-4">
                    <div className="text-[9px] md:text-xs text-gray-400 mb-0.5 md:mb-1">Valide Jusqu&apos;à</div>
                    <div className="text-[10px] md:text-sm font-semibold text-gray-300 truncate">
                      {offer.validUntil}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <span className="text-[10px] md:text-sm font-medium text-[#d2b979]">
                      {offer.products} Produits
                    </span>
                  </div>

                  <Link href="/all-products">
                    <button className="w-full bg-[#a89163] hover:bg-[#8b7344] text-white px-2 md:px-4 py-1.5 md:py-3 rounded-lg font-semibold text-[10px] md:text-sm transition-all duration-300 hover:shadow-lg">
                      Acheter
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Offers */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#2a2a2a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-12">
            Pourquoi Choisir Nos Promotions
          </h2>

          <div className="grid grid-cols-3 gap-2 md:gap-8">
            <div className="bg-[#1f1f1f] p-2 md:p-8 rounded-lg md:rounded-2xl shadow-md text-center border-t-2 md:border-l-4 md:border-t-0 border-[#a89163]">
              <Award className="h-6 w-6 md:h-16 md:w-16 text-[#d2b979] mx-auto mb-2 md:mb-4" />
              <h3 className="text-[10px] md:text-lg font-serif font-bold text-white mb-1 md:mb-3">Économies</h3>
              <p className="text-[9px] md:text-base text-gray-300 font-light leading-tight">Réductions réelles</p>
            </div>

            <div className="bg-[#1f1f1f] p-2 md:p-8 rounded-lg md:rounded-2xl shadow-md text-center border-t-2 md:border-l-4 md:border-t-0 border-[#a89163]">
              <CheckCircle className="h-6 w-6 md:h-16 md:w-16 text-[#d2b979] mx-auto mb-2 md:mb-4" />
              <h3 className="text-[10px] md:text-lg font-serif font-bold text-white mb-1 md:mb-3">Qualité</h3>
              <p className="text-[9px] md:text-base text-gray-300 font-light leading-tight">Garantie premium</p>
            </div>

            <div className="bg-[#1f1f1f] p-2 md:p-8 rounded-lg md:rounded-2xl shadow-md text-center border-t-2 md:border-l-4 md:border-t-0 border-[#a89163]">
              <Truck className="h-6 w-6 md:h-16 md:w-16 text-[#d2b979] mx-auto mb-2 md:mb-4" />
              <h3 className="text-[10px] md:text-lg font-serif font-bold text-white mb-1 md:mb-3">Livraison</h3>
              <p className="text-[9px] md:text-base text-gray-300 font-light leading-tight">Expédition rapide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#1f1f1f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Ne Manquez Aucune Offre
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
            Abonnez-vous à notre infolettre pour obtenir des offres exclusives et un accès anticipé aux soldes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#a98661]"
            />
            <button               className="bg-[#a89163] hover:bg-[#8b7344] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              S&apos;abonner
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Nous ne spammons jamais. Vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Vous n&apos;avez pas trouvé ce que vous cherchez ?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 font-light">
            Explorez notre collection complète de meubles et de décoration intérieure.
          </p>
          <Link href="/all-products">
            <button className="bg-[#a98661] hover:bg-[#061632] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg">
              Parcourir Tous les Produits
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
