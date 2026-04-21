"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ProcessHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/placeholders/processhero/df6096_20RENOVATIONS-slide-6DHV-superJumbo.jpg"
          alt="Process background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1
          className={`font-sans text-[14px] md:text-[16px] font-normal tracking-[0.35em] mb-4 md:mb-6 text-heritage-deep-green transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          PROCESS
        </h1>
        <p
          className={`font-serif text-4xl md:text-6xl transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          DESIGN
        </p>
        <p
          className={`font-sans text-[14px] md:text-[16px] font-normal text-white/80 tracking-[0.2em] mt-4 md:mt-6 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A Step-by-Step Guide to Your Dream Home
        </p>
      </div>
    </section>
  )
}
