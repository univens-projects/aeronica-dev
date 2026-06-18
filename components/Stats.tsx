"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const Stats = () => {
  const sectionRef = useSectionObserver();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const StatNumber = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (animated) {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const update = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    }, [animated, target]);

    return <span>{count}</span>;
  };

  return (
    <section className="stats section-hidden" ref={sectionRef} id="stats">
      <div className="stats-container">
        <div className="stats-text parallax-layer" data-parallax-speed="0.1">
          <p>Since our inception, Aeronica has been at the forefront of indigenous UAV innovation in India. We combine precision engineering with deep domain expertise to deliver scalable, DGCA-certified drone solutions that redefine efficiency across agriculture, infrastructure, and surveillance.</p>
          <div className="section-footer">
            <Link href="/about" className="explore-link">Our Story
              <svg className="dot-grid-icon explore-icon" viewBox="0 0 100 100" fill="none">
                <g transform="translate(-18.375, 6.125)">
                  <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125"/>
                  <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125"/>
                  <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125"/>
                  <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125"/>
                  <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125"/>
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="stats-grid parallax-layer" data-parallax-speed="0.2">
          <div className="stat-box parallax-layer" data-parallax-speed="0.05">
            <div className="stat-value-container">
              <span className="stat-number"><StatNumber target={120} /></span>
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-label">Cities Covered</div>
          </div>
          <div className="stat-box offset-down parallax-layer" data-parallax-speed="0.05">
            <div className="stat-value-container">
              <span className="stat-number"><StatNumber target={25000} /></span>
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-label">Acres Surveyed</div>
          </div>
          <div className="stat-box parallax-layer" data-parallax-speed="0.05">
            <div className="stat-value-container">
              <span className="stat-number"><StatNumber target={98} /></span>
              <span className="stat-percent">%</span>
            </div>
            <div className="stat-label">Mapping Accuracy</div>
          </div>
          <div className="stat-box offset-down parallax-layer" data-parallax-speed="0.05">
            <div className="stat-value-container">
              <span className="stat-number"><StatNumber target={4} /></span>
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-label">DGCA Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
