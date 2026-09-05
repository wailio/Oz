'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const elements = document.querySelectorAll('[data-scroll-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

export default function ScrollAnimationStyles() {
  return (
    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes rotateInUp {
        from {
          opacity: 0;
          transform: rotateX(90deg) translateY(40px);
        }
        to {
          opacity: 1;
          transform: rotateX(0) translateY(0);
        }
      }

      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: scale(0.5) translateY(20px);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      [data-scroll-animate] {
        opacity: 0;
        animation-fill-mode: forwards;
      }

      [data-scroll-animate].animate-scroll-in {
        animation-duration: 0.8s;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      [data-animation="fade-up"].animate-scroll-in {
        animation-name: fadeInUp;
      }

      [data-animation="slide-left"].animate-scroll-in {
        animation-name: slideInLeft;
      }

      [data-animation="slide-right"].animate-scroll-in {
        animation-name: slideInRight;
      }

      [data-animation="scale"].animate-scroll-in {
        animation-name: scaleIn;
      }

      [data-animation="rotate-up"].animate-scroll-in {
        animation-name: rotateInUp;
      }

      [data-animation="bounce"].animate-scroll-in {
        animation-name: bounceIn;
      }

      /* Staggered delay variants */
      [data-delay="1"].animate-scroll-in {
        animation-delay: 0.1s;
      }

      [data-delay="2"].animate-scroll-in {
        animation-delay: 0.2s;
      }

      [data-delay="3"].animate-scroll-in {
        animation-delay: 0.3s;
      }

      [data-delay="4"].animate-scroll-in {
        animation-delay: 0.4s;
      }

      [data-delay="5"].animate-scroll-in {
        animation-delay: 0.5s;
      }

      [data-delay="6"].animate-scroll-in {
        animation-delay: 0.6s;
      }
    `}</style>
  )
}
