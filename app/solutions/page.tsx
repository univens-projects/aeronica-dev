"use client";

import React from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";
import { 
  Map, Globe, Eye, Brain, LifeBuoy,
  Plane, Cpu, Ruler, ShieldCheck, Sparkles, 
  Combine, Timer, Crosshair, Tractor, Landmark,
  Users, Award
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import MotionParallax from "@/components/MotionParallax";

const hardwarePlatforms = [
  {
    name: "Samrudhhi-10L",
    tag: "DGCA Certified",
    desc: "Our flagship agricultural UAV built for precision spraying in Indian farming conditions. Features a high-efficiency centrifugal atomization system and 10L payload capacity.",
    specs: [
      { label: "Payload", value: "24.9 Kg" },
      { label: "Flight Time", value: "16 min" },
      { label: "Coverage", value: "2 acres/hr" },
      { label: "Certification", value: "DGCA Type" },
    ],
    gradient: "linear-gradient(135deg, #0CC820, #32620E)",
  },
  {
    name: "Samrudhhi-10LH",
    tag: "Heavy Lift",
    desc: "The heavy-duty sibling engineered for large-scale industrial logistics and extended agricultural campaigns. Hybrid propulsion enables longer endurance.",
    specs: [
      { label: "Payload", value: "30 Kg" },
      { label: "Flight Time", value: "20 min" },
      { label: "Propulsion", value: "Hybrid" },
      { label: "Frame", value: "Carbon Fibre" },
    ],
    gradient: "linear-gradient(135deg, #0CC820, #32620E)",
  },
  {
    name: "Flycra 2.0",
    tag: "Survey & Mapping",
    desc: "A compact high-precision mapping drone delivering sub-centimeter accuracy. Optimized for GIS surveys, corridor mapping, and volumetric analysis.",
    specs: [
      { label: "Range", value: "7 Km" },
      { label: "Flight Time", value: "45 min" },
      { label: "Accuracy", value: "Sub-cm" },
      { label: "Weight", value: "9.6 Kg" },
    ],
    gradient: "linear-gradient(135deg, #009BFF, #21389A)",
  },
  {
    name: "Nitya FC",
    tag: "Flight Controller",
    desc: "The indigenous brain of every Aeronica UAV. A fully Indian-designed flight controller with triple-redundant IMU, 256-bit encrypted telemetry, and secure boot.",
    specs: [
      { label: "Processor", value: "STM32MP1" },
      { label: "Sensors", value: "Triple IMU" },
      { label: "Security", value: "256-bit AES" },
      { label: "Firmware", value: "Custom PX4" },
    ],
    gradient: "linear-gradient(135deg, #009BFF, #21389A)",
  },
];

const solutionCategories = [
  { 
    title: "Drone Survey & Mapping", 
    desc: "Topographic surveys, LiDAR data collection, and high-accuracy 3D mapping for engineering and construction projects across India.", 
    href: "/solutions/drone-survey-mapping", 
    icon: Map, 
    color: "linear-gradient(135deg, #009BFF, #21389A)",
    capabilities: ["Sub-cm accuracy", "LiDAR & photogrammetry", "Up to 500 acres/day"],
  },
  { 
    title: "GIS & Geospatial Intelligence", 
    desc: "Advanced spatial analytics, digital twin creation, and custom GIS development for urban planning, utilities, and natural resource management.", 
    href: "/solutions/gis-geospatial-intelligence", 
    icon: Globe, 
    color: "linear-gradient(135deg, #009BFF, #21389A)",
    capabilities: ["Web GIS dashboards", "Spatial ML models", "Digital twin integration"],
  },
  { 
    title: "Infrastructure Inspection", 
    desc: "Automated aerial inspection of roads, bridges, solar plants, power lines, and railway corridors to reduce risk, downtime, and maintenance costs.", 
    href: "/solutions/infrastructure-inspection", 
    icon: Eye, 
    color: "linear-gradient(135deg, #009BFF, #21389A)",
    capabilities: ["AI defect detection", "Real-time streaming", "Regulatory reporting"],
  },
  { 
    title: "AI Drone Intelligence", 
    desc: "Deep learning pipelines for automated defect detection, change analysis, crop health assessment, and predictive maintenance across industrial assets.", 
    href: "/solutions/ai-drone-intelligence", 
    icon: Brain, 
    color: "linear-gradient(135deg, #009BFF, #21389A)",
    capabilities: ["95%+ detection accuracy", "NDVI/NDRE analytics", "Automated reporting"],
  },
  { 
    title: "Disaster & Emergency Response", 
    desc: "Rapid deployment for flood mapping, structural damage assessment, search-and-rescue operations, and real-time situational intelligence during crises.", 
    href: "/solutions/disaster-emergency-response", 
    icon: LifeBuoy, 
    color: "linear-gradient(135deg, #009BFF, #21389A)",
    capabilities: ["< 30 min deployment", "Thermal imaging", "Multi-agency data share"],
  },
];

export default function SolutionsHub() {
  return (
    <div className="solutions-hub-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Intelligent Aerial Ecosystems"
        subtitle="From high-resolution spatial mapping to real-time AI surveillance, we provide the tools and intelligence needed for high-stakes decision making."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }]}
      />

      {/* Section 1 — Hardware Platforms */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Built in India
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            The Hardware Behind the Mission
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            Every solution we deliver is powered by indigenously designed and manufactured 
            UAV platforms. From agricultural spraying to industrial inspection, the hardware 
            is built for Indian conditions, by Indian engineers.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
          {hardwarePlatforms.map((platform, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e5e5",
                    borderRadius: "0.4rem",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      padding: "3rem",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    <MotionParallax speed={0.2} style={{ position: "absolute", inset: "-30% 0" }}>
                      <div style={{
                        width: "100%", height: "100%",
                        background: `${platform.gradient}, url('/assets/images/pexels/${["pexels-drone-agriculture.jpg","pexels-industrial-sunrise.jpg","pexels-drone-tech.jpg","pexels-circuit-board.jpg"][i]}')`,
                        backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay",
                      }} />
                    </MotionParallax>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <Plane style={{ width: "3.2rem", height: "3.2rem", marginBottom: "1.5rem", opacity: 0.9 }} />
                      <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>{platform.name}</h3>
                      <span style={{ fontSize: "1.2rem", background: "rgba(255,255,255,0.2)", padding: "0.3rem 1rem", borderRadius: "0.4rem", display: "inline-block" }}>
                        {platform.tag}
                      </span>
                    </div>
              </div>
              <div style={{ padding: "2.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>
                  {platform.desc}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", borderTop: "1px solid #e5e5e5", paddingTop: "1.5rem" }}>
                  {platform.specs.map((spec, j) => (
                    <div key={j}>
                      <span style={{ fontSize: "1rem", color: "#888", display: "block" }}>{spec.label}</span>
                      <strong style={{ fontSize: "1.4rem", color: "#111" }}>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Section 2 — Solution Categories */}
      <FadeIn as="section" style={{ background: "#ffffff", padding: "10rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>What We Deliver
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Five Solution Pillars
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
              Our expertise spans the full spectrum of aerial intelligence&mdash;from raw data 
              capture to AI-powered decision support.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {solutionCategories.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={index}
                  href={solution.href}
                  className="card-hover"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "#fff",
                    border: "1px solid #e5e5e5",
                    borderRadius: "0.4rem",
                    padding: "3.5rem",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "0.4rem",
                      background: solution.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      marginBottom: "2rem",
                    }}
                  >
                    <Icon style={{ width: "2.4rem", height: "2.4rem" }} />
                  </div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>{solution.title}</h3>
                  <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>
                    {solution.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2rem" }}>
                    {solution.capabilities.map((cap, j) => (
                      <span
                        key={j}
                        style={{
                          fontSize: "1.15rem",
                          color: "#555",
                          background: "#ffffff",
                          padding: "0.3rem 0.8rem",
                          borderRadius: "0.4rem",
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "#111", fontWeight: 600, fontSize: "1.3rem" }}>
                    Explore Solution <DotArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 3 — Real-World Impact */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Proven Impact
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Results That Speak for Themselves
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            From the farms of Maharashtra to the railway corridors of Central India, our 
            solutions are delivering measurable outcomes for clients who demand precision.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2.5rem", marginBottom: "6rem" }}>
          {[
            {
              icon: Tractor,
              title: "Precision Agriculture",
              stat: "10,000+",
              unit: "Acres Sprayed",
              result: "30% reduction in pesticide usage with Samrudhhi-10L precision spraying. Farmers reported 18% higher yield in Kharif season trials.",
              highlight: "DGCA Type-Certified Sprayer",
            },
            {
              icon: Ruler,
              title: "Railway Corridor Mapping",
              stat: "450+",
              unit: "Kilometers Surveyed",
              result: "End-to-end corridor mapping for Central Railway. Sub-centimeter alignment data delivered 60% faster than traditional surveying methods.",
              highlight: "Live Client: Central Railway",
            },
            {
              icon: Landmark,
              title: "Mining Volumetrics",
              stat: "2M+",
              unit: "Tonnes Measured",
              result: "Quarterly stockpile audits for major mining operators. Aeroni.AI calculates volumes with ±1.5% accuracy, replacing weeks of ground-based survey work.",
              highlight: "Clients: JSW Steel & IOCL",
            },
          ].map((story, i) => {
            const Icon = story.icon;
            return (
              <div key={i} className="card-hover" style={{ border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3.5rem", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "1.2rem", color: "#888", fontFamily: "var(--font-mono)" }}>{story.highlight}</span>
                    <h3 style={{ fontSize: "2rem", fontWeight: 600 }}>{story.title}</h3>
                  </div>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <span style={{ fontSize: "4rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#111", lineHeight: 1 }}>{story.stat}</span>
                  <span style={{ fontSize: "1.4rem", color: "#888", display: "block" }}>{story.unit}</span>
                </div>
                <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.7 }}>{story.result}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.4rem 3rem",
              background: "#21389A",
              color: "#fff",
              borderRadius: "0.4rem",
              fontWeight: 600,
              fontSize: "1.4rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            View All Case Studies <DotArrowRight size={16} />
          </Link>
        </div>
      </FadeIn>

      {/* Section 4 — The Aeronica Difference */}
      <FadeIn as="section" style={{ background: "#21389A", color: "#fff", padding: "10rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The Edge
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Why Aeronica Solutions Deliver Different Results
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
            {[
              {
                icon: Cpu,
                title: "Full Vertical Integration",
                desc: "We design the airframe, write the firmware, build the cloud dashboard, and operate the fleet. No third-party dependencies, no integration gaps, no finger-pointing.",
              },
              {
                icon: ShieldCheck,
                title: "DGCA Compliant Operations",
                desc: "Every mission is flown under DGCA-compliant protocols. Our certified pilots, type-certified hardware, and approved airspace clearances ensure total regulatory peace of mind.",
              },
              {
                icon: Sparkles,
                title: "AI-Powered Analytics",
                desc: "Raw data alone doesn't solve problems. Our Aeroni.AI engine processes terabytes of imagery into actionable reports with automated defect detection, volumetric calculations, and vegetation indices.",
              },
              {
                icon: Combine,
                title: "End-to-End Service Model",
                desc: "From mission planning and regulatory clearance to data delivery and insights, we handle every step. You get answers, not raw files.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4rem", padding: "3rem" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "2rem" }}>
                    <Icon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 5 — How We Deliver */}
      <FadeIn as="section" style={{ padding: "10rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Delivery Model
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            From Brief to Intelligence
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            A structured, repeatable process that ensures every mission delivers exactly what 
            you need&mdash;on time, in spec, and fully compliant.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {[
            {
              step: "01",
              icon: Users,
              title: "Consult & Plan",
              desc: "We analyse your objectives, site conditions, regulatory requirements, and data output needs. A detailed mission plan is created with flight paths, sensor configuration, and timelines.",
            },
            {
              step: "02",
              icon: Crosshair,
              title: "Deploy & Capture",
              desc: "DGCA-certified pilots deploy with the optimal platform for your mission. RTK GPS, multispectral, LiDAR, or thermal sensors capture data at maximum resolution.",
            },
            {
              step: "03",
              icon: Timer,
              title: "Process & Analyse",
              desc: "Aeroni.AI processes raw data through SfM photogrammetry, AI inference, and spatial analysis. Orthomosaics, point clouds, NDVI maps, and defect reports are generated.",
            },
            {
              step: "04",
              icon: Award,
              title: "Deliver & Support",
              desc: "You receive structured deliverables&mdash;geotiff, SHP, PDF, or live dashboard. Our team provides a walkthrough and remains available for follow-up analysis.",
            },
          ].map((phase, i) => (
            <div
              key={i}
              style={{
                borderTop: "2px solid #111",
                paddingTop: "2.5rem",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "3.2rem", fontWeight: 700, color: "#e5e5e5", lineHeight: 1, display: "block", marginBottom: "1rem" }}>
                {phase.step}
              </span>
              <div style={{ width: "3.6rem", height: "3.6rem", borderRadius: "0.4rem", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#111", marginBottom: "1.5rem" }}>
                {React.createElement(phase.icon, { style: { width: "1.8rem", height: "1.8rem" } })}
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{phase.title}</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{phase.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Section 6 — Nationwide Reach */}
      <FadeIn as="section" style={{ background: "#ffffff", padding: "8rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", textAlign: "center" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Scale &amp; Reach
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, marginBottom: "5rem" }}>
            Operating Across India
          </h2>
          <div
            style={{
              background: "#21389A",
              borderRadius: "0.4rem",
              padding: "5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "3rem",
              textAlign: "center",
            }}
          >
            {[
              { value: "12+", label: "Indian States" },
              { value: "15K+", label: "Flight Hours" },
              { value: "50+", label: "Enterprises Served" },
              { value: "24/7", label: "Support Coverage" },
              { value: "100%", label: "DGCA Compliant" },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>{stat.value}</div>
                <div style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "4rem auto 0" }}>
            From our headquarters and manufacturing facility in Pune, we deploy teams across 
            Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan, Tamil Nadu, and beyond. 
            Our pilots and analysts are where you need them, when you need them.
          </p>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
