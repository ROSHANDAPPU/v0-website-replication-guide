import React, { useEffect, useRef } from 'react';
import styles from './Bathrooms.module.css';

const Bathrooms = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation observer for fade-in elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.visible);
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className={`${styles['bath-page-container']}`}>

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className={`${styles['bath-split-section']}`}>

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className={`${styles['bath-sticky-sidebar']}`}>
          <div className={`${styles['sidebar-content']}`}>
            <div className={`${styles['sidebar-header']}`}>
              <span className={`${styles['brand-label']}`}>Service 01</span>
              <h1 className={`${styles['service-title']}`}>Historic Bathroom Remodel</h1>
            </div>

            <div className={`${styles['metrics-grid']}`}>
              <div className={`${styles['metric']}`}>
                <span className={`${styles['label']}`}>Est. Price</span>
                <span className={`${styles['value']}`}>$24k+</span>
              </div>
              <div className={`${styles['metric']}`}>
                <span className={`${styles['label']}`}>Lead Time</span>
                <span className={`${styles['value']}`}>~3 Weeks</span>
              </div>
            </div>

            <div className={`${styles['service-narrative']}`}>
              <p>
                Preserving the intimacy of a historic home while upgrading essential functions. Our bathroom remodels respect original tile patterns and fixture placements, integrating modern plumbing and waterproofing systems discreetly behind the walls.
              </p>
              <p>
                We specialize in period-appropriate subway tile, hexagon floor mosaics, and restoring original cast iron tubs — full tile remodels, water damage remediation, code-compliant ventilation, and restoration of original built-in cabinetry.
              </p>
            </div>

            <div className={`${styles['sidebar-cta']}`}>
              <button className={`${styles['primary-btn']}`}>Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className={`${styles['bath-feed']}`}>
          <div className={`${styles['image-block']}`} ref={addToRefs}>
            <img src="/images/placeholders/bathrooms/28400c_wauwatosa-remodel-2-2560x1280.jpg" alt="Luxury Bathroom" />
            <span className={`${styles['caption']}`}>01 / Spa-Like Retreat</span>
          </div>

          <div className={`${styles['text-block']}`} ref={addToRefs}>
            <h2 className={`${styles['section-header']}`}>Key Features</h2>
            <div className={`${styles['features-list']}`}>
              <div className={`${styles['feature']}`}>01. Custom Vanities</div>
              <div className={`${styles['feature']}`}>02. Premium Fixtures</div>
              <div className={`${styles['feature']}`}>03. Tile & Stone Work</div>
            </div>
          </div>

          <div className={`${styles['image-block']}`} ref={addToRefs}>
            <img src="/images/placeholders/bathrooms/a37522_IMG_7081.jpg" alt="Vanity Detail" />
            <span className={`${styles['caption']}`}>02 / Elegant Details</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className={`${styles['bath-product-grid-section']}`}>

        <h2 className={`${styles['grid-section-title']}`}>Design Details</h2>

        <div className={`${styles['product-split-layout']}`}>

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className={`${styles['product-col-left']}`}>
            <div className={`${styles['product-card']} ${styles['featured']}`}>
              <div className={`${styles['prod-img-box']}`}>
                <img src="/images/placeholders/bathrooms/c67822_22280483_1413245302107646_5263375725670432768_n.jpg" alt="Marble Tile" />
              </div>
              <div className={`${styles['prod-info']}`}>
                <span className={`${styles['prod-brand']}`}>SURFACES</span>
                <span className={`${styles['prod-cat']}`}>TILES</span>
                <h3 className={`${styles['prod-name']}`}>Carrara Marble</h3>
                <span className={`${styles['prod-price']}`}>$25 / sq ft</span>
                <a href="#" className={`${styles['visit-link']}`}>VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className={`${styles['product-col-right']}`}>

            {/* Item 1 */}
            <div className={`${styles['product-card']}`}>
              <div className={`${styles['prod-img-box']}`}>
                <img src="/images/placeholders/bathrooms/ffba44_close-up-primary-bath.jpg" alt="Shower Fixture" />
              </div>
              <div className={`${styles['prod-info']}`}>
                <span className={`${styles['prod-brand']}`}>FIXTURES</span>
                <span className={`${styles['prod-cat']}`}>SHOWER</span>
                <h3 className={`${styles['prod-name']}`}>Rainfall Showerhead</h3>
                <span className={`${styles['prod-price']}`}>$500+</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className={`${styles['product-card']}`}>
              <div className={`${styles['prod-img-box']}`}>
                <img src="/images/placeholders/bathrooms/95292f_1-1920s-cottage-with-added-dormer-for-master-bath-addition-My-Sweet-Cottage-featured-on-_Remodelaholic.jpg" alt="Vanity Cabinet" />
              </div>
              <div className={`${styles['prod-info']}`}>
                <span className={`${styles['prod-brand']}`}>STORAGE</span>
                <span className={`${styles['prod-cat']}`}>VANITY</span>
                <h3 className={`${styles['prod-name']}`}>Custom Oak Vanity</h3>
                <span className={`${styles['prod-price']}`}>$2,000+</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default Bathrooms;