"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function AboutHero() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setHeroVisible(true)
  }, [])

  return (
    <div
      className="relative h-[70vh] w-full overflow-hidden"
      style={{
        marginTop: "80px",
        backgroundImage:
          "url('/images/placeholders/abouthero/3ed6b2_slide4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-1000 ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: heroVisible ? "translateY(0)" : "translateY(20px)",
          transitionProperty: "opacity, transform",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-serif leading-tight">
            Preserving History, Building Futures
          </h1>
          <p className="mt-4 text-xl">
            Master craftsmen dedicated to the art of restoring 1920s-era homes.
          </p>
        </div>
      </div>
    </div>
  )
}