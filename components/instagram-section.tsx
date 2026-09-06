'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Reveal } from '@/components/Reveal'

export default function InstagramSection() {
  useEffect(() => {
    if (!document.querySelector('script[data-elfsight-platform]')) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      script.dataset.elfsightPlatform = 'true'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="bg-white text-black py-12 md:py-16 px-4 md:px-6">
      <Reveal>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-sm md:text-4xl font-serif font-bold mb-2">
            NOUS SUIVRE SUR INSTAGRAM{' '}
            <span className="italic">
              <Link 
                href="https://www.instagram.com/oz.meuble" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black transition-opacity hover:opacity-70"
              >
                @oz.meuble
              </Link>
            </span>
          </h2>
        </div>

        {/* Elfsight Instagram Feed */}
        <div className="flex justify-center mb-8">
          <div className="elfsight-app-d6b90c07-8dfd-487c-aa33-fd3b4d2f1fd6" data-elfsight-app-lazy></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="https://www.instagram.com/oz.meuble"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-black text-black px-8 py-3 font-serif uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            Nous Suivre
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  )
}
