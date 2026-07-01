"use client";

import React from "react";
import { Train, Pickaxe, Sprout, Fuel, HardHat, Zap } from "lucide-react";
import Link from "next/link";
import MotionReveal from "@/components/MotionReveal";

const accentColor = "#21389a";

const industries = [
  { title: "Railways", desc: "Corridor mapping, track alignment, encroachment detection", icon: Train },
  { title: "Mining", desc: "Volumetric surveys, stockpile analysis, pit monitoring", icon: Pickaxe },
  { title: "Agriculture", desc: "Precision spraying, crop health, yield estimation", icon: Sprout },
  { title: "Oil & Gas", desc: "Pipeline surveillance, leak detection, ROW monitoring", icon: Fuel },
  { title: "Construction", desc: "Site surveying, progress tracking, volume calculations", icon: HardHat },
  { title: "Power & Utilities", desc: "Transmission line inspection, thermal imaging, vegetation management", icon: Zap },
];

export default function Industries() {
  return (
    <section className="section-py" style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", color: "#1a1a1a" }} id="industries">
      <div style={{ marginBottom: "5rem" }}>
        <span className="section-title" style={{ justifyContent: "flex-start" }}>
          <span></span>Who We Serve
        </span>
        <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
          Industries We Serve
        </h2>
        <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "56rem", marginTop: "2rem" }}>
          Domain expertise across six key sectors — delivering tailored drone solutions where precision matters most.
        </p>
      </div>

      <MotionReveal as="div" stagger={0.08} y={40} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Link
              key={index}
              href={`/industries/${industry.title.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#ffffff",
                borderRadius: "0.4rem",
                padding: "2rem 2.4rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.6rem",
                border: `1px solid transparent`,
              }}
            >
              <div style={{
                width: "4.8rem", height: "4.8rem", borderRadius: "0.4rem",
                background: accentColor, display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, color: "#fff",
              }}>
                <Icon style={{ width: "2.4rem", height: "2.4rem" }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>{industry.title}</h3>
                <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.5 }}>{industry.desc}</p>
              </div>
            </Link>
          );
        })}
      </MotionReveal>
    </section>
  );
}
