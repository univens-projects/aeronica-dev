"use client";

import React from "react";
import Link from "next/link";
import { Building2, Landmark, Tractor, HardHat, Mountain, Zap, Flame, Radio, Truck, Home } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function IndustriesHub() {
  return (
    <div className="industries-hub-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Industries We Empower"
        subtitle="From critical national infrastructure to precision agriculture, Aeronica provides the specialized data and hardware needed for every vertical."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }]}
      />

      {/* Industries Grid */}
      <FadeIn as="section" style={{ padding: "0 var(--section-px)", maxWidth: "1440px", margin: "0 auto", paddingTop: "8rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {[
            { title: "Government", icon: Landmark, href: "/industries/government", desc: "Policy support, national security, and strategic asset mapping." },
            { title: "Smart Cities", icon: Building2, href: "/industries/smart-cities", desc: "Urban planning, traffic analysis, and digital twin modeling." },
            { title: "Agriculture", icon: Tractor, href: "/industries/agriculture", desc: "Precision spraying, crop health analytics, and yield forecasting." },
            { title: "Construction", icon: HardHat, href: "/industries/construction", desc: "Site monitoring, volume audits, and structural inspection." },
            { title: "Mining", icon: Mountain, href: "/industries/mining", desc: "Open-cast mine surveying and precise stockpile volumetric analysis." },
            { title: "Utilities", icon: Zap, href: "/industries/utilities", desc: "Grid monitoring, vegetation management, and outage mapping." },
            { title: "Energy", icon: Flame, href: "/industries/energy", desc: "Solar farm inspections, wind turbine audits, and oil pipeline surveys." },
            { title: "Telecom", icon: Radio, href: "/industries/telecom", desc: "Tower structural audits, LOS analysis, and rapid site deployment." },
            { title: "Transportation", icon: Truck, href: "/industries/transportation", desc: "Railway corridor mapping, highway alignment, and logistics optimization." },
            { title: "Real Estate", icon: Home, href: "/industries/real-estate", desc: "Land surveying, topographic mapping, and architectural visualization." },
            ].map((industry, index) => {
              const Icon = industry.icon || (() => <div style={{ width: '2rem', height: '2rem', background: '#555' }} />);
              return (
                <Link key={index} href={industry.href} style={{ 
                textDecoration: "none", 
                color: "inherit", 
                background: "#fff", 
                border: "1px solid #e5e5e5", 
                padding: "3rem", 
borderRadius: "0.4rem",
                display: "flex", 
                flexDirection: "column", 
                gap: "1.5rem" 
              }} 
              >
                <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: "2rem", height: "2rem" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{industry.title}</h3>
                  <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: "1.6" }}>{industry.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </FadeIn>
      <CTA />
    </div>
  );
}
