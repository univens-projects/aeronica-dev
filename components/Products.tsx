"use client";

import React, { useEffect, useRef, useState } from "react";

const products = [
  { 
    title: "Samrudhhi-10L", 
    tags: ["DGCA Certified", "Agriculture"], 
    desc: "Our flagship agricultural UAV, designed for precision spraying and maximum efficiency in Indian farming conditions. Engineered for reliability and ease of use.", 
    imgClass: "product-img-samrudhhi", 
    specs: { Payload: "24.9 Kg", "Flight Time": "16 min", Frame: "Carbon Fibre" } 
  },
  { 
    title: "Samrudhhi-10LH", 
    tags: ["Heavy Lift", "Industrial"], 
    desc: "The heavy-duty sibling of the Samrudhhi series, capable of transporting larger payloads for industrial applications and large-scale agricultural needs.", 
    imgClass: "product-img-samrudhhi-lh", 
    specs: { Payload: "30 Kg", "Flight Time": "20 min", Frame: "Carbon Fibre" } 
  },
  { 
    title: "Flycra 2.0", 
    tags: ["Mapping", "Compact"], 
    desc: "A compact, high-performance mapping drone that delivers sub-centimeter accuracy. Ideal for GIS surveys, construction monitoring, and infrastructure inspection.", 
    imgClass: "product-img-flycra", 
    specs: { Range: "7 Km", "Flight Time": "45 min", Weight: "9.6 Kg" } 
  },
  { 
    title: "Nitya FC", 
    tags: ["Flight Controller", "Made in India"], 
    desc: "The brain of our UAVs. An indigenous flight controller offering unparalleled stability and integration with our proprietary AI analytics platforms.", 
    imgClass: "product-img-nitya", 
    specs: { Processor: "STM32", Sensors: "IMU + GPS", Firmware: "ArduPilot" } 
  },
];

const Products = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState("01 / 04");
  const isSnapping = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !sliderRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const stickyHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollRange = wrapperHeight - stickyHeight;
      let progress = scrolled / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      sliderRef.current.style.transform = `translateX(${progress * -300}vw)`;
      const slideIndex = Math.round(progress * 3) + 1;
      setCount(`0${slideIndex} / 04`);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if (isSnapping.current) return;
        const currentScroll = window.scrollY;
        const wrapperTop = wrapperRef.current.offsetTop;
        const relativeScroll = currentScroll - wrapperTop;
        const slideHeight = window.innerHeight;
        const currentSlide = Math.round(relativeScroll / slideHeight);

        if (e.deltaY > 0 && currentSlide < 3) {
          isSnapping.current = true;
          window.scrollTo({ top: wrapperTop + (currentSlide + 1) * slideHeight, behavior: "smooth" });
          setTimeout(() => { isSnapping.current = false; }, 800);
        } else if (e.deltaY < 0 && currentSlide > 0) {
          isSnapping.current = true;
          window.scrollTo({ top: wrapperTop + currentSlide * slideHeight, behavior: "smooth" });
          setTimeout(() => { isSnapping.current = false; }, 800);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="products-sticky-wrapper" ref={wrapperRef} id="products">
      <div className="products-sticky-content">
        <div className="products-slider" ref={sliderRef}>
          {products.map((product, index) => (
            <div key={index} className="product-slide">
              <div className="product-image-container">
                <div className={`product-image ${product.imgClass}`}></div>
              </div>
              <div className="product-info">
                <div className="product-tags">
                  {product.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.desc}</p>
                <div className="product-specs">
                  {Object.entries(product.specs).map(([label, value]) => (
                    <div key={label} className="spec-item">
                      <span className="spec-label">{label}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="products-footer">
          <span className="products-footer-label">Our Products</span>
          <span className="products-footer-count">{count}</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
