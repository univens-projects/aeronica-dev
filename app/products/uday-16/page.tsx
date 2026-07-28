"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DotArrowRight } from "@/components/DotIcons";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Shield, Eye, Zap, Target, Radar } from "lucide-react";

export default function Uday16Page() {
  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title="Uday 1.6"
        subtitle="Tactical Surveillance. Ready in Minutes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Uday 1.6", href: "/products/uday-16" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div className="product-overview-grid">
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>Tactical Surveillance </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1rem", marginBottom: "2rem", lineHeight: 1.15 }}>
           Tactical Surveillance. Ready in Minutes.
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginBottom: "3rem" }}>
              Compact, lightweight, and mission-ready, UDAY 1.6 is a tactical quadcopter built for rapid deployment, real-time reconnaissance, and reliable aerial surveillance. Designed for defence and security teams, it delivers live situational awareness exactly where it&apos;s needed.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              {[
                { label: "Flight Time", value: "Up to 30 Minutes" },
                { label: "Maximum Take-Off Weight", value: "1.6 kg" },
                { label: "Payload Capacity", value: "150 g" },
                { label: "Camera", value: "4K / 6× Zoom" },
              ].map((spec, i) => (
                <div key={i} style={{ background: "#f5f5f5", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "0.8rem 1.5rem" }}>
                  <div style={{ fontSize: "1rem", color: "#888", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{spec.label}</div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111", marginTop: "0.2rem" }}>{spec.value}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.2rem 2.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
              Request a Demo <DotArrowRight size={12} />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "1.2rem", overflow: "hidden", minHeight: "38rem" }}>
              <Image src="/assets/images/products/Uday 1.6/P3 uday.png" alt="Uday 1.6 Tactical Drone" width={700} height={450} style={{ width: "100%", height: "100%", objectFit: "contain" }} priority />
            </div>
            <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", padding: "0.6rem 1.2rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Rapid Deploy
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
            Built for Fast-Paced Operations
          </h2>
          <p style={{ fontSize: "1.8rem", color: "#555", lineHeight: 1.8, maxWidth: "90rem", margin: "0 auto" }}>
            In critical time, UDAY 1.6 helps teams deploy quickly, capture real-time intelligence, and maintain operational awareness. Its compact design, secure communication, and quick-swap batteries make it an ideal solution for tactical surveillance and rapid-response missions.
          </p>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          <div style={{ borderRadius: "0.8rem", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="/assets/images/products/Uday 1.6/P1, Uday.png" alt="Uday 1.6 View 1" width={500} height={375} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: "0.8rem", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="/assets/images/products/Uday 1.6/P2, uday.png" alt="Uday 1.6 View 2" width={500} height={375} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: "0.8rem", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="/assets/images/products/Uday 1.6/P3 uday.png" alt="Uday 1.6 View 3" width={500} height={375} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#f8f9fa", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Mission Capabilities
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { icon: Zap, title: "Rapid Deployment", desc: "Ready to launch within minutes for time-critical surveillance and emergency operations." },
              { icon: Eye, title: "Real-Time Intelligence", desc: "Capture live aerial video and imagery to support faster, more informed decisions." },
              { icon: Target, title: "Tactical Mobility", desc: "Compact and lightweight for easy transport and deployment across diverse operational environments." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3rem" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                    <Icon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "3rem" }}>Full Technical Specifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden" }}>
              <div style={{ background: "#21389A", padding: "1.2rem 2.5rem" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em" }}>General</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                {[
                  { label: "Flight Time", value: "Up to 30 Minutes" },
                  { label: "Maximum Take-Off Weight", value: "1.6 kg" },
                  { label: "Payload Capacity", value: "150 g" },
                  { label: "Camera", value: "4K / 6× Zoom" },
                ].map((spec, i) => (
                  <div key={i} style={{ padding: "1.5rem 2.5rem", borderRight: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}>
                    <div style={{ fontSize: "1.15rem", color: "#888", marginBottom: "0.4rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{spec.label}</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#111" }}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#f8f9fa", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Applications
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { icon: Radar, title: "Border Surveillance", desc: "Monitor border regions and support patrol teams with real-time aerial intelligence." },
              { icon: Eye, title: "Tactical Reconnaissance", desc: "Provide immediate aerial visibility before and during field operations." },
              { icon: Shield, title: "Emergency Response", desc: "Support disaster assessment, search operations, and incident response with rapid aerial deployment." },
              { icon: Target, title: "Infrastructure monitor", desc: "Monitor critical infrastructure with real-time aerial visibility." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3rem" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                    <Icon style={{ width: "2rem", height: "2rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
