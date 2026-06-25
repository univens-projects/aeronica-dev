"use client";

import React from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";
import { Image as ImageIcon, PlayCircle, Camera, Map as MapIcon, Eye } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import MotionParallax from "@/components/MotionParallax";

const galleryItems = [
  { title: "Railway Corridor Orthomosaic", category: "Infrastructure", type: "Orthomosaic", desc: "Sub-centimeter orthomosaic of 15 km railway corridor used for alignment verification and drainage assessment." },
  { title: "Open-Cast Mine 3D Point Cloud", category: "Mining", type: "Point Cloud", desc: "High-density point cloud (200+ pts/m²) of an active iron ore mine for volumetric stockpile analysis." },
  { title: "Solar Farm Thermal Mosaic", category: "Energy", type: "Thermal", desc: "Panel-level thermal orthomosaic showing hot spots detected by Aeroni.AI across a 50 MW solar installation." },
  { title: "Smart City Digital Twin", category: "Urban", type: "3D Model", desc: "Textured 3D mesh of a 5 sq km urban district created for the Smart City Mission digital twin project." },
  { title: "Agricultural NDVI Map", category: "Agriculture", type: "Multispectral", desc: "NDVI vegetation health map of a 500-acre soybean farm showing zone-specific crop stress levels." },
  { title: "Transmission Tower Inspection", category: "Utilities", type: "RGB + Thermal", desc: "Side-by-side RGB and thermal imagery of a 220 kV transmission tower with AI-flagged anomalies." },
  { title: "Highway Route Survey", category: "Infrastructure", type: "Topographic", desc: "Colorized LiDAR DTM of a proposed 30 km highway alignment with contour overlays." },
  { title: "Stockpile Volumetric Report", category: "Mining", type: "Analysis", desc: "Automated volumetric calculation of a coal stockpile with cross-section comparison to previous survey." },
  { title: "Construction Progress Mosaic", category: "Infrastructure", type: "Time-Series", desc: "Bi-weekly orthomosaic overlay showing earthwork progress across a 100-acre development site." },
];

const categories = ["All", "Infrastructure", "Mining", "Energy", "Urban", "Agriculture", "Utilities"];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="project-gallery-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title="Project Gallery"
        subtitle="Explore our visual portfolio of high-resolution orthomosaics, 3D point clouds, and cinematic flight footage from across our project sites."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Project Gallery", href: "/case-studies/project-gallery" },
        ]}
      />

      <FadeIn as="section" style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Category filter */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "4rem", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.6rem 1.6rem",
                borderRadius: "0.4rem",
                border: "1px solid #e5e5e5",
                background: activeCategory === cat ? "#21389A" : "#fff",
                color: activeCategory === cat ? "#fff" : "#555",
                fontSize: "1.3rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
          {filtered.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "0.4rem",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                height: "200px",
                position: "relative",
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)",
              }}>
                <MotionParallax speed={0.15} style={{ position: "absolute", inset: "-30% 0" }}>
                  <div style={{
                    width: "100%", height: "100%",
                    background: `linear-gradient(135deg, #21389A, #009BFF)`,
                    backgroundSize: "cover", backgroundPosition: "center",
                  }} />
                </MotionParallax>
                <Camera style={{ width: "4rem", height: "4rem", position: "relative", zIndex: 1 }} />
              </div>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.1rem", color: "#888", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.category}</span>
                  <span style={{ fontSize: "1rem", color: "#fff", background: "#21389A", padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{item.type}</span>
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{item.title}</h3>
                <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div style={{ marginTop: "8rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", padding: "6rem", textAlign: "center" }}>
          <PlayCircle style={{ width: "4rem", height: "4rem", marginBottom: "2rem", opacity: 0.8 }} />
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>Cinematic Flight Footage</h2>
          <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.6)", maxWidth: "50rem", margin: "0 auto 3rem", lineHeight: 1.6 }}>
            Watch our drone cinematography reels showcasing aerial surveys, agricultural spraying operations, and infrastructure inspection flights across India.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "1rem",
            padding: "1.2rem 2.8rem", background: "#fff", color: "#111",
            borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
            textDecoration: "none",
          }}>
            Request Full Video Portfolio <DotArrowRight size={16} />
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
