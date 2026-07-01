"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClipboardList, ShieldCheck, Calculator, Mail, Phone, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowRight } from "@/components/DotIcons";

export default function GetQuote() {
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
        title="Request a Custom Quote"
        subtitle="Get tailored pricing for UAV hardware platforms, DaaS campaigns, GIS surveys, or enterprise drone software integration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Get a Quote", href: "/contact/get-quote" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <span className="section-title">
              <span></span>Commercial Proposals
            </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.2 }}>
              Transparent and Flexible Pricing Models
            </h2>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginTop: "2rem" }}>
              Our sales and estimation team will prepare a structured commercial proposal tailored to your technical requirements. We offer several billing structures:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2.5rem" }}>
              <div style={{ borderLeft: "3px solid #21389A", paddingLeft: "1.5rem" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>Per-Acre Rates (Agriculture & Forest)</h3>
                <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.5 }}>
                  Ideal for crop spraying and monitoring campaigns. Volume discounts apply to operations covering more than 1,000 cumulative acres.
                </p>
              </div>
              <div style={{ borderLeft: "3px solid #21389A", paddingLeft: "1.5rem" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>Per-Kilometer Rates (Linear Projects)</h3>
                <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.5 }}>
                  Structured for highway, railway, pipeline, and utility grid inspection projects using our fixed-wing Flycra platforms.
                </p>
              </div>
              <div style={{ borderLeft: "3px solid #21389A", paddingLeft: "1.5rem" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" }}>Capital Hardware Purchase (UAV + Avionics)</h3>
                <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.5 }}>
                  Direct procurement of DGCA-certified platforms, spares, ground control stations, and flight controller modules with standard warranties.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "4rem", padding: "3rem", background: "#f5f5f5", borderRadius: "0.4rem", border: "1px solid #e5e5e5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Calculator style={{ width: "2rem", height: "2rem", color: "#21389A" }} />
                <h3 style={{ fontSize: "1.7rem", fontWeight: 600 }}>Standard Inclusions</h3>
              </div>
              <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>
                All Aeronica service quotes include: airspace clearance coordination (Digital Sky), certified flight crew deployment, raw dataset sharing, processed Orthomosaics/DEMs, and 30 days of data hosting on Aeroni.AI cloud.
              </p>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e5e5e5", padding: "4rem", borderRadius: "0.4rem", boxShadow: "var(--shadow-md)" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "2rem" }}>Request Quote</h3>

            {formSubmitted ? (
              <div style={{ background: "rgba(12,200,32,0.1)", padding: "3rem", borderRadius: "0.4rem", color: "#32620E", textAlign: "center" }}>
                <ShieldCheck style={{ width: "4rem", height: "4rem", margin: "0 auto 1.5rem" }} />
                <h4 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Estimation Requested</h4>
                <p style={{ fontSize: "1.4rem" }}>Our commercial estimating team will contact you within 24 hours to clarify details and send a formal proposal.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Name *</label>
                    <input type="text" required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Company / Agency *</label>
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
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Quote Category *</label>
                    <select required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", background: "#fff" }}>
                      <option value="hardware">Hardware Purchase</option>
                      <option value="daas">Drone-as-a-Service (DaaS)</option>
                      <option value="gis">GIS & Spatial Analytics</option>
                      <option value="custom">Bespoke UAV Development</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>UAV Platform (if hardware) *</label>
                    <select required style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", background: "#fff" }}>
                      <option value="samrudhhi-10l">Samrudhhi-10L</option>
                      <option value="samrudhhi-10lh">Samrudhhi-10LH</option>
                      <option value="flycra-20">Flycra 2.0</option>
                      <option value="nitya-fc">Nitya FC Module</option>
                      <option value="none">Not Applicable / Services only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Project Scope / Target Area (Acres or Kilometers)</label>
                  <input type="text" placeholder="e.g. 500 Acres (Agriculture) or 50 Kilometers (Railway)" style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#555", marginBottom: "0.5rem" }}>Scope of Work Detail</label>
                  <textarea rows={3} placeholder="Please provide location details, sensor requirements, and timelines if available." style={{ width: "100%", padding: "1rem", border: "1px solid #e5e5e5", borderRadius: "0.4rem", fontSize: "1.4rem", resize: "vertical" }} />
                </div>

                <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.2rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", border: "none", cursor: "pointer", marginTop: "1rem" }}>
                  Submit Quote Request <DotArrowRight size={12} />
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
