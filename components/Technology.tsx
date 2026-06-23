"use client";

import React from "react";
import { Cpu, ShieldCheck, Wifi, Combine, ArrowRight } from "lucide-react";
import Link from "next/link";

const techPillars = [
  {
    icon: Cpu,
    title: "Nitya Flight Controller",
    desc: "Indigenously designed triple-redundant flight controller with 256-bit encrypted telemetry, secure boot, and custom PX4 firmware.",
    accent: "#7a3d2d",
    specs: ["STM32MP1 Dual-Core", "Triple IMU Redundancy", "256-bit AES Encryption"],
  },
  {
    icon: ShieldCheck,
    title: "Aeroni.AI Engine",
    desc: "Cloud-native AI pipeline that processes raw aerial data into centimeter-accurate 3D models, NDVI maps, and automated defect reports in minutes.",
    accent: "#5b3a9e",
    specs: ["Deep Learning Pipeline", "Real-time Inference", "Automated Reporting"],
  },
  {
    icon: Combine,
    title: "Integrated Ecosystem",
    desc: "From airframe design to cloud dashboard — every layer built in-house. No third-party dependencies means seamless integration and total reliability.",
    accent: "#2d7a4b",
    specs: ["Full Vertical Stack", "API-first Architecture", "Custom Integration"],
  },
  {
    icon: Wifi,
    title: "Command & Control",
    desc: "Real-time telemetry, live video streaming, and fleet management from a single pane of glass. Multi-mission coordination with enterprise role-based access.",
    accent: "#2d5a87",
    specs: ["Live Telemetry Feed", "Fleet Management", "Multi-user Access"],
  },
];

export default function Technology() {
  return (
    <section style={{ background: "#0b1012", padding: "8rem var(--section-px)", color: "#fff" }} id="technology">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "center", color: "#888" }}>
            <span></span>Our Technology
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, color: "#fff" }}>
            Built in India, Built for Impact
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#999", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            Purpose-driven engineering meets indigenous innovation. Every system is designed, tested, and manufactured in-house to deliver uncompromising performance.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.6rem" }}>
          {techPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#13181a",
                  border: "1px solid #1e2629",
                  borderRadius: "0.4rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = pillar.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e2629"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ padding: "2.5rem 2.5rem 1.5rem", display: "flex", alignItems: "center", gap: "1.2rem" }}>
                  <div style={{ width: "4.4rem", height: "4.4rem", borderRadius: "0.2rem", background: `${pillar.accent}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "2.2rem", height: "2.2rem", color: pillar.accent }} />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{pillar.title}</h3>
                </div>

                <div style={{ height: "2px", background: `linear-gradient(90deg, ${pillar.accent}, transparent)`, margin: "0 2.5rem" }}></div>

                <div style={{ padding: "1.5rem 2.5rem 2.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "1.3rem", color: "#999", lineHeight: 1.7, flexGrow: 1, marginBottom: "2rem" }}>
                    {pillar.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {pillar.specs.map((spec, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: pillar.accent, flexShrink: 0 }}></span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.15rem", color: "#aaa", letterSpacing: "-0.01em" }}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/technology" style={{
            display: "inline-flex", alignItems: "center", gap: "0.8rem",
            padding: "1.2rem 2.8rem", background: "transparent", color: "#fff",
            border: "1px solid #333", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
            textDecoration: "none", transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.background = "transparent"; }}>
            Explore Our Technology <ArrowRight style={{ width: "1.6rem", height: "1.6rem" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
