"use client"

import { useEffect, useRef } from "react"
import "./BeforeAfterSlider.css"

export function BeforeAfterSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const beforeContainer = slider.querySelector('.ba-before-container') as HTMLElement
    const handle = slider.querySelector('.ba-handle') as HTMLElement

    function moveSlider(e: MouseEvent | TouchEvent) {
      if (!slider) return
      const rect = slider.getBoundingClientRect()
      let x = ('pageX' in e ? e.pageX : e.touches[0].pageX) - rect.left

      if (x < 0) x = 0
      if (x > rect.width) x = rect.width

      const percentage = (x / rect.width) * 100

      beforeContainer.style.width = percentage + "%"
      handle.style.left = percentage + "%"
    }

    slider.addEventListener('mousemove', moveSlider)
    slider.addEventListener('touchmove', moveSlider, { passive: true })

    return () => {
      slider.removeEventListener('mousemove', moveSlider)
      slider.removeEventListener('touchmove', moveSlider as EventListener)
    }
  }, [])

  return (
    <section className="ba-section">
      <div className="ba-slider" ref={sliderRef}>
        <img src="/images/placeholders/beforeafterslider/db4bb5_image_164968588.jpeg" alt="After Restoration" className="ba-image-after" />
        <div className="ba-before-container">
          <img src="/images/placeholders/beforeafterslider/efa8ac_RS74932_newdale40482-scr.jpg" alt="Before Restoration" className="ba-image-before" />
        </div>
        <div className="ba-handle">
          <div className="handle-line"></div>
          <div className="handle-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6"></polyline>
              <line x1="21" y1="12" x2="3" y2="12"></line>
            </svg>
          </div>
        </div>
        <div className="ba-overlay-text">
          <h2>HONORING THE PAST / BUILDING THE FUTURE</h2>
        </div>
      </div>
    </section>
  )
}