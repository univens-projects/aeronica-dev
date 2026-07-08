"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Building2, Activity } from "lucide-react";
import { DotArrowRight } from "@/components/DotIcons";
import MotionReveal from "@/components/MotionReveal";
import MotionParallax from "@/components/MotionParallax";
import SectionHeader from "@/components/SectionHeader";

const projectGradient = "linear-gradient(135deg, #21389A 0%, #009BFF 100%)";

const portfolio = [
  {
    title: "Central Railway Corridor Mapping",
    desc: "We mapped over 200 km of rail network using RTK-enabled drones and LiDAR, capturing track alignment, embankments, drainage systems, and encroachment zones with sub-centimeter accuracy giving the railway a clearer, more reliable picture of its own corridor.",
    href: "/portfolio/central-railway-corridor-mapping",
    // meta: { Location: "Maharashtra, India", Industry: "Railways", Services: "GIS Survey & Mapping" }
  },
  {
    title: "JSW Steel Mine Volumetric Survey",
    desc: "We mapped JSW Steel's mining operations in 3D, using photogrammetry and GIS-integrated workflows to estimate stockpile volumes, track pit progression, and assess slope stability across the site.",
    href: "/portfolio/jsw-mine-volumetric-survey",
    // meta: { Location: "Karnataka, India", Industry: "Mining", Services: "GIS Survey & Mapping" }
  },
  {
    title: "IOCL Pipeline Surveillance",
    desc: "We deployed our Unified Surveillance System across IOCL's cross-country pipeline network, using EO/IR sensors and AI-assisted detection to deliver real-time intrusion alerts, leak detection, and right-of-way monitoring.",
    href: "/portfolio/iocl-pipeline-surveillance",
    // meta: { Location: "Gujarat, India", Industry: "Oil & Gas", Services: "Security Surveillance" }
  },
];

const metaIcons: Record<string, React.ElementType> = {
  Location: MapPin,
  Industry: Building2,
  Services: Activity,
};

export default function Portfolio() {
  return (
    <section className="section-py" style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", color: "#1a1a1a" }} id="portfolio">
      <SectionHeader
        eyebrow="Our Work"
        title="Featured Projects"
        description="Real-world impact across industries — from railway corridors to mining operations and pipeline surveillance."
        action={
          <Link href="/portfolio" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            fontSize: "1.4rem", fontWeight: 600, color: "#21389A",
            textDecoration: "none", borderBottom: "1px solid #21389A", paddingBottom: "0.2rem",
            transition: "opacity 0.2s ease",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            View Full Portfolio <DotArrowRight size={12} />
          </Link>
        }
      />

      <MotionReveal as="div" stagger={0.15} y={40} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {portfolio.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className="portfolio-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "0.4rem",
              overflow: "hidden",
            }}
          >
            <div className="portfolio-card-image"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
              <MotionParallax speed={0.3} style={{ position: "absolute", inset: "-30% 0" }}>
                <div style={{
                  width: "100%", height: "100%",
                  background: `${projectGradient}, url('/assets/images/pexels/${["pexels-railway-tracks.jpg", "pexels-quarry-site.jpg", "pexels-pipeline.jpg"][index]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }} />
              </MotionParallax>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)" }} />
              <div style={{ color: "rgba(255,255,255,0.15)", fontSize: "8rem", fontWeight: 800, fontFamily: "var(--font-mono)", letterSpacing: "-0.06em", userSelect: "none", position: "relative", zIndex: 1 }}>
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div style={{ flexGrow: 1, padding: "2.5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.3 }}>{project.title}</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.7, marginBottom: "1.5rem" }}>{project.desc}</p>
              {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem 2rem" }}>
                {Object.entries(project.meta).map(([label, value]) => {
                  const MetaIcon = metaIcons[label] || Activity;
                  return (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "1.15rem", color: "#888" }}>
                      <MetaIcon style={{ width: "1.3rem", height: "1.3rem", color: "#888" }} />
                      <span>{label}: <strong style={{ color: "#555", fontWeight: 500 }}>{value}</strong></span>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </Link>
        ))}
      </MotionReveal>
    </section>
  );
}
