"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DotArrowRight } from "@/components/DotIcons";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Shield, Eye, Zap, Target, Radar, AlertTriangle, Building2 } from "lucide-react";

export default function FlyuraPage() {
  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title="Flyura"
        subtitle="Advanced Surveillance UAV for Critical Operations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Flyura", href: "/products/flyura" },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div className="product-overview-grid">
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>Surveillance UAV</span>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1rem", marginBottom: "2rem", lineHeight: 1.15 }}>
              FLYURA OVERVIEW
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginBottom: "3rem" }}>
              When every second matters, having the right information at the right time can make all the difference. Flyura is Aeronica&apos;s advanced surveillance UAV, designed to deliver real-time aerial intelligence for defense, surveillance, and critical infrastructure monitoring. industrial operations.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              {[
                { label: "Operational range", value: "25 km" },
                { label: "Max Take-Off Weight", value: "15 Kg" },
                { label: "Flight Time", value: "120 min" },
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
              <Image src="/assets/images/Website Hero Images/Flyura drone.png" alt="Flyura" width={700} height={450} style={{ width: "100%", height: "100%", objectFit: "contain" }} priority />
            </div>
            <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", padding: "0.6rem 1.2rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Defence Grade
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#f8f9fa", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {[
              { src: "/assets/images/products/Flyura images/border security.png", title: "Border Security & Surveillance" },
              { src: "/assets/images/products/Flyura images/city infrastructure.png", title: "Infrastructure Surveillance" },
              { src: "/assets/images/products/Flyura images/Disaster.png", title: "Emergency Response" },
            ].map((img, i) => (
              <div key={i} className="card-hover" style={{ position: "relative", borderRadius: "0.8rem", overflow: "hidden", aspectRatio: "16/10" }}>
                <Image src={img.src} alt={img.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.8))", padding: "3rem 2.5rem 2rem" }}>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, color: "#fff" }}>{img.title}</h3>
                </div>
              </div>
            ))}
            <div className="card-hover" style={{ position: "relative", borderRadius: "0.8rem", overflow: "hidden", aspectRatio: "16/10", background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
              <div style={{ textAlign: "center", color: "#fff" }}>
                <Radar style={{ width: "5rem", height: "5rem", marginBottom: "1.5rem", opacity: 0.8 }} />
                <h3 style={{ fontSize: "2rem", fontWeight: 600 }}>Urban Law Enforcement</h3>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Designed for Critical Operations
          </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, width: "100%", margin: "1.5rem 0 0" }}>
            From border security to disaster response, our drone solutions deliver the aerial intelligence that keeps critical operations ahead.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {[
            { icon: Eye, title: "Border Security & Surveillance" },
            { icon: Building2, title: "Infrastructure Surveillance" },
            { icon: AlertTriangle, title: "Emergency Response" },
            { icon: Radar, title: "Urban Law Enforcement" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", padding: "3rem", textAlign: "center" }}>
                <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "50%", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
                  <Icon style={{ width: "2.2rem", height: "2.2rem" }} />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 600 }}>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#f8f9fa", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Flyura- The Choice for Critical Operations
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Delivers the confidence to see, detect, and respond.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { icon: Eye, title: "Real-Time Intelligence", desc: "See live aerial footage and make faster, more informed decisions." },
              { icon: Target, title: "Extended Operational Reach", desc: "Cover more ground with long-range performance and reliable endurance." },
              { icon: Zap, title: "Rapid Response", desc: "Deploy quickly and reach critical locations without delay." },
              { icon: Shield, title: "Reliable Mission Performance", desc: "Dependable performance, even in demanding operational conditions." },
              { icon: Radar, title: "Clear Situational Awareness", desc: "Get a complete aerial view for better awareness and faster decisions." },
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
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.4rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
              Discover What Flyura Can Do for Your Mission <DotArrowRight size={12} />
            </Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ background: "#21389A", color: "#fff", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div className="ab-split" style={{ alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Smart Integration
              </span>
              <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, marginBottom: "2rem" }}>
                A Complete Surveillance Platform
              </h2>
              <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Flyura integrates seamlessly with Aeronica&apos;s Unified Surveillance System (USS), bringing live AI video, intelligent dashboards, alerts, reports, and cloud storage into one platform. Everything you need to monitor, analyze, and respond—faster.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "0.4rem", padding: "3rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Explore USS Features</h3>
                <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  Unified Surveillance System (USS)
                </p>
                <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: "1rem" }}>
                  From Live Feed to Actionable Intelligence. Monitor every mission through a centralized dashboard with real-time insights, live status, and operational visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
          Built in India. Engineered for Critical Missions.
        </h2>
        <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, maxWidth: "70rem", margin: "0 auto 3rem" }}>
          Designed and developed by Aeronica, Flyura reflects our commitment to indigenous innovation, operational reliability, and secure aerial intelligence.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", padding: "1.4rem 3rem", background: "#21389A", color: "#fff", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none" }}>
          Lets Discuss your mission <DotArrowRight size={12} />
        </Link>
      </FadeIn>

      <CTA />
    </div>
  );
}
