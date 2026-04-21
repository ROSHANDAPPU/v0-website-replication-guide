"use client"

import React from "react"
import Image from "next/image" // Assuming Image component is used for optimized images

export default function HistoricHousesRemodelingPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/placeholders/historic-houses-remodeling/3ed6b2_slide4.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Historic Houses Remodeling</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Preserving the past, building the future. Experience the timeless beauty of renovated historic homes.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-black text-white p-6 md:p-10 relative overflow-hidden">

        {/* BOX WITH QUICK NUMBERS */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border border-[#C5B388] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Est. Price</h3>
              <p className="text-3xl font-bold text-[#C5B388]">$250k+</p>
            </div>
            <div className="border border-[#C5B388] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Lead Time</h3>
              <p className="text-3xl font-bold text-[#C5B388]">12-24 Weeks</p>
            </div>
            <div className="border border-[#C5B388] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Work On Site</h3>
              <p className="text-3xl font-bold text-[#C5B388]">8-16 Weeks</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C5B388] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Authentic Restoration</h3>
                <p className="text-[#CCCCCC]">
                  Meticulous attention to historical accuracy and architectural integrity.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modern Upgrades</h3>
                <p className="text-[#CCCCCC]">
                  Seamless integration of contemporary amenities and energy efficiency.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Preservation Expertise</h3>
                <p className="text-[#CCCCCC]">
                  Specialized knowledge in handling delicate historic materials and structures.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Custom Millwork</h3>
                <p className="text-[#CCCCCC]">
                  Recreation or repair of period-specific moldings, doors, and windows.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Structural Reinforcement</h3>
                <p className="text-[#CCCCCC]">
                  Ensuring the long-term stability and safety of aged foundations and frameworks.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Period-Appropriate Finishes</h3>
                <p className="text-[#CCCCCC]">
                  Selection of paints, plasters, and hardware that complement the home's era.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C5B388] mb-6">Pricing</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Due to the unique nature of historic remodeling projects, pricing is custom-quoted.
              Factors influencing cost include the age and condition of the property, scope of work,
              material choices, and historical preservation requirements.
            </p>
            <button className="bg-[#C5B388] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              Request a Custom Quote
            </button>
          </div>
        </section>

        {/* WARRANTIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C5B388] mb-10 text-center">Warranties</h2>
            <div className="space-y-8 text-[#CCCCCC]">
              <p>
                We stand by the quality of our historic remodeling work with comprehensive warranties designed to provide peace of mind.
                Our structural work typically carries a 10-year warranty, covering the integrity of foundational and framing elements.
              </p>
              <p>
                Craftsmanship and finish work are guaranteed for 2 years, ensuring that all visible elements and installations
                meet the highest standards of quality and aesthetics. Specific material warranties will be passed through from manufacturers.
              </p>
              <p>
                Details of your project-specific warranty will be outlined clearly in your contract.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ’s */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C5B388] mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">How do you ensure historical accuracy?</h3>
                <p className="text-[#CCCCCC]">
                  We conduct thorough research into the property's history, architectural style, and original materials.
                  We also work with historical societies and utilize period-appropriate techniques and materials.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">Can you integrate modern technology?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we specialize in subtly integrating modern conveniences like smart home systems, efficient HVAC, and updated electrical,
                  without compromising the historic aesthetic.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">What is the typical timeline for a historic remodel?</h3>
                <p className="text-[#CCCCCC]">
                  Timelines vary significantly based on the project's complexity, scope, and the condition of the existing structure.
                  Most projects range from 12 to 24 weeks for planning and execution, with on-site work typically 8-16 weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST WORK (Placeholder - refer to homepage structure) */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C5B388] mb-10">Our Latest Historic Remodeling Work</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              (This section would dynamically pull and display recent project images and descriptions, similar to the homepage portfolio)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for project cards */}
                <div className="bg-[#1a1a1a] p-6">
                    <Image src="/images/prairie-style-home-restoration-living-room-firepla.jpg" alt="Project 1" width={400} height={300} className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1920s Prairie Style Restoration</h3>
                    <p className="text-[#CCCCCC]">Full interior and exterior renovation maintaining period details.</p>
                </div>
                <div className="bg-[#1a1a1a] p-6">
                    <Image src="/images/tudor-revival-home-renovation-elegant-interior.jpg" alt="Project 2" width={400} height={300} className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Tudor Revival Elegance</h3>
                    <p className="text-[#CCCCCC]">Updating modern living while preserving Tudor charm.</p>
                </div>
                <div className="bg-[#1a1a1a] p-6">
                    <Image src="/images/victorian-home-interior-elegant-living-room-firepl.jpg" alt="Project 3" width={400} height={300} className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Victorian Grandeur Renewed</h3>
                    <p className="text-[#CCCCCC]">Careful restoration of intricate Victorian details.</p>
                </div>
            </div>
            <button className="mt-10 bg-[#C5B388] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              View All Historic Projects
            </button>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Historic Home?</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Contact us today for a consultation and let us bring your vision to life with respect for the past.
            </p>
            <button className="bg-[#C5B388] text-black px-10 py-4 font-semibold text-lg hover:bg-[#B5A078] transition-colors">
              Get a Free Consultation
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
