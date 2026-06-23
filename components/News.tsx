"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    title: "Precision Agriculture: How Drones Are Transforming Indian Farming",
    date: "June 10, 2026",
    href: "/insights/drone-technology-agriculture-2026",
    gradient: "linear-gradient(135deg, #1a4731, #2d7a4b)",
    excerpt: "Discover how DGCA-certified agricultural drones are revolutionizing Indian farming with precision spraying, real-time crop monitoring, and data-driven yield optimization."
  },
  {
    title: "GIS and Drone Mapping: The Future of Infrastructure Development",
    date: "May 28, 2026",
    href: "/insights/gis-drone-mapping-infrastructure",
    gradient: "linear-gradient(135deg, #1a365d, #2d5a87)",
    excerpt: "Sub-centimeter accuracy, LiDAR integration, and AI-powered analytics are setting new standards for infrastructure survey, planning, and project execution across India."
  },
];

export default function News() {
  return (
    <section style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto", color: "#1a1a1a" }} id="news">
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          <span></span>Latest News
        </span>
        <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
          Insights & Updates
        </h2>
        <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "2rem auto 0" }}>
          The latest from Aeronica on drone technology, industry trends, and operational insights.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
        {news.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              background: "#fafafa",
              border: "1px solid #e5e5e5",
              borderRadius: "0.4rem",
              padding: "2rem 2.5rem",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#ccc"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fafafa"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e5e5e5"; }}
          >
            <div style={{
              width: "4rem", height: "4rem", borderRadius: "0.2rem",
              background: `${item.gradient}, url('/assets/images/pexels/${["pexels-drone-agriculture.jpg","pexels-smart-city.jpg"][index]}')`,
              backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay",
              display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0, fontSize: "1.6rem",
              fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-mono)",
              letterSpacing: "-0.03em",
            }}>
              {index + 1}
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.3rem", lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: "1.25rem", color: "#888", lineHeight: 1.5 }}>{item.excerpt}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem", flexShrink: 0 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "1.15rem", color: "#999" }}>
                <Calendar style={{ width: "1.2rem", height: "1.2rem" }} /> {item.date}
              </span>
              <span style={{ fontSize: "1.15rem", color: "#111", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                Read <ArrowRight style={{ width: "1.1rem", height: "1.1rem" }} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <Link href="/insights" style={{
          display: "inline-flex", alignItems: "center", gap: "0.8rem",
          padding: "1.2rem 2.8rem", background: "#111", color: "#fff",
          borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
          textDecoration: "none", transition: "all 0.3s ease",
        }}>
          View All Articles <ArrowRight style={{ width: "1.6rem", height: "1.6rem" }} />
        </Link>
      </div>
    </section>
  );
}
