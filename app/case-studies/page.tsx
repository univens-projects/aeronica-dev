"use client";

import React from "react";
import Link from "next/link";
import { FileText, Image as ImageIcon, PlayCircle, CheckCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function CaseStudiesHub() {
  return (
    <div className="case-studies-hub-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Case Studies & Project Gallery"
        subtitle="See how Aeronica's precision aerial intelligence has solved complex operational challenges for government and private sectors across India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]}
      />

      {/* Case Study Categories Grid */}
      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginBottom: "10rem" }}>
          {[
            { title: "Government Projects", desc: "National security and strategic asset mapping for central and state agencies.", href: "/case-studies/government-projects", icon: FileText },
            { title: "Infrastructure Projects", desc: "Corridor surveys and structural audits for highways, bridges, and railways.", href: "/case-studies/infrastructure-projects", icon: FileText },
            { title: "Agriculture Projects", desc: "Precision spraying campaigns and crop health monitoring at scale.", href: "/case-studies/agriculture-projects", icon: FileText },
            { title: "Locust Control — Maharashtra", desc: "Drone-based pesticide spraying to counter the 2020 locust attack in Vidarbha region.", href: "/case-studies/locust-control-maharashtra", icon: FileText },
            { title: "Mining Projects", desc: "Volumetric analysis and terrain mapping for open-cast mining operations.", href: "/case-studies/mining-projects", icon: FileText },
            { title: "Smart City Projects", desc: "Urban planning, digital twin creation, and city-wide infrastructure audits.", href: "/case-studies/smart-city-projects", icon: FileText },
            { title: "Utility Projects", desc: "Power line inspections and grid monitoring for seamless energy distribution.", href: "/case-studies/utility-projects", icon: FileText },
          ].map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <Link key={index} href={caseStudy.href} className="card-hover" style={{ 
                textDecoration: "none", 
                color: "inherit", 
                background: "#fff", 
                border: "1px solid #e5e5e5", 
                padding: "3.5rem", 
borderRadius: "0.4rem",
                display: "flex", 
                flexDirection: "column", 
                gap: "1.5rem" 
              }} 
              >
                <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: "2rem", height: "2rem" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.8rem" }}>{caseStudy.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: "1.6" }}>{caseStudy.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* PROJECT GALLERY SECTION */}
        <div className="card-padding-xl" style={{ background: "#21389A", color: "#fff", borderRadius: "0.4rem", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
            <ImageIcon style={{ width: "2.4rem", height: "2.4rem" }} />
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em" }}>Project Gallery</h2>
          </div>
          <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.7)", maxWidth: "60rem", margin: "0 auto 4rem", lineHeight: "1.6" }}>
            Explore our visual portfolio of high-resolution orthomosaics, 3D point clouds, and cinematic flight footage from across our project sites.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <Link href="/case-studies/project-gallery" style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1rem", 
              padding: "1.2rem 2.4rem", 
              background: "#fff", 
              color: "#111", 
              borderRadius: "0.4rem", 
              fontWeight: "600", 
              fontSize: "1.4rem", 
              textDecoration: "none"
            }} 
            >
              View All Gallery <ImageIcon style={{ width: "1.6rem", height: "1.6rem" }} />
            </Link>
            <Link href="/case-studies/project-gallery" style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1rem", 
              padding: "1.2rem 2.4rem", 
              background: "rgba(255,255,255,0.1)", 
              color: "#fff", 
              border: "1px solid rgba(255,255,255,0.2)", 
              borderRadius: "0.4rem", 
              fontWeight: "600", 
              fontSize: "1.4rem", 
              textDecoration: "none"
            }} 
            >
              Watch Videos <PlayCircle style={{ width: "1.6rem", height: "1.6rem" }} />
            </Link>
          </div>
        </div>
      </FadeIn>
      <CTA />
    </div>
  );
}
