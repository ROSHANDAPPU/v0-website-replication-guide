import React, { useEffect, useRef } from 'react';
import './CarriageHouses.css';

const CarriageHouses = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation observer for fade-in elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="gc-page-container">

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className="gc-split-section">

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className="gc-sticky-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <span className="brand-label">Service 04</span>
              <h1 className="service-title">Carriage Houses, Garages & Carports</h1>
</div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$37k+</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">~4 Weeks</span>
              </div>
</div>
<div className="service-narrative">
              <p>
                As seen in the Shaw Residence project, we specialize in building detached garages and carports that enhance rather than detract from historic curb appeal. We reject modern metal boxes in favor of structures with character and craft.
              </p>
              <p>
                Hardie Shingle Shake siding, decorative brackets, and custom wood doors — designed to house classic and collector vehicles with style. Includes 24'x32' garage construction, 20'x24' carport design, exterior carpentry and skirting, and Trex deck integration.
              </p>
</div>
<div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="gc-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="/images/placeholders/generalconstruction/1a84bd_House-framing.jpg" alt="Framing" />
            <span className="caption">01 / Structural Integrity</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <h2 className="section-header">Core Features</h2>
            <div className="features-list">
              <div className="feature">01. Structural Integrity</div>
              <div className="feature">02. Code Compliance</div>
              <div className="feature">03. Energy Efficiency</div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="/images/placeholders/generalconstruction/69dd37_360_F_179280204_Yu8ysrTC8ep7Ikl6AjPSaSQoQ9aSGzif.jpg" alt="Detail" />
            <span className="caption">02 / Precision Joinery</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className="gc-product-grid-section">

        <h2 className="grid-section-title">Design Details</h2>

        <div className="product-split-layout">

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className="product-col-left">
            <div className="product-card featured">
              <div className="prod-img-box">
                {/* Use your 'Cugino' equivalent image */}
                <img src="/images/placeholders/generalconstruction/00187a_construction-worker-framing-a-building.jpg" alt="Premium Lumber" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">DOUBLE R SUPPLIES</span>
                <span className="prod-cat">MATERIALS</span>
                <h3 className="prod-name">Pressure Treated Pine</h3>
                <span className="prod-price">Included</span>
                <a href="#" className="visit-link">VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className="product-col-right">

            {/* Item 1 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/placeholders/generalconstruction/44c492_images_2022_09_20_general-contractor-looking-at-building-plan.webp" alt="Steel Beam" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">STRUCTURAL</span>
                <span className="prod-cat">REINFORCEMENT</span>
                <h3 className="prod-name">Steel I-Beam Support</h3>
                <span className="prod-price">$1,500+</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/placeholders/generalconstruction/1f470e_Carvana-2.jpg" alt="Insulation" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">ENERGY</span>
                <span className="prod-cat">EFFICIENCY</span>
                <h3 className="prod-name">R-30 Insulation</h3>
                <span className="prod-price">$2.50 / sq ft</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default CarriageHouses;