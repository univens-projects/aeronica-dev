"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Book, FileText, Newspaper, Scale, HelpCircle, Download, Clock, ArrowLeft } from "lucide-react";
import CTA from "@/components/CTA";

function toSlug(text: string) {
  return text.toLowerCase().replace(/[–—,()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const pageMeta: Record<string, { icon: any; accent: string }> = {
  blog: { icon: Book, accent: "#21389a" },
  whitepapers: { icon: FileText, accent: "#21389a" },
  "news-media": { icon: Newspaper, accent: "#21389a" },
  "drone-regulations": { icon: Scale, accent: "#009bff" },
  faqs: { icon: HelpCircle, accent: "#009bff" },
  downloads: { icon: Download, accent: "#009bff" },
};

interface SubContent {
  title: string;
  category: string;
  content: string;
  sections?: Array<{ heading: string; text: string }>;
  list?: string[];
}

const contentMap: Record<string, SubContent> = {
  // Blog articles
  "precision-agriculture-in-2026": {
    title: "Precision Agriculture in 2026",
    category: "Blog",
    content: "How DGCA-certified drones are transforming Indian farming with AI-driven spraying and crop health analytics.",
    sections: [
      { heading: "The State of Indian Agriculture", text: "Indian agriculture faces unprecedented challenges — from labour shortages to water scarcity and the need for higher yields. Precision agriculture, enabled by drone technology, offers a scalable solution that addresses these challenges while reducing chemical usage and environmental impact." },
      { heading: "DGCA-Certified Precision Spraying", text: "Aeronica's Samrudhhi-10L, India's first DGCA type-certified agricultural UAV, is at the forefront of this transformation. With a 24.9 kg payload capacity and 16-minute flight time, it can cover 2 acres per flight with precision spraying that reduces pesticide usage by up to 30% compared to traditional methods." },
      { heading: "AI-Driven Crop Health Analytics", text: "Beyond spraying, multispectral sensors mounted on drones capture NDVI, LCI, and other vegetation indices that reveal crop health at a level of detail impossible from ground observation. Our Aeroni.AI engine processes this data in real-time, generating application maps that tell farmers exactly where to spray and at what concentration." },
    ],
  },
  "the-future-of-lidar-surveying": {
    title: "The Future of LiDAR Surveying",
    category: "Blog",
    content: "Sub-centimeter accuracy meets extended flight endurance — what the latest drone-LiDAR integration means for infrastructure.",
    sections: [
      { heading: "Beyond Traditional Survey Methods", text: "Ground-based LiDAR surveys are accurate but slow. A single kilometre of corridor can take a full day with a terrestrial scanner. Drone-mounted LiDAR covers the same distance in under 10 minutes, with comparable or superior point density." },
      { heading: "Sensor Fusion at Scale", text: "Modern drone-LiDAR systems integrate RTK-GPS, IMU, and the LiDAR sensor into a single tightly-coupled unit. This fusion enables sub-2cm vertical accuracy even in challenging terrain, eliminating the need for extensive ground control point networks." },
      { heading: "Applications Across Industries", text: "From railway corridor mapping to power line inspection and mining volumetric surveys, drone-LiDAR is becoming the standard. Aeronica's Flycra 2.0 platform, with 45-minute endurance and compatibility with multiple LiDAR payloads, is purpose-built for these demanding applications." },
    ],
  },
  "dgca-compliance-guide": {
    title: "DGCA Compliance Guide",
    category: "Blog",
    content: "Everything you need to know about operating commercial drones legally in India under the 2025 framework.",
    sections: [
      { heading: "The Regulatory Landscape", text: "India's drone regulations have evolved significantly since the Drone Rules 2021. The latest amendments in 2025 have streamlined the process for commercial operators while maintaining strict safety and security standards." },
      { heading: "Key Requirements for Operators", text: "All commercial drone operators must obtain a Remote Pilot License (RPL), register their drones on the Digital Sky platform, and obtain real-time airspace clearance before each flight. The type of clearance depends on the zone — green, yellow, or red." },
      { heading: "How Aeronica Helps", text: "Every Aeronica platform ships with Digital Sky compliant NPNT (No Permission No Take-off) modules pre-installed. Our training programs include DGCA exam preparation, and our operations team handles all regulatory paperwork for enterprise clients." },
    ],
  },
  "why-indigenous-flight-controllers-matter": {
    title: "Why Indigenous Flight Controllers Matter",
    category: "Blog",
    content: "A technical deep-dive into Aeronica's Nitya FC and the advantages of building avionics in-house.",
    sections: [
      { heading: "The Case for Indigenous Design", text: "Most commercial drones rely on off-the-shelf flight controllers from foreign manufacturers. While functional, these black-box solutions limit customization, create supply chain dependencies, and make it difficult to optimize for specific use cases." },
      { heading: "Nitya FC Architecture", text: "Aeronica's Nitya flight controller is built around an STM32MP1 dual-core processor with triple IMU redundancy, 256-bit AES encrypted telemetry, and secure boot. Every component is selected for availability in the Indian market, ensuring supply chain resilience." },
      { heading: "Integration with Aeroni.AI", text: "The Nitya FC is designed from the ground up to integrate with our Aeroni.AI cloud platform. Real-time telemetry, mission data, and sensor readings flow seamlessly from the flight controller to the analytics pipeline, enabling features like automated reporting and predictive maintenance." },
    ],
  },
  "drone-based-pipeline-surveillance": {
    title: "Drone-Based Pipeline Surveillance",
    category: "Blog",
    content: "Real-world ROI from EO/IR monitoring on cross-country oil and gas pipelines.",
    sections: [
      { heading: "The Challenge of Pipeline Security", text: "India's oil and gas pipeline network spans thousands of kilometres across remote and difficult terrain. Traditional surveillance methods — foot patrols, vehicle patrols, and fixed cameras — are costly, slow, and leave significant gaps in coverage." },
      { heading: "The USS Solution", text: "Aeronica's Unified Surveillance System (USS) combines EO/IR cameras with AI-based anomaly detection to provide 24/7 pipeline monitoring. The system detects encroachment, unauthorized excavation, leaks, and vegetation growth automatically, sending real-time alerts to the command centre." },
      { heading: "Measurable ROI", text: "In our deployment with IOCL across 150 km of pipeline, the USS system reduced patrol costs by 60% while improving detection rates by 85%. The system paid for itself within 8 months of operation." },
    ],
  },
  // Whitepapers
  "composite-airframe-design-for-agricultural-uavs": {
    title: "Composite Airframe Design for Agricultural UAVs",
    category: "Whitepaper",
    content: "Material selection, structural analysis, and thermal performance of carbon-fibre airframes under Indian field conditions.",
    sections: [
      { heading: "Material Selection Criteria", text: "Agricultural UAVs operate in harsh environments — high temperatures, humidity, dust, and exposure to chemicals. Carbon-fibre composites offer an ideal balance of strength, weight, and chemical resistance. This paper presents our material selection methodology and test results." },
      { heading: "Structural Analysis", text: "We present finite element analysis (FEA) results for the Samrudhhi-10L airframe under various load conditions, including maximum payload, gust loads, and emergency landing scenarios. Safety factors exceed 2.0 across all load cases." },
      { heading: "Thermal Performance", text: "Indian summer temperatures can exceed 45°C, affecting both structural integrity and electronic component performance. Our thermal management approach combines passive cooling through composite material selection with active cooling for critical components." },
    ],
  },
  "sensor-fusion-for-precision-mapping": {
    title: "Sensor Fusion for Precision Mapping",
    category: "Whitepaper",
    content: "Integrating RTK-GPS, IMU, and LiDAR data streams for sub-centimeter accuracy in drone survey workflows.",
    list: ["RTK-GPS positioning and correction methods", "IMU integration and bias compensation", "LiDAR point cloud registration", "Accuracy assessment methodology", "Case study: 200 km railway corridor survey"],
  },
  "ai-based-crop-health-classification": {
    title: "AI-Based Crop Health Classification",
    category: "Whitepaper",
    content: "Deep learning models for NDVI analysis and automated pest/disease detection using multispectral aerial imagery.",
    list: ["Multispectral sensor calibration and data acquisition", "Deep learning architecture for crop classification", "Training methodology and dataset composition", "Validation results across 10 crop types", "Integration with precision spraying workflow"],
  },
  "secure-telemetry-protocols-for-drone-operations": {
    title: "Secure Telemetry Protocols for Drone Operations",
    category: "Whitepaper",
    content: "End-to-end encryption, frequency hopping, and anti-jamming techniques for mission-critical UAV communications.",
    list: ["Threat model for UAV communication links", "Encryption standards and key management", "Frequency hopping spread spectrum implementation", "Anti-jamming and spoofing countermeasures", "Compliance with Indian security requirements"],
  },
  // Case studies
  "railway-corridor-mapping-central-railway": {
    title: "Railway Corridor Mapping — Central Railway",
    category: "Case Study",
    content: "200 km corridor surveyed with RTK drones. Methodology, accuracy assessment, and deliverables.",
    sections: [
      { heading: "Project Overview", text: "Central Railway engaged Aeronica to survey 200 km of railway corridor for track alignment assessment, encroachment detection, and drainage system mapping. The project required sub-5cm accuracy across the entire corridor." },
      { heading: "Methodology", text: "We deployed three Flycra 2.0 platforms equipped with RTK GPS and high-resolution RGB sensors. Flight planning was optimized for corridor width and overlap requirements. Ground control points were established at 2 km intervals for accuracy verification." },
      { heading: "Results", text: "The survey was completed in 12 flight days, producing orthomosaics at 2 cm GSD, a digital elevation model at 10 cm resolution, and a comprehensive GIS database of track features, encroachments, and drainage infrastructure." },
    ],
  },
  "mine-volumetric-analysis-jsw-steel": {
    title: "Mine Volumetric Analysis — JSW Steel",
    category: "Case Study",
    content: "Quarterly stockpile measurement using drone photogrammetry with ±1.5% accuracy validation.",
    sections: [
      { heading: "Project Overview", text: "JSW Steel required quarterly volumetric surveys of their iron ore stockpiles at their Karnataka mining operations. Traditional total station surveys took 3-4 days and required significant safety precautions in active mining areas." },
      { heading: "Solution", text: "Aeronica deployed a single Flycra 2.0 platform with RTK GPS. Each survey flight covered the entire stockpile yard in under 45 minutes. Data was processed using photogrammetry software to generate 3D point clouds and digital surface models." },
      { heading: "Results", text: "Volumetric accuracy was validated against weighbridge data, showing ±1.5% agreement. Survey time reduced from 3 days to 2 hours, and safety risks associated with personnel working near active mining operations were eliminated." },
    ],
  },
  "pipeline-surveillance-iocl": {
    title: "Pipeline Surveillance — IOCL",
    category: "Case Study",
    content: "Deployment of USS system with AI anomaly detection over 150 km of cross-country pipeline.",
    sections: [
      { heading: "Project Overview", text: "Indian Oil Corporation Limited (IOCL) needed a continuous monitoring solution for a 150 km cross-country pipeline passing through remote and semi-urban areas. Traditional patrol methods were costly and provided limited coverage." },
      { heading: "Solution", text: "Aeronica deployed the Unified Surveillance System (USS) with fixed EO/IR camera stations at critical points and mobile drone patrols covering the entire pipeline length. The AI-based anomaly detection system was trained on pipeline-specific threat patterns." },
      { heading: "Results", text: "The system detected 23 encroachment events and 7 unauthorized excavation attempts in the first 6 months of operation. Patrol costs were reduced by 60% and response time to incidents decreased from hours to minutes." },
    ],
  },
  // Press releases
  "aeronica-receives-dgca-type-certification-for-samrudhhi-10l": {
    title: "Aeronica Receives DGCA Type Certification for Samrudhhi-10L",
    category: "Press Release",
    content: "Our flagship agricultural UAV becomes one of the first indigenously designed drones to receive DGCA type certification.",
    sections: [
      { heading: "Certification Milestone", text: "Pune, March 2026 — Aeronica Advance Technologies Pvt. Ltd. today announced that its Samrudhhi-10L agricultural UAV has received type certification from the Directorate General of Civil Aviation (DGCA). The certification validates the platform's airworthiness, safety systems, and manufacturing quality." },
      { heading: "Significance for Indian Agriculture", text: "The Samrudhhi-10L is one of the first indigenously designed and manufactured drones to receive DGCA type certification. This milestone makes precision agriculture services more accessible to Indian farmers while ensuring compliance with all regulatory requirements." },
      { heading: "Next Steps", text: "With DGCA certification secured, Aeronica is scaling production at its Pune facility and expanding its network of authorized service providers across Maharashtra, Karnataka, Madhya Pradesh, and Gujarat." },
    ],
  },
  "partnership-with-iit-bombay-for-ai-research": {
    title: "Partnership with IIT Bombay for AI Research",
    category: "Press Release",
    content: "Joint research initiative focused on deep learning models for real-time crop health classification from multispectral data.",
    list: ["Joint research lab established at IIT Bombay", "Focus on real-time crop disease detection", "Integration with Aeronica's multispectral payload", "Ph.D. and internship opportunities for students"],
  },
  "expansion-of-rd-facility-in-pune": {
    title: "Expansion of R&D Facility in Pune",
    category: "Press Release",
    content: "New 15,000 sq ft facility dedicated to flight controller development, sensor integration, and UAV prototyping.",
    list: ["15,000 sq ft state-of-the-art R&D centre", "Dedicated flight controller development lab", "Sensor integration and calibration facility", "Rapid prototyping with in-house 3D printing", "Capacity to produce 50 airframes per month"],
  },
  // Media mentions
  "the-economic-times-aeronica-feature": {
    title: "How Pune-based Aeronica is Making Drones for Indian Farms — The Economic Times",
    category: "Media Coverage",
    content: "Feature article in The Economic Times covering Aeronica's journey and impact on Indian agriculture.",
  },
  "yourstory-aeronica-feature": {
    title: "This Drone Startup is Helping Farmers Reduce Pesticide Use by 30% — YourStory",
    category: "Media Coverage",
    content: "YourStory profiles Aeronica's precision agriculture technology and its impact on farming communities.",
  },
  "business-standard-aeronica-feature": {
    title: "The Rise of Indigenous UAV Manufacturing in India — Business Standard",
    category: "Media Coverage",
    content: "Business Standard covers the growth of indigenous drone manufacturing, featuring Aeronica's DGCA-certified platforms.",
  },
  // Regulations
  "drone-rules-2021-amended-2025": {
    title: "Drone Rules 2021 (Amended 2025)",
    category: "Regulations",
    content: "The primary regulation covering registration, licensing, airspace, and operational requirements for all drones in India.",
    sections: [
      { heading: "Overview", text: "The Drone Rules 2021, as amended in 2025, form the primary regulatory framework for all civil unmanned aircraft systems (UAS) operations in India. The rules cover registration, licensing, airspace classification, operational requirements, and enforcement." },
      { heading: "Key Amendments 2025", text: "The 2025 amendments streamlined the registration process, introduced a simplified remote pilot license pathway for micro and small drones, and expanded the green zone airspace available for automated approvals." },
      { heading: "Compliance Requirements", text: "All drone operators must register on the Digital Sky platform, obtain necessary licenses, ensure their drones are equipped with NPNT modules, and adhere to operational limitations based on drone category and airspace zone." },
    ],
  },
  "digital-sky-platform": {
    title: "Digital Sky Platform",
    category: "Regulations",
    content: "DGCA's digital portal for drone registration, flight permission (NPNT), and real-time airspace clearance.",
    sections: [
      { heading: "What is Digital Sky?", text: "Digital Sky is the DGCA's digital platform for managing all drone operations in India. It serves as the single interface for drone registration, remote pilot licensing, airspace clearance, and flight log management." },
      { heading: "NPNT Compliance", text: "No Permission No Take-off (NPNT) is a mandatory system that prevents drones from flying without real-time airspace clearance from Digital Sky. Every drone manufactured or imported after 2022 must have an NPNT-compliant module." },
      { heading: "Airspace Zones", text: "Digital Sky classifies Indian airspace into green (permission-free for micro/small drones), yellow (controlled airspace requiring clearance), and red (flight prohibited) zones. Real-time zone maps are available through the Digital Sky portal." },
    ],
  },
  "type-certification-process": {
    title: "Type Certification Process",
    category: "Regulations",
    content: "Requirements for obtaining DGCA type certification for drone manufacturers, including airworthiness and safety standards.",
    list: ["Design and manufacturing quality standards", "Airworthiness testing requirements", "Safety and reliability validation", "Documentation and compliance evidence", "Certification maintenance and renewal"],
  },
  "remote-pilot-license-rpl": {
    title: "Remote Pilot License (RPL)",
    category: "Regulations",
    content: "Mandatory certification for all commercial drone pilots. Training, examination, and renewal process.",
    list: ["Eligibility criteria and medical requirements", "Approved training organizations and curriculum", "Written examination and practical test", "License renewal and continuing education", "Conversion of foreign licenses"],
  },
  "airspace-authorizations": {
    title: "Airspace Authorizations",
    category: "Regulations",
    content: "Green, yellow, and red zones. How to obtain real-time airspace clearance via Digital Sky for each zone type.",
    list: ["Green zone: automatic clearance for sub-200ft flights", "Yellow zone: application-based clearance (24hr processing)", "Red zone: generally prohibited, special permissions only", "Temporary airspace restrictions (VIP movement, events)", "Appeals and exceptions process"],
  },
  "insurance-requirements": {
    title: "Insurance Requirements",
    category: "Regulations",
    content: "Third-party liability insurance requirements for drone operators under Indian civil aviation law.",
    list: ["Minimum coverage amounts by drone category", "Policy requirements and documentation", "Claims process and reporting", "Penalties for non-compliance"],
  },
  "payload-and-weight-classifications": {
    title: "Payload and Weight Classifications",
    category: "Regulations",
    content: "Understanding the nano, micro, small, and large categories and the specific compliance requirements for each.",
    list: ["Nano: <250g — minimal compliance requirements", "Micro: 250g-2kg — registration required, no license needed", "Small: 2-25kg — full compliance including RPL", "Large: >25kg — additional airworthiness certification"],
  },
};

function estimateReadTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

function getTotalReadTime(sections: Array<{ heading: string; text: string }> | undefined, content?: string, list?: string[]): number {
  let total = content || "";
  sections?.forEach(s => total += " " + s.text);
  list?.forEach(l => total += " " + l);
  return estimateReadTime(total);
}

export default function ResourceSubPage() {
  const params = useParams();
  const slug = params.slug as string;
  const subslug = params.subslug as string;
  const meta = pageMeta[slug];

  if (!meta) notFound();

  const data = contentMap[subslug];
  if (!data) notFound();

  const Icon = meta.icon;
  const readTime = getTotalReadTime(data.sections, data.content, data.list);

  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ color: "#1a1a1a" }}>
      {/* Reading Progress Bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 9999,
        background: "#e5e5e5",
      }}>
        <div style={{
          height: "100%",
          width: `${scrollProgress * 100}%`,
          background: `linear-gradient(90deg, ${meta.accent}, ${meta.accent}dd)`,
          transition: "width 0.05s linear",
        }} />
      </div>

      {/* Hero — dark gradient with category badge, title, metadata */}
      <div style={{
        background: "linear-gradient(135deg, #21389A 0%, #1a2d6e 100%)",
        padding: "160px var(--section-px) 60px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(circle at 30% 50%, ${meta.accent}08 0%, transparent 70%)`,
        }} />
        <div style={{
          maxWidth: "1440px", margin: "0 auto", position: "relative", zIndex: 1,
        }}>
          {/* Breadcrumbs */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            marginBottom: "3rem", fontSize: "1.3rem",
            color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)",
          }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <ChevronRight style={{ width: "1.2rem", height: "1.2rem" }} />
            <Link href="/resources" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Resources</Link>
            <ChevronRight style={{ width: "1.2rem", height: "1.2rem" }} />
            <Link href={`/resources/${slug}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              {slug === "news-media" ? "News & Media" : slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          </div>

          {/* Category badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: `${meta.accent}1a`, color: meta.accent,
            padding: "0.4rem 1.2rem", borderRadius: "0.4rem",
            fontSize: "1.2rem", fontWeight: 600, fontFamily: "var(--font-mono)",
            textTransform: "uppercase", letterSpacing: "0.06em",
            marginBottom: "2rem",
            border: `1px solid ${meta.accent}30`,
          }}>
            <Icon style={{ width: "1.4rem", height: "1.4rem" }} />
            {data.category}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "clamp(2.8rem, 4vw, 4.8rem)",
            fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1,
            color: "#fff", maxWidth: "90rem",
          }}>
            {data.title}
          </h1>

          {/* Metadata */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1.5rem",
            marginTop: "2rem", fontSize: "1.3rem", color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-mono)",
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Clock style={{ width: "1.4rem", height: "1.4rem" }} />
              {readTime} min read
            </span>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: `linear-gradient(90deg, transparent, ${meta.accent}30, transparent)`,
        }} />
      </div>

      {/* Article Content */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{ padding: "0 var(--section-px)" }}
      >
        <div style={{ padding: "6rem 0 4rem", maxWidth: "72rem", margin: "0 auto" }}>
          {/* Lead paragraph */}
          <p style={{
            fontSize: "1.8rem", lineHeight: 1.65, color: "#555",
            marginBottom: "4rem", fontWeight: 400,
            borderLeft: `3px solid ${meta.accent}`,
            paddingLeft: "2rem",
            fontStyle: "italic",
          }}>
            {data.content}
          </p>

          {/* Sections */}
          {data.sections && data.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              style={{ marginBottom: i < data.sections!.length - 1 ? "5rem" : "0" }}
            >
              <h2 style={{
                fontSize: "2rem", fontWeight: 600,
                letterSpacing: "-0.02em", lineHeight: 1.25,
                marginBottom: "1.2rem",
                display: "flex", alignItems: "center", gap: "1rem",
              }}>
                <span style={{
                  width: "4px", height: "2rem",
                  background: meta.accent, borderRadius: "2px",
                  flexShrink: 0,
                }} />
                {section.heading}
              </h2>
              <p style={{
                fontSize: "1.6rem", color: "#555",
                lineHeight: 1.8, marginBottom: "1.5rem",
              }}>
                {section.text}
              </p>
            </motion.div>
          ))}

          {/* Key Topics / List */}
          {data.list && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                marginTop: "5rem",
                border: `1px solid ${meta.accent}20`,
                borderRadius: "0.4rem",
                padding: "3rem",
                background: "#f3f0ec",
              }}
            >
              <h3 style={{
                fontSize: "1.3rem", fontWeight: 600,
                marginBottom: "2rem",
                color: meta.accent,
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase", letterSpacing: "0.06em",
                display: "flex", alignItems: "center", gap: "0.6rem",
              }}>
                <span style={{ width: "1.6rem", height: "2px", background: meta.accent, borderRadius: "0.2rem" }} />
                Key Topics
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {data.list.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                    style={{
                      padding: "0.9rem 0",
                      fontSize: "1.5rem", color: "#555",
                      display: "flex", alignItems: "flex-start", gap: "1rem",
                      borderBottom: i < data.list!.length - 1 ? "1px solid #e5e5e5" : "none",
                    }}
                  >
                    <span style={{
                      width: "2.2rem", height: "2.2rem",
                      borderRadius: "50%",
                      background: `${meta.accent}0d`,
                      color: meta.accent,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.1rem", fontWeight: 600,
                      flexShrink: 0, marginTop: "0.1rem",
                    }}>
                      {i + 1}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Back Navigation */}
      <div style={{
        padding: "0 var(--section-px) 6rem",
        maxWidth: "72rem", margin: "0 auto",
      }}>
        <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "3rem" }}>
          <Link href={`/resources/${slug}`} style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            fontSize: "1.4rem", fontWeight: 500,
            color: meta.accent, textDecoration: "none",
            padding: "0.8rem 1.6rem",
            border: `1px solid ${meta.accent}30`,
            borderRadius: "0.4rem",
          }}>
            <ArrowLeft style={{ width: "1.4rem", height: "1.4rem" }} />
            Back to {slug === "news-media" ? "News & Media" : slug.charAt(0).toUpperCase() + slug.slice(1)}
          </Link>
        </div>
      </div>

      <CTA />
    </div>
  );
}
