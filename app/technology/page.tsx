"use client";

import React from "react";
import { 
  Cpu, ShieldAlert, Binary, Rocket, Activity, HardHat, Radio, 
  Zap, Anchor, Layers, Shield, Lock, Cable, Globe, 
  FlaskConical, Award, Gauge, Cog, Combine, Hexagon, 
  Wrench, Scan, Fan, CircuitBoard, FileText, Crosshair
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function TechnologyPage() {
  return (
    <div className="technology-page-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Next-Gen Software & Systems"
        subtitle="Propelling industries forward with indigenous flight controllers, real-time command dashboards, and AI-driven spatial data analytics."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology", href: "/technology" }]}
      />

      {/* Section 1 — The Nitya Flight Controller */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Core Avionics
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            The Nitya Flight Controller
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            The brain of every Aeronica UAV&mdash;fully designed, engineered, and manufactured in India. 
            Built for reliability, hardened for industrial environments.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "6rem" }}>
          <div className="card-hover" style={{ background: "#111", borderRadius: "0.4rem", padding: "4rem", color: "#fff", aspectRatio: "1/0.9", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Cpu style={{ width: "3.6rem", height: "3.6rem", marginBottom: "2.5rem", opacity: 0.8 }} />
            <div style={{ fontSize: "1.2rem", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>ARCHITECTURE</div>
            <h3 style={{ fontSize: "2.4rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>STM32MP1 Dual-Core</h3>
            <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2rem" }}>
              A heterogeneous architecture combining a Cortex-A7 for high-level mission planning with 
              a Cortex-M4 for real-time control loops&mdash;ensuring deterministic response even under 
              heavy computational load.
            </p>
            <div style={{ display: "flex", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div><span style={{ fontSize: "1.8rem", fontWeight: 700 }}>32-bit</span><span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.4)", display: "block" }}>Processing</span></div>
              <div><span style={{ fontSize: "1.8rem", fontWeight: 700 }}>3x</span><span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.4)", display: "block" }}>IMU Redundancy</span></div>
              <div><span style={{ fontSize: "1.8rem", fontWeight: 700 }}>256-bit</span><span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.4)", display: "block" }}>Encrypted Link</span></div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              { 
                icon: ShieldAlert, 
                title: "Triple-Redundant IMU", 
                desc: "Three independent inertial measurement units cross-validate attitude and heading in real time. If one drifts, the system instantly fails over with zero interruption to flight stability.",
              },
              { 
                icon: Lock, 
                title: "Military-Grade Telemetry Encryption", 
                desc: "All radio telemetry between the ground control station and the UAV is encrypted using 256-bit AES. Flight logs, GPS coordinates, and payload data remain inaccessible to unauthorized third parties.",
              },
              { 
                icon: Gauge, 
                title: "Real-Time Sensor Fusion", 
                desc: "An Extended Kalman Filter (EKF) fuses data from the IMU, magnetometer, barometer, and RTK GPS at 400 Hz, producing centimeter-level positional accuracy even in GPS-denied environments.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "2.5rem", background: "#fbfbfb" }}>
                  <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                    <div style={{ width: "3.6rem", height: "3.6rem", borderRadius: "0.4rem", background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "1.8rem", height: "1.8rem" }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</h3>
                      <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Firmware feature chips */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {[
            { icon: Cog, label: "Custom PX4/ArduPilot Fork", desc: "Heavily modified open-source firmware tuned for our airframes and payloads." },
            { icon: Combine, label: "Hardware-in-Loop Simulation", desc: "Every firmware build passes through HIL testing before being flashed to a production unit." },
            { icon: Hexagon, label: "Fail-Safe State Machine", desc: "Pre-programmed contingency protocols for GPS loss, low battery, and comms timeout." },
          ].map((chip, i) => {
            const Icon = chip.icon;
            return (
              <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "2.5rem", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <Icon style={{ width: "1.8rem", height: "1.8rem", color: "#111" }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }}>{chip.label}</h3>
                </div>
                <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.6 }}>{chip.desc}</p>
              </div>
            );
          })}
        </div>
      </FadeIn>

      {/* Section 2 — End-to-End Data Pipeline */}
      <FadeIn as="section" style={{ background: "#f8f8f8", padding: "10rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Data Pipeline
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              From Raw Capture to Actionable Intelligence
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
              Every mission generates terabytes of raw sensor data. Our pipeline processes, fuses, and 
              analyzes this data in minutes&mdash;not days.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {[
              {
                step: "01",
                icon: Radio,
                title: "Raw Sensor Capture",
                desc: "High-resolution RGB, multispectral, LiDAR, and thermal sensors collect synchronized data streams at 20 MP and 20 Hz.",
                items: ["20 MP RGB / 10-band Multispectral", "RTK GPS geotagging at 10 Hz", "Onboard NVMe storage (1 TB)"],
              },
              {
                step: "02",
                icon: Cable,
                title: "Edge Pre-Processing",
                desc: "Onboard NVIDIA Jetson module runs real-time ortho-rectification and compression before the drone lands.",
                items: ["Real-time image stitching preview", "Lossless compression (4:1 ratio)", "Auto-tagging with mission metadata"],
              },
              {
                step: "03",
                icon: Globe,
                title: "Cloud Ingestion & SfM",
                desc: "Aeroni.AI ingests edge-processed data and runs Structure-from-Motion algorithms on auto-scaling GPU clusters.",
                items: ["SfM in under 60 min (500+ images)", "Auto GCP detection for georeferencing", "Point cloud densities &gt; 200 pts/m²"],
              },
              {
                step: "04",
                icon: Binary,
                title: "AI Analytics & Reporting",
                desc: "Deep learning models detect anomalies, calculate volumes, and generate structured reports with spatial markers.",
                items: ["Crack detection (95%+ accuracy)", "Volumetric accuracy ±1.5%", "PDF/Excel/SHP export in one click"],
              },
            ].map((pipe, i) => {
              const Icon = pipe.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3.5rem", position: "relative" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "4rem", fontWeight: 700, color: "#eaeaea", position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>{pipe.step}</span>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
                    <Icon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem", position: "relative", zIndex: 1 }}>{pipe.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>{pipe.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, position: "relative", zIndex: 1 }}>
                    {pipe.items.map((item, j) => (
                      <li key={j} style={{ fontSize: "1.25rem", color: "#888", padding: "0.3rem 0", borderTop: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span style={{ width: "4px", height: "4px", background: "#111", borderRadius: "50%", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 3 — Proprietary Platforms (USS + Aeroni.AI) */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Proprietary Platforms
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Software That Makes Hardware Smarter
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "3rem" }}>
          {/* USS */}
          <div className="card-hover" style={{ border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "4rem", background: "#fbfbfb" }}>
            <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #1a1a3a, #3d3d6a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "2.5rem" }}>
              <Radio style={{ width: "2.4rem", height: "2.4rem" }} />
            </div>
            <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "-0.02em" }}>Unified Surveillance System</h3>
            <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Cloud-native command center connecting multiple drone fleets into a single operational view. 
              Real-time video, telemetry, and GIS layers on one dashboard.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                "Multi-stream H.265 decoding",
                "Live GIS path overlay",
                "Geo-fence breach alerts",
                "Control room integration API",
              ].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "1.3rem", color: "#444" }}>
                  <span style={{ width: "5px", height: "5px", background: "#111", borderRadius: "50%", flexShrink: 0 }} />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Aeroni.AI */}
          <div className="card-hover" style={{ border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "4rem", background: "#fbfbfb" }}>
            <div style={{ width: "5rem", height: "5rem", borderRadius: "1rem", background: "linear-gradient(135deg, #2d1a4a, #5a3a8a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "2.5rem" }}>
              <Binary style={{ width: "2.4rem", height: "2.4rem" }} />
            </div>
            <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "-0.02em" }}>Aeroni.AI Analytics Engine</h3>
            <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              GPU-accelerated photogrammetry and deep learning pipeline. Converts aerial imagery into 
              sub-centimeter 3D models, vegetation indices, and defect maps.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                "Auto stockpile volumetrics",
                "NDVI / NDRE crop health maps",
                "CNN crack detection (95%+)",
                "One-click PDF/SHP reports",
              ].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "1.3rem", color: "#444" }}>
                  <span style={{ width: "5px", height: "5px", background: "#111", borderRadius: "50%", flexShrink: 0 }} />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 4 — Security Architecture */}
      <FadeIn as="section" style={{ background: "#111", color: "#fff", padding: "10rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Security
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Defense-Grade Security<br />by Design
            </h2>
            <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
              Every layer of our technology stack is built with security as a first principle&mdash;not 
              an afterthought. From encrypted bootloaders to tamper-proof flight logs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              {
                icon: Lock,
                title: "Encrypted Communication",
                desc: "All telemetry links use 256-bit AES-GCM encryption. Ground-to-air handshake requires rotating session keys generated on every power cycle.",
              },
              {
                icon: Shield,
                title: "Tamper-Proof Flight Logs",
                desc: "Every flight is recorded on a write-once, signed ledger inside the Nitya FC. Logs cannot be modified post-mission, ensuring audit integrity.",
              },
              {
                icon: Crosshair,
                title: "Geo-Fencing & No-Fly Zones",
                desc: "Pre-programmed DGCA-compliant no-fly zones and dynamic geo-fences prevent the drone from entering restricted airspace even under manual override.",
              },
              {
                icon: CircuitBoard,
                title: "Secure Boot & Signed Firmware",
                desc: "The Nitya FC boots only cryptographically signed firmware images. Any unsigned or modified firmware is rejected at the hardware level.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4rem", padding: "3rem" }}>
                  <div style={{ width: "3.6rem", height: "3.6rem", borderRadius: "0.4rem", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "2rem" }}>
                    <Icon style={{ width: "1.8rem", height: "1.8rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 5 — Materials Science & Airframe Engineering */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <span className="section-title">
              <span></span>Materials &amp; Manufacturing
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, marginBottom: "2rem" }}>
              Designed in CAD.<br />Validated in FEA.<br />Built in Pune.
            </h2>
            <p style={{ fontSize: "1.55rem", color: "#555", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              We don&rsquo;t buy off-the-shelf frames. Every Aeronica airframe is designed from scratch 
              using Dassault Syst&egrave;mes CATIA, validated through finite element analysis (FEA), 
              and fabricated in our own composite curing facility.
            </p>
            <p style={{ fontSize: "1.55rem", color: "#555", lineHeight: 1.8, marginBottom: "3rem" }}>
              High-modulus carbon fiber prepregs are laid up by hand, vacuum-bagged, and cured in 
              autoclave-controlled temperatures. The result: airframes that survive high-vibration 
              railway corridors and EMI-heavy industrial environments.
            </p>
            <div style={{ display: "flex", gap: "3rem" }}>
              <div>
                <strong style={{ fontSize: "2rem", color: "#111", display: "block" }}>3.2 GPa</strong>
                <span style={{ fontSize: "1.2rem", color: "#888" }}>Tensile Modulus</span>
              </div>
              <div style={{ borderLeft: "1px solid #e5e5e5", paddingLeft: "3rem" }}>
                <strong style={{ fontSize: "2rem", color: "#111", display: "block" }}>8:1</strong>
                <span style={{ fontSize: "1.2rem", color: "#888" }}>Payload-to-Weight</span>
              </div>
              <div style={{ borderLeft: "1px solid #e5e5e5", paddingLeft: "3rem" }}>
                <strong style={{ fontSize: "2rem", color: "#111", display: "block" }}>±0.1mm</strong>
                <span style={{ fontSize: "1.2rem", color: "#888" }}>Mould Tolerance</span>
              </div>
            </div>
          </div>
          <div className="card-hover" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a4a)", borderRadius: "0.4rem", padding: "5rem", color: "#fff", aspectRatio: "1/0.85", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Fan style={{ width: "4rem", height: "4rem", marginBottom: "2.5rem", opacity: 0.7 }} />
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Composite Manufacturing Facility</h3>
            <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Our Pune facility houses autoclave curing systems, 5-axis CNC trimming, and ultrasonic 
              C-scan inspection for non-destructive structural validation of every frame.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {["Autoclave Curing", "5-Axis CNC", "C-Scan NDT", "Class 10K Clean Room"].map((tag, i) => (
                <span key={i} style={{ background: "rgba(255,255,255,0.08)", padding: "0.4rem 1rem", borderRadius: "100px", fontSize: "1.2rem", color: "rgba(255,255,255,0.7)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 6 — Testing, Certification & Quality */}
      <FadeIn as="section" style={{ background: "#f8f8f8", padding: "10rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Validation
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Tested. Certified. Field-Proven.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            <div className="card-hover" style={{ background: "#fff", borderRadius: "0.4rem", border: "1px solid #e5e5e5", padding: "3.5rem" }}>
              <Award style={{ width: "3.2rem", height: "3.2rem", color: "#111", marginBottom: "2rem" }} />
              <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>DGCA Type Certification</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>
                The Samrudhhi-10L is fully type-certified by the Directorate General of Civil Aviation. 
                This certification covers airworthiness, safety systems, and operational compliance.
              </p>
              <div style={{ fontSize: "1.3rem", color: "#888", borderTop: "1px solid #eee", paddingTop: "1.5rem" }}>
                <span style={{ color: "#111", fontWeight: 600 }}>Standard:</span> DGCA CAR Section 3, Series X Part I
              </div>
            </div>

            <div className="card-hover" style={{ background: "#fff", borderRadius: "0.4rem", border: "1px solid #e5e5e5", padding: "3.5rem" }}>
              <FlaskConical style={{ width: "3.2rem", height: "3.2rem", color: "#111", marginBottom: "2rem" }} />
              <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Environmental Test Regime</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>
                Every production unit undergoes a 12-point test protocol including thermal cycling 
                (-10°C to 55°C), vibration profiling, ingress protection, and EMI/EMC screening.
              </p>
              <div style={{ fontSize: "1.3rem", color: "#888", borderTop: "1px solid #eee", paddingTop: "1.5rem" }}>
                <span style={{ color: "#111", fontWeight: 600 }}>Pass Rate:</span> 100% before field deployment
              </div>
            </div>

            <div className="card-hover" style={{ background: "#fff", borderRadius: "0.4rem", border: "1px solid #e5e5e5", padding: "3.5rem" }}>
              <Wrench style={{ width: "3.2rem", height: "3.2rem", color: "#111", marginBottom: "2rem" }} />
              <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>AS9100-Ready Production</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>
                Our manufacturing line follows AS9100 aerospace quality management principles: full 
                material traceability, batch-level testing, and serialized component tracking.
              </p>
              <div style={{ fontSize: "1.3rem", color: "#888", borderTop: "1px solid #eee", paddingTop: "1.5rem" }}>
                <span style={{ color: "#111", fontWeight: 600 }}>Traceability:</span> Every bolt, every batch
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 7 — Industries We Serve */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
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
              <div key={index} style={{ background: "#fff", border: "1px solid #e5e5e5", padding: "3rem", borderRadius: "0.4rem" }}>
                <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "0.4rem", background: "#f1f1f1", display: "flex", alignItems: "center", justifyContent: "center", color: "#111", marginBottom: "2rem" }}>
                  <IconComponent style={{ width: "2rem", height: "2rem" }} />
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>{industry.title}</h3>
                <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>{industry.desc}</p>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
