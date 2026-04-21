"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import useIntersectionObserver from "./useIntersectionObserver"

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.15 })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/v0-website-replication-guide/images/placeholders/cta/3ed6b2_slide4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-[900px] mx-auto px-5 md:px-10 bg-black/60 backdrop-blur-sm py-12 rounded-lg">
        <div
          className={`transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white mb-4">
            Ready to Restore Your Historic Home?
          </h2>
          <p className="font-sans text-lg md:text-xl text-white mb-12">
            Let&apos;s discuss how we can bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="text-white px-10 py-[18px] font-sans font-medium text-sm uppercase tracking-[0.1em] rounded-md shadow-lg transition-all duration-400 hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-heritage-deep-green/50 hover:scale-105"
              style={{backgroundColor: '#1B3A34'}}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="#portfolio"
              className="bg-transparent px-10 py-[18px] font-sans font-medium text-sm uppercase tracking-[0.1em] border rounded-md transition-all duration-300 hover:bg-heritage-deep-green hover:text-white hover:scale-105"
              style={{color: '#1B3A34', borderColor: '#1B3A34'}}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
