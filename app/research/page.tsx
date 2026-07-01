"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu, Microscope, Layers, Brain, Award, ShieldCheck,
  FlaskConical, ChevronRight, Binary, GraduationCap,
  Atom, Database, HelpCircle
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import { DotArrowRight } from "@/components/DotIcons";

const researchPillars = [
  {
    title: "Aerodynamics & Composite Structures",
    icon: Layers,
    desc: "Optimizing airframe efficiency and structural integrity through carbon fiber composite engineering and Finite Element Analysis (FEA).",
    color: "#21389A",
    points: [
      "High-modulus carbon fiber layup optimization for maximum strength-to-weight ratio",
      "Computational Fluid Dynamics (CFD) simulation for low-drag airframe geometries",
      "Vibration analysis and damping structures for sensor stabilization",
      "Field-testing and structural integrity validation in extreme operating temperatures (+45°C)"
    ]
  },
  {
    title: "Autonomous Avionics & Sensor Fusion",
    icon: Cpu,
    desc: "Designing the firmware and hardware that allow our aircraft to fly safely, coordinate paths, and process telemetry in real-time.",
    color: "#009BFF",
    points: [
      "Triple-redundant IMU sensor fusion with advanced Extended Kalman Filters (EKF)",
      "Secure firmware stack built on custom-hardened PX4 autopilot codebase",
      "Real-time terrain following utilizing ground-facing radar and LiDAR sensor feeds",
      "BVLOS failsafe logic and autonomous return-to-home path calculation"
    ]
  },
  {
    title: "Geospatial AI & Edge Inference",
    icon: Brain,
    desc: "Harnessing deep learning algorithms to analyze aerial imagery on-site and in the cloud for high-accuracy defect and disease mapping.",
    color: "#32620E",
    points: [
      "Onboard edge AI inference for real-time target identification and object tracking",
      "Deep learning segmentation models for automated crop disease classification (95%+ accuracy)",
      "Automated infrastructure inspection processing: crack, rust, and hotspot detection",
      "NDVI, NDRE, and multispectral vegetation index mapping pipelines"
    ]
  }
];

const projects = [
  {
    title: "Nitya FC Next-Gen Development",
    tag: "Avionics",
    desc: "Next iteration of our indigenous flight controller integrating secure enclave technology (TPM 2.0) and CAN-FD peripheral support.",
    status: "Active R&D"
  },
  {
    title: "AI-Powered Railway Ballast Profiling",
    tag: "Geospatial",
    desc: "Collaborative project with Central Railway training neural networks to automatically assess ballast health from high-res orthomosaics.",
    status: "Beta Testing"
  },
  {
    title: "Centrifugal Spray Atomization Optimization",
    tag: "Fluid Dynamics",
    desc: "Refining rotary nozzle parameters to minimize drift and achieve standard 150-micron droplet uniformity across varying spray altitudes.",
    status: "Completed & Integrated"
  }
];

export default function ResearchPage() {
  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Research & Development"
        subtitle="Aeronica is a technology-first company. We dedicate over 25% of our engineering bandwidth to basic and applied research in aeronautics, embedded electronics, and spatial AI."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Research", href: "/research" }]}
      />

      {/* Intro section */}
      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-title">
              <span></span>First-Principles Engineering
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Pushing the Limits of Indigenous Aerial Systems
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginTop: "2rem" }}>
              India deserves drone technology that is secure, compliant, and optimized for local conditions.
              Our R&D team in Pune designs carbon fiber airframes, custom-manufactures embedded avionic circuit boards,
              and builds spatial computer vision pipelines from the ground up.
            </p>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginTop: "1.5rem" }}>
              Through joint research programs with leading academic institutes like IIT Bombay and IIT Pune,
              we translate academic advances directly into field-ready technology.
            </p>
          </div>
          <div style={{ background: "#f5f5f5", padding: "4rem", borderRadius: "0.4rem", border: "1px solid #e5e5e5" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <FlaskConical style={{ width: "2.4rem", height: "2.4rem", color: "#21389A" }} />
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600 }}>R&D Focus Metrics</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <span style={{ fontSize: "3.2rem", fontWeight: 700, color: "#21389A" }}>25%</span>
                <span style={{ fontSize: "1.2rem", color: "#555", display: "block", marginTop: "0.3rem" }}>Revenue reinvested in R&D</span>
              </div>
              <div>
                <span style={{ fontSize: "3.2rem", fontWeight: 700, color: "#21389A" }}>12+</span>
                <span style={{ fontSize: "1.2rem", color: "#555", display: "block", marginTop: "0.3rem" }}>Academic collaborations</span>
              </div>
              <div>
                <span style={{ fontSize: "3.2rem", fontWeight: 700, color: "#21389A" }}>4+</span>
                <span style={{ fontSize: "1.2rem", color: "#555", display: "block", marginTop: "0.3rem" }}>Patents filed (India)</span>
              </div>
              <div>
                <span style={{ fontSize: "3.2rem", fontWeight: 700, color: "#21389A" }}>100%</span>
                <span style={{ fontSize: "1.2rem", color: "#555", display: "block", marginTop: "0.3rem" }}>IP owned by Aeronica</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* R&D Pillars */}
      <FadeIn as="section" className="section-py" style={{ background: "#21389A", color: "#fff", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Core Spheres</span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem" }}>Our Technical Pillars</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {researchPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4rem", padding: "4rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
                    <div>
                      <div style={{ width: "5rem", height: "5rem", background: "rgba(255,255,255,0.08)", borderRadius: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <Icon style={{ width: "2.4rem", height: "2.4rem", color: "#fff" }} />
                      </div>
                      <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1.5rem" }}>{pillar.title}</h3>
                      <p style={{ fontSize: "1.45rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{pillar.desc}</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.3rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2rem" }}>Active Research Fields</h4>
                      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                        {pillar.points.map((p, j) => (
                          <li key={j} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                            <ChevronRight style={{ width: "1.8rem", height: "1.8rem", color: "#009BFF", flexShrink: 0, marginTop: "0.1rem" }} />
                            <span style={{ fontSize: "1.45rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Projects */}
      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-title">
            <span></span>R&D Initiatives
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem" }}>Active Projects Portfolio</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
          {projects.map((p, i) => (
            <div key={i} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.1rem", padding: "0.3rem 0.8rem", background: "rgba(33,56,154,0.06)", color: "#21389A", borderRadius: "0.2rem", fontWeight: 600 }}>{p.tag}</span>
                <span style={{ fontSize: "1.15rem", color: "#888", fontWeight: 500 }}>{p.status}</span>
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>{p.title}</h3>
              <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Partner/OEM CTA */}
      <FadeIn as="section" className="section-py" style={{ background: "#f5f5f5", borderTop: "1px solid #e5e5e5", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", display: "grid", gridTemplateColumns: "2fr 1fr", alignItems: "center", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 600, marginBottom: "1.5rem" }}>OEM Services & Academic Collaboration</h2>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.6 }}>
              We build custom UAV platforms and integrate third-party sensor packages for defense, industrial R&D, and research institutes.
              We also support academic departments with evaluation units, raw data sharing, and research grants.
            </p>
          </div>
          <div style={{ justifySelf: "md-end" }}>
            <Link href="/about/partners-alliances" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.4rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
              Collaborate With Us <DotArrowRight size={12} />
            </Link>
          </div>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
