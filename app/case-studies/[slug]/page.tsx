"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { 
  FileText, Image as ImageIcon, CheckCircle,
  Map, BarChart, Shield, Users, Target, Award
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const caseStudies: Record<string, any> = {
  "government-projects": {
    title: "Government Projects",
    subtitle: "National security and strategic asset mapping for central and state agencies.",
    icon: Shield,
    stats: { value: "12+", label: "Government Clients" },
    sections: [
      {
        heading: "Overview",
        text: "Aeronica has partnered with multiple central and state government agencies to deliver secure, high-accuracy aerial intelligence for critical national projects. From border infrastructure mapping to disaster response planning, our solutions meet the strictest data security and operational reliability standards required by the public sector.",
      },
      {
        heading: "Key Project: Strategic Asset Mapping for Border Infrastructure",
        text: "Our team conducted a high-resolution aerial survey of sensitive border infrastructure spanning 200+ kilometers. The project required real-time encrypted telemetry, DGCA-approved flight corridors, and delivery of classified geospatial data through secure channels.",
        metrics: [
          { label: "Corridor Length", value: "200+ km" },
          { label: "Accuracy", value: "±2 cm" },
          { label: "Data Security", value: "256-bit AES" },
          { label: "Delivery Timeline", value: "14 days" },
        ],
      },
      {
        heading: "Impact & Outcomes",
        list: [
          "Provided the first-ever high-resolution orthomosaic of sensitive border infrastructure for strategic planning",
          "Reduced manual survey time by 75%, enabling faster decision-making for infrastructure development",
          "Delivered classified data through encrypted channels with full audit trail compliance",
          "Enabled accurate volumetric analysis for earthwork planning and resource allocation",
          "Established a repeatable survey protocol that has been adopted for subsequent government missions",
        ],
      },
    ],
  },
  "infrastructure-projects": {
    title: "Infrastructure Projects",
    subtitle: "Corridor surveys and structural audits for highways, bridges, and railways.",
    icon: Map,
    stats: { value: "450+", label: "Km Surveyed" },
    sections: [
      {
        heading: "Overview",
        text: "India's infrastructure boom demands accurate geospatial data at every stage — from feasibility studies through construction monitoring to maintenance. Aeronica has delivered corridor surveys, structural audits, and progress monitoring for major infrastructure projects across Central Railway, state highway authorities, and private developers.",
      },
      {
        heading: "Key Project: Central Railway Corridor Mapping",
        text: "Aeronica was engaged by Central Railway to survey 450+ kilometers of operational railway corridor for alignment verification, drainage assessment, and asset inventory. The project required flying over active rail lines with precise timing coordination with train schedules.",
        metrics: [
          { label: "Corridor Length", value: "450+ km" },
          { label: "Flight Hours", value: "120+" },
          { label: "Data Delivered", value: "3.2 TB" },
          { label: "Time Saved", value: "60%" },
        ],
      },
      {
        heading: "Impact & Outcomes",
        list: [
          "Delivered sub-centimeter alignment data 60% faster than traditional ground survey methods",
          "Identified 40+ drainage issues and vegetation encroachments requiring immediate maintenance attention",
          "Created a complete digital asset inventory including signal posts, level crossings, and bridge structures",
          "Provided time-series data for monitoring track ballast degradation and corridor encroachment",
          "Established a baseline survey protocol now used for annual corridor review cycles",
        ],
      },
    ],
  },
  "agriculture-projects": {
    title: "Agriculture Projects",
    subtitle: "Precision spraying campaigns and crop health monitoring at scale.",
    icon: Target,
    stats: { value: "10,000+", label: "Acres Treated" },
    sections: [
      {
        heading: "Overview",
        text: "Aeronica's agricultural division has treated over 10,000 acres across Maharashtra, Karnataka, and Madhya Pradesh using our DGCA type-certified Samrudhhi-10L sprayer. Combined with multispectral crop health monitoring, we provide farmers with a complete precision agriculture solution.",
      },
      {
        heading: "Key Project: Large-Scale Precision Spraying Campaign — Maharashtra",
        text: "A corporate farming client engaged Aeronica to manage pest control across 5,000 acres of soybean and cotton during the Kharif season. The campaign required daily spraying operations coordinated with weather windows and crop growth stages.",
        metrics: [
          { label: "Area Treated", value: "5,000 acres" },
          { label: "Duration", value: "45 days" },
          { label: "Chemicals Saved", value: "30%" },
          { label: "Yield Improvement", value: "18%" },
        ],
      },
      {
        heading: "Impact & Outcomes",
        list: [
          "Achieved uniform spray coverage with centrifugal atomisation, reducing chemical drift by 90% compared to manual spraying",
          "Reduced pesticide usage by 30% through targeted application based on NDVI zone maps",
          "Completed spraying 3x faster than ground-based methods, enabling treatment during optimal weather windows",
          "Provided post-application multispectral analysis showing measurable improvement in crop health indices",
          "Farmers reported 18% higher yield compared to traditionally sprayed control fields",
        ],
      },
    ],
  },
  "mining-projects": {
    title: "Mining Projects",
    subtitle: "Volumetric analysis and terrain mapping for open-cast mining operations.",
    icon: BarChart,
    stats: { value: "2M+", label: "Tonnes Measured" },
    sections: [
      {
        heading: "Overview",
        text: "Aeronica provides quarterly volumetric surveys for major mining operators including JSW Steel and Indian Oil Corporation. Our Aeroni.AI engine processes drone-captured point clouds into accurate volume calculations, change detection maps, and regulatory compliance reports.",
      },
      {
        heading: "Key Project: Quarterly Volumetric Audits for Iron Ore Mine",
        text: "A leading steel manufacturer required accurate quarterly volume measurements across three open-cast iron ore mines for production accounting, royalty calculation, and operational planning. Traditional ground survey methods were taking 7-10 days per site with limited coverage.",
        metrics: [
          { label: "Sites Surveyed", value: "3 mines" },
          { label: "Area Covered", value: "800+ hectares" },
          { label: "Accuracy", value: "±1.5%" },
          { label: "Survey Time", value: "2 days" },
        ],
      },
      {
        heading: "Impact & Outcomes",
        list: [
          "Reduced survey time from 7-10 days to 2 days per site, enabling more frequent volume tracking",
          "Achieved ±1.5% volumetric accuracy certified against ground truth measurements",
          "Delivered interactive 3D point clouds and cross-section comparisons showing material movement",
          "Enabled accurate royalty payment calculations with auditable data trails",
          "Provided change detection maps showing excavation progress and bench slope stability",
        ],
      },
    ],
  },
  "smart-city-projects": {
    title: "Smart City Projects",
    subtitle: "Urban planning, digital twin creation, and city-wide infrastructure audits.",
    icon: Users,
    stats: { value: "5+", label: "Smart City Partners" },
    sections: [
      {
        heading: "Overview",
        text: "Aeronica supports smart city initiatives across India with high-resolution aerial surveys, digital twin creation, and urban analytics. Our data helps city planners make informed decisions about infrastructure development, traffic management, and environmental monitoring.",
      },
      {
        heading: "Key Project: Digital Twin Creation for Smart City Mission",
        text: "A municipal corporation engaged Aeronica to create a comprehensive digital twin of a 50 sq km urban area as part of the Smart City Mission. The project required orthomosaic imagery, 3D mesh models, and LiDAR point clouds integrated with existing GIS layers.",
        metrics: [
          { label: "Area Mapped", value: "50 sq km" },
          { label: "Resolution", value: "2.5 cm/px" },
          { label: "3D Models", value: "12,000+ buildings" },
          { label: "Integration", value: "GIS-ready" },
        ],
      },
      {
        heading: "Impact & Outcomes",
        list: [
          "Created the highest-resolution digital twin of the city, enabling accurate shadow impact and line-of-sight analysis",
          "Provided GIS-ready data layers including building footprints, road networks, vegetation, and water bodies",
          "Enabled simulation of proposed building heights on surrounding infrastructure and traffic flow",
          "Supported property tax assessment with accurate building footprint and floor count data",
          "Established a baseline dataset for 5-year urban development monitoring",
        ],
      },
    ],
  },
  "utility-projects": {
    title: "Utility Projects",
    subtitle: "Power line inspections and grid monitoring for seamless energy distribution.",
    icon: Award,
    stats: { value: "500+", label: "Towers Inspected" },
    sections: [
      {
        heading: "Overview",
        text: "Aeronica provides aerial inspection services for power transmission and distribution networks, helping utility operators maintain grid reliability, prevent outages, and comply with regulatory safety requirements. Our combined RGB and thermal inspection detects issues invisible to ground patrols.",
      },
      {
        heading: "Key Project: Transmission Corridor Inspection for State Utility",
        text: "A state electricity board contracted Aeronica to inspect 300+ kilometers of high-tension transmission corridors spanning urban, agricultural, and forest terrain. The inspection required detection of vegetation encroachment, insulator damage, and thermal anomalies.",
        metrics: [
          { label: "Corridor Length", value: "300+ km" },
          { label: "Towers Inspected", value: "500+" },
          { label: "Anomalies Detected", value: "180+" },
          { label: "Inspection Time", value: "10 days" },
        ],
      },
      {
        heading: "Impact & Outcomes",
        list: [
          "Completed inspection of 300+ km corridor in 10 days versus estimated 60 days for ground patrols",
          "Detected 180+ anomalies including 45 critical hot spots requiring immediate maintenance",
          "Identified 60+ vegetation encroachment locations with proximity measurements to conductors",
          "Provided GIS-tagged thermal report enabling targeted crew deployment for repairs",
          "Reduced outage risk by enabling preventive maintenance before monsoon season",
        ],
      },
    ],
  },
};

const iconMap: Record<string, any> = {
  "government-projects": Shield,
  "infrastructure-projects": Map,
  "agriculture-projects": Target,
  "mining-projects": BarChart,
  "smart-city-projects": Users,
  "utility-projects": Award,
};

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = caseStudies[slug];

  if (!data) {
    notFound();
  }

  const Icon = iconMap[slug] || data.icon;

  return (
    <div className="case-study-detail-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: data.title, href: `/case-studies/${slug}` },
        ]}
      />

      <FadeIn as="section" style={{ padding: "8rem var(--section-px)", maxWidth: "1000px", margin: "0 auto" }}>
        {/* Stat highlight */}
        {data.stats && (
          <div className="card-hover" style={{ background: "#21389A", borderRadius: "0.4rem", padding: "3rem", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "4rem", textAlign: "center" }}>
            <span style={{ fontSize: "4.8rem", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{data.stats.value}</span>
            <span style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.6)", maxWidth: "20rem", lineHeight: 1.3, textAlign: "left" }}>{data.stats.label}</span>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {data.sections.map((section: any, idx: number) => (
            <div key={idx} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em" }}>{section.heading}</h2>
              </div>

              {section.text && (
                <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, marginBottom: section.metrics || section.list ? "2.5rem" : "0" }}>
                  {section.text}
                </p>
              )}

              {section.metrics && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem", background: "#fff", borderRadius: "0.4rem", padding: "2rem", border: "1px solid #e5e5e5" }}>
                  {section.metrics.map((m: any, mIdx: number) => (
                    <div key={mIdx} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "2.4rem", fontWeight: 700, color: "#111", letterSpacing: "-0.02em" }}>{m.value}</div>
                      <div style={{ fontSize: "1.15rem", color: "#888", marginTop: "0.3rem" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {section.list && (
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {section.list.map((item: string, lIdx: number) => (
                    <li key={lIdx} style={{ display: "flex", gap: "1rem", alignItems: "start", fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>
                      <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#111", flexShrink: 0, marginTop: "0.2rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "6rem", textAlign: "center" }}>
          <Link href="/case-studies/project-gallery" style={{
            display: "inline-flex", alignItems: "center", gap: "1rem",
            padding: "1.4rem 3rem", background: "#21389A", color: "#fff",
            borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
            textDecoration: "none", transition: "all 0.3s ease",
          }}>
            View Project Gallery <ImageIcon style={{ width: "1.6rem", height: "1.6rem" }} />
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
