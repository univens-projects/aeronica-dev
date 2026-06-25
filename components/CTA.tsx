"use client";

import React from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";

const CTA = () => {
  return (
    <section
      id="cta"
      style={{
        background: "#ffffff",
        padding: "var(--section-py) var(--section-px)",
      }}
    >
      <div className="cta-inner"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          background: "#21389A",
          borderRadius: "0.8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative accent */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "40rem",
            height: "40rem",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "20%",
            width: "25rem",
            height: "25rem",
            borderRadius: "50%",
            background: "rgba(0,155,255,0.08)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "56rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.2rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 600,
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s work together
          </span>
          <h2
            style={{
              fontSize: "clamp(2.8rem, 4vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.2rem",
            }}
          >
            Ready to transform your operations?
          </h2>
          <p
            style={{
              fontSize: "1.5rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "44rem",
            }}
          >
            From precision agriculture to industrial surveillance — we build drone solutions that deliver real results.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1.1rem 2.8rem",
              background: "#fff",
              color: "#21389A",
              borderRadius: "var(--radius-md)",
              fontSize: "1.5rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Start a Conversation <DotArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
