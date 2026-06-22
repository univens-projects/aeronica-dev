"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const services = [
  { title: "GIS Survey & Mapping", desc: "Sub-centimeter accuracy for railway corridors, mining, and infrastructure.", href: "/services/gis-survey-mapping", size: "large", imgClass: "card-img-gis" },
  { title: "Agriculture Spraying", desc: "Precision pesticide application with DGCA-certified drones.", href: "/services/agriculture-spraying", size: "medium", imgClass: "card-img-agri" },
  { title: "Multispectral Scanning", desc: "Advanced crop health analytics and soil condition insights.", href: "/services/multispectral-scanning", size: "medium", imgClass: "card-img-spectral" },
  { title: "Security Surveillance", desc: "Real-time monitoring & AI anomaly detection.", href: "/services/security-surveillance", size: "small", imgClass: "card-img-surveillance" },
  { title: "Samrudhhi-10L", desc: "The gold standard in agri-drone tech.", href: "/products/samrudhhi-10l", size: "small", imgClass: "card-img-samrudhhi" },
  { title: "Unified Surveillance", desc: "Integrated command center for critical infrastructure.", href: "/solutions/uss", size: "medium", imgClass: "card-img-uss" },
  { title: "Aeronica AI", desc: "Smart data processing & reporting.", href: "/solutions/aeroni-ai", size: "small", imgClass: "card-img-ai" },
  { title: "R&D & Custom UAV", desc: "Indigenous flight controllers & custom builds.", href: "/research", size: "small", imgClass: "card-img-rd" },
];

const Services = () => {
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
    <section className="services section-hidden" ref={sectionRef} id="services">
      <div className="section-header centered">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Precision-engineered UAV solutions tailored for industrial scale and operational excellence.</p>
      </div>

      <div className="services-bento-grid" ref={gridRef} data-stagger>
        {services.map((service, index) => (
          <Link key={index} href={service.href} className={`bento-item ${service.size}`}>
            <div className={`bento-image ${service.imgClass}`}></div>
            <div className="bento-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="section-footer">
        <Link href="/services" className="explore-link">
          Explore All Services
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

export default Services;
