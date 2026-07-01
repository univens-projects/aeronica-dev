"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  Users, Cpu, ShieldCheck, Award, Briefcase, Star, Rocket,
  CheckCircle, ArrowRight, MapPin, GraduationCap, Mail,
  Globe, Microscope, Layers, Zap, Radio, Target, Eye
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowRight } from "@/components/DotIcons";

const aboutPages: Record<string, any> = {
  "leadership-team": {
    title: "Leadership Team",
    subtitle: "The engineers, visionaries, and domain experts driving India's indigenous UAV revolution from Pune, Maharashtra.",
    heroIcon: Users,
    sections: [
      {
        type: "intro",
        heading: "Built by Experts, Led by Purpose",
        text: "Our leadership team brings together decades of combined experience across aerospace engineering, embedded electronics, GIS analytics, defence systems, and enterprise technology. Each leader has committed to one goal: making Aeronica the most trusted name in Indian drone technology.",
      },
      {
        type: "team",
        heading: "Core Leadership",
        members: [
          {
            name: "Founder & CEO",
            title: "Chief Executive Officer",
            background: "Aeronautical Engineering, IIT Bombay | 12+ years UAV development",
            expertise: ["UAV System Architecture", "DGCA Regulatory Strategy", "Business Development"],
            quote: "We didn't want to assemble drones. We wanted to invent the Indian way of building them.",
          },
          {
            name: "CTO",
            title: "Chief Technology Officer",
            background: "Embedded Systems Engineer | Ex-DRDO | 15+ years avionics",
            expertise: ["Flight Controller Design", "Sensor Fusion", "Firmware Development"],
            quote: "Every line of firmware in the Nitya FC was written by an Indian engineer, for Indian conditions.",
          },
          {
            name: "Head of GIS & Analytics",
            title: "VP — Geospatial Intelligence",
            background: "GIS & Remote Sensing, IIRS Dehradun | 10+ years spatial analytics",
            expertise: ["Photogrammetry", "LiDAR Processing", "AI/ML for Aerial Data"],
            quote: "The real value isn't in the flight — it's in the data that comes after.",
          },
          {
            name: "Head of Operations",
            title: "Director — Field Operations",
            background: "DGCA-certified pilot | 8+ years multi-rotor operations | 15,000+ flight hours",
            expertise: ["Mission Planning", "BVLOS Operations", "Safety Management Systems"],
            quote: "Safety and precision are not trade-offs. We deliver both, every flight.",
          },
          {
            name: "Head of Manufacturing",
            title: "VP — Engineering & Manufacturing",
            background: "Composite Structures, Aerospace | Ex-HAL | 18+ years manufacturing",
            expertise: ["Carbon Fibre Composites", "FEA Simulation", "Quality Control"],
            quote: "Our airframes are built to survive Indian conditions — heat, dust, humidity, and hard landings.",
          },
          {
            name: "Head of Business",
            title: "VP — Sales & Partnerships",
            background: "MBA, IIM Ahmedabad | 10+ years B2B enterprise technology",
            expertise: ["Government Relations", "Enterprise Sales", "Strategic Alliances"],
            quote: "Our clients don't just buy drones — they gain a long-term operational partner.",
          },
        ],
      },
      {
        type: "stats",
        heading: "The Team in Numbers",
        stats: [
          { value: "50+", label: "Team Members" },
          { value: "200+", label: "Combined Years Experience" },
          { value: "12+", label: "Engineering Domains" },
          { value: "100%", label: "India-Based Team" },
        ],
      },
    ],
  },
  "technology-stack": {
    title: "Technology Stack",
    subtitle: "End-to-end indigenous technology — from carbon fibre airframes to cloud AI pipelines. Every layer built in-house.",
    heroIcon: Cpu,
    sections: [
      {
        type: "intro",
        heading: "Full-Stack Mastery, Ground Up",
        text: "Unlike most drone companies that assemble off-the-shelf components, Aeronica owns the entire technology chain. From the carbon fiber airframe to the cloud analytics dashboard, every layer is designed, built, and optimized by our in-house team. This vertical integration is the foundation of our reliability, security, and performance.",
      },
      {
        type: "stack",
        heading: "The Technology Layers",
        layers: [
          {
            layer: "Hardware Layer",
            icon: Layers,
            color: "#21389A",
            items: [
              { title: "Carbon Fibre Airframes", desc: "High-modulus carbon fibre structures designed using FEA simulation for maximum strength-to-weight ratio. All composite work done in our Khed Shivapur facility." },
              { title: "Propulsion Systems", desc: "Custom motor-ESC combinations tuned for Indian altitude, humidity, and temperature ranges. Hybrid propulsion on the Samrudhhi-10LH for extended endurance." },
              { title: "Payload Systems", desc: "Centrifugal atomization for precision spraying. Multi-sensor payload bays for RGB, multispectral, thermal, and LiDAR sensors." },
            ],
          },
          {
            layer: "Avionics Layer",
            icon: Cpu,
            color: "#009BFF",
            items: [
              { title: "Nitya Flight Controller", desc: "STM32MP1-based indigenous flight controller with triple-redundant IMU, barometer, GPS, and magnetometer. Military-grade 256-bit AES encrypted telemetry." },
              { title: "Custom PX4 Firmware", desc: "Modified PX4 autopilot stack with Aeronica-specific flight modes for agricultural precision spraying, LiDAR-assisted terrain following, and BVLOS waypoint missions." },
              { title: "Sensor Fusion Engine", desc: "Real-time Kalman filter-based sensor fusion combining IMU, GPS, barometer, and optical flow for centimeter-level state estimation in GPS-denied environments." },
            ],
          },
          {
            layer: "Ground Control Layer",
            icon: Radio,
            color: "#21389A",
            items: [
              { title: "Mission Planning Suite", desc: "Custom GCS application for autonomous waypoint mission planning, terrain-following altitude adjustment, and real-time telemetry monitoring." },
              { title: "Secure Data Link", desc: "900MHz + 2.4GHz dual-band encrypted control link with 15km range. Redundant communication ensures mission continuity in high-RF-interference environments." },
              { title: "Live Video Feed", desc: "H.264 compressed HD video downlink with sub-300ms latency for real-time situational awareness during inspection and surveillance missions." },
            ],
          },
          {
            layer: "Data Processing Layer",
            icon: Zap,
            color: "#21389A",
            items: [
              { title: "Aeroni.AI Engine", desc: "Cloud-native photogrammetry and AI processing pipeline. Converts raw aerial imagery into 3D point clouds, orthomosaics, DEMs, and NDVI maps in under 2 hours." },
              { title: "Volumetric Analysis", desc: "Automated stockpile and earthwork volume calculations with ±1.5% accuracy using advanced surface reconstruction algorithms." },
              { title: "AI Defect Detection", desc: "Deep learning models trained on Indian infrastructure datasets for automated detection of cracks, corrosion, vegetation encroachment, and thermal anomalies." },
            ],
          },
        ],
      },
      {
        type: "certifications-preview",
        heading: "Tested. Certified. Trusted.",
        items: [
          "DGCA Type Certificate — Samrudhhi-10L (India's first agricultural UAV type-certification)",
          "AS9100-ready production pipeline with full material traceability",
          "256-bit AES encrypted telemetry meeting MIL-STD-1553 equivalent standards",
          "ISO 27001-aligned data processing infrastructure for sensitive client data",
          "DIPP-recognized startup with all R&D conducted under Indian IP protection",
        ],
      },
    ],
  },
  "certifications": {
    title: "Certifications & Compliance",
    subtitle: "Full regulatory compliance, military-grade security standards, and independently verified quality processes — because trust is earned, not claimed.",
    heroIcon: ShieldCheck,
    sections: [
      {
        type: "intro",
        heading: "Compliance is Our Competitive Advantage",
        text: "In a market where compliance is often treated as a checkbox, Aeronica has made it a core engineering principle. Every product, every operation, and every data process is designed from the ground up to meet and exceed regulatory requirements — giving our clients certainty in every engagement.",
      },
      {
        type: "certs",
        heading: "Our Certifications",
        certs: [
          {
            name: "DGCA Type Certificate",
            icon: ShieldCheck,
            body: "Directorate General of Civil Aviation, India",
            product: "Samrudhhi-10L Agricultural UAV",
            detail: "India's first and only DGCA type-certified agricultural drone, meeting all airworthiness, performance, and safety standards for commercial agricultural operations under BVLOS conditions.",
            status: "Active",
          },
          {
            name: "DIPP Startup Recognition",
            icon: Award,
            body: "Department for Promotion of Industry & Internal Trade",
            product: "Aeronica Advance Technologies Pvt. Ltd.",
            detail: "Recognized technology startup with full IP protection for all proprietary hardware designs, firmware, and AI models developed in India.",
            status: "Active",
          },
          {
            name: "AS9100-Ready Production",
            icon: Star,
            body: "Aerospace Quality Management",
            product: "All Aeronica Platforms",
            detail: "Our Khed Shivapur manufacturing facility follows AS9100-compatible quality management processes including full material traceability, incoming inspection, in-process verification, and final acceptance testing.",
            status: "In Progress — Certification 2025",
          },
          {
            name: "ISO 27001 Data Security",
            icon: ShieldCheck,
            body: "Information Security Management",
            product: "Aeroni.AI Cloud Platform",
            detail: "All client aerial data is processed, stored, and transmitted under ISO 27001-aligned security protocols. Sensitive government and defence client data is processed on isolated, air-gapped infrastructure.",
            status: "Aligned — Formal Certification 2025",
          },
          {
            name: "DGCA UAS Operator Certificate",
            icon: Globe,
            body: "DGCA Remote Pilot Organisation",
            product: "Field Operations Division",
            detail: "All Aeronica pilots hold valid DGCA Remote Pilot Licences (RPL). Operations conducted under fully documented Standard Operating Procedures (SOPs) for each mission category.",
            status: "Active",
          },
        ],
      },
      {
        type: "compliance",
        heading: "Operational Compliance",
        items: [
          "All UAV operations conducted under DGCA UAS Rules 2021 — Categories Open, Specific, and Certified",
          "Pre-flight airspace clearances via Digital Sky Platform for every commercial mission",
          "Third-party liability insurance coverage for all field operations",
          "Emergency response protocols compliant with ICAO Annex 13 for incident reporting",
          "Annual audit-ready documentation maintained for all drone platforms and operations",
        ],
      },
    ],
  },
  "partners-alliances": {
    title: "Partners & Alliances",
    subtitle: "Strategic technology partnerships, academic collaborations, and trusted client relationships that validate Aeronica's position as India's leading indigenous UAV company.",
    heroIcon: Award,
    sections: [
      {
        type: "intro",
        heading: "Partnerships Built on Proof",
        text: "Our partnerships are not marketing relationships — they are earned through delivered results. From R&D collaboration with India's leading engineering institutes to operational trust from Fortune 500 companies and government agencies, every alliance is a testament to Aeronica's technical credibility.",
      },
      {
        type: "partners",
        heading: "Technology & Research Partners",
        categories: [
          {
            category: "Academic & Research",
            icon: GraduationCap,
            color: "#21389A",
            partners: [
              {
                name: "IIT Bombay",
                type: "Research Partnership",
                focus: "Advanced composite materials for UAV airframes — high-modulus carbon fibre layup design and testing",
              },
              {
                name: "IIT Pune (CoEP Technological University)",
                type: "R&D Collaboration",
                focus: "Embedded systems development and sensor fusion algorithm research for the Nitya flight controller",
              },
              {
                name: "IIRS Dehradun (ISRO)",
                type: "Geospatial Partnership",
                focus: "LiDAR data processing methodology and remote sensing application development",
              },
            ],
          },
          {
            category: "Industrial Clients & Alliances",
            icon: Briefcase,
            color: "#009BFF",
            partners: [
              {
                name: "Central Railway (Indian Railways)",
                type: "Long-Term Service Contract",
                focus: "450+ km of railway corridor surveyed for alignment, drainage, and bridge inspection",
              },
              {
                name: "JSW Steel",
                type: "Volumetric Analytics Partner",
                focus: "Open-cast mine volumetric analysis and stockpile management across multiple mining sites",
              },
              {
                name: "Indian Oil Corporation Ltd. (IOCL)",
                type: "Infrastructure Inspection",
                focus: "Pipeline corridor surveillance and solar farm thermal inspection",
              },
              {
                name: "BASF India",
                type: "Agricultural Solutions Partner",
                focus: "Precision drone-applied crop protection on large-scale commercial farms in Maharashtra",
              },
              {
                name: "Maharashtra State Government",
                type: "Government Partner",
                focus: "Agricultural mapping and crop health monitoring programs across 10 districts",
              },
            ],
          },
          {
            category: "Technology Ecosystem",
            icon: Globe,
            color: "#21389A",
            partners: [
              {
                name: "Microsoft Azure",
                type: "Cloud Infrastructure",
                focus: "Scalable cloud infrastructure for Aeroni.AI photogrammetry processing pipeline",
              },
              {
                name: "NVIDIA",
                type: "AI Computing Partner",
                focus: "Edge AI inference hardware for real-time aerial object detection and defect identification",
              },
              {
                name: "Trimble Geospatial",
                type: "Sensor Partnership",
                focus: "Integration of Trimble survey-grade GNSS receivers with Aeronica platforms",
              },
            ],
          },
        ],
      },
      {
        type: "partner-cta",
        heading: "Become a Partner",
        text: "We actively seek technology, channel, and research partnerships that advance the state of Indian UAV capability. If your organisation is working on aerospace, geospatial, AI, or drone-adjacent technology, let's explore how we can build something together.",
      },
    ],
  },
  "careers": {
    title: "Careers at Aeronica",
    subtitle: "Join India's most ambitious indigenous drone company. We're looking for engineers, pilots, and innovators who want to build technology that actually flies.",
    heroIcon: Briefcase,
    sections: [
      {
        type: "intro",
        heading: "Work That Matters",
        text: "At Aeronica, you're not building software for someone else's hardware — you own the entire stack. Our engineers design airframes, write flight firmware, build AI models, and process field data from real missions. If you want to work on technology that has a measurable impact on Indian agriculture, infrastructure, and national security, this is where you belong.",
      },
      {
        type: "culture",
        heading: "Our Culture",
        values: [
          { icon: Rocket, title: "Build from First Principles", desc: "We design everything in-house. If it doesn't exist, we build it. Our team has the freedom and responsibility to engineer solutions from scratch." },
          { icon: Target, title: "Outcome Oriented", desc: "Every project has a real-world mission — a farmer's crop, a railway corridor, a mining site. We measure success by client outcomes, not internal metrics." },
          { icon: Users, title: "Small Team, Big Impact", desc: "50+ people. 12 Indian states covered. We operate like a startup but with the credibility of a DGCA-certified product company." },
          { icon: GraduationCap, title: "Continuous Learning", desc: "We sponsor external training, conference attendance, and academic collaboration. Your growth is our growth." },
        ],
      },
      {
        type: "openings",
        heading: "Current Openings",
        roles: [
          { department: "Engineering", title: "Senior Firmware Engineer", location: "Pune, Maharashtra", type: "Full-Time", skills: ["C/C++", "STM32", "RTOS", "PX4"] },
          { department: "Engineering", title: "GIS & Photogrammetry Analyst", location: "Pune, Maharashtra", type: "Full-Time", skills: ["Pix4D", "QGIS", "Python", "Point Cloud Processing"] },
          { department: "Engineering", title: "Composite Structures Engineer", location: "Khed Shivapur, Pune", type: "Full-Time", skills: ["Carbon Fibre Layup", "FEA", "AutoCAD", "CATIA"] },
          { department: "AI & Data", title: "ML Engineer — Computer Vision", location: "Pune / Remote", type: "Full-Time", skills: ["PyTorch", "OpenCV", "YOLO", "Edge AI"] },
          { department: "Operations", title: "DGCA Certified Remote Pilot", location: "Pan-India (Field)", type: "Full-Time", skills: ["RPL Certificate", "Mission Planning", "Multi-Rotor", "Fixed Wing"] },
          { department: "Business", title: "Enterprise Sales Manager", location: "Mumbai / Delhi", type: "Full-Time", skills: ["B2B Sales", "Government Sector", "Technical Pre-Sales", "CRM"] },
        ],
      },
      {
        type: "benefits",
        heading: "Why Aeronica",
        items: [
          "Competitive compensation with ESOP participation for senior roles",
          "Health insurance for you and your immediate family",
          "Annual training budget for courses, conferences, and certifications",
          "Access to cutting-edge UAV hardware and flight testing facilities",
          "Flexible working arrangements for non-field roles",
          "Fast-track growth in a rapidly scaling organisation",
        ],
      },
    ],
  },
  "why-aeronica": {
    title: "Why Aeronica",
    subtitle: "Six reasons why India's most demanding clients — from Central Railway to JSW Steel — choose Aeronica over every alternative.",
    heroIcon: Star,
    sections: [
      {
        type: "intro",
        heading: "Not Just Another Drone Company",
        text: "India's drone market is flooded with assembled products from imported components, rebranded Chinese hardware, and generic solutions with no after-sales support. Aeronica was founded to be different — and after 5 years, our client results speak for themselves.",
      },
      {
        type: "differentiators",
        heading: "What Sets Us Apart",
        items: [
          {
            icon: ShieldCheck,
            title: "100% Indigenous. Zero Import Dependency.",
            desc: "From the carbon fibre airframe to the flight controller firmware, every component is designed and built in India. This means no export control restrictions, no supply chain vulnerabilities, and full IP ownership. Critical for government and defence clients.",
            proof: "DIPP Recognized | All IP India-Owned | Manufactured in Pune",
          },
          {
            icon: Award,
            title: "The Only DGCA Type-Certified Agricultural UAV",
            desc: "The Samrudhhi-10L is India's first and only agricultural drone to receive DGCA Type Certification. This is not a self-declaration — it's independently verified airworthiness that enables commercial operations any client can rely on.",
            proof: "DGCA Type Certificate Holder | First in Category",
          },
          {
            icon: Cpu,
            title: "Full-Stack Technology Ownership",
            desc: "We own and maintain the entire technology stack — hardware, firmware, GCS software, and data processing AI. This means faster customisation, faster bug fixes, and zero dependency on third-party vendors for critical system components.",
            proof: "Nitya FC | Aeroni.AI | Custom GCS | Composite Airframes",
          },
          {
            icon: Target,
            title: "Proven at India's Largest Scale",
            desc: "450+ km of railway corridor surveyed for Central Railway. 15,000+ flight hours logged. 50+ enterprise projects across 12 Indian states. Our solutions are proven at the scale India's infrastructure demands — not lab-tested prototypes.",
            proof: "Central Railway | JSW Steel | IOCL | BASF | Govt of Maharashtra",
          },
          {
            icon: Rocket,
            title: "Purpose-Built for Indian Conditions",
            desc: "Indian summers, monsoon humidity, high-altitude Himalayan terrain, and dense urban interference are not afterthoughts in our design process — they're the design parameters. Our platforms are field-tested in the conditions your operations actually face.",
            proof: "Field-Tested: 45°C+ Heat | Monsoon Humidity | High-Altitude",
          },
          {
            icon: Users,
            title: "End-to-End Partner, Not Just a Vendor",
            desc: "We don't sell and walk away. Every client engagement includes mission planning support, crew training, data processing services, and ongoing technical support. Our field operations team has the domain knowledge to ensure mission success, not just equipment delivery.",
            proof: "In-House Pilots | Training Programs | Dedicated Technical Support",
          },
        ],
      },
      {
        type: "comparison",
        heading: "The Aeronica Difference",
        comparison: [
          { aspect: "Hardware Origin", aeronica: "100% India-Designed & Built", others: "Imported / Assembled" },
          { aspect: "DGCA Certification", aeronica: "Type Certificate (Agriculture)", others: "Self-Declaration / None" },
          { aspect: "Flight Controller", aeronica: "Indigenous Nitya FC", others: "Off-the-shelf Pixhawk/DJI" },
          { aspect: "Data Processing", aeronica: "Proprietary Aeroni.AI", others: "Third-party software" },
          { aspect: "After-Sales Support", aeronica: "Dedicated in-house team", others: "Limited / Outsourced" },
          { aspect: "Customisation", aeronica: "Full hardware & software", others: "None / Limited" },
        ],
      },
    ],
  },
  "about-aeronica": {
    title: "About Aeronica",
    subtitle: "Founded in 2020 in Pune, Aeronica Advance Technologies Pvt. Ltd. is India's most innovative indigenous UAV company, building the future of aerial intelligence from the ground up.",
    heroIcon: Rocket,
    sections: [
      {
        type: "intro",
        heading: "Born from a Belief",
        text: "Aeronica was founded at a time when India's drone industry was dominated by imported, generic hardware with zero after-sales support. Critical sectors — agriculture, railways, mining — were forced to adapt foreign solutions to Indian conditions. We set out to change that. Our founding team of aeronautical engineers and embedded systems designers committed to one principle: build everything in-house, for Indian conditions, with Indian talent.",
      },
      {
        type: "milestones",
        heading: "Our Journey",
        milestones: [
          { year: "2020", event: "Aeronica founded in Pune by a team of aerospace engineers and embedded systems specialists" },
          { year: "2021", event: "First prototype of the Samrudhhi-10L completed and test-flown at Khed Shivapur facility" },
          { year: "2022", event: "First commercial agricultural spraying contract — 500 acres in Nashik, Maharashtra" },
          { year: "2022", event: "Central Railway engagement begins — aerial survey of Mumbai Division railway corridor" },
          { year: "2023", event: "Nitya FC v2.0 released — first Indian flight controller with 256-bit AES encrypted telemetry" },
          { year: "2023", event: "DGCA Type Certificate received for Samrudhhi-10L — India's first for an agricultural UAV" },
          { year: "2024", event: "Aeroni.AI platform launched — cloud-native photogrammetry and AI data processing" },
          { year: "2024", event: "50+ enterprise projects completed across 12 Indian states" },
          { year: "2025", event: "Flycra 2.0 survey drone and Samrudhhi-10LH hybrid platform launched" },
        ],
      },
      {
        type: "stats",
        heading: "By the Numbers",
        stats: [
          { value: "5+", label: "Years of R&D" },
          { value: "50+", label: "Team Members" },
          { value: "12", label: "States Covered" },
          { value: "15K+", label: "Flight Hours" },
        ],
      },
    ],
  },
};

const renderSection = (section: any, idx: number) => {
  switch (section.type) {
    case "intro":
      return (
        <div key={idx} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>{section.heading}</h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7 }}>{section.text}</p>
        </div>
      );
    case "team":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {section.members.map((m: any, i: number) => (
              <div key={i} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
                <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Users style={{ width: "2.2rem", height: "2.2rem" }} />
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 600 }}>{m.name}</h3>
                <p style={{ fontSize: "1.2rem", color: "#009BFF", fontWeight: 500, marginTop: "0.3rem", marginBottom: "1rem" }}>{m.title}</p>
                <p style={{ fontSize: "1.25rem", color: "#888", lineHeight: 1.5, marginBottom: "1rem" }}>{m.background}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {m.expertise.map((e: string, j: number) => (
                    <span key={j} style={{ fontSize: "1.1rem", padding: "0.3rem 0.8rem", background: "#f5f5f5", borderRadius: "0.2rem", color: "#555" }}>{e}</span>
                  ))}
                </div>
                <p style={{ fontSize: "1.3rem", color: "#333", fontStyle: "italic", borderLeft: "3px solid #21389A", paddingLeft: "1rem", lineHeight: 1.6 }}>&ldquo;{m.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "stats":
      return (
        <div key={idx} style={{ background: "#21389A", borderRadius: "0.4rem", padding: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
          <div style={{ gridColumn: "1 / -1", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 600, color: "#fff" }}>{section.heading}</h2>
          </div>
          {section.stats.map((s: any, i: number) => (
            <div key={i}>
              <div style={{ fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "stack":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {section.layers.map((layer: any, i: number) => {
              const LayerIcon = layer.icon;
              return (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
                  <div style={{ background: layer.color, padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <LayerIcon style={{ width: "2rem", height: "2rem", color: "#fff" }} />
                    <h3 style={{ fontSize: "1.6rem", fontWeight: 600, color: "#fff" }}>{layer.layer}</h3>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0", padding: "0" }}>
                    {layer.items.map((item: any, j: number) => (
                      <div key={j} style={{ padding: "2.5rem", borderRight: j < layer.items.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                        <h4 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.8rem" }}>{item.title}</h4>
                        <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "certifications-preview":
      return (
        <div key={idx} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "2rem" }}>{section.heading}</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {section.items.map((item: string, i: number) => (
              <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#009BFF", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/about/certifications" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", marginTop: "2rem", fontSize: "1.4rem", fontWeight: 600, color: "#009BFF" }}>
            View Full Certifications <DotArrowRight size={12} />
          </Link>
        </div>
      );
    case "certs":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {section.certs.map((cert: any, i: number) => {
              const CertIcon = cert.icon;
              return (
                <div key={i} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "2rem", alignItems: "start" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CertIcon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>{cert.name}</h3>
                    <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "0.5rem" }}>{cert.body} — <em>{cert.product}</em></p>
                    <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>{cert.detail}</p>
                  </div>
                  <span style={{ fontSize: "1.1rem", padding: "0.4rem 1rem", background: cert.status.startsWith("Active") ? "rgba(12,200,32,0.1)" : "rgba(0,155,255,0.1)", color: cert.status.startsWith("Active") ? "#32620E" : "#21389A", borderRadius: "2rem", whiteSpace: "nowrap", flexShrink: 0 }}>{cert.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "compliance":
      return (
        <div key={idx} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "2rem" }}>{section.heading}</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {section.items.map((item: string, i: number) => (
              <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "partners":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {section.categories.map((cat: any, i: number) => {
              const CatIcon = cat.icon;
              return (
                <div key={i} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
                  <div style={{ background: cat.color, padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <CatIcon style={{ width: "2rem", height: "2rem", color: "#fff" }} />
                    <h3 style={{ fontSize: "1.6rem", fontWeight: 600, color: "#fff" }}>{cat.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {cat.partners.map((p: any, j: number) => (
                      <div key={j} style={{ padding: "2rem 2.5rem", borderBottom: j < cat.partners.length - 1 ? "1px solid #e5e5e5" : "none", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
                        <div>
                          <h4 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.3rem" }}>{p.name}</h4>
                          <p style={{ fontSize: "1.25rem", color: "#555", lineHeight: 1.5 }}>{p.focus}</p>
                        </div>
                        <span style={{ fontSize: "1.1rem", padding: "0.4rem 1rem", background: "#f5f5f5", borderRadius: "0.2rem", color: "#333", whiteSpace: "nowrap", flexShrink: 0 }}>{p.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "partner-cta":
      return (
        <div key={idx} style={{ background: "#21389A", borderRadius: "0.4rem", padding: "4rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>{section.heading}</h2>
          <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "60rem", margin: "0 auto 3rem" }}>{section.text}</p>
          <a href="https://partners.aeronica.in" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.4rem 3rem", background: "#fff", color: "#21389A", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
            Apply for Partnership <DotArrowRight size={12} />
          </a>
        </div>
      );
    case "culture":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {section.values.map((v: any, i: number) => {
              const ValIcon = v.icon;
              return (
                <div key={i} className="card-hover p-35" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <ValIcon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 600, marginBottom: "0.8rem" }}>{v.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "openings":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {section.roles.map((role: any, i: number) => (
              <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "1.1rem", padding: "0.3rem 0.8rem", background: "rgba(0,155,255,0.1)", color: "#21389A", borderRadius: "0.2rem", fontWeight: 500 }}>{role.department}</span>
                    <span style={{ fontSize: "1.1rem", color: "#888" }}>{role.type}</span>
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 600, marginBottom: "0.5rem" }}>{role.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <MapPin style={{ width: "1.3rem", height: "1.3rem", color: "#888" }} />
                    <span style={{ fontSize: "1.3rem", color: "#888" }}>{role.location}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {role.skills.map((s: string, j: number) => (
                      <span key={j} style={{ fontSize: "1.1rem", padding: "0.3rem 0.7rem", background: "#f5f5f5", borderRadius: "0.2rem", color: "#555" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <a href={`mailto:careers@aeronica.in?subject=Application: ${role.title}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "1rem 2rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.3rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                  Apply <ArrowRight style={{ width: "1.4rem", height: "1.4rem" }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    case "benefits":
      return (
        <div key={idx} className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "2rem" }}>{section.heading}</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem" }}>
            {section.items.map((item: string, i: number) => (
              <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#0CC820", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid #e5e5e5" }}>
            <a href="mailto:careers@aeronica.in" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", fontSize: "1.4rem", fontWeight: 600, color: "#009BFF" }}>
              <Mail style={{ width: "1.6rem", height: "1.6rem" }} /> careers@aeronica.in
            </a>
          </div>
        </div>
      );
    case "differentiators":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {section.items.map((item: any, i: number) => {
              const DIcon = item.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "start" }}>
                  <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <DIcon style={{ width: "2.2rem", height: "2.2rem" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.9rem", fontWeight: 600, marginBottom: "0.8rem", letterSpacing: "-0.01em" }}>{item.title}</h3>
                    <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: "1rem" }}>{item.desc}</p>
                    <span style={{ fontSize: "1.15rem", color: "#888", fontFamily: "var(--font-mono)", letterSpacing: "0.03em" }}>{item.proof}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "comparison":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "2rem" }}>{section.heading}</h2>
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#21389A" }}>
              <div style={{ padding: "1.2rem 2rem", fontSize: "1.2rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Aspect</div>
              <div style={{ padding: "1.2rem 2rem", fontSize: "1.2rem", fontWeight: 600, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>Aeronica</div>
              <div style={{ padding: "1.2rem 2rem", fontSize: "1.2rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Typical Competitors</div>
            </div>
            {section.comparison.map((row: any, i: number) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < section.comparison.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                <div style={{ padding: "1.5rem 2rem", fontSize: "1.3rem", fontWeight: 500, color: "#888" }}>{row.aspect}</div>
                <div style={{ padding: "1.5rem 2rem", fontSize: "1.35rem", fontWeight: 600, color: "#21389A" }}>{row.aeronica}</div>
                <div style={{ padding: "1.5rem 2rem", fontSize: "1.35rem", color: "#888" }}>{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case "milestones":
      return (
        <div key={idx}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>{section.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            <div style={{ position: "absolute", left: "6rem", top: "2rem", bottom: "2rem", width: "1px", background: "#e5e5e5" }} />
            {section.milestones.map((m: any, i: number) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "10rem 1fr", gap: "3rem", alignItems: "start", padding: "1.5rem 0" }}>
                <div style={{ textAlign: "right", paddingRight: "2.5rem", position: "relative" }}>
                  <span style={{ fontSize: "1.6rem", fontWeight: 700, color: "#21389A", fontFamily: "var(--font-mono)" }}>{m.year}</span>
                  <div style={{ position: "absolute", right: "-5px", top: "50%", transform: "translateY(-50%)", width: "9px", height: "9px", borderRadius: "50%", background: "#21389A", border: "2px solid #fff", boxShadow: "0 0 0 2px #21389A" }} />
                </div>
                <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6, paddingTop: "0.2rem" }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function AboutChildPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = aboutPages[slug];

  if (!data) {
    notFound();
  }

  const HeroIcon = data.heroIcon;

  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: data.title, href: `/about/${slug}` },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {data.sections.map((section: any, idx: number) => renderSection(section, idx))}
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
