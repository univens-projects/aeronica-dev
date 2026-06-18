"use client";

import React, { useEffect, useRef } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const processSteps = [
  { step: "01", title: "Consult", desc: "We begin with a deep understanding of your operational needs, site conditions, and compliance requirements to define the optimal drone solution." },
  { step: "02", title: "Survey", desc: "Our certified pilots deploy advanced UAVs with RTK, LiDAR, and multispectral sensors to capture high-fidelity data across your project area." },
  { step: "03", title: "Process", desc: "Raw data is transformed into actionable insights through photogrammetry, AI analytics, and GIS-integrated workflows tailored to your industry." },
  { step: "04", title: "Deliver", desc: "You receive comprehensive reports, 3D models, and interactive dashboards with ongoing support to ensure your project's success." },
];

const Process = () => {
  const sectionRef = useSectionObserver();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const gridObserver = new IntersectionObserver(
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
    if (gridRef.current) gridObserver.observe(gridRef.current);

    return () => {
      observer.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  return (
    <section className="process section-hidden" ref={sectionRef} id="process">
      <div className="section-header">
        <h2 className="section-title"><span></span>How We Work</h2>
      </div>
      <div className="process-steps" ref={gridRef} data-stagger>
        {processSteps.map((step, index) => (
          <div key={index} className="process-step">
            <span className="step-number">{step.step}</span>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
