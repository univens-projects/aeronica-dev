"use client";

import React from "react";
import { ShieldCheck, Target, Award, Users, Bookmark, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="about-page-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "#1a1a1a" }}>
      {/* Page Header */}
      <div className="section-header centered" style={{ marginBottom: "6rem", padding: "0 var(--section-px)" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          About Aeronica
        </span>
        <h1 style={{ fontSize: "clamp(3.6rem, 5vw, 5.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem" }}>
          Pioneering Indian UAV Innovation
        </h1>
        <p className="section-subtitle" style={{ maxWidth: "70rem", margin: "1.5rem auto 0" }}>
          Founded in 2020, Aeronica Advance Technologies Pvt. Ltd. has rapidly grown to become a premium Hardware-Software-IoT aerial solutions provider in India.
        </p>
      </div>

      {/* SECTION 1: WHO WE ARE & MISSION */}
      <section style={{ padding: "0 var(--section-px)", marginBottom: "10rem", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "6rem", alignItems: "start", marginBottom: "8rem" }}>
          <div>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
              Drones, Built with Purpose. Flying with Precision.
            </h2>
            <p style={{ fontSize: "1.55rem", color: "#444", lineHeight: "1.7", marginBottom: "2rem" }}>
              Aeronica Advance Technologies Pvt. Ltd. is a DIPP-recognized technology startup that specializes in providing expert UAV and automation solutions. We design, manufacture, and operate industrial-grade unmanned systems tailored to meet Indian infrastructure, security, and agricultural needs.
            </p>
            <p style={{ fontSize: "1.55rem", color: "#444", lineHeight: "1.7", marginBottom: "2rem" }}>
              Supported end-to-end, we help organizations confidently start and scale drone programs, emphasizing reliability, strict regulatory compliance (including DGCA certifications), and manufacturing excellence that fosters strong long-term trust.
            </p>
            <p style={{ fontSize: "1.55rem", color: "#444", lineHeight: "1.7" }}>
              Whether operating our heavy-lift Samrudhhi spraying fleets or deploying Flycra 2.0 mapping units across critical railway segments, our key competencies are powered by innovative, reasonably priced technologies that transform efficiency and safety.
            </p>
          </div>

          <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", padding: "4rem", borderRadius: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <Target style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
              <h3 style={{ fontSize: "2rem", fontWeight: 600 }}>Our Mission</h3>
            </div>
            <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6", marginBottom: "3rem" }}>
              To create advanced, industry-ready drone technologies that empower organizations with smarter operations, improved efficiency, and safe, scalable UAV ecosystems.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <ShieldCheck style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
              <h3 style={{ fontSize: "2rem", fontWeight: 600 }}>Why Choose Us</h3>
            </div>
            <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6" }}>
              Aeronica delivers reliable, innovative, and fully compliant drone solutions backed by in-house engineering, quality manufacturing, and dedicated customer support.
            </p>
          </div>
        </div>

        {/* STATS COUNT GRID */}
        <div style={{ borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", padding: "4rem 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "4rem", textAlign: "center" }}>
          <div>
            <strong style={{ fontSize: "5rem", fontWeight: 400, color: "#111", letterSpacing: "-0.04em" }}>50,000+</strong>
            <span style={{ fontSize: "1.2rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginTop: "0.5rem" }}>Area Scanned (Acres)</span>
          </div>
          <div>
            <strong style={{ fontSize: "5rem", fontWeight: 400, color: "#111", letterSpacing: "-0.04em" }}>20,000+</strong>
            <span style={{ fontSize: "1.2rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginTop: "0.5rem" }}>Area Sprayed (Acres)</span>
          </div>
          <div>
            <strong style={{ fontSize: "5rem", fontWeight: 400, color: "#111", letterSpacing: "-0.04em" }}>15+</strong>
            <span style={{ fontSize: "1.2rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginTop: "0.5rem" }}>Cumulative Experience (Years)</span>
          </div>
          <div>
            <strong style={{ fontSize: "5rem", fontWeight: 400, color: "#111", letterSpacing: "-0.04em" }}>50+</strong>
            <span style={{ fontSize: "1.2rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginTop: "0.5rem" }}>Clients Supported</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLIENTS & PARTNERS */}
      <section style={{ background: "#f8f8f8", padding: "8rem var(--section-px)", marginBottom: "10rem" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <Users style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
            <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Trusted by Industry Leaders</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "2rem" }}>
            {[
              "Central Railway", "JSW Steel", "BASF Chemical", "IOCL (Indian Oil)", "Maharashtra Agriculture Dept",
              "Maharashtra Forest Dept", "LTIMindtree", "AmazingAerial", "Asian Paints", "Padeco", "UPL",
              "Inforob Tech", "SagunaBag", "SRV Media", "Infostorm Solutions"
            ].map((client, index) => (
              <div key={index} style={{ background: "#ffffff", padding: "2rem", borderRadius: "1rem", border: "1px solid #e5e5e5", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px" }}>
                <span style={{ fontSize: "1.45rem", fontWeight: 600, color: "#555" }}>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY COMPETENCIES */}
      <section style={{ padding: "0 var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
          <Award style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
          <h2 style={{ fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Key Competencies</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem" }}>
          {[
            { title: "In-House Engineering", desc: "Our in-house aerodynamics and avionics design teams enable rapid custom builds, tight quality control, and deep product understanding." },
            { title: "DGCA Type-Certified Platforms", desc: "All our commercial UAV platforms adhere strictly to DGCA regulations, guaranteeing legality, safety, and seamless registration processes." },
            { title: "End-to-End Pilot Support", desc: "We provide comprehensive mission training, active field troubleshooting, and continuous technical maintenance to optimize operational uptime." }
          ].map((comp, index) => (
            <div key={index} style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1.5rem", padding: "4rem" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>{comp.title}</h3>
              <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: "1.6" }}>{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
