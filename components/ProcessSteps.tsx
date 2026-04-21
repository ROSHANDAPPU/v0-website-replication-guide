"use client"
import { useRef } from "react"
import useIntersectionObserver from "./useIntersectionObserver"

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation & Historic Scouting",
    description:
      "We begin with an in-depth discussion about your vision, lifestyle, and project goals, then conduct a preliminary scouting assessment for historic district compliance, foundation and framing conditions, and permit hurdles — before you invest in design.",
  },
  {
    step: 2,
    title: "Collaborative Design & Material Selection",
    description:
      "We work with you to finalize the design, selecting materials that honor the home's era — the correct Hardie Shingle Shake profile, matching historic trim dimensions, or tile that reflects the period. Every component fits the architectural narrative.",
  },
  {
    step: 3,
    title: "Architectural Consultation",
    description:
      "For projects requiring additions or structural changes, we engage a trusted architect experienced in historic homes to create plans that meet modern building codes and satisfy the McKinney Historic Preservation Board's aesthetic requirements.",
  },
  {
    step: 4,
    title: "COA & Permitting",
    description:
      "We manage the entire Certificate of Appropriateness (COA) application and building permit process — preparing all documentation, attending board hearings if necessary, and ensuring compliance with all local ordinances to avoid delays and fines.",
  },
  {
    step: 5,
    title: "Precision Construction",
    description:
      "Construction begins with a focus on protecting the existing historic fabric. Using our in-house team with 11+ years of specialized experience — no outsourcing — we execute every detail, from Pier and Beam foundation repair to intricate tilework.",
  },
  {
    step: 6,
    title: "Client Walkthrough & Review",
    description:
      "Before final sign-off, we conduct a thorough walkthrough reviewing workmanship, space flow, and the finished product against the design intent and historic character we set out to preserve.",
  },
  {
    step: 7,
    title: "Final Touchups & Preservation Care",
    description:
      "We don't leave until the details are perfect — touchup paint on trim, adjusting historic door latches, site cleanup. We also provide guidance on maintaining your newly restored or expanded historic home for the long term.",
  },
];

function ProcessStep({ step, title, description, index }: { step: number; title: string; description: string; index: number }) {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative w-full h-full min-h-[260px] cursor-pointer group overflow-hidden bg-black border rounded-lg p-6 flex flex-col justify-center items-center transition-all duration-300 hover:shadow-lg hover:shadow-heritage-deep-green/50" style={{borderColor: '#1B3A34'}}>
        {/* Front */}
        <div className="transition-opacity duration-500 group-hover:opacity-0">
          <div className="font-serif font-bold text-[48px] mb-4" style={{color: '#1B3A34'}}>{`0${step}`}</div>
          <h3 className="font-serif font-semibold text-[24px] text-white text-center">{title}</h3>
        </div>
        {/* Back */}
        <div className="absolute inset-0 p-6 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
          <p className="text-gray-400 text-center text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function ProcessSteps() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-center mb-4" style={{color: '#1B3A34'}}>Our Process</p>
        <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-center mb-12 text-white">OUR RESTORATION PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {processSteps.slice(0, 6).map((step, index) => (
            <ProcessStep key={step.step} {...step} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.34rem)] items-stretch">
            <ProcessStep {...processSteps[6]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
}
