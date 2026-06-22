"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Cpu, Plane, Compass, MapPin, Database, Sparkles, Tractor, Landmark, HelpCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="services-page-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "#1a1a1a" }}>
      {/* Page Header */}
      <div className="section-header centered" style={{ marginBottom: "6rem", padding: "0 var(--section-px)" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          <span></span>Our Services & Platforms
        </span>
        <h1 style={{ fontSize: "clamp(3.6rem, 5vw, 5.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem" }}>
          UAV Platforms & Specialized Services
        </h1>
        <p className="section-subtitle" style={{ maxWidth: "70rem", margin: "1.5rem auto 0" }}>
          Explore our DGCA-certified drone hardware engineered for Indian conditions, coupled with professional GIS and Drone-as-a-Service (DaaS) solutions.
        </p>
      </div>

      {/* SECTION 1: DRONE HARDWARE PLATFORMS */}
      <section style={{ padding: "0 var(--section-px)", marginBottom: "10rem", maxWidth: "1440px", margin: "0 auto 10rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <Plane style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
          <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em" }}>UAV Hardware Platforms</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
          {/* Samrudhhi-10L */}
          <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1rem", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ height: "200px", position: "relative", background: "linear-gradient(135deg, #1a3a4a, #2d6a7a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <div style={{ zIndex: 1, textAlign: "center", padding: "2rem" }}>
                <h3 style={{ fontSize: "2.4rem", fontWeight: 600 }}>Samrudhhi-10L</h3>
                <span style={{ fontSize: "1.2rem", background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: "100px", display: "inline-block", marginTop: "0.5rem" }}>DGCA Certified</span>
              </div>
            </div>
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
                Our flagship agricultural UAV, designed for precision spraying and maximum efficiency in Indian farming conditions. Engineered for ultimate reliability.
              </p>
              <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Payload</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>24.9 Kg</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Flight Time</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>16 Min</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Certification</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>Type Cert.</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Samrudhhi-10LH */}
          <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1rem", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ height: "200px", position: "relative", background: "linear-gradient(135deg, #2d4a3a, #4a7a5a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <div style={{ zIndex: 1, textAlign: "center", padding: "2rem" }}>
                <h3 style={{ fontSize: "2.4rem", fontWeight: 600 }}>Samrudhhi-10LH</h3>
                <span style={{ fontSize: "1.2rem", background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: "100px", display: "inline-block", marginTop: "0.5rem" }}>Heavy Lift</span>
              </div>
            </div>
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
                The heavy-duty sibling of the Samrudhhi series, capable of transporting larger payloads for heavy agricultural spraying and industrial logistics.
              </p>
              <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Payload</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>30 Kg</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Flight Time</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>20 Min</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Propulsion</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>Hybrid</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Flycra 2.0 */}
          <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1rem", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ height: "200px", position: "relative", background: "linear-gradient(135deg, #3a2d4a, #6a4a8a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <div style={{ zIndex: 1, textAlign: "center", padding: "2rem" }}>
                <h3 style={{ fontSize: "2.4rem", fontWeight: 600 }}>Flycra 2.0</h3>
                <span style={{ fontSize: "1.2rem", background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: "100px", display: "inline-block", marginTop: "0.5rem" }}>Survey & Mapping</span>
              </div>
            </div>
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
                A compact, high-precision mapping drone that delivers sub-centimeter accuracy. Highly optimized for GIS surveys, railway corridors, and forestry.
              </p>
              <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Range</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>7 Km</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Flight Time</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>45 Min</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Accuracy</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>Sub-cm</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Nitya FC */}
          <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1rem", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ height: "200px", position: "relative", background: "linear-gradient(135deg, #4a2d2d, #7a4a4a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <div style={{ zIndex: 1, textAlign: "center", padding: "2rem" }}>
                <h3 style={{ fontSize: "2.4rem", fontWeight: 600 }}>Nitya FC</h3>
                <span style={{ fontSize: "1.2rem", background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: "100px", display: "inline-block", marginTop: "0.5rem" }}>Indigenous Avionics</span>
              </div>
            </div>
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
                The proprietary flight controller of Aeronica. Fully engineered and made in India, ensuring unmatched safety, customization, and cybersecurity.
              </p>
              <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Processor</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>STM32</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Sensors</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>Triple IMU</strong>
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>Security</span>
                  <strong style={{ fontSize: "1.4rem", color: "#111" }}>Encrypted</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALIZED SERVICES */}
      <section style={{ background: "#f8f8f8", padding: "8rem var(--section-px)", marginBottom: "10rem" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <Compass style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
            <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Specialized Aerial Services</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem" }}>
            {/* GIS Services */}
            <div style={{ background: "#ffffff", padding: "4rem", borderRadius: "1.5rem", border: "1px solid #e5e5e5", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #1a365d, #2d5a87)", display: "flex", alignItems: "center", justifySelf: "start", justifyContent: "center", color: "#fff", marginBottom: "2.5rem" }}>
                <MapPin style={{ width: "2.4rem", height: "2.4rem" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1.5rem" }}>GIS Surveying & Mapping</h3>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "2.5rem" }}>
                We provide sub-centimeter accurate mapping solutions across India, enabling rapid feasibility analysis, structural layout design, and inventory auditing.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem", color: "#555", fontSize: "1.4rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Railway Corridor Mapping:</strong> Turnkey alignment surveys.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Mining & Volumetric Surveys:</strong> Cut-and-fill stock audits.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Pipeline Corridor Surveys:</strong> Path planning & obstruction alerts.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Topographic & Cadastral Mapping:</strong> High-res orthomosaics.
                </li>
              </ul>
            </div>

            {/* Drone-as-a-Service */}
            <div style={{ background: "#ffffff", padding: "4rem", borderRadius: "1.5rem", border: "1px solid #e5e5e5", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #1a4731, #2d7a4b)", display: "flex", alignItems: "center", justifySelf: "start", justifyContent: "center", color: "#fff", marginBottom: "2.5rem" }}>
                <Tractor style={{ width: "2.4rem", height: "2.4rem" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Drone-as-a-Service (DaaS)</h3>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "2.5rem" }}>
                Leverage our fleet of DGCA-certified drones and certified pilots. We handle logistics, flying, compliance, and payload configurations on-demand.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem", color: "#555", fontSize: "1.4rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Agricultural Spraying:</strong> Fast, uniform pesticide & nutrient spray.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Multispectral Scouting:</strong> NDVI analysis, early pest/disease detection.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Infrastructure Inspection:</strong> Safe inspection of power lines & towers.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "6px", height: "6px", background: "#111", borderRadius: "50%" }}></span>
                  <strong>Disaster Management:</strong> High-res video streaming & survivor tracking.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE AERONICA DIFFERENCE (WORKFLOW) */}
      <section style={{ padding: "0 var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
          <Sparkles style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
          <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Our Deployment Workflow</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>
          {[
            { step: "01", title: "Consultation & Scope", text: "We analyze your exact requirements, regulatory bottlenecks, and flight paths to define the optimal mission profile." },
            { step: "02", title: "Flight Operations", text: "DGCA-certified pilots operate our robust hardware (Samrudhhi & Flycra) equipped with high-precision RTK GPS." },
            { step: "03", title: "Data Processing", text: "We clean and process raw spatial datasets into high-fidelity ortho-photos, point clouds, and multispectral matrices." },
            { step: "04", title: "Intelligence Delivery", text: "Processed files are delivered on-demand or loaded into our Unified Surveillance Dashboard for seamless interpretation." }
          ].map((item, index) => (
            <div key={index} style={{ borderTop: "2px solid #111", paddingTop: "2rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.4rem", fontWeight: "600", color: "#888", display: "block", marginBottom: "1rem" }}>{item.step}</span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>{item.title}</h3>
              <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: "1.6" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
