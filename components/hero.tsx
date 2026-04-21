"use client"

import { useState, useEffect, useCallback, RefObject } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { VerticalText } from "./VerticalText"

const slides = [
  {
    id: 1,
    title: "PRESERVING McKINNEY'S ARCHITECTURAL LEGACY",
    description:
      "With roots deep in the historic neighborhoods of McKinney, Double R Renovations specializes in breathing new life into century-old homes. We combine time-honored craftsmanship with modern structural integrity to ensure your historic property stands proud for another hundred years.",
    image: "/images/placeholders/hero/24c12b_MFOX8726.jpg",
  },
  {
    id: 2,
    title: "THE ART OF THE PERIOD-APPROPRIATE GARAGE",
    description:
      "Housing a classic car collection requires more than just a concrete box. We design and build detached garages and carriage houses that complement the original architectural lines of your historic residence, featuring materials like Hardie Shingle Shake and custom millwork that honor the era.",
    image: "/images/placeholders/hero/17f18b_victorian-interior-design-guide.jpeg",
  },
  {
    id: 3,
    title: "SENSITIVE ADDITIONS & ADUs",
    description:
      "Expanding a historic home demands a delicate touch. Whether it's a detached Accessory Dwelling Unit (ADU) or a master suite addition, we ensure new construction reads as a respectful continuation of the existing narrative, adhering to strict Historic District guidelines and COA requirements.",
    image: "/images/placeholders/hero/cfd3c4_LX_PNW80_HOM_Lawton_GARMAN_KM160-HDR-Edit.jpg",
  },
]

interface HeroProps {
  sectionRef: RefObject<HTMLElement | null>;
  isVisible: boolean;
}

export function Hero({ sectionRef, isVisible }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <VerticalText side="left" isVisible={isVisible} />
      <VerticalText side="right" isVisible={isVisible} />
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-200 z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-200 z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Content Overlay - Bottom Center */}
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-10 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Project Title */}
          <h1
            className={`font-sans text-[14px] md:text-[16px] font-normal text-white tracking-[0.35em] mb-4 md:mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Project Description */}
          <p
            className={`font-sans text-[13px] md:text-[14px] font-normal text-white/90 leading-[1.8] max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Dot Pagination */}
        <div
          className={`flex items-center justify-center gap-2 mt-8 md:mt-10 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
