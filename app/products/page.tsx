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
    slug: "samrudhhi-10lh",
    name: "Samrudhhi-10LH",
    tag: "Super Sturdy",
    tagColor: "#009BFF",
    category: "Agricultural UAV — Heavy Lift",
    headline: "Super Sturdy Agriculture Spraying Drone",
    desc: "Built for large-scale farming operations that demand more from every pass. The Samrudhhi 10LH offers effective spraying with wider crop coverage, helping you treat more acreage in less time.",
    gradient: "linear-gradient(135deg, #009BFF 0%, #111a2d 100%)",
    specs: [
      { label: "MTOW", value: "31.5 Kg" },
      { label: "Tank Capacity", value: "10 L" },
      { label: "Flight Time (Hybrid)", value: "24 min" },
      { label: "Coverage Rate", value: "25 Acres/Day" },
      { label: "Payload Capacity", value: "10 Kg" },
      { label: "Spray Type", value: "Flat Jet / Centrifugal" },
    ],
    keyFeatures: ["31.5 Kg MTOW with 10 Kg payload capacity", "Hybrid propulsion — 24 min flight time", "25 Acres per day coverage rate", "DGCA Compliant — Medium Category platform"],
  },
  {
    slug: "samrudhhi-10l",
    name: "Samrudhhi-10L",
    tag: "DGCA Type Certified",
    tagColor: "#21389A",
    category: "Agricultural UAV",
    headline: "DGCA Type-Certified Agricultural UAV",
    desc: "The Samrudhhi-10L is a crop spraying drone built around three things: speed, safety, and efficiency — not as buzzwords, but as design goals we engineered around from day one.",
    gradient: "linear-gradient(135deg, #21389A 0%, #009BFF 100%)",
    specs: [
      { label: "MTOW", value: "24.9 Kg" },
      { label: "Tank Capacity", value: "10 L" },
      { label: "Flight Time", value: "16 min" },
      { label: "Coverage Rate", value: "20 Acres/Day" },
      { label: "Payload Capacity", value: "10 Kg" },
      { label: "Spray Type", value: "Flat Jet Spray" },
    ],
    keyFeatures: ["DGCA Type Certified — India's first agricultural UAV", "Lightweight 24.9 Kg MTOW with 10 Kg payload", "20 Acres per day coverage rate", "Flat jet spray system — 6 ft swath, 5 L/min flow"],
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
      { label: "MTOW", value: "2.4 Kg" },
      { label: "Flight Time", value: "50 min" },
      { label: "Control Range", value: "Up to 2 Km" },
      { label: "Cruise Speed", value: "36 km/hr" },
      { label: "Payload", value: "Survey Grade" },
      { label: "GNSS", value: "PPK + RTK" },
    ],
    keyFeatures: ["50-minute endurance for corridor surveys", "PPK/RTK GNSS integration", "Lightweight 2.4 Kg airframe", "24MP APS-C Sony CMOS sensor"],
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

      <FadeIn as="section" className="section-py products-intro" style={{ maxWidth: "160rem", margin: "0 auto" }}>
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
            <div
              key={product.slug}
              className={`card-hover product-card ${index % 2 === 0 ? "product-card--imgLeft" : "product-card--imgRight"}`}
            >
              <div className="product-card__visual" style={{ background: product.gradient }}>
                <div>
                  <span style={{ fontSize: "1.1rem", padding: "0.4rem 1rem", background: "rgba(255,255,255,0.2)", borderRadius: "0.2rem", color: "#fff", fontWeight: 500, letterSpacing: "0.05em" }}>{product.tag}</span>
                  <h2 style={{ fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginTop: "2rem", lineHeight: 1 }}>{product.name}</h2>
                  <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.6)", marginTop: "0.5rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{product.category}</p>
                </div>
                <div className="product-card__specGrid">
                  {product.specs.slice(0, 4).map((spec, i) => (
                    <div key={i}>
                      <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "#fff" }}>{spec.value}</div>
                      <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginTop: "0.2rem" }}>{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-card__body">
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
        <div className="products-cta" style={{ maxWidth: "160rem", margin: "0 auto", textAlign: "center" }}>
          <div className="products-cta__badges" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ShieldCheck style={{ width: "2.4rem", height: "2.4rem", color: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 500 }}>DGCA Certified</span>
            </div>
            <div className="products-cta__divider" style={{ width: "1px", height: "2.5rem", background: "rgba(255,255,255,0.2)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Cpu style={{ width: "2.4rem", height: "2.4rem", color: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 500 }}>Indigenous Design</span>
            </div>
            <div className="products-cta__divider" style={{ width: "1px", height: "2.5rem", background: "rgba(255,255,255,0.2)" }} />
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

      <style jsx>{`
        /* ---------- Product cards ---------- */
        .product-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 0.4rem;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        .product-card--imgRight {
          grid-template-columns: 2fr 1fr;
        }
        .product-card--imgRight .product-card__visual {
          order: 1;
        }
        .product-card--imgRight .product-card__body {
          order: 0;
        }

        .product-card__visual {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 30rem;
        }

        .product-card__specGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .product-card__body {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Tablet: still 2 columns but tighter padding */
        @media (max-width: 1024px) {
          .product-card__visual,
          .product-card__body {
            padding: 3rem;
          }
        }

        /* Mobile: stack visual on top of body, always in document order */
        @media (max-width: 768px) {
          .product-card,
          .product-card--imgRight {
            grid-template-columns: 1fr;
          }
          .product-card--imgRight .product-card__visual,
          .product-card--imgRight .product-card__body,
          .product-card .product-card__visual,
          .product-card .product-card__body {
            order: initial;
          }
          .product-card__visual,
          .product-card__body {
            padding: 2.5rem;
            min-height: 0;
          }
          .product-card__specGrid {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .product-card__specGrid {
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem 1.5rem;
          }
          .product-card__visual,
          .product-card__body {
            padding: 2rem;
          }
        }

        /* ---------- CTA badges row ---------- */
        @media (max-width: 640px) {
          .products-cta__badges {
            flex-direction: column;
            gap: 1.5rem !important;
          }
          .products-cta__divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}