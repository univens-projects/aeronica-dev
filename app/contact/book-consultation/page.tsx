"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ShieldCheck, Compass, Mail, Phone, ArrowLeft, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowRight } from "@/components/DotIcons";

export default function BookConsultation() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title="Book a Consultation"
        subtitle="Schedule a 1-on-1 session with our UAV architects to discuss DGCA regulatory compliance, mission setup, or custom payload integration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Book Consultation", href: "/contact/book-consultation" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <span className="section-title">
              <span></span>Expert Advisory
            </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.2 }}>
              Speak with a UAV Systems Architect
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginTop: "2rem" }}>
              Our engineering advisory service covers planning and scaling drone programs:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2.5rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <Compass style={{ width: "2rem", height: "2rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>Regulatory Advisory (DGCA/Digital Sky)</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.5 }}>
                    Navigate India's UAV rules. Understand pilot licensure, airworthiness certificate requirements, and red/yellow zone approval protocols.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <Compass style={{ width: "2rem", height: "2rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>Mission Planning & Feasibility</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.5 }}>
                    Assess flight paths, overlapping requirements, and sensor compatibility for challenging linear infrastructure or mining surveys.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <Compass style={{ width: "2rem", height: "2rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>OEM Integration & Custom Payload</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.5 }}>
                    Consult directly on integrating third-party sensors, specialized cameras, or custom payload mounts on our Samrudhhi airframe.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "4rem", padding: "3rem", background: "#f5f5f5", borderRadius: "0.4rem", border: "1px solid #e5e5e5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Clock style={{ width: "2rem", height: "2rem", color: "#21389A" }} />
                <h3 style={{ fontSize: "1.7rem", fontWeight: 600 }}>Session Information</h3>
              </div>
              <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>
                All consultations are 30-minute virtual sessions (Google Meet or Microsoft Teams). We suggest sending your site boundary files (KML/KMZ) and payload weight parameters in advance for technical review.
              </p>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e5e5e5", padding: "4rem", borderRadius: "0.4rem", boxShadow: "var(--shadow-md)" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>Schedule Consultation</h3>

            {formSubmitted ? (
              <div style={{ background: "rgba(12,200,32,0.1)", padding: "3rem", borderRadius: "0.4rem", color: "#32620E", textAlign: "center" }}>
                <ShieldCheck style={{ width: "4rem", height: "4rem", margin: "0 auto 1.5rem" }} />
                <h4 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Session Booked</h4>
                <p style={{ fontSize: "1.4rem" }}>We will email you a calendar invitation with link to Google Meet within a few business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Name *</label>
                    <input type="text" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Organization *</label>
                    <input type="text" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Email *</label>
                    <input type="email" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Phone *</label>
                    <input type="tel" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Consultation Area *</label>
                    <select required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", background: "#fff" }}>
                      <option value="regulatory">Regulatory Compliance</option>
                      <option value="planning">Mission & Flight Planning</option>
                      <option value="oem">OEM / Payload Customization</option>
                      <option value="gis">GIS Analytics Integration</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Preferred Date *</label>
                    <input type="date" required style={{ width: "100%", padding: "0.9rem 1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", color: "#555" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Specific Objectives / Questions</label>
                  <textarea rows={4} placeholder="Please summarize the questions you would like our team to address during this session." style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", resize: "vertical" }} />
                </div>

                <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.2rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", border: "none", cursor: "pointer", marginTop: "1rem" }}>
                  Request Invitation <DotArrowRight size={12} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "5rem" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "1.2rem 2.5rem", background: "#f5f5f5", color: "#333", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            <ArrowLeft style={{ width: "1.6rem", height: "1.6rem" }} /> Contact Hub
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
