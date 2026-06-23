"use client";

import React from "react";
import { Train, Pickaxe, Sprout, Fuel, HardHat, Zap } from "lucide-react";
import Link from "next/link";

const industries = [
  { title: "Railways", desc: "Corridor mapping, track alignment, encroachment detection", icon: Train, color: "#1a365d", light: "#e8edf5" },
  { title: "Mining", desc: "Volumetric surveys, stockpile analysis, pit monitoring", icon: Pickaxe, color: "#6b3a2a", light: "#f0e8e5" },
  { title: "Agriculture", desc: "Precision spraying, crop health, yield estimation", icon: Sprout, color: "#1a6b3a", light: "#e5f0ea" },
  { title: "Oil & Gas", desc: "Pipeline surveillance, leak detection, ROW monitoring", icon: Fuel, color: "#3d1f1a", light: "#f0e8e5" },
  { title: "Construction", desc: "Site surveying, progress tracking, volume calculations", icon: HardHat, color: "#c67a2a", light: "#f5ede2" },
  { title: "Power & Utilities", desc: "Transmission line inspection, thermal imaging, vegetation management", icon: Zap, color: "#5a3a8a", light: "#ede8f5" },
];

export default function Industries() {
  return (
    <section style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto", color: "#1a1a1a" }} id="industries">
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          <span></span>Who We Serve
        </span>
        <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
          Industries We Serve
        </h2>
        <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
          Domain expertise across six key sectors — delivering tailored drone solutions where precision matters most.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Link
              key={index}
              href={`/industries/${industry.title.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                background: industry.light,
                borderRadius: "0.4rem",
                padding: "2rem 2.4rem",
                display: "flex",
                alignItems: "center",
                gap: "1.6rem",
                transition: "all 0.25s ease",
                border: `1px solid transparent`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = industry.color; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 4px 16px ${industry.color}18`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: "4.8rem", height: "4.8rem", borderRadius: "0.2rem",
                background: industry.color, display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, color: "#fff",
              }}>
                <Icon style={{ width: "2.4rem", height: "2.4rem" }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.3rem", color: industry.color }}>{industry.title}</h3>
                <p style={{ fontSize: "1.25rem", color: "#666", lineHeight: 1.5 }}>{industry.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
