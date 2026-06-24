"use client";

import React from "react";
import Link from "next/link";
import { Map, Tractor, Scan, Shield, Plane, Monitor, Brain, Cpu, ArrowRight } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

const accentColor = "#21389a";

const services = [
  { title: "GIS Survey & Mapping", desc: "Sub-centimeter accuracy for railway corridors, mining, and infrastructure.", href: "/services/gis-survey-mapping", icon: Map },
  { title: "Agriculture Spraying", desc: "Precision pesticide application with DGCA-certified drones.", href: "/services/agriculture-spraying", icon: Tractor },
  { title: "Multispectral Scanning", desc: "Advanced crop health analytics and soil condition insights.", href: "/services/multispectral-scanning", icon: Scan },
  { title: "Security Surveillance", desc: "Real-time monitoring & AI-powered anomaly detection.", href: "/services/security-surveillance", icon: Shield },
  { title: "Samrudhhi-10L", desc: "The gold standard in agri-drone technology.", href: "/products/samrudhhi-10l", icon: Plane },
  { title: "Unified Surveillance", desc: "Integrated command center for critical infrastructure.", href: "/solutions/uss", icon: Monitor },
  { title: "Aeroni.AI", desc: "Smart data processing, analytics & automated reporting.", href: "/solutions/aeroni-ai", icon: Brain },
  { title: "R&D & Custom UAV", desc: "Indigenous flight controllers & bespoke drone builds.", href: "/research", icon: Cpu },
];

export default function Services() {
  return (
    <section style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto", color: "#1a1a1a" }} id="services">
      <div style={{ marginBottom: "5rem" }}>
        <span className="section-title" style={{ justifyContent: "flex-start" }}>
          <span></span>What We Offer
        </span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Our Services
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "56rem", marginTop: "2rem" }}>
              Precision-engineered UAV solutions tailored for industrial scale and operational excellence.
            </p>
          </div>
          <Link href="/services" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            fontSize: "1.4rem", fontWeight: 600, color: "#21389A",
            textDecoration: "none", borderBottom: "1px solid #21389A", paddingBottom: "0.2rem",
            transition: "opacity 0.2s ease", flexShrink: 0, marginBottom: "0.2rem",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <MotionReveal as="div" stagger={0.1} y={40} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.6rem" }}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={index}
              href={service.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderLeft: `4px solid ${accentColor}`,
                borderRadius: "0 0.4rem 0.4rem 0",
                padding: "2.2rem 2.4rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.2rem" }}>
                <div style={{ width: "3.6rem", height: "3.6rem", borderRadius: "50%", background: `${accentColor}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon style={{ width: "1.8rem", height: "1.8rem", color: accentColor }} />
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 600, lineHeight: 1.3 }}>{service.title}</h3>
              </div>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, flexGrow: 1, marginBottom: "1.2rem" }}>{service.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: accentColor, fontWeight: 600, fontSize: "1.15rem" }}>
                Learn More <ArrowRight style={{ width: "1.2rem", height: "1.2rem" }} />
              </div>
            </Link>
          );
        })}
      </MotionReveal>
    </section>
  );
}
