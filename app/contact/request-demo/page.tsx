"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Mail, Phone, Calendar, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowRight } from "@/components/DotIcons";

export default function RequestDemo() {
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
        title="Schedule a Live Demo"
        subtitle="See our DGCA type-certified agricultural UAVs and high-accuracy mapping platforms in action. Choose a virtual walkthrough or an on-site field trial."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Request a Demo", href: "/contact/request-demo" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        {/* was: inline gridTemplateColumns 1fr 1fr — now a responsive class */}
        <div className="demo-grid">
          <div>
            <span className="section-title">
              <span></span>See Aeronica Fly
            </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.2 }}>
              Experience Next-Gen Aerial Intelligence
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginTop: "2rem" }}>
              Our technical team conducts live flight trials and software demonstrations to help you assess:
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <li style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <ShieldCheck style={{ width: "2rem", height: "2rem", color: "#0CC820", flexShrink: 0 }} />
                <span style={{ fontSize: "1.45rem", color: "#555" }}>Centrifugal nozzle spray coverage & uniform droplet dispersion</span>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <ShieldCheck style={{ width: "2rem", height: "2rem", color: "#0CC820", flexShrink: 0 }} />
                <span style={{ fontSize: "1.45rem", color: "#555" }}>Terrain following and radar obstacle avoidance systems</span>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <ShieldCheck style={{ width: "2rem", height: "2rem", color: "#0CC820", flexShrink: 0 }} />
                <span style={{ fontSize: "1.45rem", color: "#555" }}>PPK/RTK fixed-wing survey setup & GSD accuracy verification</span>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <ShieldCheck style={{ width: "2rem", height: "2rem", color: "#0CC820", flexShrink: 0 }} />
                <span style={{ fontSize: "1.45rem", color: "#555" }}>Aeroni.AI cloud ingestion, 3D point cloud, and photogrammetry modeling</span>
              </li>
            </ul>

            <div style={{ marginTop: "4rem", padding: "3rem", background: "#f5f5f5", borderRadius: "0.4rem", border: "1px solid #e5e5e5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Calendar style={{ width: "2rem", height: "2rem", color: "#21389A" }} />
                <h3 style={{ fontSize: "1.7rem", fontWeight: 600 }}>Demo Options</h3>
              </div>
              <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>
                <strong>On-Site Field Trial:</strong> Conducted by our flight crew at our dedicated testing range in Khed Shivapur, Pune, or directly on-site at your facility (subject to regional airspace permissions).
              </p>
              <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6, marginTop: "1rem" }}>
                <strong>Virtual Demo:</strong> 45-minute live stream session covering hardware assembly, GCS flight planning interface, and a walkthrough of processed datasets in Aeroni.AI.
              </p>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e5e5e5", padding: "4rem", borderRadius: "0.4rem", boxShadow: "var(--shadow-md)" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>Schedule Session</h3>

            {formSubmitted ? (
              <div style={{ background: "rgba(12,200,32,0.1)", padding: "3rem", borderRadius: "0.4rem", color: "#32620E", textAlign: "center" }}>
                <ShieldCheck style={{ width: "4rem", height: "4rem", margin: "0 auto 1.5rem" }} />
                <h4 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Request Received</h4>
                <p style={{ fontSize: "1.4rem" }}>Our technical sales coordinator will contact you within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                {/* was: inline gridTemplateColumns 1fr 1fr — now uses your existing .form-row class */}
                <div className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Name *</label>
                    <input type="text" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Organization *</label>
                    <input type="text" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Email *</label>
                    <input type="email" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Phone *</label>
                    <input type="tel" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Platform Interest *</label>
                  <select required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", background: "#fff" }}>
                    <option value="">Select Platform</option>
                    <option value="samrudhhi-10l">Samrudhhi-10L (Agricultural Spraying)</option>
                    <option value="samrudhhi-10lh">Samrudhhi-10LH (Hybrid Heavy Spraying)</option>
                    <option value="flycra-20">Flycra 2.0 (Survey & Mapping)</option>
                    <option value="nitya-fc">Nitya FC (Avionics Integration)</option>
                    <option value="custom">Bespoke UAV Development</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Demo Preference *</label>
                  <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.35rem" }}>
                      <input type="radio" name="demo_pref" value="virtual" defaultChecked /> Virtual Walkthrough
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.35rem" }}>
                      <input type="radio" name="demo_pref" value="onsite" /> On-site Flight Trial
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Comments / Operational Focus</label>
                  <textarea rows={3} placeholder="Please describe your crop varieties, mapping areas, or integration requirements." style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", resize: "vertical" }} />
                </div>

                <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.2rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", border: "none", cursor: "pointer", marginTop: "1rem" }}>
                  Schedule Demo <DotArrowRight size={12} />
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