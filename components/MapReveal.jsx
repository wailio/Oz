"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

export function MapReveal({ src, title }) {
  const wrapRef = useRef(null)
  const [on, setOn] = useState(false)
  const [pinVisible, setPinVisible] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setOn(true)
        setPinVisible(true)
        observer.unobserve(el)
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!pinVisible) return
    const timeout = window.setTimeout(() => setPinVisible(false), 3100)
    return () => window.clearTimeout(timeout)
  }, [pinVisible])

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}>
      <svg width="100%" height="100%" viewBox="0 0 480 300" style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none" }}>
        <rect x="4" y="4" width="472" height="292" fill="none" stroke="#123e68" strokeWidth="2" strokeDasharray="1528" strokeDashoffset={on ? 0 : 1528} style={{ transition: "stroke-dashoffset 1.1s ease-out" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", clipPath: on ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)", transition: "clip-path 1.1s cubic-bezier(0.65,0,0.35,1)" }}>
        <iframe src={src} title={title} width="100%" height="100%" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
      </div>
      <div style={{ position: "absolute", left: "50%", top: "44%", zIndex: 4, pointerEvents: "none", transform: on && pinVisible ? "translate(-50%,0)" : "translate(-50%,-30px)", opacity: pinVisible ? 1 : 0, transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.75s, opacity 0.4s ease" }}>
        <span style={{ position: "absolute", left: "50%", bottom: 0, width: 14, height: 14, marginLeft: -7, border: "1.5px solid #123e68", borderRadius: "50%", opacity: pinVisible ? 1 : 0, animation: pinVisible ? "mapPinPulse 1.6s ease-out 1.35s infinite" : "none" }} />
        <MapPin size={34} color="#123e68" fill="#123e68" strokeWidth={1.5} />
      </div>
      <style>{`@keyframes mapPinPulse { 0% { transform: scale(0.6); opacity: 0.7; } 100% { transform: scale(2.8); opacity: 0; } }`}</style>
    </div>
  )
}
