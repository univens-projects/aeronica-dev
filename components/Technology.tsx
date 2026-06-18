"use client";

import React, { useEffect, useRef } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const Technology = () => {
  const sectionRef = useSectionObserver();

  useEffect(() => {
    // Logic handled by useSectionObserver for section-visible
  }, []);

  return (
    <section className="technology section-hidden" ref={sectionRef} id="technology">
      <div className="section-header">
        <h2 className="section-title"><span></span>Our Technology</h2>
      </div>
      <div className="tech-content">
        <div className="tech-text">
          <p>We combine purpose-driven engineering, indigenous innovation, and cutting-edge drone technology to create bespoke UAV solutions that drive your operational success.</p>
          <p>Aeronica delivers integrated drone solutions — robust hardware, smart software, and reliable services — tailored to user needs. Supported end-to-end, we help organizations confidently start and scale drone programs, emphasizing reliability, compliance, and Indian manufacturing excellence.</p>
        </div>
        <div className="tech-image parallax-layer" data-parallax-speed="0.2">
          <div className="tech-img-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
