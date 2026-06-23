"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Users, Target, ShieldCheck, Award, BookOpen, Briefcase, ChevronRight, CheckCircle } from "lucide-react";

const contentMap: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  icon: any;
  sections: Array<{ heading: string; text: string; list?: string[] }>;
}> = {
  "about-aeronica": {
    title: "About Aeronica",
    subtitle: "Indigenous drone hardware and cutting-edge spatial software platforms.",
    category: "Corporate Profile",
    icon: Users,
    sections: [
      {
        heading: "Who We Are",
        text: "Aeronica Advance Technologies Pvt. Ltd. is a DIPP-recognized technology startup founded in 2020. Headquartered in Pune, India, we are dedicated to designing, manufacturing, and operating industrial-grade UAV systems that bring unmatched safety and precision to critical industry sectors."
      },
      {
        heading: "Our Vision",
        text: "To lead India’s aerial intelligence revolution by building robust hardware, indigenous flight controllers, and cloud-native software platforms that allow organizations to confidently operate scalable, compliant, and highly productive drone ecosystems."
      },
      {
        heading: "Key Operational Pillars",
        text: "We build our business on three core operational principles that guide our everyday engineering and service delivery:",
        list: [
          "Indigenous Manufacturing: Reducing dependency on imported tech by building avionics, airframes, and payload systems locally.",
          "Strict Safety Standards: Every component undergoes structural, thermal, and electromagnetic testing.",
          "Customer Uptime: Providing direct on-site support, parts replacement, and operator training programs."
        ]
      }
    ]
  },
  "leadership-team": {
    title: "Our Leadership Team",
    subtitle: "Meet the experts steering our innovations in aerospace engineering and AI software.",
    category: "Management & Team",
    icon: Briefcase,
    sections: [
      {
        heading: "Management Philosophy",
        text: "Aeronica is guided by an experienced team of aerospace engineers, embedded electronics developers, and cloud software architects. We believe that robust hardware is only as good as the software intelligence that drives it, leading us to build end-to-end solutions that merge physical and virtual control."
      },
      {
        heading: "Engineering Excellence",
        text: "Our research lab consists of senior drone pilots, GIS analysts, and structural simulation specialists who work closely with industrial clients to custom-tailor payloads and write custom-tailored flight profiles."
      }
    ]
  },
  "technology-stack": {
    title: "Our Technology Stack",
    subtitle: "A look inside the proprietary systems that power our flight capabilities.",
    category: "Innovation & R&D",
    icon: Target,
    sections: [
      {
        heading: "The Nitya Flight Controller",
        text: "The brain of all Aeronica UAVs. Fully designed and assembled in India, Nitya FC operates on secure, military-grade encrypted communication protocols, isolating our drone telemetry from external vulnerabilities."
      },
      {
        heading: "Aeroni.AI Data Pipelines",
        text: "Our cloud-native processing engine uses advanced neural networks to convert thousands of raw aerial captures into centimeter-accurate 3D point clouds and NDVI index maps in minutes, bypassing legacy desktop bottlenecks."
      },
      {
        heading: "Advanced Composite Structures",
        text: "Every frame we build uses high-modulus carbon fiber composites, optimized using extensive finite element analysis (FEA) to maximize payload-to-weight ratios and survive high-vibration industrial sectors."
      }
    ]
  },
  "certifications": {
    title: "Certifications & Compliance",
    subtitle: "We prioritize safety and legality. Every Aeronica platform is fully compliant.",
    category: "Quality & Standards",
    icon: ShieldCheck,
    sections: [
      {
        heading: "DGCA Type Certification",
        text: "Our Samrudhhi-10L agricultural drone is fully type-certified by the Directorate General of Civil Aviation (DGCA) of India. This compliance guarantees that our platforms meet the stringent airworthiness and safety guidelines required for commercial drone operations."
      },
      {
        heading: "Quality Manufacturing",
        text: "Our manufacturing facility operates under strict ISO 9001 and AS9100-ready production management pipelines, ensuring total repeatability, material traceability, and structural consistency across every frame we roll out."
      }
    ]
  },
  "partners-alliances": {
    title: "Partners & Alliances",
    subtitle: "Collaborating with academic, governmental, and industrial leaders across India.",
    category: "Ecosystem Partnerships",
    icon: Award,
    sections: [
      {
        heading: "Academic Collaborations",
        text: "We partner with top-tier Indian Institutes of Technology (IITs) to drive joint research in drone aerodynamics, carbon fiber composite testing, and advanced spatial deep learning."
      },
      {
        heading: "Industrial & Government Clients",
        text: "Aeronica is a trusted partner for public institutions like Central Railway and major conglomerates such as JSW Steel, BASF, and Indian Oil Corporation (IOCL), delivering secure, high-stakes spatial analytics campaigns daily."
      }
    ]
  },
  "careers": {
    title: "Careers at Aeronica",
    subtitle: "Shape the future of Indian aerospace innovation. Join our growing team.",
    category: "Join Our Team",
    icon: BookOpen,
    sections: [
      {
        heading: "Why Work With Us?",
        text: "We are building an environment where engineers, designers, and thinkers have direct agency over high-stakes UAV projects. From composite curing to real-time WebRTC streaming design, every team member directly contributes to national-level drone infrastructure."
      },
      {
        heading: "Open Positions",
        text: "We are actively recruiting across our Pune R&D and manufacturing facilities. If you excel in any of the following, reach out to careers@aeronica.in:",
        list: [
          "UAV Embedded Firmware Engineer (STM32, PX4/ArduPilot customization)",
          "Lead GIS Analyst (ArcGIS, QGIS, photogrammetry data mapping)",
          "Senior Composites Structural Engineer (FEM simulation, carbon fiber curing)",
          "Certified Commercial UAV Pilots (Multirotor, 100+ logged hours)"
        ]
      }
    ]
  },
  "why-aeronica": {
    title: "Why Choose Aeronica?",
    subtitle: "Fully integrated solutions vs. generic assembled drone configurations.",
    category: "The Aeronica Edge",
    icon: ShieldCheck,
    sections: [
      {
        heading: "Integrated Product Ecosystem",
        text: "Most drone companies operate as assemblers, buying cheap frames, importing flight computers, and using third-party software. At Aeronica, we design the hardware, write the firmware, build the cloud dashboard, and run the aerial service. This total control results in unrivaled safety, deep customization, and rapid troubleshooting."
      },
      {
        heading: "The Aeronica Advantage Matrix",
        text: "When you choose Aeronica, you receive a highly secure, reliable, and optimized system:",
        list: [
          "Proprietary encrypted Nitya FC isolating telemetry and flight logs.",
          "AS9100 quality airframes that survive high electromagnetic interferences.",
          "Direct regional support hubs in Maharashtra and neighboring states.",
          "Full compliance with DGCA Digital Sky requirements."
        ]
      }
    ]
  }
};

export default function AboutDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const data = contentMap[slug];

  if (!data) {
    notFound();
  }

  const IconComponent = data.icon;

  return (
    <div className="about-detail-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "#1a1a1a" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 var(--section-px)" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.2rem", color: "#888", marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          <ChevronRight style={{ width: "1.2rem", height: "1.2rem" }} />
          <Link href="/about" style={{ color: "inherit" }}>About Us</Link>
          <ChevronRight style={{ width: "1.2rem", height: "1.2rem" }} />
          <span style={{ color: "#111" }}>{data.title}</span>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: "5rem" }}>
          <span style={{ fontSize: "1.2rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "#888", letterSpacing: "0.08em", display: "block", marginBottom: "1rem" }}>{data.category}</span>
          <h1 style={{ fontSize: "clamp(3.6rem, 5vw, 5rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "1.5rem", lineHeight: "1.1" }}>{data.title}</h1>
          <p style={{ fontSize: "1.8rem", color: "#555", fontWeight: 300, lineHeight: "1.5", maxWidth: "800px" }}>{data.subtitle}</p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {data.sections.map((section, idx) => (
            <div key={idx} className="card-hover" style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "4rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>{section.heading}</h2>
              <p style={{ fontSize: "1.55rem", color: "#444", lineHeight: "1.7", marginBottom: section.list ? "2rem" : "0" }}>{section.text}</p>
              
              {section.list && (
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} style={{ display: "flex", gap: "1rem", alignItems: "start", fontSize: "1.45rem", color: "#444", lineHeight: "1.6" }}>
                      <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#111", flexShrink: 0, marginTop: "0.2rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
