"use client";

import React from "react";
import { Cpu, ShieldAlert, Binary, Rocket, Activity, HardHat, Radio, Zap, Anchor, Layers } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="technology-page-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "#1a1a1a" }}>
      {/* Page Header */}
      <div className="section-header centered" style={{ marginBottom: "6rem", padding: "0 var(--section-px)" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          <span></span>Our Technology Stack
        </span>
        <h1 style={{ fontSize: "clamp(3.6rem, 5vw, 5.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem" }}>
          Next-Gen Software & Software Systems
        </h1>
        <p className="section-subtitle" style={{ maxWidth: "70rem", margin: "1.5rem auto 0" }}>
          Propelling industries forward with indigenous flight controllers, real-time command dashboards, and AI-driven spatial data analytics.
        </p>
      </div>

      {/* SECTION 1: PROPRIETARY SOLUTIONS */}
      <section style={{ padding: "0 var(--section-px)", marginBottom: "10rem", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "8rem" }}>
          {/* Unified Surveillance System */}
          <div style={{ border: "1px solid #e5e5e5", borderRadius: "1.5rem", padding: "4rem", background: "#fbfbfb", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #1a1a3a, #3d3d6a)", display: "flex", alignItems: "center", justifySelf: "start", justifyContent: "center", color: "#fff", marginBottom: "2.5rem" }}>
              <Radio style={{ width: "2.4rem", height: "2.4rem" }} />
            </div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Unified Surveillance System (USS)</h2>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
              Our proprietary, cloud-native command and control platform. USS allows organizations to view live video feeds, real-time telemetry, and historical mission paths of multi-drone fleets simultaneously.
            </p>
            <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "1rem", border: "1px solid #e5e5e5" }}>
              <h4 style={{ fontSize: "1.35rem", fontWeight: "600", color: "#111", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Key Features</h4>
              <ul style={{ paddingLeft: "1.5rem", fontSize: "1.35rem", color: "#555", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li>Simultaneous multi-stream video decoding.</li>
                <li>Live flight path tracing over custom GIS layers.</li>
                <li>Automated alert triggering for boundary anomalies.</li>
                <li>Secure integration with existing control rooms.</li>
              </ul>
            </div>
          </div>

          {/* Aeroni.AI */}
          <div style={{ border: "1px solid #e5e5e5", borderRadius: "1.5rem", padding: "4rem", background: "#fbfbfb", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #2d1a4a, #5a3a8a)", display: "flex", alignItems: "center", justifySelf: "start", justifyContent: "center", color: "#fff", marginBottom: "2.5rem" }}>
              <Binary style={{ width: "2.4rem", height: "2.4rem" }} />
            </div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Aeroni.AI Analytics Engine</h2>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
              Transforming raw aerial coordinates into deep, actionable insights. Aeroni.AI is optimized for high-throughput photogrammetry and automatic volumetric estimations of stockpile reserves.
            </p>
            <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "1rem", border: "1px solid #e5e5e5" }}>
              <h4 style={{ fontSize: "1.35rem", fontWeight: "600", color: "#111", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Key Features</h4>
              <ul style={{ paddingLeft: "1.5rem", fontSize: "1.35rem", color: "#555", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li>Auto-calculation of coal/mineral pile volumes.</li>
                <li>Multispectral crop vegetation indexes (NDVI, NDRE).</li>
                <li>Deep learning crack & fault detection for structures.</li>
                <li>Instant PDF/Excel reports with spatial markers.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2: R&D & AVIONICS IN-HOUSE EXCELLENCE */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", background: "#fbfbfb", padding: "6rem", borderRadius: "1.5rem", border: "1px solid #e5e5e5" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <Cpu style={{ width: "2.2rem", height: "2.2rem", color: "#111" }} />
              <h3 style={{ fontSize: "2.4rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Proprietary R&D & Indigenous Avionics</h3>
            </div>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              As a technology-first startup, we reject black-box solutions. Our team of aeronautical and electronics engineers design and build our flight computers and flight control logic from the ground up right here in India.
            </p>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Our R&D division has perfected composite fiber structural simulations, high-efficiency propulsion matching, and custom payloads that can survive high electromagnetic industrial environments like railway corridors.
            </p>
            <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
              <div>
                <strong style={{ fontSize: "2.2rem", color: "#111", display: "block" }}>100%</strong>
                <span style={{ fontSize: "1.2rem", color: "#888" }}>In-House Software</span>
              </div>
              <div style={{ borderLeft: "1px solid #e5e5e5", paddingLeft: "2rem" }}>
                <strong style={{ fontSize: "2.2rem", color: "#111", display: "block" }}>DGCA</strong>
                <span style={{ fontSize: "1.2rem", color: "#888" }}>Compliant Protocols</span>
              </div>
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #0a1628, #1a3a4a)", aspectRatio: "16/10", borderRadius: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem", color: "#fff" }}>
            <Rocket style={{ width: "4rem", height: "4rem", marginBottom: "2rem", opacity: 0.8 }} />
            <h4 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Aeronica Re:Search Lab</h4>
            <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
              We collaborate with premier academic institutes and corporate R&D divisions to customize payloads, design custom VTOL structures, and build bespoke flight logic for unique mission profiles.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIES ENHANCED */}
      <section style={{ background: "#f8f8f8", padding: "8rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <Layers style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
            <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Industries We Serve</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
            {[
              { title: "Railways & Metro", icon: Activity, desc: "Turnkey corridor inspection, high-accuracy layout mapping, and alignment survey services across Central Railway segments." },
              { title: "Mining & Volumetrics", icon: HardHat, desc: "Stockpile volume measurements, cut-and-fill analysis, and open-cast mine mapping with sub-centimeter point clouds." },
              { title: "Smart Agriculture", icon: Zap, desc: "Optimizing agricultural productivity via DGCA type-certified sprayers (Samrudhhi) and advanced NDVI plant analytics." },
              { title: "Oil, Gas & Power", icon: Anchor, desc: "Pipeline route layout mapping, corridor monitoring, and automated safety inspections of grid infrastructure." }
            ].map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} style={{ background: "#ffffff", border: "1px solid #e5e5e5", padding: "3rem", borderRadius: "1.2rem", boxShadow: "0 10px 25px rgba(0,0,0,0.01)" }}>
                  <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "0.8rem", background: "#f1f1f1", display: "flex", alignItems: "center", justifyContent: "center", color: "#111", marginBottom: "2rem" }}>
                    <IconComponent style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>{industry.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: "1.6" }}>{industry.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
