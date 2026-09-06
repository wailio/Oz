"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

const languages = [
  {
    id: "fr" as const,
    label: "Français",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/france-AVQVPmzNTdDXHnDrgW1frkTbKDUgMn.webp",
  },
  {
    id: "ar" as const,
    label: "العربية",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arabic-0sFrobsFN2iZel28SO9spt7XjTiUVf.webp",
  },
]

export function LanguageSwitcher({ textColor = "text-white", compact = false }: { textColor?: string; compact?: boolean }) {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const switcherRef = useRef<HTMLDivElement>(null)
  const activeLanguage = languages.find((language) => language.id === locale) ?? languages[0]
  const dropdownLanguages = languages

  useEffect(() => {
    if (!isOpen) return
    const handlePointerDown = (event: PointerEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [isOpen])

  return (
    <div ref={switcherRef} dir="ltr" className="language-switcher relative shrink-0" aria-label="Choisir la langue">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Langue active : ${activeLanguage.label}`}
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "flex items-center gap-2 rounded-none border border-white/25 bg-[rgba(36,53,69,0.82)] px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] backdrop-blur-[12px] transition-all duration-200 hover:bg-[rgba(36,53,69,0.94)] hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b66a]",
          compact ? "h-9" : "h-10",
          textColor,
        )}
      >
        <Image src={activeLanguage.icon} alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover" />
        <span>{activeLanguage.id.toUpperCase()}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      <div
        role="menu"
        aria-hidden={!isOpen}
        className={cn(
          "absolute right-0 top-full z-50 mt-2 min-w-44 rounded-[6px] border border-white/10 bg-[rgba(20,20,20,0.75)] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-[16px] transition-all duration-200 ease-out",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0",
        )}
      >
        {dropdownLanguages.map((language) => (
          <button
            key={language.id}
            type="button"
            role="menuitem"
            aria-label={`Passer à ${language.label}`}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => {
              setLocale(language.id)
              setIsOpen(false)
            }}
            className="flex w-full items-center gap-3 rounded-[3px] px-2.5 py-2 text-left text-sm font-normal text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b66a]"
          >
            <Image src={language.icon} alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover" />
            <span className="flex-1 whitespace-nowrap">{language.label}</span>
            {language.id === activeLanguage.id && <Check className="h-4 w-4 text-[#d4af5f]" aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  )
}
