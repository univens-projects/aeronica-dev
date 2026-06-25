"use client";

import React from "react";
import { Cpu, ShieldCheck, Wifi, Combine } from "lucide-react";
import { DotArrowRight } from "@/components/DotIcons";
import Link from "next/link";
import MotionReveal from "@/components/MotionReveal";

const techPillars = [
  {
    icon: Cpu,
    title: "Nitya Flight Controller",
    desc: "Indigenously designed triple-redundant flight controller with 256-bit encrypted telemetry, secure boot, and custom PX4 firmware.",
    specs: ["STM32MP1 Dual-Core", "Triple IMU Redundancy", "256-bit AES Encryption"],
  },
  {
    icon: ShieldCheck,
    title: "Aeroni.AI Engine",
    desc: "Cloud-native AI pipeline that processes raw aerial data into centimeter-accurate 3D models, NDVI maps, and automated defect reports in minutes.",
    specs: ["Deep Learning Pipeline", "Real-time Inference", "Automated Reporting"],
  },
  {
    icon: Combine,
    title: "Integrated Ecosystem",
    desc: "From airframe design to cloud dashboard — every layer built in-house. No third-party dependencies means seamless integration and total reliability.",
    specs: ["Full Vertical Stack", "API-first Architecture", "Custom Integration"],
  },
  {
    icon: Wifi,
    title: "Command & Control",
    desc: "Real-time telemetry, live video streaming, and fleet management from a single pane of glass. Multi-mission coordination with enterprise role-based access.",
    specs: ["Live Telemetry Feed", "Fleet Management", "Multi-user Access"],
  },
];

export default function Technology() {
  return (
    <section style={{ background: "#21389A", padding: "8rem var(--section-px)" }} id="technology">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "flex-start", color: "rgba(255,255,255,0.8)" }}>
            <span></span>Our Technology
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.1, color: "#fff" }}>
                Built in India, Built for Impact
              </h2>
              <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: "56rem", marginTop: "1.5rem" }}>
                Purpose-driven engineering meets indigenous innovation. Every system is designed, tested, and manufactured in-house to deliver uncompromising performance.
              </p>
            </div>
            <Link href="/technology" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              fontSize: "1.4rem", fontWeight: 500, color: "#fff",
              textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: "0.2rem",
              transition: "opacity 0.2s ease", flexShrink: 0, marginBottom: "0.2rem",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.65"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
              Explore Technology <DotArrowRight size={16} />
            </Link>
          </div>
        </div>

        <MotionReveal as="div" stagger={0.1} y={30} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.6rem" }}>
          {techPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "0.4rem",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateRows: "auto auto 1fr auto",
                  height: "100%",
                }}
              >
                <div style={{ height: "3px", background: "#009BFF" }}></div>

                <div style={{ padding: "2rem 2rem 1.5rem", display: "flex", alignItems: "center", gap: "1.2rem" }}>
                  <div style={{
                    width: "4.4rem", height: "4.4rem", borderRadius: "0.4rem",
                    background: "#009BFF",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: "2.2rem", height: "2.2rem", color: "#fff" }} />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3, letterSpacing: "-0.02em" }}>{pillar.title}</h3>
                </div>

                <div style={{ padding: "0 2rem 0.5rem" }}>
                  <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.7 }}>
                    {pillar.desc}
                  </p>
                </div>

                <div style={{ padding: "1.5rem 2rem 2rem", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {pillar.specs.map((spec, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span style={{ width: "0.35rem", height: "0.35rem", borderRadius: "50%", background: "#009BFF", flexShrink: 0 }}></span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "#888", letterSpacing: "-0.01em" }}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </MotionReveal>
      </div>
    </section>
  );
}
