"use client"

import { useEffect, useRef, useState } from "react"

export function ProductImageReveal({ src, alt }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const corners = [
    { top: 16, left: 16, path: "M0,20 L0,0 L20,0" },
    { top: 16, right: 16, path: "M0,0 L20,0 L20,20" },
    { bottom: 16, left: 16, path: "M0,0 L0,20 L20,20" },
    { bottom: 16, right: 16, path: "M20,0 L20,20 L0,20" },
  ]

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", overflow: "hidden", backgroundColor: "#ffffff" }}>
      <img src={src} alt={alt} style={{
        maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain",
        display: "block", borderRadius: "2px",
        filter: on ? "grayscale(0) blur(0px)" : "grayscale(1) blur(6px)",
        opacity: on ? 1 : 0.85,
        transform: on ? "scale(1)" : "scale(1.04)",
        transition: "filter 1.3s cubic-bezier(0.22,1,0.36,1), opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)"
      }} />
      {corners.map((c, i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 20 20" style={{
          position: "absolute", top: c.top, left: c.left, right: c.right, bottom: c.bottom,
          opacity: on ? 1 : 0, transition: "opacity 0.9s ease-out 500ms", pointerEvents: "none"
        }}>
          <path d={c.path} stroke="#c9a24b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  )
}
