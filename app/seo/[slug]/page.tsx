"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  CheckCircle, ShieldCheck, Zap, Award, Globe,
  Map, Target, ArrowRight, ClipboardList, Calendar
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import { DotArrowRight } from "@/components/DotIcons";

const seoPagesData: Record<string, any> = {
  "drone-survey-company-pune": {
    title: "Drone Survey Company in Pune",
    subtitle: "Aeronica is Pune's leading DGCA-compliant drone survey and mapping agency, providing centimeter-accuracy GIS and engineering topography data.",
    overview: "Based in Pune, Maharashtra, Aeronica Advance Technologies Pvt. Ltd. is a DIPP recognized UAV technology startup. We deploy advanced in-house drone platforms like Flycra 2.0 and Samrudhhi to capture survey-grade topographic data, orthomosaics, and 3D terrain models for real estate, smart city, and infrastructure developers across Pune and surrounding industrial belts.",
    benefits: [
      "Local team based in Pune with rapid mobilization capabilities",
      "Full compliance with DGCA rules and local air traffic clearance",
      "High-precision survey outputs ready for AutoCAD, QGIS, and ArcGIS",
      "Saves up to 60% time compared to traditional total station ground surveys"
    ],
    faqs: [
      { q: "What is your typical turnaround time for a site in Pune?", a: "For a typical 100-acre site, we complete flight operations in 1 day and deliver processed CAD-ready datasets within 48 hours." },
      { q: "Do you obtain DGCA and local police permissions?", a: "Yes, Aeronica manages the entire airspace clearance process via the Digital Sky platform and coordinates with local authorities." }
    ]
  },
  "drone-survey-maharashtra": {
    title: "Drone Survey Services in Maharashtra",
    subtitle: "State-wide GIS mapping, high-resolution crop spraying, infrastructure inspection, and linear corridor surveys.",
    overview: "From our corporate office and factory in Pune, Aeronica operates state-of-the-art drone survey campaigns across Maharashtra. Serving Nashik, Nagpur, Mumbai Division, Aurangabad, and Solapur, we deliver spatial intelligence to central and state agencies, irrigation departments, railways, and private developers.",
    benefits: [
      "Broad geographic coverage with local operations crews based in West, North, and East Maharashtra",
      "Proven track record with major state departments and infrastructure agencies",
      "DGCA type-certified hardware built specifically to withstand Maharashtra's summer temperatures",
      "Fully compliant flight operations insured under third-party liability"
    ],
    faqs: [
      { q: "Have you worked on state government mapping projects?", a: "Yes, Aeronica has delivered crop monitoring and topographic mapping services for various state departments and Central Railway corridors." },
      { q: "What formats do you deliver?", a: "We provide Geotiff, Shapefiles, DEM/DSM, CAD DXF, and 3D LAS point clouds." }
    ]
  },
  "lidar-survey-services-india": {
    title: "LiDAR Survey Services in India",
    subtitle: "High-density 3D laser scanning for highway design, dense canopy forestry, power transmission corridors, and flood modeling.",
    overview: "LiDAR (Light Detection and Ranging) provides the ultimate penetration and accuracy for topographic mapping, especially in areas with dense vegetation or complex infrastructure. Aeronica integrates high-accuracy LiDAR sensors onto our Flycra fixed-wing and heavy-lift multi-rotor platforms to deliver high-density 3D point clouds across India.",
    benefits: [
      "Penetrates dense vegetation to model the true ground terrain (bare earth DEM)",
      "High point density (up to 150+ points/sqm) for detailed structural capturing",
      "Saves weeks of manual ground line-of-sight clearing in forested regions",
      "Critical for highway route design, railway profiling, and transmission line sag analysis"
    ],
    faqs: [
      { q: "What is the accuracy of your LiDAR datasets?", a: "Our LiDAR services deliver relative accuracy of ±1.5cm and absolute accuracy of <5cm depending on GNSS control configurations." },
      { q: "Do you provide PPK post-processing?", a: "Yes, all our LiDAR platforms utilize dual-frequency PPK GNSS receivers for high-precision trajectory correction." }
    ]
  },
  "gis-solutions-india": {
    title: "GIS & Geospatial Solutions in India",
    subtitle: "Enterprise spatial database design, custom web GIS portals, and advanced spatial machine learning analytics.",
    overview: "Aeronica delivers end-to-end Geospatial Intelligence. We don't just capture data — our GIS division structures raw aerial files into relational spatial databases, designs custom web-based GIS dashboards, and runs machine learning pipelines to detect changes and extract assets automatically.",
    benefits: [
      "Custom web GIS portal development for real-time asset tracking and progress monitoring",
      "Integration of drone datasets with legacy satellite, public cadastral, and utility GIS layers",
      "Automated object detection and classification using our deep learning Aeroni.AI engine",
      "Empowers municipal, agricultural, and logistics organizations with spatial business intelligence"
    ],
    faqs: [
      { q: "Can you host our GIS datasets securely?", a: "Yes, our Aeroni.AI platform offers secure cloud hosting with role-based access controls aligned with ISO 27001 standards." },
      { q: "Do you support integration with Esri ArcGIS or QGIS?", a: "All our deliverables conform to OGC standards and integrate seamlessly with ArcGIS, QGIS, and custom databases." }
    ]
  },
  "drone-inspection-services": {
    title: "Industrial Drone Inspection Services",
    subtitle: "Safe, rapid visual and thermal inspection of solar farms, wind turbines, cell towers, and high-rise structures.",
    overview: "Manual asset inspection involves high labor costs, downtime, and extreme physical risk. Aeronica's industrial inspection division deploys specialized sensor payloads to capture millimeter-level structural anomalies, loose connections, and hot spots on high-stakes national infrastructure.",
    benefits: [
      "Eliminates the need for scaffolding, staging, or high-risk human climbing",
      "Thermal sensor integration for real-time hot spot detection on electrical grids and solar panels",
      "AI-powered defect indexing classifies cracks, corrosion, and anomalies by severity",
      "Comprehensive digital audit trail with geotagged visual evidence"
    ],
    faqs: [
      { q: "What sensors do you use for thermal inspection?", a: "We utilize calibrated FLIR radiometric thermal cores alongside high-resolution RGB zoom cameras." },
      { q: "How quickly can you deliver an inspection report?", a: "Standard inspection logs are uploaded to our interactive web dashboard within 24 hours of flight completion." }
    ]
  },
  "digital-twin-services": {
    title: "3D Digital Twin Modeling Services",
    subtitle: "Centimeter-accurate 3D mesh models, point clouds, and CAD-ready topography for virtual design and construction.",
    overview: "A digital twin is a dynamic 3D virtual copy of a physical asset. Using photogrammetry and LiDAR data processed by our Aeroni.AI cloud engine, Aeronica constructs highly detailed, centimeter-accurate 3D digital twins of factories, heritage structures, construction sites, and entire city blocks.",
    benefits: [
      "Enables virtual walk-throughs, measurements, and clash detection in CAD/BIM environments",
      "Improves stakeholder collaboration with interactive web-based 3D visualisations",
      "Facilitates asset management and predictive maintenance simulations",
      "Archives physical heritage sites in permanent, high-fidelity digital format"
    ],
    faqs: [
      { q: "What formats do you output for BIM/CAD?", a: "We export OBJ, FBX, LAS, DXF, and IFC compatible files that load directly into Revit, AutoCAD, and Bentley Systems." },
      { q: "What is your maximum model resolution?", a: "We can achieve sub-centimeter texture resolution (GSD) for close-range facade scans." }
    ]
  },
  "solar-plant-inspection": {
    title: "Thermal Solar Power Plant Inspection",
    subtitle: "Automated panel-level thermal anomaly mapping to identify diode failures, dirt build-up, and micro-cracks.",
    overview: "To maintain peak efficiency, utility-scale solar installations require frequent panel inspections. Aeronica utilizes radiometric thermal UAV sensors to map hundreds of megawatts of solar PV plants, automatically flagging hotspots and diode failures that degrade system ROI.",
    benefits: [
      "Inspects up to 10MW of solar PV installations per hour — 10x faster than manual string testing",
      "Pinpoints exact coordinates of defective panels using GPS-tagged thermal orthomosaics",
      "Aeroni.AI deep learning automatically classifies anomalies (soiling, bypass diode, cracking)",
      "Improves overall plant performance by 3% to 5% through targeted panel maintenance"
    ],
    faqs: [
      { q: "Under what conditions should the thermal flight be conducted?", a: "Flights are conducted during peak solar irradiance (typically 11:00 AM to 2:00 PM) with clear skies to ensure optimal thermal contrast." },
      { q: "Are your reports compliant with IEC standards?", a: "Yes, our solar inspection reporting formats align with IEC 62446-3 guidelines." }
    ]
  },
  "mining-drone-survey": {
    title: "Mining Drone Survey & Volumetric Audits",
    subtitle: "Open-cast progress mapping, bench safety inspections, and high-accuracy stockpile volume auditing.",
    overview: "Mining operators need accurate, frequent volume measurements for production accounting and regulatory compliance. Aeronica provides monthly, quarterly, and annual volumetric audits for leading mining and metal companies across India using specialized aerial photogrammetry.",
    benefits: [
      "Calculates volume of coal, iron ore, limestone, and aggregates with ±1.5% accuracy",
      "Safer operations by keeping survey crews off unstable stockpile slopes and active pit bottoms",
      "Generates digital terrain models (DTM) and contour lines for bench stability analysis",
      "Saves up to 70% cost compared to traditional ground total station surveying"
    ],
    faqs: [
      { q: "What mining clients have you worked with?", a: "We have delivered survey-grade volumetric mapping to JSW Steel, Indian Oil (IOCL), and major private aggregates quarry operators." },
      { q: "How do you handle dusty or active mining environments?", a: "Our UAVs utilize active radar obstacle avoidance and are IP55-rated to handle heavy dust and wind currents in active pits." }
    ]
  },
  "highway-mapping-services": {
    title: "Highway & Road Corridor Mapping Services",
    subtitle: "Linear topographic surveys, cut-and-fill volume calculations, and road alignment optimization.",
    overview: "As India expands its national highway grid, designers and concessionaires need rapid, precise topographic data for alignment planning, progress verification, and as-built documentation. Aeronica specializes in linear mapping campaigns utilizing long-endurance fixed-wing UAVs.",
    benefits: [
      "Linear mapping coverage of up to 15km of highway corridor in a single flight",
      "Centimeter-accurate topographic models for cut-and-fill earthwork volume verification",
      "High-resolution orthomosaics assist in land acquisition planning and encroachment verification",
      "Safely inspect structures, bridges, flyovers, and drainage without interrupting active traffic"
    ],
    faqs: [
      { q: "How do you maintain constant altitude over hilly road alignments?", a: "Our flight controller integrates real-time digital elevation models (DEM) for active terrain following." },
      { q: "What is your turnaround for road project delivery?", a: "A 50km corridor is typically flown in 2-3 days, with processed CAD-ready files delivered within 5 business days." }
    ]
  }
};

export default function SEOLandingPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = seoPagesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services & Solutions", href: "/solutions" },
          { label: data.title, href: `/seo/${slug}` },
        ]}
      />

      {/* Overview Block */}
      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div className="seo-split-layout">
          <div>
            <span className="section-title">
              <span></span>Geospatial Expertise
            </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", marginBottom: "2rem", lineHeight: 1.2 }}>
              Industry-Leading Accuracy, Proven in the Field
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8 }}>{data.overview}</p>

            <div style={{ marginTop: "4rem" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "2rem" }}>Key Benefits & Advantages</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {data.benefits.map((benefit: string, i: number) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                    <CheckCircle style={{ width: "2rem", height: "2rem", color: "#009BFF", flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.5 }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: "#f5f5f5", border: "1px solid #e5e5e5", padding: "4rem", borderRadius: "0.4rem", position: "sticky", top: "12rem" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Request a Technical Proposal</h3>
            <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6, marginBottom: "2.5rem" }}>
              Need precision data or certified drone hardware for your upcoming campaign? Request a detailed quote or schedule a system walkthrough.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <Link href="/contact/get-quote" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.2rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
                <ClipboardList style={{ width: "1.8rem", height: "1.8rem" }} /> Request a Quote
              </Link>
              <Link href="/contact/request-demo" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.2rem 3rem", background: "#fff", color: "#21389A", border: "1px solid #21389A", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
                <Calendar style={{ width: "1.8rem", height: "1.8rem" }} /> Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "4rem" }}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {data.faqs.map((faq: any, i: number) => (
              <div key={i} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
                <h3 style={{ fontSize: "1.65rem", fontWeight: 600, marginBottom: "1rem", color: "#21389A" }}>{faq.q}</h3>
                <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <CTA />

      <style jsx>{`
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}