import type React from "react"
import type { Metadata, Viewport } from "next"
import { Amiri, Cormorant_Garamond, Geist, Geist_Mono, Great_Vibes, Manrope, Montserrat, Noto_Sans_Arabic, Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientLayout from "./_client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great-vibes" })
const _cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "300", style: "italic", variable: "--font-cormorant" })
const _notoArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic" })
const _amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-amiri" })

export const metadata: Metadata = {
  title: "Oz meuble | Mobilier à Birkhadem",
  description: "Découvrez Oz meuble à Birkhadem : mobilier élégant, conseils personnalisés et pièces pour transformer votre intérieur.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${_manrope.variable} ${_montserrat.variable} ${_playfair.variable} ${_greatVibes.variable} ${_cormorant.variable} ${_notoArabic.variable} ${_amiri.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
