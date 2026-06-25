"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  variant?: "parent" | "child";
}

const PageHero = ({ title, subtitle, breadcrumbs, variant = "parent" }: PageHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} style={{ position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#21389A", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, padding: variant === "child" ? "140px var(--section-px) 60px" : "180px var(--section-px) 100px", maxWidth: "1440px", margin: "0 auto" }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: variant === "child" ? "1.5rem" : "2.5rem", fontSize: "1.3rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{ opacity: 0.4 }}>/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span style={{ color: "rgba(255,255,255,0.8)" }}>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}>
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        {variant === "parent" && (
          <h1 style={{ fontSize: "clamp(3.2rem, 6.4vw, 8rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, marginBottom: "2rem", maxWidth: "80rem" }}>
            {title}
          </h1>
        )}
        {variant === "child" && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
            {breadcrumbs && breadcrumbs.length >= 2 && (
              <Link href={breadcrumbs[breadcrumbs.length - 2].href} style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.5)", marginTop: "0.4rem", flexShrink: 0 }}>
                <ArrowLeft style={{ width: "2rem", height: "2rem" }} />
              </Link>
            )}
            <h1 style={{ fontSize: "clamp(2.4rem, 3.5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15, maxWidth: "70rem" }}>
              {title}
            </h1>
          </div>
        )}
        {variant === "parent" && subtitle && (
          <p style={{ fontSize: "clamp(1.6rem, 2vw, 2rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: "60rem" }}>
            {subtitle}
          </p>
        )}
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", zIndex: 2 }} />
    </section>
  );
};

export default PageHero;
