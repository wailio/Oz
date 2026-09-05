"use client"

import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    name: "Amira Kebab",
    role: "Client Vérifiée",
    avatar: "AB",
    rating: 5,
    text: "Excellente qualité de meubles ! J'ai acheté un canapé et une table basse chez Mobenia Furniture. Les produits sont vraiment magnifiques et bien finis. L'équipe a été très attentive et m'a conseillée sur les meilleures options. Je recommande vivement !",
    date: "Il y a 2 mois"
  },
  {
    name: "Karim Bouhadj",
    role: "Client Vérifiée",
    avatar: "KB",
    rating: 5,
    text: "Transformé mon salon complètement ! Les meubles de Mobenia Furniture ont une qualité exceptionnelle. Le design est moderne et élégant, exactement ce que je cherchais. Livraison rapide et service client très professionnel.",
    date: "Il y a 1 mois"
  },
  {
    name: "Fatima Meziane",
    role: "Client Vérifiée",
    avatar: "FM",
    rating: 4,
    text: "Très satisfaite de mes achats. Les meubles sont confortables et de bonne qualité. Les prix sont raisonnables comparé à la qualité offerte. Je reviendrai certainement pour d'autres achats.",
    date: "Il y a 3 semaines"
  },
  {
    name: "Hassan Medjahed",
    role: "Client Vérifiée",
    avatar: "HM",
    rating: 5,
    text: "Réception à la hauteur ! L'équipe de Mobenia Furniture a été très accueillante et professionnelle. Ils m'ont aidé à choisir les meilleurs meubles pour mon espace. Je suis très heureux du résultat final.",
    date: "Il y a 1 mois"
  },
  {
    name: "Yasmine Lahlou",
    role: "Client Vérifiée",
    avatar: "YL",
    rating: 5,
    text: "Produit de haute qualité ! J'ai commandé plusieurs pièces et elles sont toutes impeccables. Les finitions sont soignées et les matériaux utilisés sont de premier ordre. Mobenia Furniture, c'est mon choix désormais !",
    date: "Il y a 2 semaines"
  },
  {
    name: "Omar Belhadj",
    role: "Client Vérifiée",
    avatar: "OB",
    rating: 5,
    text: "Excellent choix pour les meubles. Prix raisonnable et qualité au rendez-vous. Le mobilier que j'ai choisi a transformé mon intérieur. Je conseille Mobenia Furniture à tous mes amis.",
    date: "Il y a 3 jours"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits qui ont transformé leurs espaces avec nos meubles de qualité premium.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-[#a98661]/30 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#a98661] text-[#a98661]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                <div className="w-10 h-10 bg-[#a98661] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
