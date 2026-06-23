"use client";

import React from "react";
import Link from "next/link";
import { Book, FileText, Newspaper, Scale, HelpCircle, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function ResourcesHub() {
  return (
    <div className="resources-hub-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Insights & Documentation"
        subtitle="Deepen your understanding of drone technology, regulatory landscapes, and industrial applications through our curated resources."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }]}
      />

      {/* Resources Grid */}
      <FadeIn as="section" style={{ padding: "0 var(--section-px)", maxWidth: "1440px", margin: "0 auto", paddingTop: "8rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[
            { title: "Aeronica Blog", desc: "Expert takes on the future of UAVs, AI-driven spatial analytics, and field stories.", href: "/resources/blog", icon: Book },
            { title: "Technical Whitepapers", desc: "In-depth research on composite materials, sensor fusion, and precision mapping.", href: "/resources/whitepapers", icon: FileText },
            { title: "News & Media", desc: "Company announcements, press releases, and Aeronica in the national media.", href: "/resources/news-media", icon: Newspaper },
            { title: "Drone Regulations", desc: "Comprehensive guide to DGCA rules, Digital Sky, and operational compliance in India.", href: "/resources/drone-regulations", icon: Scale },
            { title: "FAQs", desc: "Quick answers to common questions about our platforms, services, and pricing.", href: "/resources/faqs", icon: HelpCircle },
            { title: "Downloads", desc: "Product brochures, technical spec sheets, and user manuals for our UAV fleets.", href: "/resources/downloads", icon: Download },
          ].map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link key={index} href={resource.href} className="card-hover" style={{ 
                textDecoration: "none", 
                color: "inherit", 
                background: "#fbfbfb", 
                border: "1px solid #e5e5e5", 
                padding: "3rem", 
borderRadius: "0.4rem",
                transition: "all 0.3s ease",
                display: "flex", 
                flexDirection: "column", 
                gap: "1.5rem" 
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#111";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e5e5";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: "2rem", height: "2rem" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.8rem" }}>{resource.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: "1.6" }}>{resource.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </FadeIn>
      <CTA />
    </div>
  );
}
