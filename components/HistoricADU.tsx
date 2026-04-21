import React, { useEffect, useRef } from 'react';
import './HistoricADU.css';

const HistoricADU = () => {
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
    <div className="fhr-page-container">

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className="fhr-split-section">

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className="fhr-sticky-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <span className="brand-label">Service 03</span>
              <h1 className="service-title">Historic ADU</h1>
</div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$200k+</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">6–8 Months</span>
              </div>
</div>
<div className="service-narrative">
              <p>
                Adding an accessory structure to a historic property requires navigating strict Certificate of Appropriateness (COA) guidelines. We design and build detached ADUs, garage apartments, and studios that appear as if they were original outbuildings.
              </p>
              <p>
                Matching rooflines, siding profiles, and window muntin patterns ensure the new structure is a subordinate, respectful addition to the primary historic resource. Includes full COA and permit acquisition, architectural design by historic preservation specialists, and foundation and framing matched to existing structures.
              </p>
</div>
<div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="fhr-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="https://www.thespruce.com/thmb/c9ibNdGHBKMb8EkT3pKDqYiDN-I=/5130x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg" alt="Living Room" />
            <span className="caption">01 / Living Spaces</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <h2 className="section-header">Key Areas</h2>
            <div className="features-list">
              <div className="feature">01. Kitchen & Dining</div>
              <div className="feature">02. Living Areas</div>
              <div className="feature">03. Bedrooms & Bathrooms</div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="/images/placeholders/fullhomeremodels/743fea_female-electrician-working-in-a-kitchen-remodelling.jpg" alt="Kitchen" />
            <span className="caption">02 / Modern Kitchen</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className="fhr-product-grid-section">

        <h2 className="grid-section-title">Design Details</h2>

        <div className="product-split-layout">

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className="product-col-left">
            <div className="product-card featured">
              <div className="prod-img-box">
                <img src="/images/placeholders/fullhomeremodels/00b9ef_types-of-kitchen-remodels-527604950.jpg" alt="Hardwood Flooring" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">PREMIUM FINISHES</span>
                <span className="prod-cat">FLOORING</span>
                <h3 className="prod-name">Oak Hardwood</h3>
                <span className="prod-price">$15 / sq ft</span>
                <a href="#" className="visit-link">VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className="product-col-right">

            {/* Item 1 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/placeholders/fullhomeremodels/862751_kitchen-closet-renovation.jpg" alt="Cabinetry" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">CUSTOM</span>
                <span className="prod-cat">CABINETRY</span>
                <h3 className="prod-name">Bespoke Kitchen Cabinets</h3>
                <span className="prod-price">$5,000+</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/placeholders/fullhomeremodels/1be5a6_IMG_8588.jpg" alt="Lighting" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">AMBIANCE</span>
                <span className="prod-cat">LIGHTING</span>
                <h3 className="prod-name">LED Pendant Lights</h3>
                <span className="prod-price">$300 / unit</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default HistoricADU;