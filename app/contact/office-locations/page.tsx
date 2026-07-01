"use client";

import React from "react";
import Link from "next/link";
import { Building, Sparkles, MapPin, Phone, Mail, Clock, ArrowLeft, Landmark } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowRight } from "@/components/DotIcons";

export default function OfficeLocations() {
  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title="Office Locations"
        subtitle="Aeronica is based in Pune, Maharashtra — the hub of India's aerospace engineering and startup ecosystem. Visit our corporate office or manufacturing facility."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Office Locations", href: "/contact/office-locations" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        {/* was: inline gridTemplateColumns 1fr 1fr — now responsive */}
        <div className="offices-grid">

          {/* HQ Card */}
          <div className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
            <div style={{ background: "#21389A", color: "#fff", padding: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Building style={{ width: "2.4rem", height: "2.4rem", color: "#fff" }} />
                <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>HQ & Operations</span>
              </div>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 600 }}>Corporate Headquarters</h2>
            </div>
            <div style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <MapPin style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", display: "block", marginBottom: "0.5rem" }}>Address</span>
                  <span style={{ fontSize: "1.5rem", color: "#111", lineHeight: 1.6 }}>
                    101, Sunrise Apartments, Opp. Kamla Nehru Park main gate, Dr. Ketkar path near Prabhat road, Pune, MH India 411004.
                  </span>
                </div>
              </div>

              {/* was: inline gridTemplateColumns 1fr 1fr — now .form-row */}
              <div className="form-row">
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                  <Phone style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <span style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", display: "block", marginBottom: "0.3rem" }}>Phone</span>
                    <span style={{ fontSize: "1.4rem", color: "#111" }}>(+91) 727 646 9160</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                  <Mail style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <span style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", display: "block", marginBottom: "0.3rem" }}>Email</span>
                    <span style={{ fontSize: "1.4rem", color: "#111" }}>info@aeronica.in</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start", borderTop: "1px solid #e5e5e5", paddingTop: "2rem" }}>
                <Clock style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "1.35rem", color: "#555" }}>
                    <strong>Hours:</strong> Mon – Sat: 9:30 AM – 6:30 PM (IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Factory Card */}
          <div className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
            <div style={{ background: "#32620E", color: "#fff", padding: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <Sparkles style={{ width: "2.4rem", height: "2.4rem", color: "#fff" }} />
                <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>Assembly & Testing</span>
              </div>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 600 }}>Manufacturing Facility</h2>
            </div>
            <div style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <MapPin style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", display: "block", marginBottom: "0.5rem" }}>Address</span>
                  <span style={{ fontSize: "1.5rem", color: "#111", lineHeight: 1.6 }}>
                    Gat No.32, Khed Shivapur, Haveli, Pune, MH India 412205
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <Landmark style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <span style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", display: "block", marginBottom: "0.5rem" }}>Function</span>
                  <span style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.5 }}>
                    Carbon-fibre composites autoclave processing, electronic systems assembly, quality assurance checklists, and BVLOS test flight range.
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start", borderTop: "1px solid #e5e5e5", paddingTop: "2rem" }}>
                <Clock style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "1.35rem", color: "#555" }}>
                    <strong>Note:</strong> Factory visits require scheduling 48 hours in advance for safety and security clearances.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "1.2rem 2.5rem", background: "#f5f5f5", color: "#333", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            <ArrowLeft style={{ width: "1.6rem", height: "1.6rem" }} /> Contact Hub
          </Link>
          <Link href="/contact/request-demo" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.2rem 2.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            Request on-site Demo <DotArrowRight size={12} />
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}