"use client";

import React from "react";
import Link from "next/link";
import {
  Map, Cpu, Tractor, HardHat, Mountain, Zap, Flame, Radio, Truck, Home,
  Building2, Landmark, ShieldCheck, FileText, RotateCcw, Cookie, Users,
  Award, Briefcase, GraduationCap, Globe, Microscope, Search, Link2, Compass
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const sitemapData = [
  {
    title: "Company",
    icon: Compass,
    links: [
      { label: "About Aeronica", href: "/about", desc: "Our origin story, mission, and vision for Indian aerospace." },
      { label: "Why Aeronica", href: "/about/why-aeronica", desc: "Six reasons why leading enterprises choose us." },
      { label: "Leadership Team", href: "/about/leadership-team", desc: "Meet the engineers and experts leading Aeronica." },
      { label: "Technology Stack", href: "/about/technology-stack", desc: "Our full-stack indigenous UAV capabilities." },
      { label: "Certifications & Compliance", href: "/about/certifications", desc: "DGCA type certificates and quality standards." },
      { label: "Partners & Alliances", href: "/about/partners-alliances", desc: "Academic collaborators and industry clients." },
      { label: "Research & Development", href: "/research", desc: "Pushing the boundaries of drone tech from Pune." },
      { label: "Careers", href: "/about/careers", desc: "Join our ambitious team and build tech that flies." },
      { label: "Contact Us", href: "/contact", desc: "Get in touch for quotes, demos, or partnerships." },
    ],
  },
  {
    title: "Products",
    icon: Cpu,
    links: [
      { label: "Samrudhhi-10L", href: "/products/samrudhhi-10l", desc: "DGCA type-certified agricultural spraying drone." },
      { label: "Samrudhhi-10LH", href: "/products/samrudhhi-10lh", desc: "Heavy-lift hybrid electric-combustion drone." },
      { label: "Flycra 2.0", href: "/products/flycra-20", desc: "High-endurance fixed-wing survey and mapping UAV." },
      { label: "Nitya FC Module", href: "/products/nitya-fc", desc: "Indigenous triple-redundant flight controller." },
    ],
  },
  {
    title: "Solutions",
    icon: Map,
    links: [
      { label: "Drone Survey & Mapping", href: "/solutions/drone-survey-mapping", desc: "Topographic maps and high-precision GIS data." },
      { label: "GIS & Spatial Intelligence", href: "/solutions/gis-geospatial-intelligence", desc: "Relational databases and custom web GIS portals." },
      { label: "Infrastructure Inspection", href: "/solutions/infrastructure-inspection", desc: "Asset condition monitoring and thermal diagnostics." },
      { label: "AI Drone Intelligence", href: "/solutions/ai-drone-intelligence", desc: "Cloud-native photogrammetry and object classification." },
      { label: "Disaster Response", href: "/solutions/disaster-emergency-response", desc: "Flood mapping and search-and-rescue thermal imaging." },
    ],
  },
  {
    title: "Industries",
    icon: Building2,
    links: [
      { label: "Government & Public Sector", href: "/industries/government", desc: "Borders, disaster response, and municipal mapping." },
      { label: "Smart Cities", href: "/industries/smart-cities", desc: "Digital twin modeling and urban analytics." },
      { label: "Agriculture", href: "/industries/agriculture", desc: "Precision spraying and crop health analytics." },
      { label: "Construction", href: "/industries/construction", desc: "Volumetric audits and structure-from-motion updates." },
      { label: "Mining", href: "/industries/mining", desc: "Open-cast progress surveys and stockpile diagnostics." },
      { label: "Utilities", href: "/industries/utilities", desc: "Power grid monitoring and pipeline surveillance." },
      { label: "Energy & Renewables", href: "/industries/energy", desc: "Solar farm thermal audits and wind turbine inspections." },
      { label: "Telecommunications", href: "/industries/telecom", desc: "Guy wire integrity and microwave line-of-sight analysis." },
      { label: "Transportation & Logistics", href: "/industries/transportation", desc: "Railway ballast profiling and corridor mapping." },
      { label: "Real Estate", href: "/industries/real-estate", desc: "Buildable area assessment and architectural visual tours." },
    ],
  },
  {
    title: "Local SEO Landing Pages",
    icon: Search,
    links: [
      { label: "Drone Survey Company Pune", href: "/seo/drone-survey-company-pune", desc: "Centimeter-accuracy surveys in Pune and surrounding belts." },
      { label: "Drone Survey Maharashtra", href: "/seo/drone-survey-maharashtra", desc: "State-wide GIS and mapping operations." },
      { label: "LiDAR Survey Services India", href: "/seo/lidar-survey-services-india", desc: "High-density 3D laser scanning for dense canopies." },
      { label: "GIS Solutions India", href: "/seo/gis-solutions-india", desc: "Custom web GIS maps and spatial databases." },
      { label: "Drone Inspection Services", href: "/seo/drone-inspection-services", desc: "Safe, visual, and thermal inspections." },
      { label: "Digital Twin Services", href: "/seo/digital-twin-services", desc: "Sub-centimeter facade and blocks visualization." },
      { label: "Solar Plant Inspection", href: "/seo/solar-plant-inspection", desc: "Automated panel-level thermal anomaly mapping." },
      { label: "Mining Drone Survey", href: "/seo/mining-drone-survey", desc: "Stockpile volume measurements and safety monitoring." },
      { label: "Highway Mapping Services", href: "/seo/highway-mapping-services", desc: "Linear topographic surveys for road designers." },
    ],
  },
  {
    title: "Legal & Legal Framework",
    icon: ShieldCheck,
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy", desc: "How we collect, store, and safeguard your data." },
      { label: "Terms & Conditions", href: "/legal/terms-conditions", desc: "Governing terms for our website and services." },
      { label: "Refund & Cancellation Policy", href: "/legal/refund-policy", desc: "Our guidelines on refunds and rescheduling." },
      { label: "Cookie Policy", href: "/legal/cookie-policy", desc: "Details on tracking technologies used on our site." },
    ],
  },
];

export default function Sitemap() {
  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Site Directory"
        subtitle="A comprehensive map of all the pages, products, solutions, and resources across the Aeronica web platform."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap", href: "/sitemap" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "4rem"
        }}>
          {sitemapData.map((category, idx) => {
            const CatIcon = category.icon;
            return (
              <div key={idx} className="card-hover p-4" style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "0.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", borderBottom: "1px solid #e5e5e5", paddingBottom: "1.5rem" }}>
                  <div style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "0.4rem",
                    background: "#21389A",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <CatIcon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 600, margin: 0, letterSpacing: "-0.02em" }}>
                    {category.title}
                  </h2>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {category.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem"
                      }}>
                        <div style={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#21389A",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#009BFF"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#21389A"; }}
                        >
                          <Link2 style={{ width: "1.4rem", height: "1.4rem", opacity: 0.6 }} />
                          {link.label}
                        </div>
                        <span style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.5, paddingLeft: "2rem" }}>
                          {link.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
