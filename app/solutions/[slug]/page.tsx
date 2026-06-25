"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  Map, Globe, Eye, Brain, LifeBuoy, ArrowRight,
  Ruler, Cpu, ShieldCheck, Sparkles, Layers, Crosshair, Timer,
  Award, HardHat, Tractor, Building2, Mountain, Zap, Radio, Truck,
  Home, ChevronRight, BarChart3, ScanLine, Box, Cloud, Sun,
  Landmark, Flame,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import MotionParallax from "@/components/MotionParallax";

const solutions: Record<string, any> = {
  "drone-survey-mapping": {
    title: "Drone Survey & Mapping",
    subtitle: "High-accuracy topographic surveys, LiDAR data collection, and 3D mapping for engineering and construction projects across India.",
    icon: Map,
    accent: "linear-gradient(135deg, #009BFF, #21389A)",
    overview: {
      stat: "500+",
      statLabel: "Acres Surveyed per Day",
      text: "Aeronica's drone survey and mapping service delivers sub-centimeter accuracy orthomosaics, digital elevation models, and 3D point clouds for engineering, construction, and environmental projects. Our Flycra 2.0 platform combines 45-minute endurance with RTK GPS precision, enabling a single flight team to survey what would take ground crews days or weeks to complete.",
    },
    capabilities: [
      {
        title: "Topographic Surveying",
        desc: "High-resolution DEM/DSM generation with sub-5cm vertical accuracy. Ideal for road alignment, drainage planning, and construction grade control.",
        icon: Ruler,
      },
      {
        title: "LiDAR Data Collection",
        desc: "Drone-mounted LiDAR for corridor mapping, vegetation penetration, and 3D asset modelling. Perfect for power lines, pipelines, and forest surveys.",
        icon: ScanLine,
      },
      {
        title: "Photogrammetry & 3D Modelling",
        desc: "Structure-from-Motion (SfM) processing of thousands of overlapping images into textured 3D mesh models for digital twins and BIM integration.",
        icon: Box,
      },
      {
        title: "Orthomosaic Generation",
        desc: "Georeferenced high-resolution orthophoto mosaics with cm-level accuracy, ready for CAD overlay, GIS integration, and regulatory submission.",
        icon: Layers,
      },
      {
        title: "Volumetric Analysis",
        desc: "Automated cut-and-fill calculations and stockpile volume measurements with ±1.5% accuracy for mining, construction, and landfill management.",
        icon: BarChart3,
      },
      {
        title: "Corridor Mapping",
        desc: "Linear infrastructure surveys for railways, highways, pipelines, and transmission lines covering 15+ km per flight with consistent accuracy.",
        icon: Crosshair,
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Mission Planning",
        desc: "We analyse site conditions, identify ground control targets, and design optimal flight paths with the right overlap, altitude, and sensor configuration for your accuracy requirements.",
      },
      {
        step: "02",
        title: "Field Deployment",
        desc: "DGCA-certified pilots deploy with Flycra 2.0 or our LiDAR payload. RTK base station ensures centimetre-level georeferencing. Multiple flights cover large areas seamlessly.",
      },
      {
        step: "03",
        title: "Data Processing",
        desc: "Aeroni.AI processes raw imagery through SfM photogrammetry pipelines. Point cloud classification, mesh generation, and orthomosaic stitching run on cloud infrastructure.",
      },
      {
        step: "04",
        title: "Deliverables",
        desc: "You receive georeferenced orthomosaics (GeoTIFF), digital elevation models, 3D point clouds (LAS/LAZ), contour maps (DWG/DXF), and a comprehensive survey report.",
      },
    ],
    industries: [
      { name: "Construction", href: "/industries/construction", icon: HardHat },
      { name: "Mining", href: "/industries/mining", icon: Mountain },
      { name: "Infrastructure", href: "/industries/transportation", icon: Truck },
      { name: "Real Estate", href: "/industries/real-estate", icon: Home },
      { name: "Government", href: "/industries/government", icon: Building2 },
    ],
    impact: [
      { value: "60%", label: "Faster than ground surveys" },
      { value: "450+", label: "Km of corridor surveyed" },
      { value: "Sub-cm", label: "Vertical accuracy achieved" },
      { value: "2M+", label: "Tonnes volume measured" },
    ],
    relatedStudies: "450+ kilometers of railway corridor mapped for Central Railway — sub-centimeter alignment data delivered 60% faster than traditional methods.",
  },
  "gis-geospatial-intelligence": {
    title: "GIS & Geospatial Intelligence",
    subtitle: "Advanced spatial analytics, digital twin creation, and custom GIS development for urban planning, utilities, and natural resource management.",
    icon: Globe,
    accent: "linear-gradient(135deg, #009BFF, #21389A)",
    overview: {
      stat: "15K+",
      statLabel: "Flight Hours Processed",
      text: "Aeronica's GIS and geospatial intelligence service transforms raw aerial data into actionable spatial information. From web-based GIS dashboards to enterprise digital twins, we provide the analytical layer that turns drone-captured data into decisions. Our Aeroni.AI engine integrates with leading GIS platforms and supports custom spatial model development.",
    },
    capabilities: [
      {
        title: "Web GIS Dashboards",
        desc: "Interactive web-based GIS platforms with layer management, measurement tools, time-series comparison, and role-based access for stakeholder coordination.",
        icon: Globe,
      },
      {
        title: "Digital Twin Creation",
        desc: "High-fidelity 3D digital twins of cities, industrial plants, and infrastructure assets. Integrated with IoT data streams for real-time monitoring and simulation.",
        icon: Box,
      },
      {
        title: "Spatial ML & AI Analytics",
        desc: "Custom machine learning models for land-use classification, change detection, object recognition, and feature extraction from multisource geospatial data.",
        icon: Brain,
      },
      {
        title: "GIS Data Integration",
        desc: "Seamless integration with existing enterprise GIS (ESRI, QGIS, AutoDesk). We convert, clean, and schema-map your spatial data into unified geodatabases.",
        icon: Layers,
      },
      {
        title: "Vegetation & Environmental Monitoring",
        desc: "NDVI/NDRE time-series analysis for crop health, forest cover change detection, and environmental impact assessment using multispectral satellite and drone data fusion.",
        icon: Sparkles,
      },
      {
        title: "Urban & Regional Planning",
        desc: "Land-use mapping, zoning analysis, infrastructure density assessment, and population distribution modelling for urban development authorities and smart city missions.",
        icon: Building2,
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Spatial Requirements Analysis",
        desc: "We define your data schema, output formats, accuracy standards, and integration requirements with existing enterprise systems. A spatial data model is designed for your specific use case.",
      },
      {
        step: "02",
        title: "Data Acquisition & Fusion",
        desc: "Drone imagery, satellite data, LiDAR point clouds, and IoT sensor data are fused into a unified spatial data fabric. All sources are georeferenced to a common coordinate system.",
      },
      {
        step: "03",
        title: "Analytics & Modelling",
        desc: "Aeroni.AI runs spatial ML models, change detection algorithms, and statistical analyses. Results are validated against ground truth data and calibrated for accuracy.",
      },
      {
        step: "04",
        title: "Deployment & Handover",
        desc: "Delivered as a web GIS platform, API-integrated digital twin, or standard geospatial file package. Training and documentation included for your team.",
      },
    ],
    industries: [
      { name: "Smart Cities", href: "/industries/smart-cities", icon: Building2 },
      { name: "Government", href: "/industries/government", icon: Landmark },
      { name: "Agriculture", href: "/industries/agriculture", icon: Tractor },
      { name: "Utilities", href: "/industries/utilities", icon: Zap },
      { name: "Energy", href: "/industries/energy", icon: Flame },
      { name: "Telecom", href: "/industries/telecom", icon: Radio },
    ],
    impact: [
      { value: "50+", label: "Enterprise GIS deployments" },
      { value: "12+", label: "Indian states covered" },
      { value: "95%+", label: "ML model accuracy" },
      { value: "24/7", label: "Platform uptime support" },
    ],
    relatedStudies: "Urban digital twin projects for smart city initiatives — integrating drone, satellite, and IoT data into single-pane-of-glass GIS platforms.",
  },
  "infrastructure-inspection": {
    title: "Infrastructure Inspection",
    subtitle: "Automated aerial inspection of roads, bridges, solar plants, power lines, and railway corridors to reduce risk, downtime, and maintenance costs.",
    icon: Eye,
    accent: "linear-gradient(135deg, #009BFF, #21389A)",
    overview: {
      stat: "50+",
      statLabel: "Km Inspected per Day",
      text: "Aeronica's infrastructure inspection service replaces dangerous manual climbs, traffic-disrupting ground surveys, and costly scaffold access with safe, rapid aerial inspections. Our platforms carry high-resolution RGB, thermal, and multispectral sensors, and our AI engine automatically detects, classifies, and reports defects weeks faster than traditional methods.",
    },
    capabilities: [
      {
        title: "Bridge & Flyover Inspection",
        desc: "Under-deck access without traffic disruption. High-resolution imagery captures bearing condition, crack patterns, spalling, and corrosion on all structural elements.",
        icon: ScanLine,
      },
      {
        title: "Power Line & Tower Inspection",
        desc: "Corridor patrol with thermal anomaly detection. Identifies hot spots on conductors, insulators, and transformers. AI flags vegetation encroachment and structural defects.",
        icon: Zap,
      },
      {
        title: "Solar Farm PV Inspection",
        desc: "Automated panel-level thermal inspection at 500+ panels per hour. AI detects micro-cracks, hot spots, soiling, and bypass diode failures with GIS-tagged reporting.",
        icon: Sun,
      },
      {
        title: "Railway Corridor Inspection",
        desc: "Ballast profiling, rail alignment verification, drainage assessment, and encroachment monitoring for 15+ km of track per flight mission.",
        icon: Crosshair,
      },
      {
        title: "Building Facade & Roof Inspection",
        desc: "Safe visual assessment of high-rise facades, roofing systems, and structural elements without scaffolding, cherry pickers, or rope access.",
        icon: Building2,
      },
      {
        title: "Pipeline & Reservoir Inspection",
        desc: "Right-of-way surveillance, leak detection, cathodic protection test point verification, and reservoir structural integrity assessment.",
        icon: Ruler,
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Asset Audit & Route Planning",
        desc: "We catalogue all assets requiring inspection, define defect criteria and severity thresholds, and design flight paths optimised for each asset type's geometry and sensor requirements.",
      },
      {
        step: "02",
        title: "Automated Inspection Flights",
        desc: "Pre-programmed flight missions ensure consistent coverage across every inspection cycle. RTK GPS enables repeatable flight paths for precise time-series comparison.",
      },
      {
        step: "03",
        title: "AI Defect Detection",
        desc: "Aeroni.AI processes inspection imagery through deep learning models trained on 100,000+ labelled defect images. Each defect is classified by type, sized, and assigned a severity score.",
      },
      {
        step: "04",
        title: "Prioritised Repair Reports",
        desc: "You receive a GIS-tagged inspection report with defect locations, severity ratings, comparative analysis with previous cycles, and recommended repair priority ordering.",
      },
    ],
    industries: [
      { name: "Construction", href: "/industries/construction", icon: HardHat },
      { name: "Utilities", href: "/industries/utilities", icon: Zap },
      { name: "Energy", href: "/industries/energy", icon: Flame },
      { name: "Transportation", href: "/industries/transportation", icon: Truck },
      { name: "Telecom", href: "/industries/telecom", icon: Radio },
    ],
    impact: [
      { value: "80%", label: "Faster than manual inspection" },
      { value: "Zero", label: "Climber safety incidents" },
      { value: "95%+", label: "AI defect detection rate" },
      { value: "24-48h", label: "Report turnaround time" },
    ],
    relatedStudies: "Automated solar farm inspection for renewable energy operators — 500+ panels per hour with 95%+ defect detection accuracy and GIS-tagged reporting.",
  },
  "ai-drone-intelligence": {
    title: "AI Drone Intelligence",
    subtitle: "Deep learning pipelines for automated defect detection, change analysis, crop health assessment, and predictive maintenance across industrial assets.",
    icon: Brain,
    accent: "linear-gradient(135deg, #009BFF, #21389A)",
    overview: {
      stat: "100K+",
      statLabel: "AI Model Training Images",
      text: "Aeronica's AI Drone Intelligence service is the analytical engine behind every aerial mission. Our Aeroni.AI platform applies state-of-the-art computer vision and deep learning models to drone-captured imagery — automating the detection of defects, changes, and anomalies that human eyes would miss. Built on a foundation of 100,000+ labelled training images from Indian industrial environments, our models deliver production-ready accuracy from day one.",
    },
    capabilities: [
      {
        title: "Automated Defect Detection",
        desc: "Deep learning models trained on cracks, corrosion, spalling, leaks, and structural anomalies across infrastructure, energy, and industrial assets. 95%+ detection accuracy.",
        icon: ScanLine,
      },
      {
        title: "Crop Health & Vegetation Analytics",
        desc: "Multispectral vegetation indices (NDVI, NDRE, CWSI) combined with AI classification for pest detection, nutrient deficiency mapping, and yield prediction. Trained on Indian crop varieties.",
        icon: Tractor,
      },
      {
        title: "Change Detection & Time-Series Analysis",
        desc: "Pixel-level change detection between survey epochs. Automated alerts for new construction, vegetation encroachment, terrain movement, or asset deterioration.",
        icon: Layers,
      },
      {
        title: "Predictive Maintenance Models",
        desc: "ML models that predict asset failure probability based on visual degradation patterns, vibration data, and historical maintenance records. Schedule repairs before failures occur.",
        icon: Cpu,
      },
      {
        title: "Object Detection & Classification",
        desc: "Real-time and post-process object detection for vehicles, personnel, equipment, and wildlife. Used for safety monitoring, traffic analysis, and security surveillance.",
        icon: Eye,
      },
      {
        title: "Automated Report Generation",
        desc: "AI-powered report builder that structures raw detection results into executive summaries, GIS maps, charts, and prioritised action lists ready for stakeholder distribution.",
        icon: BarChart3,
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Model Selection & Tuning",
        desc: "We select the optimal model architecture (YOLO, Mask R-CNN, U-Net, or custom transformers) based on your detection requirements. Models are fine-tuned on your asset imagery for maximum accuracy.",
      },
      {
        step: "02",
        title: "Data Pipeline Setup",
        desc: "Automated ingestion pipelines connect your drone imagery directly to Aeroni.AI. Images are pre-processed, georeferenced, and tiled for inference at scale.",
      },
      {
        step: "03",
        title: "Inference & Validation",
        desc: "Models run inference across your entire dataset. Results are cross-validated with ground truth data, and confidence thresholds are calibrated to minimise false positives.",
      },
      {
        step: "04",
        title: "Actionable Intelligence",
        desc: "Detection results are delivered through your preferred interface — GIS dashboard, PDF report, API feed, or integration with your CMMS/EAM system for automated work order generation.",
      },
    ],
    industries: [
      { name: "Agriculture", href: "/industries/agriculture", icon: Tractor },
      { name: "Energy", href: "/industries/energy", icon: Flame },
      { name: "Utilities", href: "/industries/utilities", icon: Zap },
      { name: "Infrastructure", href: "/industries/construction", icon: HardHat },
      { name: "Government", href: "/industries/government", icon: Landmark },
      { name: "Mining", href: "/industries/mining", icon: Mountain },
    ],
    impact: [
      { value: "95%+", label: "Detection accuracy" },
      { value: "10x", label: "Faster than manual review" },
      { value: "100K+", label: "Training images processed" },
      { value: "24h", label: "Model fine-tuning turnaround" },
    ],
    relatedStudies: "AI-powered crop health analytics for Kharif season — NDVI/NDRE based pest detection achieved 95% accuracy, enabling targeted intervention 2 weeks before visible symptoms appeared.",
  },
  "disaster-emergency-response": {
    title: "Disaster & Emergency Response",
    subtitle: "Rapid deployment for flood mapping, structural damage assessment, search-and-rescue, and real-time situational intelligence during crises.",
    icon: LifeBuoy,
    accent: "linear-gradient(135deg, #009BFF, #21389A)",
    overview: {
      stat: "< 30",
      statLabel: "Minutes to Deploy",
      text: "When disaster strikes, time is the most critical resource. Aeronica's emergency response service provides authorities and relief organisations with real-time aerial intelligence within minutes of deployment. Our rugged platforms operate in adverse weather, transmit live video to command centres, and deliver damage assessment maps before ground teams can even reach affected areas.",
    },
    capabilities: [
      {
        title: "Flood Mapping & Assessment",
        desc: "Real-time flood extent mapping with georeferenced orthomosaics. Water depth estimation, inundation zone delineation, and evacuation route analysis for relief coordination.",
        icon: Map,
      },
      {
        title: "Structural Damage Assessment",
        desc: "High-resolution aerial surveys of affected buildings, bridges, and infrastructure. AI-assisted damage classification (minor/major/collapsed) for triage and resource allocation.",
        icon: ScanLine,
      },
      {
        title: "Search & Rescue Support",
        desc: "Thermal imaging for human detection in rubble, dense vegetation, or low-visibility conditions. Real-time video stream shared with ground rescue teams for coordinated operations.",
        icon: Eye,
      },
      {
        title: "Wildfire Monitoring",
        desc: "Thermal mapping of fire perimeters, hot spot detection, and spread prediction. Night-capable operations provide continuous monitoring for firefighting command teams.",
        icon: Flame,
      },
      {
        title: "Situational Intelligence Platform",
        desc: "Live dashboard aggregating drone feeds, satellite imagery, weather data, and ground reports. Role-based access for multiple agencies (NDRF, police, local administration).",
        icon: Cloud,
      },
      {
        title: "Post-Disaster Reconstruction Planning",
        desc: "High-resolution surveys for reconstruction planning — elevation data for flood-resilient rebuilding, land-use analysis for relocation decisions, and progress monitoring for recovery projects.",
        icon: Building2,
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Immediate Mobilisation",
        desc: "On activation, our nearest deployment team mobilises with platforms configured for the specific disaster type — thermal for SAR, RGB for damage assessment, LiDAR for flood modelling.",
      },
      {
        step: "02",
        title: "Rapid Reconnaissance",
        desc: "First flight provides wide-area situational overview within 30 minutes. Live video and initial stills are transmitted to incident command in real time for immediate decision support.",
      },
      {
        step: "03",
        title: "Detailed Assessment",
        desc: "Systematic grid surveys cover the affected area. Orthomosaics, thermal maps, and elevation models are processed on edge devices and uploaded to the situational intelligence platform.",
      },
      {
        step: "04",
        title: "Continuous Support",
        desc: "Aeronica remains on-site for the duration of the emergency response, providing daily survey updates, damage progression tracking, and reconstruction planning data.",
      },
    ],
    industries: [
      { name: "Government", href: "/industries/government", icon: Landmark },
      { name: "Insurance", icon: ShieldCheck },
      { name: "Energy", href: "/industries/energy", icon: Flame },
      { name: "Telecom", href: "/industries/telecom", icon: Radio },
      { name: "Transportation", href: "/industries/transportation", icon: Truck },
    ],
    impact: [
      { value: "< 30 min", label: "Deployment time" },
      { value: "24/7", label: "On-call availability" },
      { value: "Multi-sensor", label: "RGB, thermal, LiDAR" },
      { value: "Multi-agency", label: "Data sharing platform" },
    ],
    relatedStudies: "Rapid flood mapping deployment during monsoon season — delivered inundation maps to district administration within 4 hours of activation, supporting evacuation of 2,000+ residents.",
  },
};

export default function SolutionDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = solutions[slug];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div className="solution-detail-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: data.title, href: `/solutions/${slug}` },
        ]}
      />

      {/* Section 1 — Overview */}
      <FadeIn as="section" style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{
              position: "relative",
              border: "1px solid #e5e5e5",
              borderRadius: "0.4rem",
              overflow: "hidden",
            }}>
              <MotionParallax speed={0.25} style={{ position: "absolute", inset: "-25% 0" }}>
                <div style={{
                  width: "100%", height: "100%",
                  background: `url('/assets/images/pexels/pexels-drone-tech.jpg')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                }} />
              </MotionParallax>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(33,56,154,0.85), rgba(33,56,154,0.65))",
              }} />
              <div style={{
                position: "relative", zIndex: 1,
                padding: "4rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
                color: "#fff",
              }}>
            <div>
              <div style={{ width: "4.8rem", height: "4.8rem", borderRadius: "0.2rem", background: data.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "2rem" }}>
                <Icon style={{ width: "2.4rem", height: "2.4rem" }} />
              </div>
              <span className="section-title" style={{ marginBottom: "1rem" }}>
                <span></span>Overview
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                {data.title}
              </h2>
              <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                {data.overview.text}
              </p>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "0.4rem",
              padding: "4rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "24rem",
            }}>
              <div style={{ fontSize: "clamp(5rem, 6vw, 7rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                {data.overview.stat}
              </div>
              <div style={{ fontSize: "1.8rem", marginTop: "1rem", opacity: 0.8 }}>{data.overview.statLabel}</div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 2 — Core Capabilities */}
      <FadeIn as="section" style={{ background: "#f3f0ec", padding: "8rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Capabilities
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              What We Deliver
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
              A comprehensive set of capabilities powered by indigenous hardware and AI-driven analytics.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {data.capabilities.map((cap: any, i: number) => {
              const CapIcon = cap.icon;
              return (
                <div key={i} className="card-hover" style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "0.4rem",
                  padding: "3rem",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: data.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "1.5rem" }}>
                    <CapIcon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{cap.title}</h3>
                  <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 3 — How We Deliver / Methodology */}
      <FadeIn as="section" style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Methodology
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            How We Deliver Results
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            A structured, repeatable process refined across hundreds of missions.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {data.methodology.map((phase: any, i: number) => (
            <div key={i} style={{ borderTop: "3px solid #111", paddingTop: "2.5rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "3.2rem", fontWeight: 700, color: "#e5e5e5", lineHeight: 1, display: "block", marginBottom: "1.5rem" }}>
                {phase.step}
              </span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{phase.title}</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{phase.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Section 4 — Industries Served */}
      <FadeIn as="section" style={{ background: "#21389A", color: "#fff", padding: "8rem var(--section-px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Industries
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Who We Serve
            </h2>
            <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
              Our {data.title.toLowerCase()} solutions deliver value across multiple industry verticals.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {data.industries.map((ind: any, i: number) => {
              const IndIcon = ind.icon;
              const content = (
                <div style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.4rem", padding: "1.2rem 2rem",
                  transition: "all 0.3s ease", cursor: ind.href ? "pointer" : "default",
                }}>
                  {IndIcon && <div style={{ width: "3.2rem", height: "3.2rem", borderRadius: "0.2rem", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <IndIcon style={{ width: "1.6rem", height: "1.6rem", color: "rgba(255,255,255,0.8)" }} />
                  </div>}
                  <span style={{ fontSize: "1.5rem", fontWeight: 500 }}>{ind.name}</span>
                  {ind.href && <ChevronRight style={{ width: "1.6rem", height: "1.6rem", color: "rgba(255,255,255,0.4)", flexShrink: 0 }} />}
                </div>
              );
              return ind.href ? (
                <Link key={i} href={ind.href} style={{ textDecoration: "none", color: "inherit" }}>
                  {content}
                </Link>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 5 — Impact */}
      <FadeIn as="section" style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Impact
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Measurable Results
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
            Quantifiable outcomes from real-world deployments across India.
          </p>
        </div>
        <div style={{
          background: data.accent,
          borderRadius: "0.4rem",
          padding: "5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "3rem",
          textAlign: "center",
          color: "#fff",
        }}>
          {data.impact.map((stat: any, i: number) => (
            <div key={i}>
              <div style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>{stat.value}</div>
              <div style={{ fontSize: "1.3rem", opacity: 0.7, marginTop: "0.5rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        {data.relatedStudies && (
          <div className="card-hover" style={{
            marginTop: "3rem",
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: "0.4rem",
            padding: "2.5rem 3rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}>
            <Award style={{ width: "2.4rem", height: "2.4rem", color: "#888", flexShrink: 0 }} />
            <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, flexGrow: 1 }}>
              <strong style={{ color: "#111" }}>Related Case Study:</strong> {data.relatedStudies}
            </p>
            <Link href="/case-studies" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.8rem 1.8rem", background: "#21389A", color: "#fff",
              borderRadius: "0.2rem", fontWeight: 600, fontSize: "1.3rem",
              textDecoration: "none", whiteSpace: "nowrap",
            }}>
              View Study <ArrowRight style={{ width: "1.4rem", height: "1.4rem" }} />
            </Link>
          </div>
        )}
      </FadeIn>

      {/* Back to Solutions + CTA */}
      <FadeIn as="section" style={{ padding: "0 var(--section-px) 8rem", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <Link href="/solutions" style={{
            display: "inline-flex", alignItems: "center", gap: "0.8rem",
            padding: "1.2rem 2.8rem", border: "1px solid #e5e5e5",
            borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
            color: "#555", textDecoration: "none", transition: "all 0.3s ease",
          }}>
            <ChevronRight style={{ width: "1.6rem", height: "1.6rem", transform: "rotate(180deg)" }} />
            Back to All Solutions
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
