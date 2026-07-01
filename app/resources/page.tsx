"use client";

import React from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";
import {
  Book, FileText, Newspaper, Scale, HelpCircle, Download,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

const stats = [
  { value: "25+", label: "Articles" },
  { value: "7", label: "Whitepapers" },
  { value: "20+", label: "FAQs" },
  { value: "10+", label: "Downloads" },
];

const featured = {
  title: "Drone Regulations in India — 2025 Guide",
  desc: "Everything you need to know about DGCA compliance, Digital Sky registration, and operating legally under the latest framework.",
  href: "/resources/drone-regulations",
  icon: Scale,
  color: "#009bff",
};

const sections = [
  {
    title: "Content",
    subtitle: "Thought leadership, technical research, and company updates.",
    color: "#21389a",
    items: [
      { title: "Aeronica Blog", desc: "Expert takes on UAVs, AI-driven analytics, and field stories from across India.", href: "/resources/blog", icon: Book, count: "25+ articles" },
      { title: "Technical Whitepapers", desc: "In-depth research on composite materials, sensor fusion, and precision mapping.", href: "/resources/whitepapers", icon: FileText, count: "7 papers" },
      { title: "News & Media", desc: "Company announcements, press releases, and Aeronica in the national media.", href: "/resources/news-media", icon: Newspaper, count: "12 updates" },
    ],
  },
  {
    title: "Support & Compliance",
    subtitle: "Guides, FAQs, and documentation to help you operate with confidence.",
    color: "#009bff",
    items: [
      { title: "Drone Regulations", desc: "Comprehensive guide to DGCA rules, Digital Sky, and operational compliance.", href: "/resources/drone-regulations", icon: Scale, count: "Regulatory hub" },
      { title: "FAQs", desc: "Quick answers to common questions about our platforms, services, and pricing.", href: "/resources/faqs", icon: HelpCircle, count: "20+ questions" },
      { title: "Downloads", desc: "Product brochures, technical spec sheets, and user manuals for our UAV fleets.", href: "/resources/downloads", icon: Download, count: "10+ files" },
    ],
  },
];

export default function ResourcesHub() {
  const FeaturedIcon = featured.icon;

  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Insights & Documentation"
        subtitle="Deepen your understanding of drone technology, regulatory landscapes, and industrial applications through our curated resources."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }]}
      />

      {/* Stats Bar */}
      <FadeIn>
        <div style={{ padding: "0 var(--section-px)", maxWidth: "160rem", margin: "0 auto" }}>
          <div className="resources-stats" style={{
            marginTop: "-3rem", position: "relative", zIndex: 3,
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ background: "#fff", padding: "2.4rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#21389a", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginTop: "0.4rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Featured Resource */}
      <FadeIn>
        <div style={{ padding: "0 var(--section-px)", maxWidth: "160rem", margin: "6rem auto 0" }}>
          <div className="p-35" style={{
            background: "#21389A", borderRadius: "0.4rem",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "3rem", flexWrap: "wrap", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "-40%", right: "-10%", width: "40%", height: "100%",
              background: "radial-gradient(circle, rgba(0,155,255,0.06) 0%, transparent 70%)", borderRadius: "50%",
            }} />
            <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
              <div style={{ width: "5rem", height: "5rem", borderRadius: "0.4rem", background: featured.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FeaturedIcon style={{ width: "2.4rem", height: "2.4rem", color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", marginBottom: "0.4rem" }}>Featured Resource</div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: "0.4rem" }}>{featured.title}</h3>
                <p style={{ fontSize: "1.35rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: "48rem" }}>{featured.desc}</p>
              </div>
            </div>
            <Link href={featured.href} style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem", flexShrink: 0, position: "relative", zIndex: 1,
              padding: "1rem 2rem", background: "#fff", color: "#21389A", borderRadius: "0.4rem",
              fontWeight: 600, fontSize: "1.3rem", textDecoration: "none",
            }}>
              Read Guide <DotArrowRight size={12} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Resource Sections */}
      {sections.map((section, si) => (
        <FadeIn key={si} as="section" style={{ padding: "0 var(--section-px)", maxWidth: "160rem", margin: "0 auto" }}>
          <div style={{ padding: si === 0 ? "6rem 0 0" : "5rem 0 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
              <span style={{ width: "0.3rem", height: "1.6rem", background: section.color, borderRadius: "2px" }} />
              <span className="section-title" style={{ justifyContent: "flex-start" }}>
                {section.title}
              </span>
            </div>
            <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.6, maxWidth: "56rem" }}>{section.subtitle}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.6rem", marginTop: "2.4rem" }}>
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link key={idx} href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{
                      background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                      padding: "2.4rem", display: "flex", flexDirection: "column", height: "100%",
                      position: "relative", overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute", top: 0, left: 0, width: "0.3rem", height: "100%",
                        background: section.color, opacity: 0.3,
                      }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3.6rem", height: "3.6rem", borderRadius: "0.4rem", background: `${section.color}15`, color: section.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon style={{ width: "1.8rem", height: "1.8rem" }} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: "1.8rem", fontWeight: 600, lineHeight: 1.2 }}>{item.title}</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: "1.3rem", color: "#555", lineHeight: 1.6, flexGrow: 1 }}>{item.desc}</p>
                      <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>{item.count}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "1.15rem", fontWeight: 600, color: section.color }}>
                          Explore <DotArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeIn>
      ))}

      {/* CTA Banner */}
      <FadeIn as="section" style={{ padding: "0 var(--section-px)", maxWidth: "160rem", margin: "0 auto" }}>
        <div className="p-4" style={{
          marginTop: "6rem", background: "#ffffff", borderRadius: "0.4rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "3rem", flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "30%", height: "200%", background: "radial-gradient(circle, rgba(33,56,154,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Can't find what you're looking for?</h3>
            <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, maxWidth: "40rem" }}>
              Our support team is ready to help with technical questions, custom documentation, or pricing inquiries.
            </p>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem", position: "relative", zIndex: 1,
            padding: "1.2rem 2.4rem", background: "#21389A", color: "#fff",
            borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none", flexShrink: 0,
          }}>
            Contact Support <DotArrowRight size={12} />
          </Link>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
