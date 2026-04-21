import React, { useEffect, useRef } from 'react';
import './Kitchens.css';

const Kitchens = () => {
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
    <div className="kit-page-container">

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className="kit-split-section">

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className="kit-sticky-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <span className="brand-label">Service 02</span>
              <h1 className="service-title">Period-Appropriate Kitchens</h1>
            </div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$35k+</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">~4 Weeks</span>
              </div>
            </div>

            <div className="service-narrative">
              <p>
                The kitchen is the heart of the home, but in a historic house it shouldn't feel like a time capsule of the wrong decade. We design kitchens that honor the architectural era — whether that's Craftsman shaker cabinets or Victorian beadboard — while concealing modern appliances.
              </p>
              <p>
                Custom millwork matched to existing trim profiles, installation of Hardie Soffit for exterior kitchen vents, and restoration of original windows and door hardware — all built for ergonomic functionality in today's lifestyle.
              </p>
            </div>

            <div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="kit-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D" alt="Modern Kitchen" />
            <span className="caption">01 / Island Design</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <h2 className="section-header">Key Elements</h2>
            <div className="features-list">
              <div className="feature">01. Cabinetry & Storage</div>
              <div className="feature">02. Countertops & Backsplash</div>
              <div className="feature">03. Appliances & Lighting</div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="Cabinet Detail" />
            <span className="caption">02 / Custom Cabinetry</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className="kit-product-grid-section">

        <h2 className="grid-section-title">Design Details</h2>

        <div className="product-split-layout">

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className="product-col-left">
            <div className="product-card featured">
              <div className="prod-img-box">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D" alt="Quartz Countertop" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">SURFACES</span>
                <span className="prod-cat">COUNTERTOPS</span>
                <h3 className="prod-name">Calacatta Quartz</h3>
                <span className="prod-price">$120 / sq ft</span>
                <a href="#" className="visit-link">VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className="product-col-right">

            {/* Item 1 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/placeholders/kitchens/1dbd11_11_Straight-Kitchen-HD.jpg" alt="Cabinet Hardware" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">HARDWARE</span>
                <span className="prod-cat">ACCESSORIES</span>
                <h3 className="prod-name">Brass Pulls & Knobs</h3>
                <span className="prod-price">$25 / piece</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="https://plus.unsplash.com/premium_photo-1661963167025-ca61fd6b36d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMGNhYmluZXRzfGVufDB8fDB8fHww" alt="Backsplash Tile" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">TILING</span>
                <span className="prod-cat">BACKSPLASH</span>
                <h3 className="prod-name">Subway Tile Mosaic</h3>
                <span className="prod-price">$8 / sq ft</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default Kitchens;