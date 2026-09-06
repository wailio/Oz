"use client"

import Link from "next/link"
import { Reveal } from "@/components/Reveal"

const categories = [
  { label: "Salle à manger", href: "/all-products?category=salle-a-manger", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Salle%20a%20manger-85uRZjV0EznBuitnFCLls3n5H7Ke4F.png" },
  { label: "Canapés", href: "/all-products?category=sofas", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canapes-MV5NZZOWvJVqbi70T0Av78N9ZolqkF.png" },
  { label: "Chambres", href: "/all-products?category=chambres", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chambres-HN14Z0I0BJFTJwNEw1VL26zuJnXBpy.png" },
  { label: "Armoire", href: "/all-products?category=armoire", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Armoires-V131yf09a5qVdEoAOK4pzCPr4j8TtE.png" },
  { label: "Accessoires", href: "/all-products?category=accessories", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Accessoires-5Ig9YyBWr1Dqt5uNg8ZiD4Dz53jTRp.png" },
]

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-12">
          <Reveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1.5 text-[11px] tracking-[2px] text-[#333333]">
              <span aria-hidden="true">•</span>
              <span>NOS COLLECTIONS</span>
            </div>
            <h2 className="font-serif text-3xl font-normal text-[#1A1A1A] md:text-4xl">Explorer les Catégories</h2>
          </Reveal>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
          {categories.map((cat, idx) => (
            <Reveal key={cat.label} variant="pop" delay={idx * 80}>
              <Link href={cat.href} className="group flex w-32 flex-col items-center gap-3 text-center md:w-36">
                <span className="relative block aspect-square w-32 overflow-hidden rounded-full transition-all duration-[250ms] ease-out group-hover:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_#000000] group-focus-visible:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_#000000] md:w-36">
                  <img src={cat.image} alt="" className="h-full w-full object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08]" />
                </span>
                <span className="text-sm font-medium text-[#333333] transition-[font-weight] duration-200 group-hover:font-semibold">{cat.label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
