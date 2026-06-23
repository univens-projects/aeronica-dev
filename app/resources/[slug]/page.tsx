"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  Book, FileText, Newspaper, Scale, HelpCircle, Download,
  ArrowRight, Calendar, ChevronRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";

function toSlug(text: string) {
  return text.toLowerCase().replace(/[–—,()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const resourceContent: Record<string, {
  title: string;
  subtitle: string;
  icon: any;
  sections: Array<{
    heading: string;
    text: string;
    items?: Array<{ label: string; desc: string; href?: string; date?: string }>;
  }>;
}> = {
  "blog": {
    title: "Aeronica Blog",
    subtitle: "Expert takes on the future of UAVs, AI-driven spatial analytics, and field stories from across India.",
    icon: Book,
    sections: [
      {
        heading: "Latest Articles",
        text: "Insights from our engineering and operations teams on drone technology, industry trends, and real-world deployments.",
        items: [
          { label: "Precision Agriculture in 2026", desc: "How DGCA-certified drones are transforming Indian farming with AI-driven spraying and crop health analytics.", href: "#" },
          { label: "The Future of LiDAR Surveying", desc: "Sub-centimeter accuracy meets extended flight endurance — what the latest drone-LiDAR integration means for infrastructure.", href: "#" },
          { label: "DGCA Compliance Guide", desc: "Everything you need to know about operating commercial drones legally in India under the 2025 framework.", href: "#" },
          { label: "Why Indigenous Flight Controllers Matter", desc: "A technical deep-dive into Aeronica's Nitya FC and the advantages of building avionics in-house.", href: "#" },
          { label: "Drone-Based Pipeline Surveillance", desc: "Real-world ROI from EO/IR monitoring on cross-country oil and gas pipelines.", href: "#" },
        ],
      },
      {
        heading: "Categories",
        text: "Browse articles by topic to find the content most relevant to your work.",
        items: [
          { label: "Agriculture", desc: "Precision farming, crop health, spraying technology" },
          { label: "Infrastructure", desc: "Surveying, inspection, digital twins" },
          { label: "Regulatory", desc: "DGCA rules, compliance, safety" },
          { label: "Technology", desc: "Flight controllers, AI, sensor fusion" },
        ],
      },
    ],
  },
  "whitepapers": {
    title: "Technical Whitepapers",
    subtitle: "In-depth research on composite materials, sensor fusion, and precision mapping methodologies.",
    icon: FileText,
    sections: [
      {
        heading: "Featured Whitepapers",
        text: "Download our technical research papers covering drone design, operational methodology, and industry-specific applications.",
        items: [
          { label: "Composite Airframe Design for Agricultural UAVs", desc: "Material selection, structural analysis, and thermal performance of carbon-fibre airframes under Indian field conditions.", href: "#" },
          { label: "Sensor Fusion for Precision Mapping", desc: "Integrating RTK-GPS, IMU, and LiDAR data streams for sub-centimeter accuracy in drone survey workflows.", href: "#" },
          { label: "AI-Based Crop Health Classification", desc: "Deep learning models for NDVI analysis and automated pest/disease detection using multispectral aerial imagery.", href: "#" },
          { label: "Secure Telemetry Protocols for Drone Operations", desc: "End-to-end encryption, frequency hopping, and anti-jamming techniques for mission-critical UAV communications.", href: "#" },
        ],
      },
      {
        heading: "Case Study Reports",
        text: "Detailed project reports from our field operations across India.",
        items: [
          { label: "Railway Corridor Mapping — Central Railway", desc: "200 km corridor surveyed with RTK drones. Methodology, accuracy assessment, and deliverables." },
          { label: "Mine Volumetric Analysis — JSW Steel", desc: "Quarterly stockpile measurement using drone photogrammetry with ±1.5% accuracy validation." },
          { label: "Pipeline Surveillance — IOCL", desc: "Deployment of USS system with AI anomaly detection over 150 km of cross-country pipeline." },
        ],
      },
    ],
  },
  "news-media": {
    title: "News & Media",
    subtitle: "Company announcements, press releases, and Aeronica in the national media.",
    icon: Newspaper,
    sections: [
      {
        heading: "Press Releases",
        text: "Official announcements from Aeronica on product launches, partnerships, and milestones.",
        items: [
          { label: "Aeronica Receives DGCA Type Certification for Samrudhhi-10L", desc: "Our flagship agricultural UAV becomes one of the first indigenously designed drones to receive DGCA type certification.", href: "#", date: "March 2026" },
          { label: "Partnership with IIT Bombay for AI Research", desc: "Joint research initiative focused on deep learning models for real-time crop health classification from multispectral data.", href: "#", date: "January 2026" },
          { label: "Expansion of R&D Facility in Pune", desc: "New 15,000 sq ft facility dedicated to flight controller development, sensor integration, and UAV prototyping.", href: "#", date: "November 2025" },
        ],
      },
      {
        heading: "Media Coverage",
        text: "Aeronica featured in national and industry publications.",
        items: [
          { label: "The Economic Times", desc: "How Pune-based Aeronica is making drones for Indian farms" },
          { label: "YourStory", desc: "This drone startup is helping farmers reduce pesticide use by 30%" },
          { label: "Business Standard", desc: "The rise of indigenous UAV manufacturing in India" },
        ],
      },
    ],
  },
  "drone-regulations": {
    title: "Drone Regulations",
    subtitle: "Comprehensive guide to DGCA rules, Digital Sky, and operational compliance in India.",
    icon: Scale,
    sections: [
      {
        heading: "Regulatory Framework Overview",
        text: "The Directorate General of Civil Aviation (DGCA) governs all civil UAS operations in India. Understanding the regulatory framework is essential for legal and safe drone operations.",
        items: [
          { label: "Drone Rules 2021 (Amended 2025)", desc: "The primary regulation covering registration, licensing, airspace, and operational requirements for all drones in India." },
          { label: "Digital Sky Platform", desc: "DGCA's digital portal for drone registration, flight permission (NPNT), and real-time airspace clearance." },
          { label: "Type Certification Process", desc: "Requirements for obtaining DGCA type certification for drone manufacturers, including airworthiness and safety standards." },
        ],
      },
      {
        heading: "Operational Requirements",
        text: "Key compliance areas for commercial drone operators.",
        items: [
          { label: "Remote Pilot License (RPL)", desc: "Mandatory certification for all commercial drone pilots. Training, examination, and renewal process." },
          { label: "Airspace Authorizations", desc: "Green, yellow, and red zones. How to obtain real-time airspace clearance via Digital Sky for each zone type." },
          { label: "Insurance Requirements", desc: "Third-party liability insurance requirements for drone operators under Indian civil aviation law." },
          { label: "Payload and Weight Classifications", desc: "Understanding the nano, micro, small, and large categories and the specific compliance requirements for each." },
        ],
      },
    ],
  },
  "faqs": {
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to common questions about our platforms, services, and pricing.",
    icon: HelpCircle,
    sections: [
      {
        heading: "Platforms & Technology",
        text: "Common questions about our drone platforms and their capabilities.",
        items: [
          { label: "What is the flight time of the Samrudhhi-10L?", desc: "The Samrudhhi-10L offers up to 16 minutes of flight time per battery charge, covering approximately 2 acres per flight in spraying operations." },
          { label: "Are your drones DGCA certified?", desc: "Yes. The Samrudhhi-10L is fully DGCA type-certified. All our platforms meet stringent airworthiness and safety standards." },
          { label: "What is the maximum payload capacity?", desc: "The Samrudhhi-10L carries up to 24.9 kg, and the Samrudhhi-10LH handles up to 30 kg payload for industrial applications." },
        ],
      },
      {
        heading: "Services & Operations",
        text: "Questions about our drone services and how we work with clients.",
        items: [
          { label: "Do you provide drone pilot training?", desc: "Yes. We offer DGCA-compliant remote pilot training programs for organizations deploying their own drone fleets." },
          { label: "What areas do you serve?", desc: "We operate across India with a focus on Maharashtra, Karnataka, Madhya Pradesh, Gujarat, and Tamil Nadu. Pan-India coverage available for enterprise clients." },
          { label: "How do I book a drone survey?", desc: "Contact our team via the Get in Touch button or call us directly. We'll schedule a consultation to understand your requirements and provide a quote." },
        ],
      },
      {
        heading: "Pricing & Procurement",
        text: "Questions about purchasing, leasing, and service pricing.",
        items: [
          { label: "Can I lease a drone instead of purchasing?", desc: "Yes. We offer flexible leasing options for agricultural spraying drones and surveying platforms. Contact our sales team for custom pricing." },
          { label: "What is included in the purchase price?", desc: "Every drone purchase includes the airframe, flight controller, radio system, battery charger, and a comprehensive training session for your operators." },
          { label: "Do you offer service contracts?", desc: "Yes. We provide annual maintenance contracts (AMC) covering parts replacement, firmware updates, and priority technical support." },
        ],
      },
    ],
  },
  "downloads": {
    title: "Downloads",
    subtitle: "Product brochures, technical spec sheets, and user manuals for our UAV fleets.",
    icon: Download,
    sections: [
      {
        heading: "Product Brochures",
        text: "Comprehensive overviews of our platforms, including specifications, features, and application guidance.",
        items: [
          { label: "Samrudhhi-10L Brochure", desc: "Complete product guide for our flagship agricultural UAV. Payload specs, flight performance, and spraying system details.", href: "#" },
          { label: "Samrudhhi-10LH Brochure", desc: "Heavy-lift variant specifications. Payload capacity, industrial applications, and integration options.", href: "#" },
          { label: "Flycra 2.0 Brochure", desc: "Mapping drone technical specifications. Sensor compatibility, accuracy data, and survey workflow overview.", href: "#" },
          { label: "Nitya Flight Controller Datasheet", desc: "Technical datasheet covering processor specs, sensor suite, firmware compatibility, and I/O interfaces.", href: "#" },
        ],
      },
      {
        heading: "Technical Documentation",
        text: "Detailed technical manuals and reference documents for operators and integrators.",
        items: [
          { label: "Samrudhhi-10L User Manual", desc: "Comprehensive operating manual including pre-flight checks, mission planning, and maintenance procedures." },
          { label: "Flycra 2.0 Quick Start Guide", desc: "Getting started guide with field setup, RTK configuration, and survey planning steps." },
          { label: "Nitya FC Integration Guide", desc: "Integration manual for OEMs and system integrators. Pinouts, communication protocols, and API documentation." },
          { label: "Safety & Compliance Handbook", desc: "Operational safety guidelines, emergency procedures, and regulatory compliance checklist." },
        ],
      },
    ],
  },
};

export default function ResourcePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = resourceContent[slug];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div style={{ color: "#1a1a1a" }}>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: data.title, href: `/resources/${slug}` },
        ]}
      />

      {data.sections.map((section, sectionIdx) => {
        return (
          <FadeIn key={sectionIdx} as="section" style={{ padding: "0 var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
            <div style={{ padding: sectionIdx === 0 ? "8rem 0 0" : "6rem 0 0" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{section.heading}</h2>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, maxWidth: "64rem", marginBottom: "3rem" }}>{section.text}</p>
              {section.items && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.6rem" }}>
                  {section.items.map((item, idx) => {
                    const subSlug = toSlug(item.label);
                    const subHref = `/resources/${slug}/${subSlug}`;
                    return (
                      <Link key={idx} href={subHref} style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{
                          background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                          padding: "2rem", height: "100%", display: "flex", flexDirection: "column",
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.6rem" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3, color: "#111" }}>{item.label}</h3>
                            {item.date && (
                              <span style={{
                                fontFamily: "var(--font-mono)", fontSize: "1rem", textTransform: "uppercase",
                                letterSpacing: "0.05em", color: "#888", whiteSpace: "nowrap", flexShrink: 0, marginTop: "0.1rem",
                              }}>
                                {item.date}
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.6, flexGrow: 1 }}>{item.desc}</p>
                          <div style={{ marginTop: "1.2rem" }}>
                            <span style={{
                              display: "inline-flex", alignItems: "center", gap: "0.4rem",
                              fontSize: "1.2rem", fontWeight: 600, color: "#21389a",
                            }}>
                              Read More <ArrowRight style={{ width: "1.2rem", height: "1.2rem" }} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </FadeIn>
        );
      })}

      <div style={{ padding: "6rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <FadeIn>
          <Link href="/resources" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            fontSize: "1.4rem", fontWeight: 600, color: "#555", textDecoration: "none",
          }}>
            <ChevronRight style={{ width: "1.4rem", height: "1.4rem", transform: "rotate(180deg)" }} />
            Back to Resources
          </Link>
        </FadeIn>
      </div>

      <CTA />
    </div>
  );
}
