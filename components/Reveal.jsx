"use client"

import { useReveal } from "@/hooks/useReveal"

export function Reveal({ children, delay = 0, className = "", variant = "fade", immediate = false }) {
  const { ref, isVisible: observedVisible } = useReveal()
  const isShown = immediate || observedVisible

  return (
    <div
      ref={ref}
      className={`${className} ${immediate ? "animate-fade-in-up" : ""}`.trim()}
      style={{
        opacity: isShown ? 1 : 0,
        transform: isShown ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
