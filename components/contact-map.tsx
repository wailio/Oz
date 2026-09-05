"use client"

export default function ContactMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-[#6f91b3]/45 w-full aspect-square md:aspect-auto">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8154402813816!2d3.0383021793457026!3d36.72699350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad003e85b45b%3A0x8a15d318fb0b3f72!2sOz%20meubles!5e0!3m2!1sfr!2sdz!4v1788624522482!5m2!1sfr!2sdz"
        width="100%"
        height="450"
        className="h-full min-h-0 md:h-[450px] aspect-square md:aspect-auto"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
