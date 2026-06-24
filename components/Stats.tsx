"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GsapReveal from "@/components/GsapReveal";

const StatNumber = ({ target, animated }: { target: number; animated: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (animated) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, [animated, target]);

  return <span>{count}</span>;
};

const stats = [
  { value: 120, suffix: "+", label: "Cities Covered" },
  { value: 25000, suffix: "+", label: "Acres Surveyed" },
  { value: 98, suffix: "%", label: "Mapping Accuracy" },
  { value: 4, suffix: "+", label: "DGCA Certifications" },
];

const StatBox = ({ value, suffix, label, animated }: { value: number; suffix: string; label: string; animated: boolean }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.2rem" }}>
      <span style={{ fontSize: "clamp(3.6rem, 5vw, 5.6rem)", fontWeight: 700, lineHeight: 1, color: "#fff", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>
        <StatNumber target={value} animated={animated} />
      </span>
      <span style={{ fontSize: "clamp(2rem, 2.5vw, 2.8rem)", fontWeight: 600, color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>
        {suffix}
      </span>
    </div>
    <div style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: "0.6rem", letterSpacing: "0.02em" }}>
      {label}
    </div>
  </div>
);

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats" style={{
      background: "linear-gradient(135deg, #0b1012 0%, #1a1a1a 50%, #0b1012 100%)",
      padding: "8rem var(--section-px)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(45,90,135,0.08) 0%, transparent 60%)" }} />
      <GsapReveal as="div" y={40} style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-title" style={{ justifyContent: "flex-start", color: "#888" }}>
              <span></span>Our Impact
            </span>
            <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15, color: "#fff" }}>
              By the Numbers
            </h2>
            <p style={{ fontSize: "1.6rem", color: "#888", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: "48rem" }}>
              Since our inception, Aeronica has been at the forefront of indigenous UAV innovation in India. We combine precision engineering with deep domain expertise to deliver scalable, DGCA-certified drone solutions that redefine efficiency across agriculture, infrastructure, and surveillance.
            </p>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/about" style={{
                display: "inline-flex", alignItems: "center", gap: "0.8rem",
                padding: "1.2rem 2.8rem", background: "transparent", color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.4rem",
                fontWeight: 600, fontSize: "1.4rem", textDecoration: "none",
              }}>
                Our Story <ArrowRight style={{ width: "1.6rem", height: "1.6rem" }} />
              </Link>
            </div>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem 2rem",
            padding: "2rem",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "0.4rem",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            {stats.map((stat, i) => (
              <StatBox key={i} {...stat} animated={animated} />
            ))}
          </div>
        </div>
      </GsapReveal>
    </section>
  );
};

export default Stats;
