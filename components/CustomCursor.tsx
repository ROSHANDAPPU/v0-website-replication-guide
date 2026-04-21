"use client"
import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animFrame: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.08
      ringY += (mouseY - ringY) * 0.08
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      animFrame = requestAnimationFrame(animateRing)
    }

    const onMouseEnterLink = () => {
      ring.classList.add("cursor-hover")
      dot.classList.add("cursor-hover")
    }

    const onMouseLeaveLink = () => {
      ring.classList.remove("cursor-hover")
      dot.classList.remove("cursor-hover")
    }

    const bindLinks = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink)
        el.addEventListener("mouseleave", onMouseLeaveLink)
      })
    }

    window.addEventListener("mousemove", onMouseMove)
    animFrame = requestAnimationFrame(animateRing)
    bindLinks()

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <>
      {/* Dot — sharp, instant */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          pointerEvents: "none",
          zIndex: 9999,
          marginLeft: "-3px",
          marginTop: "-3px",
          transition: "width 0.2s, height 0.2s, background-color 0.2s",
        }}
      />
      {/* Ring — lags behind for elegance */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.5)",
          pointerEvents: "none",
          zIndex: 9998,
          marginLeft: "-18px",
          marginTop: "-18px",
          transition: "width 0.2s, height 0.2s, border-color 0.2s, opacity 0.2s",
        }}
      />
    </>
  )
}
