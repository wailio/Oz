"use client"

import { useEffect } from "react"

export default function InstagramFeed() {
  useEffect(() => {
    if (!document.querySelector('script[data-elfsight-platform]')) {
      const script = document.createElement("script")
      script.src = "https://elfsightcdn.com/platform.js"
      script.async = true
      script.dataset.elfsightPlatform = "true"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Suivez-nous sur Instagram
          </h2>
          <p className="text-gray-400 text-lg">
            @mobenia_furniture
          </p>
        </div>

        {/* Instagram Feed Widget */}
        <div className="flex justify-center">
          <div 
            className="w-full max-w-4xl rounded-lg overflow-hidden"
            style={{ 
              backgroundColor: "#1a1a1a",
              border: "1px solid #52647D"
            }}
          >
            <div 
              className="elfsight-app-8279c824-14e6-42db-965a-1da4672515d1"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  )
}
