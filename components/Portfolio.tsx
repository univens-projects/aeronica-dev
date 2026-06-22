"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const portfolio = [
  {
    title: "Central Railway Corridor Mapping",
    desc: "High-resolution corridor mapping along key railway routes using RTK-enabled drones and LiDAR. Sub-centimeter accuracy for track alignment, embankments, drainage systems, and encroachment detection across 200+ km of rail network.",
    href: "/portfolio/central-railway-corridor-mapping",
    imgClass: "project-img-railway",
    meta: { Location: "Maharashtra, India", Industry: "Railways", Services: "GIS Survey & Mapping" }
  },
  {
    title: "JSW Steel Mine Volumetric Survey",
    desc: "Drone-based 3D mapping and volumetric analysis for JSW Steel's mining operations. Stockpile volume estimation, pit progression monitoring, and slope stability assessment using photogrammetry and GIS-integrated workflows.",
    href: "/portfolio/jsw-mine-volumetric-survey",
    imgClass: "project-img-mine",
    meta: { Location: "Karnataka, India", Industry: "Mining", Services: "GIS Survey & Mapping" }
  },
  {
    title: "IOCL Pipeline Surveillance",
    desc: "Deployment of Unified Surveillance System (USS) for IOCL's cross-country pipeline network. EO/IR sensors with AI-assisted anomaly detection for real-time intrusion alerts, leak detection, and right-of-way monitoring.",
    href: "/portfolio/iocl-pipeline-surveillance",
    imgClass: "project-img-pipeline",
    meta: { Location: "Gujarat, India", Industry: "Oil & Gas", Services: "Security Surveillance" }
  },
];

const Portfolio = () => {
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
    <section className="portfolio section-hidden" ref={sectionRef} id="portfolio">
      <div className="section-header">
        <h2 className="section-title">Latest Work</h2>
      </div>
      <div className="portfolio-grid" ref={gridRef} data-stagger>
        {portfolio.map((project, index) => (
          <Link key={index} href={project.href} className="project-card">
            <div className={`project-image ${project.imgClass}`}></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-meta">
                {Object.entries(project.meta).map(([label, value]) => (
                  <div key={label} className="meta-item">
                    <span className="meta-label">{label}</span>
                    <span className="meta-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="section-footer">
        <Link href="/portfolio" className="explore-link">
          View full portfolio
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
    </section>
  );
};

export default Portfolio;
