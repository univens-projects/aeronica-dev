"use client";

import React, { useEffect, useRef } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const industries = [
  { title: "Railways", desc: "Corridor mapping, track alignment, encroachment detection", iconClass: "industry-icon-railway" },
  { title: "Mining", desc: "Volumetric surveys, stockpile analysis, pit monitoring", iconClass: "industry-icon-mining" },
  { title: "Agriculture", desc: "Precision spraying, crop health, yield estimation", iconClass: "industry-icon-agriculture" },
  { title: "Oil & Gas", desc: "Pipeline surveillance, leak detection, ROW monitoring", iconClass: "industry-icon-oilgas" },
  { title: "Construction", desc: "Site surveying, progress tracking, volume calculations", iconClass: "industry-icon-construction" },
  { title: "Power & Utilities", desc: "Transmission line inspection, thermal imaging, vegetation management", iconClass: "industry-icon-power" },
];

const Industries = () => {
  const sectionRef = useSectionObserver();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.children;
            Array.from(items).forEach((item, index) => {
              item.classList.add("stagger-item");
              setTimeout(() => {
                item.classList.add("is-visible");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="industries section-hidden" ref={sectionRef} id="industries">
      <div className="section-header">
        <h2 className="section-title"><span></span>Industries We Serve</h2>
      </div>
      <div className="industries-grid" ref={gridRef} data-stagger>
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className={`industry-icon ${industry.iconClass}`}></div>
            <h3>{industry.title}</h3>
            <p>{industry.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
