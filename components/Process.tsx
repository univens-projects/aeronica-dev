"use client";

import React from "react";
import { ClipboardList, Crosshair, Brain, Award } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

const accentColor = "#21389a";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Consult",
    desc: "We begin with a deep understanding of your operational needs, site conditions, and compliance requirements to define the optimal drone solution.",
  },
  {
    step: "02",
    icon: Crosshair,
    title: "Survey",
    desc: "Our certified pilots deploy advanced UAVs with RTK, LiDAR, and multispectral sensors to capture high-fidelity data across your project area.",
  },
  {
    step: "03",
    icon: Brain,
    title: "Process",
    desc: "Raw data is transformed into actionable insights through photogrammetry, AI analytics, and GIS-integrated workflows tailored to your industry.",
  },
  {
    step: "04",
    icon: Award,
    title: "Deliver",
    desc: "You receive comprehensive reports, 3D models, and interactive dashboards with ongoing support to ensure your project's success.",
  },
];

export default function Process() {
  return (
    <section style={{ background: "#f3f0ec", padding: "8rem var(--section-px)", color: "#1a1a1a", overflow: "hidden" }} id="process">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "flex-start" }}>
            <span></span>How We Work
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            From Brief to Intelligence
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "56rem", marginTop: "2rem" }}>
            A structured four-phase approach that ensures every mission delivers exactly what you need&mdash;on time, in spec, and fully compliant.
          </p>
        </div>

        <MotionReveal as="div" stagger={0.15} y={40} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} style={{ position: "relative", width: "100%", background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3rem 2rem 2.5rem", textAlign: "center" }}>
                <div style={{ position: "absolute", top: "-1.6rem", left: "50%", transform: "translateX(-50%)", width: "3.6rem", height: "3.6rem", borderRadius: "50%", background: accentColor, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}>
                  <Icon style={{ width: "1.6rem", height: "1.6rem" }} />
                </div>

                <div style={{ fontSize: "6rem", fontWeight: 800, color: "#e5e5e5", lineHeight: 0.8, marginBottom: "1rem", marginTop: "1.2rem", fontFamily: "var(--font-mono)", letterSpacing: "-0.04em" }}>
                  {step.step}
                </div>

                <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem", color: "#111" }}>{step.title}</h3>
                <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            );
          })}
        </MotionReveal>
      </div>
    </section>
  );
}
