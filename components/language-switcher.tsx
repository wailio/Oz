"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

const languages = [
  { id: "fr" as const, label: "Français", icon: "/icons/french.png" },
  { id: "ar" as const, label: "العربية", icon: "/icons/arabic.png" },
]

export function LanguageSwitcher({ textColor = "text-white", compact = false }: { textColor?: string; compact?: boolean }) {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const switcherRef = useRef<HTMLDivElement>(null)
  const activeLanguage = languages.find((language) => language.id === locale) ?? languages[0]
  const otherLanguages = languages.filter((language) => language.id !== activeLanguage.id)

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
          "flex items-center justify-center rounded-full border border-[#d4af5f]/40 bg-transparent transition-all duration-200 hover:border-[#d4af5f] hover:bg-[#d4af5f]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b66a]",
          compact ? "size-8" : "size-10",
          textColor,
        )}
      >
        <Image src={activeLanguage.icon} alt="" width={48} height={48} className={cn("rounded-full object-cover", compact ? "size-6" : "size-8")} />
      </button>

      <div
        role="menu"
        aria-hidden={!isOpen}
        className={cn(
          "absolute right-0 top-full z-50 mt-2 rounded-xl border border-[#d4af5f]/35 bg-[#151515] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-200 ease-out",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0",
        )}
      >
        {otherLanguages.map((language) => (
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
            className="flex size-8 items-center justify-center rounded-full border border-transparent transition-colors hover:border-[#d4af5f]/60 hover:bg-[#d4af5f]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b66a]"
          >
            <Image src={language.icon} alt="" width={48} height={48} className="size-6 rounded-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
