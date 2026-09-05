"use client"

export default function MapContent() {
  return (
    <div
      className="overflow-hidden shadow-lg border-0 sticky top-20 z-40 w-full h-56 md:h-96"
      style={{ 
        borderLeft: "3px solid #a98661",
        borderRight: "3px solid #a98661",
        minHeight: "400px"
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3198.5406841850314!2d3.0806421!3d36.7095739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadc55ffe5c27%3A0xf351e61467294090!2sMOBENIA%20FURNITURE!5e0!3m2!1sfr!2sdz!4v1786702142590!5m2!1sfr!2sdz"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
