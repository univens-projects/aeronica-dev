"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { 
  Landmark, Building2, Tractor, HardHat, Mountain, Zap, Flame, 
  Radio, Truck, Home, ArrowRight, CheckCircle, Map, Users, Cpu, Award, Globe
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const industries: Record<string, any> = {
  government: {
    title: "Government & Public Sector",
    subtitle: "Policy support, national security, and strategic asset mapping for central and state agencies.",
    icon: Landmark,
    sections: [
      {
        heading: "Strategic Aerial Intelligence for National Priorities",
        text: "Government agencies face unique challenges: securing borders, managing public assets, responding to natural disasters, and planning infrastructure at scale. Aeronica provides secure, DGCA-compliant drone solutions purpose-built for the public sector's stringent data security and operational reliability requirements.",
      },
      {
        heading: "Our Government Solutions",
        list: [
          "Border surveillance and perimeter monitoring with real-time video streaming to command centers",
          "Disaster response aerial surveys — flood mapping, damage assessment, and search-and-rescue thermal imaging",
          "National infrastructure asset mapping — roads, dams, irrigation canals, and public buildings",
          "Urban planning support with high-resolution orthomosaics and 3D city models for smart city initiatives",
          "Forest department wildlife monitoring, fire detection, and encroachment mapping",
        ],
      },
      {
        heading: "Why Government Agencies Trust Aeronica",
        text: "Our Nitya flight controller's 256-bit AES encrypted telemetry ensures sensitive mission data remains secure. All operations are fully DGCA-compliant with type-certified hardware. Our indigenous manufacturing means zero dependency on foreign supply chains — a critical requirement for national security contracts.",
      },
    ],
  },
  "smart-cities": {
    title: "Smart Cities & Urban Development",
    subtitle: "Urban planning, traffic analysis, and digital twin modeling for the cities of tomorrow.",
    icon: Building2,
    sections: [
      {
        heading: "Building Smarter Cities from Above",
        text: "India's urban population is growing at an unprecedented rate. Smart city initiatives require accurate, current geospatial data to make informed decisions about infrastructure, traffic, utilities, and public services. Aeronica's aerial intelligence platform provides the data foundation for digital twins and urban analytics.",
      },
      {
        heading: "Smart City Applications",
        list: [
          "Digital twin creation — high-resolution 3D models of entire city districts for planning and simulation",
          "Traffic flow analysis and congestion mapping using aerial video analytics",
          "Utility corridor mapping — water, sewage, gas, and power line GIS integration",
          "Construction progress monitoring for urban development projects",
          "Green cover assessment and heat island effect analysis using multispectral imagery",
        ],
      },
      {
        heading: "The Digital Twin Advantage",
        text: "Our Aeroni.AI engine processes thousands of overlapping aerial images into centimeter-accurate 3D point clouds and textured mesh models. Urban planners can overlay proposed building designs onto the digital twin, simulate shadow impact, assess traffic flow changes, and make data-driven decisions before breaking ground.",
      },
    ],
  },
  agriculture: {
    title: "Agriculture & Precision Farming",
    subtitle: "Precision spraying, crop health analytics, and yield forecasting for Indian agriculture.",
    icon: Tractor,
    sections: [
      {
        heading: "Revolutionising Indian Agriculture",
        text: "With the Samrudhhi-10L — India's first DGCA type-certified agricultural UAV — Aeronica is bringing precision agriculture to the fingertips of Indian farmers. From small holdings to large corporate farms, our solutions reduce chemical usage, save water, and provide actionable crop intelligence.",
      },
      {
        heading: "What We Deliver to Farmers",
        list: [
          "Precision spraying with centrifugal atomization — uniform droplet size reduces pesticide usage by up to 30%",
          "Multispectral crop health analysis — NDVI and NDRE indices detect pest infestation, nutrient deficiency, and water stress before visible symptoms appear",
          "Variable-rate application maps — prescription files for targeted spraying based on field zone analytics",
          "Stand count analysis and yield prediction using AI models trained on Indian crop varieties",
          "Soil moisture mapping and drainage analysis for irrigation planning",
        ],
      },
      {
        heading: "Backed by Proven Results",
        text: "Across 10,000+ acres sprayed in Maharashtra, Karnataka, and Madhya Pradesh, farmers using Aeronica's precision spraying have reported 18% higher yields and 30% reduction in chemical costs. Our Samrudhhi-10L covers 2 acres per hour with a single battery charge, making it the most efficient agricultural drone in its class certified for Indian conditions.",
      },
    ],
  },
  construction: {
    title: "Construction & Infrastructure",
    subtitle: "Site monitoring, volume audits, and structural inspection for construction projects.",
    icon: HardHat,
    sections: [
      {
        heading: "Real-Time Visibility for Construction Sites",
        text: "Large construction projects generate massive amounts of data — but traditional surveying methods can't keep pace with daily earthmoving and structural progress. Aeronica's drone survey solutions provide project managers with up-to-date topographic maps, volume calculations, and orthomosaic imagery on demand.",
      },
      {
        heading: "Construction Applications",
        list: [
          "Daily/weekly progress monitoring with georeferenced orthomosaics overlaid on design plans",
          "Cut-and-fill volume calculations with ±1.5% accuracy for earthwork billing and verification",
          "Stockpile inventory management — real-time aggregate and material volume tracking",
          "Structural inspection of high-rise facades, bridges, and crane infrastructure",
          "Safety monitoring — hazard detection and site perimeter surveillance from aerial vantage points",
        ],
      },
      {
        heading: "Faster Than Traditional Surveying",
        text: "A 50-acre construction site that takes a ground survey team 3-4 days to cover can be mapped by our Flycra 2.0 in under 2 hours. Data is processed overnight and delivered as CAD-ready topography, contour maps, and 3D models the next morning — keeping projects on schedule and reducing survey costs by up to 60%.",
      },
    ],
  },
  mining: {
    title: "Mining & Volumetric Analysis",
    subtitle: "Open-cast mine surveying and precise stockpile volumetric analysis for the mining industry.",
    icon: Mountain,
    sections: [
      {
        heading: "Precision Volumetrics for Mine Operations",
        text: "Mining operators need accurate, frequent volume measurements for production accounting, regulatory reporting, and operational planning. Traditional ground-based survey methods are slow, dangerous, and often inaccurate over large areas. Aeronica's aerial survey solutions deliver sub-centimeter point clouds and automated volumetric calculations.",
      },
      {
        heading: "Mining-Specific Capabilities",
        list: [
          "Automated stockpile volumetrics — Aeroni.AI calculates coal, iron ore, and mineral pile volumes with ±1.5% accuracy",
          "Open-cast mine progression mapping — weekly/monthly terrain change detection and advance measurement",
          "Slope stability analysis — high-resolution DEMs for geotechnical assessment of bench slopes",
          "Haul road optimisation — topographic data for road grading and drainage planning",
          "Environmental compliance — rehabilitation progress monitoring and vegetation recovery tracking",
        ],
      },
      {
        heading: "Trusted by Industry Leaders",
        text: "Aeronica has delivered volumetric analysis for JSW Steel and Indian Oil Corporation (IOCL) across multiple mining sites. Our clients receive structured reports with volume calculations, change detection maps, and 3D visualisations — replacing weeks of ground survey work with a single flight campaign.",
      },
    ],
  },
  utilities: {
    title: "Utilities & Grid Management",
    subtitle: "Grid monitoring, vegetation management, and outage mapping for power and water utilities.",
    icon: Zap,
    sections: [
      {
        heading: "Protecting Critical Utility Infrastructure",
        text: "Power transmission lines, water pipelines, and gas distribution networks span thousands of kilometers across challenging terrain. Manual inspection is slow, expensive, and exposes workers to safety risks. Aeronica's aerial inspection solutions provide utility operators with rapid, safe, and comprehensive asset condition data.",
      },
      {
        heading: "Utility Inspection Services",
        list: [
          "Power line corridor inspection — conductor sag, vegetation encroachment, and insulator damage detection",
          "Thermal imaging for hot spot detection — loose connections, overloaded transformers, and faulty insulators",
          "Pipeline route surveillance — construction encroachment monitoring and right-of-way verification",
          "Solar farm inspection — panel-level defect detection using thermal and high-resolution RGB imaging",
          "Substation and switchyard mapping — as-built verification and equipment inventory",
        ],
      },
      {
        heading: "Grid-Scale Efficiency",
        text: "A single flight campaign can inspect 50+ kilometers of transmission corridor in one day — a task that would take ground crews weeks to complete. Our AI models automatically detect and flag vegetation encroachment, structural anomalies, and thermal hot spots, prioritising them by severity for targeted maintenance response.",
      },
    ],
  },
  energy: {
    title: "Energy & Renewable Power",
    subtitle: "Solar farm inspections, wind turbine audits, and oil pipeline surveys for the energy sector.",
    icon: Flame,
    sections: [
      {
        heading: "Energising the Renewable Revolution",
        text: "India's energy transition depends on massive solar and wind installations that must operate at peak efficiency. Traditional manual inspection of solar panels and wind turbines is impractical at scale. Aeronica's drone solutions provide rapid, automated asset inspection for the entire energy value chain.",
      },
      {
        heading: "Energy Sector Solutions",
        list: [
          "Solar PV farm inspection — automated panel-level thermal anomaly detection with GIS-tagged defect maps",
          "Wind turbine blade inspection — high-resolution imagery of leading edges, trailing edges, and lightning receptors",
          "Oil and gas pipeline corridor monitoring — leak detection, third-party encroachment, and vegetation management",
          "Thermal power plant stack and cooling tower structural inspection",
          "Hydroelectric reservoir bathymetry and catchment area mapping",
        ],
      },
      {
        heading: "Maximising Renewable Asset ROI",
        text: "Our solar farm inspection service covers 500+ panels per hour with thermal and RGB sensors. Aeroni.AI's deep learning models detect micro-cracks, hot spots, and soiling with 95%+ accuracy. Operators receive a prioritised repair list with exact panel coordinates — reducing diagnostic time from weeks to hours and improving plant uptime by 3-5%.",
      },
    ],
  },
  telecom: {
    title: "Telecommunications Infrastructure",
    subtitle: "Tower structural audits, LOS analysis, and rapid site deployment for telecom networks.",
    icon: Radio,
    sections: [
      {
        heading: "Supporting India's Connectivity Goals",
        text: "As India races to expand 5G and rural broadband coverage, telecom operators face the challenge of deploying and maintaining thousands of tower sites across diverse terrain. Aeronica provides aerial inspection and survey solutions that accelerate site acquisition, installation, and ongoing structural maintenance.",
      },
      {
        heading: "Telecom Solutions",
        list: [
          "Tower structural audit — high-resolution inspection of antenna mounts, guy wires, and corrosion hotspots",
          "Line-of-sight (LOS) analysis — drone-based verification of Fresnel zone clearance for microwave links",
          "Site survey for new tower deployment — topographic mapping, access route planning, and obstruction analysis",
          "Rooftop tower inspection — safe visual assessment without scaffolding or manual climbing",
          "Fiber optic route mapping — corridor survey and as-built documentation for OFC networks",
        ],
      },
      {
        heading: "Safer, Faster Tower Inspections",
        text: "Traditional tower inspection requires trained climbers, safety equipment, and significant downtime. Aeronica's drone-based inspection completes a full tower audit in under 30 minutes with zero risk to personnel. High-resolution imagery captures structural details as small as 1mm, and our AI models automatically flag corrosion, loose hardware, and antenna alignment issues.",
      },
    ],
  },
  transportation: {
    title: "Transportation & Logistics",
    subtitle: "Railway corridor mapping, highway alignment, and logistics optimization for the transport sector.",
    icon: Truck,
    sections: [
      {
        heading: "Moving India Forward",
        text: "India's transportation infrastructure — railways, highways, ports, and logistics corridors — is undergoing the largest expansion in its history. Accurate geospatial data is the foundation of every alignment decision, structural design, and maintenance schedule. Aeronica provides the aerial intelligence that keeps India moving.",
      },
      {
        heading: "Transportation Solutions",
        list: [
          "Railway corridor mapping — high-accuracy alignment surveys, ballast profiling, and drainage assessment",
          "Highway route alignment — topographic surveys for feasibility studies and detailed project reporting",
          "Bridge and flyover inspection — underside access, bearing condition assessment, and crack detection",
          "Port and harbour mapping — berth condition surveys, dredge volume calculations, and container yard planning",
          "Logistics hub site selection — aerial surveys for warehouse layout, access roads, and drainage planning",
        ],
      },
      {
        heading: "Proven on Central Railway Corridors",
        text: "Aeronica has surveyed 450+ kilometers of railway corridor for Central Railway, delivering sub-centimeter alignment data 60% faster than traditional methods. Our Flycra 2.0's 45-minute flight time and 7 km range make it ideal for linear infrastructure surveying, covering up to 15 km of corridor per flight.",
      },
    ],
  },
  "real-estate": {
    title: "Real Estate & Property Development",
    subtitle: "Land surveying, topographic mapping, and architectural visualisation for real estate professionals.",
    icon: Home,
    sections: [
      {
        heading: "See Your Property from Every Angle",
        text: "Real estate developers, architects, and property professionals need accurate site data and compelling visualisations to make informed decisions and market properties effectively. Aeronica provides high-resolution aerial surveys, 3D models, and cinematic property tours that give clients a complete picture of their assets.",
      },
      {
        heading: "Real Estate Services",
        list: [
          "Land surveying and boundary verification — accurate parcel measurements with georeferenced orthomosaics",
          "Topographic mapping for site planning — contour maps, drainage analysis, and buildable area assessment",
          "3D property tours — cinematic aerial footage and 360-degree virtual tours for marketing",
          "Construction progress monitoring — time-series orthomosaics showing development milestones",
          "Property condition assessment — roof, facade, and structural surveys for due diligence",
        ],
      },
      {
        heading: "Data-Driven Property Decisions",
        text: "Whether you're evaluating a 100-acre development site or marketing a premium residential tower, Aeronica's aerial intelligence gives you the competitive edge. Our orthomosaics and 3D models provide measurable accuracy that traditional photography cannot match, while our progress monitoring keeps stakeholders informed without frequent site visits.",
      },
    ],
  },
};

const iconMap: Record<string, any> = {
  government: Landmark,
  "smart-cities": Building2,
  agriculture: Tractor,
  construction: HardHat,
  mining: Mountain,
  utilities: Zap,
  energy: Flame,
  telecom: Radio,
  transportation: Truck,
  "real-estate": Home,
};

export default function IndustryDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = industries[slug];

  if (!data) {
    notFound();
  }

  const Icon = iconMap[slug] || data.icon;

  return (
    <div className="industry-detail-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: data.title, href: `/industries/${slug}` },
        ]}
      />

      <FadeIn as="section" style={{ padding: "8rem var(--section-px)", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {data.sections.map((section: any, idx: number) => (
            <div key={idx} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem" }}>
                {idx === 0 && (
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                )}
                <h2 style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em" }}>{section.heading}</h2>
              </div>
              
              {section.text && (
                <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, marginBottom: section.list ? "2.5rem" : "0" }}>
                  {section.text}
                </p>
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

      </FadeIn>

      <CTA />
    </div>
  );
}
