"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Clock3, MapPin, Phone, X } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { MapReveal } from "@/components/MapReveal"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

const contactDetails = [
  { icon: Phone, label: "Téléphone", value: "0553 20 40 43" },
  { icon: MapPin, label: "Adresse", value: "Birkhadem, Algérie" },
  { icon: Clock3, label: "Horaires", value: "10:00 — 20:00" },
]

export default function ContactContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [productSpotlight, setProductSpotlight] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState("")
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false)
  const [isQrCodeFailed, setIsQrCodeFailed] = useState(false)
  const [invalidFields, setInvalidFields] = useState<string[]>([])
  const formReset = { name: "", email: "", phone: "", subject: "", message: "" }
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const subject = searchParams.get("subject")
    const message = searchParams.get("message")
    if (!(subject || message)) return

    setFormData((prev) => ({ ...prev, subject: subject || "", message: message || "" }))
    setProductSpotlight(true)

    const scrollTimeout = window.setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 400)

    return () => window.clearTimeout(scrollTimeout)
  }, [searchParams])

  const dismissProductSpotlight = () => setProductSpotlight(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (value.trim()) setInvalidFields((prev) => prev.filter((field) => field !== name))
  }

  useEffect(() => {
    if (!isWhatsappModalOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsWhatsappModalOpen(false)
        setStatus("idle")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isWhatsappModalOpen])

  const closeWhatsappModal = () => {
    setIsWhatsappModalOpen(false)
    setStatus("idle")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const requiredFields = ["name", "phone", "message"] as const
    const missingFields = requiredFields.filter((field) => !formData[field].trim())
    setInvalidFields(missingFields)
    if (missingFields.length > 0) return

    setStatus("sending")
    setInvalidFields([])

    const { name: nom, email, phone: telephone, subject: sujet, message } = formData
    const whatsappMessage = `Nouveau message depuis le site :\n\nNom: ${nom}\nEmail: ${email}\nTéléphone: ${telephone}\nSujet: ${sujet}\nMessage: ${message}`
    const nextWhatsappUrl = `https://wa.me/213553204043?text=${encodeURIComponent(whatsappMessage)}`
    setWhatsappUrl(nextWhatsappUrl)
    setIsQrCodeFailed(false)

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1)

    if (isMobile) {
      setFormData(formReset)
      setStatus("success")
      window.location.href = nextWhatsappUrl
      return
    }

    // Keep WhatsApp opening directly inside the submit gesture on desktop.
    const whatsappWindow = window.open(nextWhatsappUrl, "_blank")
    if (!whatsappWindow) setIsWhatsappModalOpen(true)
    setFormData(formReset)
    setStatus("success")
  }

  return (
    <main className="min-h-screen bg-[#1b1b1b] text-[#f6f1e9]">
      <section className="relative flex min-h-[160px] items-center justify-center overflow-hidden pt-12 md:min-h-[330px] md:pt-28">
        <img src="/contact-inspiration.jpg" alt="Salon Oz meuble avec fauteuil et table basse" className="absolute inset-0 h-full w-full object-cover object-center opacity-40 blur-[1px]" />
        <div className="absolute inset-0 bg-[#111111]/70" />
        <Reveal delay={0}>
          <h1 className="relative z-10 font-sans text-2xl font-bold tracking-[-0.04em] text-white md:text-6xl">Contactez-nous</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-20">
        <Reveal delay={120}>
          <div className="mb-6 text-center md:mb-12">
            <p className="font-serif text-2xl leading-none text-[#a89163]/35 md:text-7xl">Contact</p>
            <h2 className="-mt-1 text-base font-bold tracking-tight text-white md:text-3xl">Informations de contact</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 border-y border-[#a89163]/20 py-4 md:grid md:grid-cols-4 md:gap-0 md:border-y">
          {contactDetails.map(({ icon: Icon, label, value }, index) => (
            <Reveal key={label} variant="pop" delay={index * 80}>
            <div className="flex flex-col items-center md:border-r md:border-[#a89163]/20 md:px-5 md:py-8 md:py-6 md:text-center">
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#a89163] text-[#d2b979] md:mb-4 md:h-12 md:w-12"><Icon className="h-3.5 w-3.5 md:h-5 md:w-5" strokeWidth={1.4} /></div>
              <p className="text-xs font-semibold text-white md:text-sm">{value}</p>
              <p className="mt-0.5 text-[10px] leading-3 text-[#aaa59d] md:mt-2 md:text-xs md:leading-5">{label}</p>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:mt-16 md:gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <Reveal>
          <div className="hidden pt-2 md:block">
            <p className="font-serif text-2xl leading-none text-[#a89163]/35 md:text-6xl">Form</p>
            <h2 className="-mt-1 text-xl font-bold text-white md:text-3xl">Parlons de votre projet</h2>
            <p className="mt-3 max-w-sm text-xs leading-5 text-[#aaa59d] md:mt-5 md:text-sm md:leading-6">Une question, une idée ou un projet d&apos;aménagement ? Notre équipe vous accompagne avec attention pour trouver les pièces qui vous ressemblent.</p>
            <div className="mt-6 border-l border-[#a89163] pl-3 text-xs leading-4 text-[#d2b979] md:mt-8 md:pl-4 md:text-xs md:leading-5">Pourquoi choisir notre boutique ?<br /><span className="text-[#aaa59d]">Qualité premium, conseil personnalisé et design inspirant.</span></div>
          </div>
          </Reveal>
          <Reveal className="md:hidden mb-2 text-center">
            <p className="font-serif text-xl leading-none text-[#a89163]/35">Form</p>
            <h2 className="-mt-0.5 text-sm font-bold text-white">Parlons de votre projet</h2>
          </Reveal>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4" id="contact-form">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <Reveal variant="pop" delay={0}><div><label className="sr-only" htmlFor="name">Nom</label><input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" className={`contact-field w-full rounded-full px-4 py-3.5 ${invalidFields.includes("name") ? "border-red-400" : ""}`} /></div></Reveal>
            <Reveal variant="pop" delay={70}><div><label className="sr-only" htmlFor="email">Email</label><input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="contact-field w-full rounded-full px-4 py-3.5" /></div></Reveal>
            <Reveal variant="pop" delay={140}><div><label className="sr-only" htmlFor="phone">Téléphone</label><input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" className={`contact-field w-full rounded-full px-4 py-3.5 ${invalidFields.includes("phone") ? "border-red-400" : ""}`} /></div></Reveal>
            <Reveal variant="pop" delay={210}><div><label className="sr-only" htmlFor="subject">Sujet</label><input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet" className="contact-field w-full rounded-full px-4 py-3.5" /></div></Reveal>
            <Reveal variant="pop" delay={280}>
              <div className={`product-message-wrap ${productSpotlight ? "product-message-spotlight" : ""}`}>
                <span className="product-message-streak product-message-streak-left" aria-hidden="true" />
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  value={formData.message}
                  onFocus={dismissProductSpotlight}
                  onChange={(event) => { dismissProductSpotlight(); handleChange(event) }}
                  rows={4}
                  maxLength={800}
                  placeholder="Message"
                  className={`contact-field w-full resize-none rounded-xl px-4 py-3.5 ${invalidFields.includes("message") ? "border-red-400" : ""}`}
                />
                <span className="product-message-streak product-message-streak-right" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex justify-start pt-1"><Button type="submit" disabled={status === "sending"} className="rounded-full bg-[#e8b843] px-8 py-3 text-xs font-medium text-[#282014] hover:bg-[#f0ca55]">{status === "sending" ? "Envoi..." : "Envoyer le message"}</Button></div>
            </Reveal>
            {status === "success" && <p className="text-xs text-[#d2b979]" role="status">Message envoyé.</p>}

          </form>
        </div>

        <div className="mt-8 mb-16 overflow-hidden rounded-2xl border border-[#a89163]/30 md:mt-16 md:mb-12">
          <MapReveal src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8154402813816!2d3.0383021793457026!3d36.72699350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad003e85b45b%3A0x8a15d318fb0b3f72!2sOz%20meubles!5e0!3m2!1sfr!2sdz!4v1788624522482!5m2!1sfr!2sdz" title="Oz meuble à Birkhadem" />
        </div>
      </section>

      {isWhatsappModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080706]/80 p-4" role="dialog" aria-modal="true" aria-labelledby="whatsapp-modal-title">
          <div className="relative flex w-full max-w-md flex-col items-center rounded-2xl border border-[#a89163] bg-[#17130f] p-6 text-center shadow-2xl md:p-8">
            <button type="button" onClick={closeWhatsappModal} aria-label="Fermer" className="absolute right-4 top-4 rounded-full p-1 text-[#d2b979] transition-colors hover:bg-[#a89163]/15 hover:text-white"><X className="h-5 w-5" /></button>
            <h2 id="whatsapp-modal-title" className="pr-6 text-xl font-bold text-white md:text-2xl">Scannez pour envoyer votre message</h2>
            <p className="mt-3 text-sm leading-6 text-[#aaa59d]">Ouvrez l&apos;appareil photo de votre téléphone et scannez ce code pour envoyer votre message directement sur WhatsApp.</p>
            <div className="mt-6 rounded-xl bg-[#f7f4ed] p-4">
              {isQrCodeFailed ? (
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`}
                  alt="QR code WhatsApp"
                  width={200}
                  height={200}
                />
              ) : (
                <QRCodeSVG
                  value={whatsappUrl}
                  size={200}
                  bgColor="#f7f4ed"
                  fgColor="#17130f"
                  level="M"
                  onError={() => setIsQrCodeFailed(true)}
                />
              )}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeWhatsappModal} className="mt-5 text-xs text-[#d2b979] underline underline-offset-4 hover:text-white">Vous avez WhatsApp Web ? Cliquez ici</a>
          </div>
        </div>
      )}
    </main>
  )
}
