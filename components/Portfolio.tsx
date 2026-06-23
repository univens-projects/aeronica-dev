"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Building2, Activity, ArrowRight } from "lucide-react";

const portfolio = [
  {
    title: "Central Railway Corridor Mapping",
    desc: "High-resolution corridor mapping along key railway routes using RTK-enabled drones and LiDAR. Sub-centimeter accuracy for track alignment, embankments, drainage systems, and encroachment detection across 200+ km of rail network.",
    href: "/portfolio/central-railway-corridor-mapping",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #1a365d 50%, #2d5a87 100%)",
    meta: { Location: "Maharashtra, India", Industry: "Railways", Services: "GIS Survey & Mapping" }
  },
  {
    title: "JSW Steel Mine Volumetric Survey",
    desc: "Drone-based 3D mapping and volumetric analysis for JSW Steel's mining operations. Stockpile volume estimation, pit progression monitoring, and slope stability assessment using photogrammetry and GIS-integrated workflows.",
    href: "/portfolio/jsw-mine-volumetric-survey",
    gradient: "linear-gradient(135deg, #1a0c0c 0%, #3d1f1a 50%, #6a3d2d 100%)",
    meta: { Location: "Karnataka, India", Industry: "Mining", Services: "GIS Survey & Mapping" }
  },
  {
    title: "IOCL Pipeline Surveillance",
    desc: "Deployment of Unified Surveillance System (USS) for IOCL's cross-country pipeline network. EO/IR sensors with AI-assisted anomaly detection for real-time intrusion alerts, leak detection, and right-of-way monitoring.",
    href: "/portfolio/iocl-pipeline-surveillance",
    gradient: "linear-gradient(135deg, #0c1a1a 0%, #1a3a4a 50%, #2d6a7a 100%)",
    meta: { Location: "Gujarat, India", Industry: "Oil & Gas", Services: "Security Surveillance" }
  },
];

const metaIcons: Record<string, React.ElementType> = {
  Location: MapPin,
  Industry: Building2,
  Services: Activity,
};

export default function Portfolio() {
  return (
    <section style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto", color: "#1a1a1a" }} id="portfolio">
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          <span></span>Our Work
        </span>
        <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
          Featured Projects
        </h2>
        <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
          Real-world impact across industries — from railway corridors to mining operations and pipeline surveillance.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {portfolio.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "row",
              background: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "0.4rem",
              overflow: "hidden",
              transition: "all 0.3s ease",
              minHeight: "220px",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{
              width: "280px",
              minWidth: "200px",
              background: `${project.gradient}, url('/assets/images/pexels/${["pexels-railway-tracks.jpg","pexels-quarry-site.jpg","pexels-pipeline.jpg"][index]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)" }} />
              <div style={{ color: "rgba(255,255,255,0.15)", fontSize: "8rem", fontWeight: 800, fontFamily: "var(--font-mono)", letterSpacing: "-0.06em", userSelect: "none" }}>
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div style={{ flexGrow: 1, padding: "2.5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.3 }}>{project.title}</h3>
              <p style={{ fontSize: "1.3rem", color: "#666", lineHeight: 1.7, marginBottom: "1.5rem" }}>{project.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem 2rem" }}>
                {Object.entries(project.meta).map(([label, value]) => {
                  const MetaIcon = metaIcons[label] || Activity;
                  return (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "1.15rem", color: "#888" }}>
                      <MetaIcon style={{ width: "1.3rem", height: "1.3rem", color: "#aaa" }} />
                      <span>{label}: <strong style={{ color: "#555", fontWeight: 500 }}>{value}</strong></span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <Link href="/portfolio" style={{
          display: "inline-flex", alignItems: "center", gap: "0.8rem",
          padding: "1.2rem 2.8rem", background: "#111", color: "#fff",
          borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
          textDecoration: "none", transition: "all 0.3s ease",
        }}>
          View Full Portfolio <ArrowRight style={{ width: "1.6rem", height: "1.6rem" }} />
        </Link>
      </div>
    </section>
  );
}
