"use client";

import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { DotArrowRight } from "@/components/DotIcons";
import MotionReveal from "@/components/MotionReveal";
import MotionParallax from "@/components/MotionParallax";
import SectionHeader from "@/components/SectionHeader";

const newsGradient = "linear-gradient(135deg, #21389a, #009bff)";

const news = [
  {
    title: "Precision Agriculture: How Drones Are Transforming Indian Farming",
    date: "June 10, 2026",
    href: "/insights/drone-technology-agriculture-2026",
    excerpt: "Discover how DGCA-certified agricultural drones are revolutionizing Indian farming with precision spraying, real-time crop monitoring, and data-driven yield optimization."
  },
  {
    title: "GIS and Drone Mapping: The Future of Infrastructure Development",
    date: "May 28, 2026",
    href: "/insights/gis-drone-mapping-infrastructure",
    excerpt: "Sub-centimeter accuracy, LiDAR integration, and AI-powered analytics are setting new standards for infrastructure survey, planning, and project execution across India."
  },
];

export default function News() {
  return (
    <section className="section-py" style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", color: "#1a1a1a" }} id="news">
      <SectionHeader
        eyebrow="Latest News"
        title="Insights & Updates"
        description="The latest from Aeronica on drone technology, industry trends, and operational insights."
        action={
          <Link href="/insights" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            fontSize: "1.4rem", fontWeight: 600, color: "#21389A",
            textDecoration: "none", borderBottom: "1px solid #21389A", paddingBottom: "0.2rem",
            transition: "opacity 0.2s ease",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            View All Articles <DotArrowRight size={12} />
          </Link>
        }
      />

      <MotionReveal as="div" stagger={0.15} y={30} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {news.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="news-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "0.4rem",
            }}
          >
            <div style={{
              width: "6rem", height: "6rem", borderRadius: "0.2rem",
              position: "relative",
              overflow: "hidden", display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0, fontSize: "2rem",
              fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-mono)",
              letterSpacing: "-0.03em",
            }}>
              <MotionParallax speed={0.15} style={{ position: "absolute", inset: "-30% 0" }}>
                <div style={{
                  width: "100%", height: "100%",
                  background: `${newsGradient}, url('/assets/images/pexels/${["pexels-drone-agriculture.jpg", "pexels-smart-city.jpg"][index]}')`,
                  backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay",
                }} />
              </MotionParallax>
              <span style={{ position: "relative", zIndex: 1 }}>{index + 1}</span>
            </div>
            <div className="news-card-content" style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.4rem", lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: "1.4rem", color: "#888", lineHeight: 1.6 }}>{item.excerpt}</p>
            </div>
            <div className="news-card-meta" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.6rem", flexShrink: 0 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "1.3rem", color: "#888" }}>
                <Calendar style={{ width: "1.4rem", height: "1.4rem" }} /> {item.date}
              </span>
              <span style={{ fontSize: "1.3rem", color: "#111", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                Read <DotArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </MotionReveal>
    </section>
  );
}
