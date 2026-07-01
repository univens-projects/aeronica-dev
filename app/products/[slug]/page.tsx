"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import {
  CheckCircle, ChevronRight, Cpu, ShieldCheck, Globe, Zap, Plane,
  Layers, Radio, Award, Target, ArrowLeft
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowRight } from "@/components/DotIcons";

const products: Record<string, any> = {
  "samrudhhi-10l": {
    name: "Samrudhhi-10L",
    tagline: "India's First DGCA Type-Certified Agricultural UAV",
    category: "Agricultural UAV",
    certification: "DGCA Type Certified",
    gradient: "linear-gradient(135deg, #0CC820 0%, #32620E 100%)",
    heroColor: "#32620E",
    heroImage: "/assets/images/products/samrudhhi-10l/Sam10L2.png",
    certImage: "/assets/images/products/samrudhhi-10l/SAM-10L.png",
    overview: "The Samrudhhi-10L is Aeronica's flagship agricultural drone — the culmination of 4 years of R&D and the first UAV of its kind to receive full DGCA Type Certification in India. Designed specifically for Indian farming conditions, it delivers precision pesticide and fertilizer application across diverse crop types and terrain.",
    useCases: [
      "Precision pesticide application on rice, sugarcane, cotton, and horticulture crops",
      "Fertilizer broadcasting with variable-rate capability based on NDVI prescription maps",
      "Seed broadcasting for paddy transplanting and cover crop applications",
      "Crop health monitoring using integrated multispectral sensors",
    ],
    fullSpecs: [
      {
        category: "Performance", specs: [
          { label: "Max Takeoff Weight (MTOW)", value: "24.9 Kg" },
          { label: "Tank Capacity", value: "10 Litres" },
          { label: "Flight Time (Loaded)", value: "16 minutes" },
          { label: "Coverage Rate", value: "2 acres / hour" },
          { label: "Max Speed", value: "7 m/s (Spray Mode)" },
          { label: "Operating Altitude", value: "1.5–3m AGL (Spray)" },
        ]
      },
      {
        category: "Propulsion & Airframe", specs: [
          { label: "Propulsion", value: "Electric Multi-Rotor" },
          { label: "Frame Material", value: "Carbon Fibre Composite" },
          { label: "Waterproofing", value: "IP55 Rated" },
          { label: "Foldability", value: "Fully Foldable Arms" },
          { label: "Motor Configuration", value: "6-Motor Hexacopter" },
        ]
      },
      {
        category: "Spray System", specs: [
          { label: "Atomization", value: "Centrifugal (Rotary Nozzle)" },
          { label: "Droplet Size", value: "100–300 μm (Adjustable)" },
          { label: "Spray Width", value: "4–6 meters" },
          { label: "Flow Rate", value: "1.2–2.4 L/min" },
          { label: "Nozzle Count", value: "4 Rotary Nozzles" },
        ]
      },
      {
        category: "Avionics & Communication", specs: [
          { label: "Flight Controller", value: "Nitya FC (Indigenous)" },
          { label: "GNSS", value: "GPS + GLONASS + BeiDou" },
          { label: "Control Range", value: "3 Km" },
          { label: "Telemetry Encryption", value: "256-bit AES" },
          { label: "Obstacle Avoidance", value: "Forward + Downward Radar" },
          { label: "RTK Support", value: "Optional" },
        ]
      },
    ],
    highlights: [
      { icon: ShieldCheck, title: "DGCA Type Certificate", desc: "India's first agricultural drone to achieve full DGCA Type Certification. Enables unrestricted commercial agricultural operations across India." },
      { icon: Zap, title: "Centrifugal Atomization", desc: "Rotary nozzle system produces consistent 100–300 μm droplets regardless of operating speed — ensuring uniform coverage with 30% less chemical usage." },
      { icon: Cpu, title: "Nitya FC Avionics", desc: "Indigenous flight controller with triple-redundant IMU, terrain-following capabilities, and obstacle avoidance for safe operations in complex field environments." },
      { icon: Globe, title: "Prescription Map Compatible", desc: "Aeroni.AI integration enables variable-rate spraying based on NDVI prescription maps — applying chemicals only where needed, saving costs and reducing environmental impact." },
    ],
    proof: "Tested on 10,000+ acres across Maharashtra, Karnataka, and Madhya Pradesh. Average 18% yield improvement and 30% reduction in chemical costs reported by partner farmers.",
  },
  "samrudhhi-10lh": {
    name: "Samrudhhi-10LH",
    tagline: "Heavy Lift Hybrid UAV for Large-Scale Agricultural Campaigns",
    category: "Agricultural UAV — Heavy Lift",
    certification: "Commercial Operations",
    gradient: "linear-gradient(135deg, #009BFF 0%, #32620E 100%)",
    heroColor: "#0a4a20",
    heroImage: "/assets/images/products/samrudhhi-10l/Sam10L2.png",
    certImage: "/assets/images/products/samrudhhi-10l/SAM-10L.png",
    overview: "The Samrudhhi-10LH is the heavy-lift, hybrid-propulsion sibling of the Samrudhhi-10L. Engineered for large-scale industrial agricultural operations and extended campaign durations, its hybrid electric-combustion propulsion system provides significantly longer endurance than pure electric platforms — making it ideal for large farms and commercial agricultural service operators.",
    useCases: [
      "Large-scale precision spraying across 100+ acre blocks in a single deployment",
      "Industrial crop protection for plantation crops — banana, oil palm, rubber",
      "Extended multi-hour agricultural campaigns with minimal battery swap downtime",
      "Heavy payload delivery including granular fertilizers and specialty inputs",
    ],
    fullSpecs: [
      {
        category: "Performance", specs: [
          { label: "Max Takeoff Weight (MTOW)", value: "30 Kg" },
          { label: "Tank Capacity", value: "10 Litres" },
          { label: "Flight Time (Hybrid)", value: "20+ minutes" },
          { label: "Coverage Rate", value: "2.5 acres / hour" },
          { label: "Payload Capacity", value: "12 Kg usable payload" },
        ]
      },
      {
        category: "Propulsion System", specs: [
          { label: "Propulsion Type", value: "Hybrid Electric-Combustion" },
          { label: "Engine", value: "Brushless Electric + ICE Generator" },
          { label: "Frame Material", value: "High-Modulus Carbon Fibre" },
          { label: "Motor Configuration", value: "6-Motor Hexacopter" },
          { label: "Fuel Capacity", value: "2 Litres (Generator)" },
        ]
      },
      {
        category: "Spray System", specs: [
          { label: "Atomization", value: "Centrifugal Rotary Nozzle" },
          { label: "Spray Width", value: "5–7 meters" },
          { label: "Flow Rate", value: "1.5–3.0 L/min" },
          { label: "Nozzle Count", value: "4 Rotary Nozzles" },
        ]
      },
      {
        category: "Avionics", specs: [
          { label: "Flight Controller", value: "Nitya FC (Indigenous)" },
          { label: "GNSS", value: "GPS + GLONASS + BeiDou" },
          { label: "Control Range", value: "5 Km" },
          { label: "Telemetry", value: "Encrypted 256-bit AES" },
        ]
      },
    ],
    highlights: [
      { icon: Layers, title: "Hybrid Propulsion Advantage", desc: "The onboard ICE generator continuously charges flight batteries in-flight — delivering 20+ minute endurance compared to 12–15 minutes for pure electric equivalents at the same payload weight." },
      { icon: Target, title: "Large Campaign Efficiency", desc: "With 30Kg MTOW and extended flight time, the 10LH completes large field blocks with fewer landings — reducing turnaround time and operational cost for commercial spraying operators." },
      { icon: Cpu, title: "Indigenous Nitya FC", desc: "Same certified avionics platform as the Samrudhhi-10L — ensuring mission reliability, encrypted telemetry, and full compatibility with Aeroni.AI mission planning." },
      { icon: Award, title: "Commercial Grade Build", desc: "IP55-rated against moisture and dust. All-carbon-fibre composite airframe built in our Khed Shivapur facility with the same quality controls used for DGCA-certified platforms." },
    ],
    proof: "Deployed with commercial agricultural service operators in Maharashtra and Tamil Nadu for large-scale plantation operations. Delivers 40% higher daily coverage versus pure electric alternatives.",
  },
  "flycra-20": {
    name: "Flycra 2.0",
    tagline: "Sub-Centimeter Precision Survey & Mapping UAV",
    category: "Fixed-Wing Survey UAV",
    certification: "Commercial Survey Operations",
    gradient: "linear-gradient(135deg, #009BFF 0%, #21389A 100%)",
    heroColor: "#21389A",
    heroImage: "/assets/images/products/flycra-20/1.png",
    certImage: "/assets/images/products/flycra-20/91.png",
    overview: "The Flycra 2.0 is Aeronica's precision survey and mapping platform — a compact, high-endurance fixed-wing UAV designed for GIS surveys, railway corridor mapping, and large-area volumetric analysis. With a 45-minute flight time and 7km control range, it covers up to 15km of linear corridor per flight at sub-centimeter ground accuracy.",
    useCases: [
      "Railway corridor topographic surveys and alignment verification",
      "Highway route feasibility surveys and detailed project reporting",
      "Large-area agricultural mapping for NDVI prescription generation",
      "Mining site volumetric analysis and stockpile measurement",
      "Coastal and reservoir bathymetric survey integration",
      "Urban planning orthomosaic and 3D model generation",
    ],
    fullSpecs: [
      {
        category: "Flight Performance", specs: [
          { label: "MTOW", value: "9.6 Kg" },
          { label: "Flight Time", value: "45 minutes" },
          { label: "Control Range", value: "7 Km" },
          { label: "Max Speed", value: "90 km/h" },
          { label: "Cruise Speed", value: "65 km/h" },
          { label: "Max Wind Resistance", value: "12 m/s" },
          { label: "Operating Altitude", value: "Up to 4,000m ASL" },
        ]
      },
      {
        category: "Survey Capability", specs: [
          { label: "GSD at 120m AGL", value: "2.5 cm/pixel" },
          { label: "Relative Ground Accuracy", value: "Sub-centimeter (with GCPs)" },
          { label: "Coverage per Flight", value: "Up to 500 acres" },
          { label: "Corridor Coverage", value: "Up to 15 km/flight" },
          { label: "Overlap (Front/Side)", value: "80% / 70% (Configurable)" },
        ]
      },
      {
        category: "Sensors & Payload", specs: [
          { label: "Primary Camera", value: "42MP Sony Full-Frame" },
          { label: "LiDAR", value: "Optional (Velodyne/Livox)" },
          { label: "Multispectral", value: "Optional (5-band MicaSense)" },
          { label: "GNSS", value: "PPK + RTK Capable" },
          { label: "IMU", value: "Industrial Grade, 200Hz" },
        ]
      },
      {
        category: "Avionics", specs: [
          { label: "Flight Controller", value: "Nitya FC Fixed-Wing" },
          { label: "Autopilot", value: "Custom PX4 (Aeronica)" },
          { label: "Telemetry", value: "256-bit AES Encrypted" },
          { label: "Takeoff Method", value: "Catapult Launch / Hand" },
          { label: "Landing Method", value: "Belly Landing / Net" },
        ]
      },
    ],
    highlights: [
      { icon: Target, title: "Sub-Centimeter Accuracy", desc: "PPK post-processing with ground control points delivers sub-centimeter relative ground accuracy — meeting the requirements of engineering surveys, legal demarcation, and volumetric analysis." },
      { icon: Plane, title: "45-Minute Endurance", desc: "Fixed-wing efficiency enables 45 minutes of survey flight — covering 500+ acres or 15+ km of linear corridor in a single sortie. Dramatically reducing the number of flights needed versus multi-rotor platforms." },
      { icon: Radio, title: "Multi-Sensor Integration", desc: "Interchangeable payload bay accommodates Sony full-frame RGB, Velodyne LiDAR, and MicaSense multispectral sensors — one airframe for every survey data type." },
      { icon: Globe, title: "Aeroni.AI Processing", desc: "All Flycra 2.0 survey data integrates directly with Aeroni.AI for automated photogrammetry processing, point cloud generation, and DEM/orthomosaic delivery within 2 hours of landing." },
    ],
    proof: "450+ km of Central Railway corridor surveyed. Mining volumetrics delivered to JSW Steel and IOCL. 60% faster than traditional ground survey methods at ±1.5% volumetric accuracy.",
  },
  "nitya-fc": {
    name: "Nitya FC",
    tagline: "India's Most Advanced Indigenous Flight Controller",
    category: "Flight Controller & Avionics",
    certification: "Used in DGCA Type-Certified Aircraft",
    gradient: "linear-gradient(135deg, #21389A 0%, #111a2d 100%)",
    heroColor: "#111a2d",
    heroImage: "/assets/images/products/nitya-fc/Front.png",
    certImage: "/assets/images/products/nitya-fc/Back.png",
    overview: "The Nitya FC is Aeronica's fully indigenous flight controller — the result of 4 years of dedicated embedded systems R&D by our in-house team. Built on the STM32MP1 heterogeneous processor, it features triple-redundant IMU, military-grade 256-bit AES encrypted telemetry, and a custom PX4 firmware stack tailored for Aeronica's agricultural and survey platforms. The Nitya FC is the avionics core of every Aeronica product — and is now available as a standalone component for OEM integration.",
    useCases: [
      "Agricultural UAV flight control with precision spray mode automation",
      "Survey UAV autonomous waypoint navigation with terrain-following",
      "Industrial inspection drone platform integration",
      "Research and defence UAV OEM applications",
      "Swarm drone coordination and multi-vehicle operations",
    ],
    fullSpecs: [
      {
        category: "Processing", specs: [
          { label: "Processor", value: "STM32MP1 (Arm Cortex-A7 + M4)" },
          { label: "Real-Time Core", value: "Cortex-M4 @ 209 MHz" },
          { label: "Application Core", value: "Cortex-A7 @ 650 MHz" },
          { label: "RAM", value: "512 MB DDR3L" },
          { label: "Storage", value: "8 GB eMMC + SD Card" },
        ]
      },
      {
        category: "Sensors", specs: [
          { label: "IMU Configuration", value: "Triple Redundant (3x ICM-42688)" },
          { label: "Barometer", value: "Dual (MS5611)" },
          { label: "Magnetometer", value: "Triple Axis (IST8310)" },
          { label: "GNSS", value: "GPS/GLONASS/BeiDou/Galileo" },
          { label: "Optical Flow", value: "Integrated Downward Camera" },
        ]
      },
      {
        category: "Communication", specs: [
          { label: "Telemetry Encryption", value: "256-bit AES (MIL-grade)" },
          { label: "RC Input", value: "SBUS, PPM, ELRS" },
          { label: "Serial Ports", value: "6x UART" },
          { label: "I2C / SPI", value: "4x I2C, 2x SPI" },
          { label: "CAN Bus", value: "2x CAN FD" },
          { label: "USB", value: "USB-C (DFU + Debug)" },
        ]
      },
      {
        category: "Security & Firmware", specs: [
          { label: "Boot Security", value: "Secure Boot with TPM 2.0" },
          { label: "Firmware", value: "Custom PX4 v1.15 (Aeronica Fork)" },
          { label: "GCS Protocol", value: "MAVLink 2.0" },
          { label: "OTA Updates", value: "Signed Firmware Updates" },
          { label: "Data Logging", value: "ULog with AES-256 at rest" },
        ]
      },
    ],
    highlights: [
      { icon: Cpu, title: "STM32MP1 Heterogeneous SoC", desc: "The dual-core STM32MP1 runs Linux on the Cortex-A7 for mission planning and AI inference, while the Cortex-M4 hard real-time core runs the flight control loop at 1kHz — a architecture previously only found in defence-grade avionics." },
      { icon: ShieldCheck, title: "256-bit AES Encrypted Telemetry", desc: "All command uplinks and telemetry downlinks are encrypted with AES-256-GCM — meeting or exceeding MIL-STD telemetry security requirements. Critical for government and defence client deployments." },
      { icon: Layers, title: "Triple-Redundant IMU", desc: "Three independent ICM-42688 IMUs with voting logic ensure attitude estimation continues accurately even if one sensor fails or produces erroneous data — a key requirement for DGCA type certification." },
      { icon: Globe, title: "OEM & Research Available", desc: "The Nitya FC is available for OEM integration into third-party UAV platforms. Academic and research institutions can access evaluation units and full firmware source access under a research partnership agreement." },
    ],
    proof: "Deployed in 50+ commercial UAVs across India. Powers the DGCA Type-Certified Samrudhhi-10L. Used in Central Railway, JSW Steel, and IOCL drone operations. 15,000+ flight hours accumulated.",
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products[slug];

  if (!product) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${slug}` },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>

        {/* Overview — 2-col: text + hero image (for products with heroImage) OR gradient spec card */}
        {product.heroImage ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", marginBottom: "5rem", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>{product.category}</span>
              <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1rem", marginBottom: "2rem", lineHeight: 1.15 }}>
                {product.tagline}
              </h2>
              <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginBottom: "3rem" }}>{product.overview}</p>
              {/* Key spec badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
                {product.fullSpecs[0]?.specs.slice(0, 4).map((spec: any, i: number) => (
                  <div key={i} style={{ background: "#f5f5f5", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "0.8rem 1.5rem" }}>
                    <div style={{ fontSize: "1rem", color: "#888", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{spec.label}</div>
                    <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111", marginTop: "0.2rem" }}>{spec.value}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact/request-demo" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.2rem 2.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
                Request a Demo <DotArrowRight size={12} />
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                background: product.name === "Flycra 2.0"
                  ? "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"
                  : product.name === "Nitya FC"
                    ? "linear-gradient(135deg, #eceff1 0%, #cfd8dc 100%)"
                    : "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                borderRadius: "1.2rem",
                padding: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "38rem"
              }}>
                <Image
                  src={product.heroImage}
                  alt={`${product.name} — Showcase`}
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.18))" }}
                  priority
                />
              </div>
              {/* DGCA / Compliance badge overlay */}
              <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", padding: "0.6rem 1.2rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {product.certification}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", marginBottom: "5rem", alignItems: "start" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>{product.category}</span>
              <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1rem", marginBottom: "2rem", lineHeight: 1.15 }}>
                {product.tagline}
              </h2>
              <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8 }}>{product.overview}</p>
            </div>
            <div style={{ background: product.gradient, borderRadius: "0.4rem", padding: "3rem", color: "#fff" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem" }}>{product.certification}</div>
              <h3 style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>{product.name}</h3>
              <div style={{ width: "4rem", height: "2px", background: "rgba(255,255,255,0.3)", marginBottom: "2rem" }} />
              {product.fullSpecs[0]?.specs.slice(0, 4).map((spec: any, i: number) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.6)" }}>{spec.label}</span>
                  <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff" }}>{spec.value}</span>
                </div>
              ))}
              <Link href="/contact/request-demo" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", marginTop: "2.5rem", padding: "1.2rem 2rem", background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.3rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", width: "100%", justifyContent: "center" }}>
                Request a Demo <DotArrowRight size={12} />
              </Link>
            </div>
          </div>
        )}

        {/* Image Showcase — only for products with certImage */}
        {product.certImage && (
          <div style={{ marginBottom: "5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {/* Front-facing certified shot */}
              <div style={{
                background: product.name === "Flycra 2.0"
                  ? "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"
                  : product.name === "Nitya FC"
                    ? "linear-gradient(135deg, #eceff1 0%, #cfd8dc 100%)"
                    : "linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)",
                borderRadius: "1rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{ padding: "4rem", display: "flex", alignItems: "center", justifyContent: "center", flex: 1, minHeight: "30rem" }}>
                  <Image
                    src={product.certImage}
                    alt={`${product.name} — Secondary View`}
                    width={500}
                    height={380}
                    style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 20px rgba(33,56,154,0.15))" }}
                  />
                </div>
                <div style={{ padding: "2rem 3rem", borderTop: "1px solid rgba(33,56,154,0.08)" }}>
                  <span style={{ fontSize: "1.2rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", color: "#21389A" }}>Secondary View</span>
                  <p style={{ fontSize: "1.35rem", color: "#555", marginTop: "0.4rem" }}>
                    {product.name === "Nitya FC" ? "Bottom layout featuring Make in India insignia" : "Front elevation configuration"}
                  </p>
                </div>
              </div>

              {/* DGCA Certification callout */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ background: "#21389A", borderRadius: "1rem", padding: "3.5rem", color: "#fff", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
                    <CheckCircle style={{ width: "3.2rem", height: "3.2rem", color: "#0CC820", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {product.name === "Nitya FC" ? "Indigenous Design" : "Certified Platform"}
                      </div>
                      <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff" }}>
                        {product.name === "Nitya FC" ? "Military-Grade Avionics" : "DGCA Compliant Operations"}
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                    {product.name === "Nitya FC"
                      ? "Designed, engineered and manufactured entirely in Pune, India. Triple-redundant hardware voting logic and secure boot with TPM 2.0 ensure maximum safety."
                      : "Aeronica UAVs are engineered for high-precision, fully compliant missions under India's Digital Sky airspace regulations."}
                  </p>
                  <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    {(product.name === "Nitya FC"
                      ? [{ label: "Architecture", val: "Heterogeneous" }, { label: "Encryption", val: "AES-256-GCM" }, { label: "IMU Redundancy", val: "Triple" }, { label: "Interface", val: "CAN FD & UART" }]
                      : [{ label: "Category", val: "Small Category" }, { label: "Compliance", val: "DGCA Compliant" }, { label: "Endurance", val: product.name === "Flycra 2.0" ? "45 mins" : "20 mins" }, { label: "MTOW", val: product.name === "Flycra 2.0" ? "9.6 Kg" : "30 Kg" }]
                    ).map((item, i) => (
                      <div key={i}>
                        <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                        <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#fff", marginTop: "0.3rem" }}>{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "#f5f5f5", borderRadius: "1rem", padding: "3rem", border: "1px solid #e5e5e5" }}>
                  <h4 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "1rem", color: "#111" }}>Proven Field Performance</h4>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.7 }}>{product.proof}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>Key Highlights</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {product.highlights.map((h: any, i: number) => {
              const HIcon = h.icon;
              return (
                <div key={i} className="card-hover p-35" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <HIcon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 600, marginBottom: "0.8rem" }}>{h.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>Use Cases</h2>
          <div className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
              {product.useCases.map((uc: string, i: number) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                  <ChevronRight style={{ width: "1.8rem", height: "1.8rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                  <span style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>Full Technical Specifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {product.fullSpecs.map((group: any, gi: number) => (
              <div key={gi} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
                <div style={{ background: "#21389A", padding: "1.2rem 2.5rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em" }}>{group.category}</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                  {group.specs.map((spec: any, si: number) => (
                    <div key={si} style={{ padding: "1.5rem 2.5rem", borderRight: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}>
                      <div style={{ fontSize: "1.15rem", color: "#888", marginBottom: "0.4rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{spec.label}</div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#111" }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#21389A", borderRadius: "0.4rem", padding: "3.5rem", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "start", gap: "1.5rem" }}>
            <CheckCircle style={{ width: "2.4rem", height: "2.4rem", color: "#0CC820", flexShrink: 0, marginTop: "0.2rem" }} />
            <div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.8rem" }}>Proven in the Field</h3>
              <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{product.proof}</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "1.2rem 2.5rem", background: "#f5f5f5", color: "#333", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            <ArrowLeft style={{ width: "1.6rem", height: "1.6rem" }} /> All Products
          </Link>
          <Link href="/contact/request-demo" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.2rem 2.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            Request a Demo <DotArrowRight size={12} />
          </Link>
          <Link href="/contact/get-quote" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.2rem 2.5rem", background: "#fff", color: "#009BFF", border: "1px solid #009BFF", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            Get a Quote <DotArrowRight size={12} />
          </Link>
        </div>

      </FadeIn>

      <CTA />
    </div>
  );
}
