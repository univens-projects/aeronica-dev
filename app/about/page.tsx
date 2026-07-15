"use client";

import React from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";
import {
  Rocket, Target, Eye, Users, Cpu, ShieldCheck, Award,
  BookOpen, Quote, MapPin, CheckCircle,
  Building2, Sparkles, Briefcase
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import MotionParallax from "@/components/MotionParallax";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export default function AboutHub() {
  return (
    <div className="about-hub-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Pioneering Indian UAV Innovation"
        subtitle="Founded in 2020, Aeronica Advance Technologies Pvt. Ltd. is a technology startup specializing in indigenous Hardware-Software-IoT based aerial solutions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
      />

      {/* Section 1 — About Us */}
      <FadeIn as="section" className="section-py-lg" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>About Us
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Pioneering Indian UAV Innovation Since 2020
          </h2>
        </div>

        <div className="ab-split" style={{ alignItems: "start" }}>
          <div style={{ flex: 1.2 }}>
            <p style={{ fontSize: "1.7rem", color: "#444", lineHeight: 1.9, marginBottom: "2rem", borderLeft: "4px solid #21389A", paddingLeft: "2rem" }}>
              <strong>Aeronica Advance Technologies Pvt Ltd</strong>, Pune is one of the MSME, Start-up [DIPP55381] UAV/Drone manufacturing company in India (Authorized by DGCA), incorporated in 2020.
            </p>

            <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "#111", marginBottom: "1.5rem", marginTop: "3rem" }}>Our Products &amp; Solutions</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.2rem", marginBottom: "2.5rem" }}>
              {[
                "Agriculture Spraying Drones",
                "Mapping &amp; Surveillance Drones",
                "Defence Application Drones",
                "Commercial Industrial Drones",
                "Cloud AI/ML Data Processing",
                "UAV Ground Control Station",
                "Firmware &amp; Flight Controllers",
                "IoT Devices for Drones",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.4rem", color: "#555" }}>
                  <CheckCircle style={{ width: "1.6rem", height: "1.6rem", color: "#21389A", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "#111", marginBottom: "1.5rem" }}>R&amp;D &amp; Academic Partnerships</h3>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              We have our own Research &amp; Development center at Pune (Khed Shivapur) with highly skilled manpower, State-of-the-art Manufacturing and GIS Data Processing facilities to cater the needs of the Drone eco-system.
            </p>
            <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.8, marginBottom: "2rem" }}>
              Partnering with <strong>MIT-ADT University</strong> and <strong>PICT Engineering College</strong> for Sponsored Research and Development projects in Aeronautical, Defence and Electronic Devices areas.
            </p>

            <div className="gap-4" style={{ display: "flex", paddingTop: "2rem", borderTop: "1px solid #e5e5e5", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "3.2rem", fontWeight: 700, letterSpacing: "-0.03em" }}>5+</div>
                <div style={{ fontSize: "1.3rem", color: "#888", marginTop: "0.3rem" }}>Years of R&amp;D</div>
              </div>
              <div>
                <div style={{ fontSize: "3.2rem", fontWeight: 700, letterSpacing: "-0.03em" }}>100%</div>
                <div style={{ fontSize: "1.3rem", color: "#888", marginTop: "0.3rem" }}>In-House Design</div>
              </div>
              <div>
                <div style={{ fontSize: "3.2rem", fontWeight: 700, letterSpacing: "-0.03em" }}>50+</div>
                <div style={{ fontSize: "1.3rem", color: "#888", marginTop: "0.3rem" }}>Team Members</div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ background: "#f8f9fa", borderRadius: "0.4rem", padding: "3rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "#111", marginBottom: "1.5rem" }}>Why Aeronica?</h3>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Our key competencies are powered by innovative, reasonably priced technologies across multiple industry sectors. We specialize in design &amp; manufacturing of low altitude Unmanned Aerial Vehicle family.
              </p>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: 0 }}>
                Aeronica is carving out a niche in the Indian drone ecosystem by combining affordable hardware, mapping analytics, and service support, with strong local innovation.
              </p>
            </div>

            <div style={{ background: "#21389A", borderRadius: "0.4rem", padding: "3rem", color: "#fff" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Make in India Initiative</h3>
              <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                We aim expansion toward manufacturing and broader service deployment across agriculture, defense and industrial domains.
              </p>
              <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
                We are recognized under various central agencies and actively contribute to the government&rsquo;s &ldquo;Make in India&rdquo; and &ldquo;Drone Shakti&rdquo; initiatives.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 2 — Vision & Mission */}
      <FadeIn as="section" className="section-py-lg" style={{ background: "#f8f9fa", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-title" style={{ justifyContent: "center" }}>
              <span></span>Our Purpose
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Vision &amp; Mission
            </h2>
          </div>

          <div className="mv-split">
            {/* Vision Card */}
            <div className="card-hover p-4" style={{ background: "#21389A", border: "none", borderRadius: "0.4rem", color: "#fff" }}>
              <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "0.4rem", background: "rgba(255,255,255,0.15)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem" }}>
                <Eye style={{ width: "2.2rem", height: "2.2rem" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Our Vision</h3>
              <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}>
                To become India&rsquo;s most trusted indigenous Drone Manufacturing, Automation &amp; Data Intelligence company.
              </p>
            </div>

            {/* Mission Card */}
            <div className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
              <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem" }}>
                <Target style={{ width: "2.2rem", height: "2.2rem" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Our Mission</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                  <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.6, margin: 0 }}>Build secure, Made-in-India UAV platforms</p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                  <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.6, margin: 0 }}>Deliver Turnkey Automation with Actionable Intelligence</p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <CheckCircle style={{ width: "1.8rem", height: "1.8rem", color: "#21389A", flexShrink: 0, marginTop: "0.2rem" }} />
                  <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.6, margin: 0 }}>Enable Safer, Faster, Compliant operations at scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 3 — The People */}
      <FadeIn as="section" className="section-py-lg" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div className="responsive-header" style={{ marginBottom: "4rem" }}>
          <div>
            <span className="section-title">
              <span></span>The Team
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
              Built by engineers,<br />for engineers
            </h2>
          </div>
          <Link href="/about/leadership-team" style={{
            display: "inline-flex", alignItems: "center", gap: "0.8rem",
            fontSize: "1.4rem", fontWeight: 600, color: "#009BFF", textDecoration: "none",
            borderBottom: "1px solid #009BFF", paddingBottom: "0.3rem",
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
          }}>
            Meet the Leadership <DotArrowRight size={12} />
          </Link>
        </div>
        <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", marginBottom: "4rem" }}>
          Our team brings together decades of combined experience across aerospace engineering,
          embedded electronics, GIS analytics, and cloud infrastructure&mdash;all under one roof
          in Pune, Maharashtra.
        </p>
        <div className="gap-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {[
            { title: "Aerospace & Design", count: "12+", desc: "Aeronautical engineers, composite specialists, and structural simulation experts.", href: "/about/technology-stack" },
            { title: "Embedded Systems", count: "8+", desc: "Firmware engineers building our indigenous Nitya flight controller and sensor fusion stacks.", href: "/about/technology-stack" },
            { title: "GIS & Data Science", count: "10+", desc: "Spatial analysts and ML engineers processing terabytes of aerial data into actionable intelligence.", href: "/about/technology-stack" },
            { title: "Field Operations", count: "15+", desc: "DGCA-certified pilots and ground support crews running missions across 12 Indian states.", href: "/about/careers" },
          ].map((area, i) => (
            <Link key={i} href={area.href} className="card-hover p-3" style={{
              textDecoration: "none", color: "inherit",
              background: "#fff", border: "1px solid #e5e5e5",
              borderRadius: "0.4rem",
              transition: "all 0.3s ease",
            }}>
              <div style={{ fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#111", marginBottom: "0.8rem" }}>{area.count}</div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{area.title}</h3>
              <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6 }}>{area.desc}</p>
            </Link>
          ))}
        </div>
      </FadeIn>

      {/* Section 4 — The Technology (Full-Stack Mastery) */}
      <FadeIn as="section" className="section-py-lg" style={{ background: "#21389A", color: "#fff", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
          <div className="responsive-header" style={{ marginBottom: "4rem" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                The Stack
              </span>
              <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
                Full-Stack Mastery,&nbsp;<br style={{ display: "none" }} />Ground Up
              </h2>
            </div>
            <Link href="/about/technology-stack" style={{
              display: "inline-flex", alignItems: "center", gap: "0.8rem",
              fontSize: "1.4rem", fontWeight: 600, color: "#fff", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "0.3rem",
              whiteSpace: "nowrap",
            }}>
              Explore Our Tech <DotArrowRight size={12} />
            </Link>
          </div>
          <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "60rem", marginBottom: "5rem" }}>
            Unlike most drone companies that assemble off-the-shelf components, we own the entire
            technology chain&mdash;from the carbon fiber airframe to the cloud analytics dashboard.
            This vertical integration is the foundation of our reliability.
          </p>
          <div className="gap-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {[
              { icon: Cpu, title: "Nitya Flight Controller", desc: "Indigenous STM32-based avionics with triple-redundant IMU and military-grade encrypted telemetry." },
              { icon: ShieldCheck, title: "DGCA Type-Certified", desc: "Samrudhhi-10L is fully DGCA type-certified. Every platform meets stringent airworthiness standards." },
              { icon: Building2, title: "Composite Airframes", desc: "High-modulus carbon fiber structures designed in-house using FEA simulation for maximum durability." },
              { icon: Sparkles, title: "Aeroni.AI Engine", desc: "Cloud-native processing pipeline converting raw aerial data into 3D point clouds and NDVI maps in minutes." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4rem", padding: "3rem" }}>
                  <div style={{ width: "3.6rem", height: "3.6rem", borderRadius: "0.4rem", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "2rem" }}>
                    <Icon style={{ width: "1.8rem", height: "1.8rem" }} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.8rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Section 5 — Trust & Proof (Clients, Certifications, Partners) */}
      <FadeIn as="section" className="section-py-lg" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Trust &amp; Recognition
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Proven in the field, backed by the best
          </h2>
        </div>

        <div className="gap-25" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginBottom: "5rem" }}>
          <Link href="/about/certifications" className="card-hover p-35" style={{ textDecoration: "none", color: "inherit", background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", transition: "all 0.3s ease" }}>
            <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <ShieldCheck style={{ width: "2rem", height: "2rem" }} />
            </div>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.8rem" }}>DGCA Certified</h3>
            <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Our Samrudhhi-10L is fully type-certified by DGCA. Every platform follows AS9100-ready
              production pipelines with full material traceability.
            </p>
            <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#009BFF" }}>View Certifications →</span>
          </Link>

          <Link href="/about/partners-alliances" className="card-hover p-35" style={{ textDecoration: "none", color: "inherit", background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", transition: "all 0.3s ease" }}>
            <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <Award style={{ width: "2rem", height: "2rem" }} />
            </div>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.8rem" }}>Trusted Partners</h3>
            <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Partnered with IITs for composite research. Trusted by Central Railway, JSW Steel,
              BASF, and IOCL for high-stakes spatial campaigns.
            </p>
            <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#009BFF" }}>Our Partners →</span>
          </Link>

          <Link href="/about/why-aeronica" className="card-hover p-35" style={{ textDecoration: "none", color: "inherit", background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", transition: "all 0.3s ease" }}>
            <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <MapPin style={{ width: "2rem", height: "2rem" }} />
            </div>
            <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.8rem" }}>Made in India</h3>
            <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              DIPP-recognized startup. All R&amp;D, manufacturing, and flight operations based in
              Pune, Maharashtra&mdash;supporting missions across 12 Indian states.
            </p>
            <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#009BFF" }}>Company Profile →</span>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="responsive-padding gap-3" style={{
          background: "#21389A", borderRadius: "0.4rem",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", textAlign: "center"
        }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "12", label: "Indian States Covered" },
            { value: "15K+", label: "Flight Hours Logged" },
            { value: "100%", label: "DGCA Compliant" },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>{stat.value}</div>
              <div style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Section 6 — Join the Mission */}
      <FadeIn as="section" className="section-py-lg" style={{ background: "#ffffff", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: "160rem", margin: "0 auto", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", textAlign: "center" }}>
          <span className="section-title" style={{ justifyContent: "center" }}>
            <span></span>Join Us
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, marginBottom: "2rem" }}>
            Be part of India&rsquo;s drone story
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "60rem", margin: "0 auto 4rem" }}>
            We&rsquo;re building the future of Indian aerospace&mdash;and we need the best engineers,
            designers, and operators to make it happen. If you want to work on technology that
            actually flies, we want to hear from you.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <Link href="/about/careers" style={{
              display: "inline-flex", alignItems: "center", gap: "1rem",
              padding: "1.4rem 3rem", background: "#21389A", color: "#fff",
              borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
              textDecoration: "none", transition: "all 0.3s ease",
            }}>
              <Briefcase style={{ width: "1.8rem", height: "1.8rem" }} />
              View Open Positions <DotArrowRight size={12} />
            </Link>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "1rem",
              padding: "1.4rem 3rem", background: "#fff", color: "#009BFF",
              border: "1px solid #009BFF", borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem",
              textDecoration: "none", transition: "all 0.3s ease",
            }}>
              <BookOpen style={{ width: "1.8rem", height: "1.8rem" }} />
              Partner With Us <DotArrowRight size={12} />
            </Link>
          </div>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
