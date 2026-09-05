import Link from "next/link"

const armchairImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2016%20ao%C3%BBt%202026%2C%2012_09_55-2YvojC1ctjiO4pStIvpnEMpgehzVP5.png"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#1E1912] px-6 py-8 text-center">
      <div className="flex w-full max-w-[520px] flex-col items-center">
        <p className="error-label mb-3 font-[family-name:var(--font-playfair)] text-[14px] uppercase tracking-[4px] text-[#d4af5f]/70">
          404
        </p>

        <img
          src={armchairImage}
          alt="Illustration dorée d'un fauteuil"
          className="chair-reveal mb-7 h-auto w-[180px] object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.48)] transition duration-300 ease-out hover:scale-[1.04] hover:drop-shadow-[0_0_14px_rgba(212,175,95,0.3)]"
        />

        <h1 className="heading-reveal font-[family-name:var(--font-great-vibes)] text-[clamp(3.75rem,12vw,4.5rem)] font-normal leading-none text-[#d4af5f]">
          Cette pièce n&apos;existe pas
        </h1>

        <svg
          aria-hidden="true"
          viewBox="0 0 360 34"
          className="underline-reveal mt-4 h-7 w-[min(115%,360px)] overflow-visible"
        >
          <path
            d="M7 18 C55 5, 83 28, 128 17 S205 6, 246 18 S306 27, 353 10"
            fill="none"
            stroke="#d4af5f"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        <h2 className="subheading-reveal mt-5 font-[family-name:var(--font-playfair)] text-xl font-normal leading-7 text-[#f5f2ea]">
          Page introuvable
        </h2>

        <Link
          href="/"
          className="button-reveal mt-5 inline-flex min-h-12 items-center justify-center rounded-[2px] border border-[#d4af5f] px-8 py-[13px] font-serif text-xs font-normal uppercase tracking-[3px] text-[#d4af5f] transition duration-[250ms] hover:bg-[rgba(212,175,95,0.08)] hover:border-[#e2c477] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af5f]"
        >
          Retour à l&apos;accueil
        </Link>
      </div>

      <style>{`
        @keyframes labelIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes chairIn { from { opacity: 0; transform: scale(.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes headingIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .error-label { opacity: 0; animation: labelIn 400ms cubic-bezier(.16,1,.3,1) 0ms forwards; }
        .chair-reveal { opacity: 0; animation: chairIn 800ms cubic-bezier(.16,1,.3,1) 100ms forwards; }
        .heading-reveal { opacity: 0; animation: headingIn 600ms cubic-bezier(.16,1,.3,1) 900ms forwards; }
        .underline-reveal path { stroke-dasharray: 420; stroke-dashoffset: 420; animation: drawLine 500ms ease-out 1500ms forwards; }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        .subheading-reveal { opacity: 0; animation: fadeIn 400ms ease-out 1600ms forwards; }
        .button-reveal { opacity: 0; animation: headingIn 400ms cubic-bezier(.16,1,.3,1) 1900ms forwards; }
        @media (prefers-reduced-motion: reduce) {
          .error-label, .chair-reveal, .heading-reveal, .subheading-reveal, .button-reveal { opacity: 1; animation: none; }
          .underline-reveal path { stroke-dashoffset: 0; animation: none; }
        }
      `}</style>
    </main>
  )
}
