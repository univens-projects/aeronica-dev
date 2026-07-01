"use client";

import React from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { ShieldCheck, Cpu, Plane, ChevronRight } from "lucide-react";

const products = [
  {
    slug: "samrudhhi-10l",
    name: "Samrudhhi-10L",
    tag: "DGCA Type Certified",
    tagColor: "#0CC820",
    category: "Agricultural UAV",
    headline: "India's First DGCA Certified Agricultural Drone",
    desc: "The Samrudhhi-10L is our flagship agricultural UAV — built for precision spraying in Indian farming conditions. With a 10L payload capacity, centrifugal atomization system, and full DGCA type certification, it's the benchmark for agricultural drone operations in India.",
    gradient: "linear-gradient(135deg, #0CC820 0%, #32620E 100%)",
    specs: [
      { label: "Payload Capacity", value: "24.9 Kg MTOW" },
      { label: "Tank Capacity", value: "10 Litres" },
      { label: "Flight Time", value: "16 minutes" },
      { label: "Coverage", value: "2 acres / hour" },
      { label: "Certification", value: "DGCA Type" },
      { label: "Atomization", value: "Centrifugal" },
    ],
    keyFeatures: ["DGCA Type Certificate — India's first", "Centrifugal atomization for uniform droplet size", "Precision GPS waypoint navigation", "Indigenous Nitya FC avionics"],
  },
  {
    slug: "samrudhhi-10lh",
    name: "Samrudhhi-10LH",
    tag: "Heavy Lift Hybrid",
    tagColor: "#009BFF",
    category: "Agricultural UAV — Heavy Lift",
    headline: "Extended Endurance for Large-Scale Campaigns",
    desc: "The Samrudhhi-10LH is the heavy-duty, hybrid-propulsion sibling of the Samrudhhi-10L, engineered for large-scale industrial agriculture and extended campaign coverage. Hybrid electric-combustion propulsion enables significantly longer flight times.",
    gradient: "linear-gradient(135deg, #009BFF 0%, #32620E 100%)",
    specs: [
      { label: "Payload Capacity", value: "30 Kg" },
      { label: "Tank Capacity", value: "10 Litres" },
      { label: "Flight Time", value: "20+ minutes" },
      { label: "Propulsion", value: "Hybrid Electric" },
      { label: "Frame", value: "Carbon Fibre" },
      { label: "Operations", value: "Large Scale" },
    ],
    keyFeatures: ["Hybrid electric-combustion propulsion", "30Kg total payload for extended missions", "All-carbon-fibre composite airframe", "Compatible with Aeroni.AI mission planning"],
  },
  {
    slug: "flycra-20",
    name: "Flycra 2.0",
    tag: "Survey & Mapping",
    tagColor: "#009BFF",
    category: "Mapping & Survey UAV",
    headline: "Sub-Centimeter Accuracy for India's Most Demanding Surveys",
    desc: "The Flycra 2.0 is a compact, high-precision fixed-wing mapping drone delivering sub-centimeter ground accuracy. Optimized for GIS surveys, linear corridor mapping, and large-area volumetric analysis — covering up to 15km of corridor per flight.",
    gradient: "linear-gradient(135deg, #009BFF 0%, #21389A 100%)",
    specs: [
      { label: "Control Range", value: "7 Km" },
      { label: "Flight Time", value: "45 minutes" },
      { label: "Ground Accuracy", value: "Sub-centimeter" },
      { label: "MTOW", value: "9.6 Kg" },
      { label: "Max Speed", value: "90 km/h" },
      { label: "Coverage", value: "Up to 500 acres/flight" },
    ],
    keyFeatures: ["45-minute endurance for long corridor surveys", "Sub-centimeter GCP accuracy", "PPK/RTK GNSS integration", "LiDAR and multispectral payload ready"],
  },
  {
    slug: "nitya-fc",
    name: "Nitya FC",
    tag: "Indigenous Avionics",
    tagColor: "#21389A",
    category: "Flight Controller",
    headline: "The Indigenous Brain of Every Aeronica UAV",
    desc: "The Nitya FC is Aeronica's fully indigenous flight controller — the result of 4 years of R&D by our embedded systems team. Built on the STM32MP1 processor with triple-redundant IMU and 256-bit AES encrypted telemetry, it's the most capable India-made autopilot available.",
    gradient: "linear-gradient(135deg, #21389A 0%, #111a2d 100%)",
    specs: [
      { label: "Processor", value: "STM32MP1" },
      { label: "IMU Redundancy", value: "Triple" },
      { label: "Telemetry Encryption", value: "256-bit AES" },
      { label: "Firmware", value: "Custom PX4" },
      { label: "Communication", value: "MAVLink 2.0" },
      { label: "Boot Security", value: "Secure Boot" },
    ],
    keyFeatures: ["100% India-designed and manufactured", "Triple-redundant IMU for fail-safe operation", "Military-grade 256-bit AES encrypted telemetry", "Custom PX4 firmware with Aeronica-specific flight modes"],
  },
];

export default function ProductsHub() {
  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Our Products"
        subtitle="Three purpose-built UAV platforms and one indigenous flight controller — designed, engineered, and manufactured entirely in India for Indian operating conditions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-title">
            <span></span>Hardware Portfolio
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, maxWidth: "50rem" }}>
            Built in India.<br />Proven in India.
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "65rem", marginTop: "1.5rem" }}>
            Every Aeronica platform is designed from the ground up for Indian terrain, climate, and operating conditions. No imported generic hardware — full indigenous engineering from airframe to firmware.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {products.map((product, index) => (
            <div key={product.slug} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden", display: "grid", gridTemplateColumns: index % 2 === 0 ? "1fr 2fr" : "2fr 1fr" }}>
              <div style={{
                background: product.gradient,
                padding: "4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "30rem",
                order: index % 2 === 0 ? 0 : 1,
              }}>
                <div>
                  <span style={{ fontSize: "1.1rem", padding: "0.4rem 1rem", background: "rgba(255,255,255,0.2)", borderRadius: "0.2rem", color: "#fff", fontWeight: 500, letterSpacing: "0.05em" }}>{product.tag}</span>
                  <h2 style={{ fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginTop: "2rem", lineHeight: 1 }}>{product.name}</h2>
                  <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.6)", marginTop: "0.5rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{product.category}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  {product.specs.slice(0, 4).map((spec, i) => (
                    <div key={i}>
                      <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>{spec.value}</div>
                      <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginTop: "0.2rem" }}>{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "space-between", order: index % 2 === 0 ? 1 : 0 }}>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "1.5rem", lineHeight: 1.2 }}>{product.headline}</h3>
                  <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: "2.5rem" }}>{product.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "3rem" }}>
                    {product.keyFeatures.map((feat, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.8rem", alignItems: "start" }}>
                        <ChevronRight style={{ width: "1.6rem", height: "1.6rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                        <span style={{ fontSize: "1.35rem", color: "#333", lineHeight: 1.5 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/products/${product.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.2rem 2.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none", alignSelf: "flex-start" }}>
                  View Full Specifications <DotArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#21389A" }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ShieldCheck style={{ width: "2.4rem", height: "2.4rem", color: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 500 }}>DGCA Certified</span>
            </div>
            <div style={{ width: "1px", height: "2.5rem", background: "rgba(255,255,255,0.2)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Cpu style={{ width: "2.4rem", height: "2.4rem", color: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 500 }}>Indigenous Design</span>
            </div>
            <div style={{ width: "1px", height: "2.5rem", background: "rgba(255,255,255,0.2)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Plane style={{ width: "2.4rem", height: "2.4rem", color: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 500 }}>15,000+ Flight Hours</span>
            </div>
          </div>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Need a custom configuration?
          </h2>
          <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.7)", maxWidth: "55rem", margin: "0 auto 3rem", lineHeight: 1.7 }}>
            Our engineering team works directly with clients to configure hardware for specific mission requirements. Payload customisation, sensor integration, and software adaptation available.
          </p>
          <Link href="/contact/request-demo" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.4rem 3rem", background: "#fff", color: "#21389A", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            Request a Demo <DotArrowRight size={12} />
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
