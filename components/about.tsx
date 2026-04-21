import React from 'react';
import './About.css';
import { Portfolio } from './portfolio';
import { CTA } from './cta';
import { Header } from './header';
import { Footer } from './footer';

const About = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="about-page-container">

      {/* 1. THE STORY SECTION (Split Screen) */}
      <section className="about-story-section">

        {/* Left Side: Text */}
        <div className="story-content">
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white mb-6">
            Our Story
          </h2>
          <div className="story-body">
            <p>
              Drawing on over a decade of hands-on experience in McKinney's historic districts,
              Double R Renovations was founded to bridge the gap between traditional craftsmanship
              and modern living standards.
              <br /><br />
              Our founder grew up working alongside his father on some of McKinney's most cherished
              historic homes, serving a portfolio of over 150 properties. That apprenticeship instilled
              a deep appreciation for the intricate woodwork, sturdy framing, and detailed aesthetics
              that define homes built before the modern era. Unlike the streamlined, mass-produced
              feel of new construction, these homes possess a soul and a story.
              <br /><br />
              We believe a home is a living narrative. Our work is dedicated to preserving that
              narrative — restoring the intricate shingle shake, reviving original floor plans, and
              ensuring the structural integrity of pier and beam foundations. From restoring a Victorian
              porch to building a garage that houses a classic car collection, our approach remains
              the same: integrity, precision, and a timeless aesthetic.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="story-image-container relative">
          <img
            src="https://images.adsttc.com/media/images/64d2/53b3/7647/c401/7a95/f8d8/newsletter/casas-de-piedra-en-espana-20-restauraciones-renovaciones-y-transformaciones-desde-su-interior_19.jpg?1691505592"
            alt="Founder of Double R Renovations"
            className="story-img"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
            <h1 className="font-sans text-[14px] md:text-[16px] font-normal tracking-[0.35em] mb-4 md:mb-6 text-heritage-deep-green">
              ABOUT
            </h1>
            <p className="font-serif text-4xl md:text-6xl mb-4 md:mb-6">
              LEGACY
            </p>
            <p className="font-sans text-[14px] md:text-[16px] font-normal text-white/80 tracking-[0.2em]">
              Rooted in McKinney. Built to last a century.
            </p>
          </div>
        </div>

      </section>


      {/* 2. OUR VALUES SECTION (3-Column Editorial Grid) */}
      <section className="values-section">
        <h2 className="values-title">Our Values</h2>

        <div className="values-grid">

          {/* Value 1 */}
          <div className="value-item">
            <span className="value-number">01</span>
            <h3>Structural Honesty</h3>
            <p>
              A beautiful historic home is nothing without a solid foundation. With extensive
              experience in Pier and Beam foundation repair and exterior carpentry, we address
              the unseen issues first. Our framing and structural work is built to code and
              built to last, providing a safe and stable canvas for the beautiful details above.
            </p>
          </div>

          {/* Value 2 */}
          <div className="value-item">
            <span className="value-number">02</span>
            <h3>In-House Craftsmanship</h3>
            <p>
              Working on historic homes requires a specific skillset that general laborers often
              lack. We maintain a dedicated, experienced team with 11+ years of specialization
              in this niche. From carpentry to tilework, we handle the work ourselves — ensuring
              consistent quality control and a deep understanding of each project's unique requirements.
            </p>
          </div>

          {/* Value 3 */}
          <div className="value-item">
            <span className="value-number">03</span>
            <h3>Client Collaboration</h3>
            <p>
              Your home, your story. We guide you through the complex world of COAs and historic
              materials, but we always listen first. Our process is built on clear communication —
              from the initial scouting visit to the final touchup — ensuring the finished project
              reflects both our expertise and your personal vision.
            </p>
          </div>

        </div>
      </section>

      {/* 3. RECURRING SECTIONS (Same as Homepage) */}
      <Portfolio backgroundColor="#1B3A34" />
      <CTA />

      </div>
      <Footer />
    </main>
  );
};

export default About;