"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

const languages = [
  { id: "fr" as const, label: "Français", icon: "/icons/french.png" },
  { id: "ar" as const, label: "العربية", icon: "/icons/arabic.png" },
]

export function LanguageSwitcher({ textColor = "text-white", compact = false }: { textColor?: string; compact?: boolean }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div dir="ltr" className={cn("language-switcher flex shrink-0 items-center gap-0.5 px-0.5", compact ? "h-7" : "h-9")} aria-label="Choisir la langue">
      {languages.map((language) => {
        const isSelected = locale === language.id
        return (
          <button
            key={language.id}
            type="button"
            aria-pressed={isSelected}
            aria-label={language.label}
            onClick={() => setLocale(language.id)}
            className={cn(
              cn("flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f97bd]", compact ? "size-8" : "size-10"),
              language.id === "fr" ? "order-first" : "order-last",
              isSelected ? "scale-110 opacity-100" : "scale-90 opacity-55 hover:scale-100 hover:opacity-90",
              textColor,
            )}
          >
            <Image src={language.icon} alt="" width={48} height={48} className={cn("object-contain transition-transform duration-500", compact ? "size-8" : "size-10")} />
          </button>
        )
      })}
    </div>
  )
}
