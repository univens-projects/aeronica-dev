"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => {
  const sectionRef = useSectionObserver();
  const bgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(6px)"]
  );

  return (
    <motion.section
      style={{ filter, position: "relative" }}
      ref={sectionRef}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "180px var(--section-px) 100px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "2.5rem", fontSize: "1.3rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
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
        <h1
          style={{
            fontSize: "clamp(4rem, 7vw, 7.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "2rem",
            maxWidth: "80rem",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(1.6rem, 2vw, 2rem)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              maxWidth: "60rem",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          zIndex: 2,
        }}
      />
    </motion.section>
  );
};

export default PageHero;
