"use client";

import React from "react";
import { ClipboardList, Crosshair, Brain, Award } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Consult",
    desc: "Deep understanding of your operational needs, site conditions, and compliance requirements.",
  },
  {
    icon: Crosshair,
    title: "Survey",
    desc: "Certified pilots deploy advanced UAVs with RTK, LiDAR, and multispectral sensors across your project area.",
  },
  {
    icon: Brain,
    title: "Process",
    desc: "Raw data transformed into actionable insights through photogrammetry, AI analytics, and GIS workflows.",
  },
  {
    icon: Award,
    title: "Deliver",
    desc: "Comprehensive reports, 3D models, and interactive dashboards with ongoing support.",
  },
];

export default function Process() {
  return (
    <section className="dot-watermark section-py" style={{ background: "#ffffff", overflow: "hidden" }} id="process">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "flex-start" }}>
            <span></span>How We Work
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.1, color: "#1a1a1a" }}>
            From Brief to Intelligence
          </h2>
          <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, maxWidth: "48rem", marginTop: "1.5rem" }}>
            A structured four-phase approach that ensures every mission delivers exactly what you need&mdash;on time, in spec, and fully compliant.
          </p>
        </div>

        <MotionReveal as="div" stagger={0.1} y={15} className="process-grid">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} style={{ textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "2rem", fontWeight: 300,
                    color: "#21389A", lineHeight: 1, letterSpacing: "-0.03em",
                  }}>
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }}></div>
                  <Icon style={{ width: "1.6rem", height: "1.6rem", color: "#009BFF", flexShrink: 0 }} />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3, marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "1.25rem", color: "#555", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </MotionReveal>
      </div>
    </section>
  );
}
