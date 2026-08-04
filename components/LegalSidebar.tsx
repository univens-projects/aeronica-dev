"use client";

import React from "react";
import Link from "next/link";

interface SidebarLink {
  label: string;
  href: string;
}

interface LegalSidebarProps {
  sections: Array<{ heading: string }>;
  otherPolicies: SidebarLink[];
  currentSlug: string;
}

export default function LegalSidebar({ sections, otherPolicies, currentSlug }: LegalSidebarProps) {
  return (
    <div className="legal-sidebar" style={{ position: "sticky", top: "12rem" }}>
      {/* TOC */}
      <div style={{
        background: "#fff", border: "1px solid #e5e5e5",
        borderRadius: "0.4rem", padding: "2.5rem", marginBottom: "2rem",
      }}>
        <h3 style={{
          fontFamily: "var(--font-mono)", fontSize: "1.1rem",
          textTransform: "uppercase", letterSpacing: "0.08em",
          fontWeight: 500, color: "#888", marginBottom: "1.5rem",
        }}>
          On This Page
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {sections.map((section, idx) => (
            <li key={idx}>
              <a
                href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                style={{
                  fontSize: "1.3rem", color: "#555", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: "0.8rem",
                  padding: "0.4rem 0", transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#21389A"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#555"; }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "1.1rem",
                  color: "#ccc", minWidth: "2rem",
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Other Policies */}
      <div style={{
        background: "#fff", border: "1px solid #e5e5e5",
        borderRadius: "0.4rem", padding: "2.5rem",
      }}>
        <h3 style={{
          fontFamily: "var(--font-mono)", fontSize: "1.1rem",
          textTransform: "uppercase", letterSpacing: "0.08em",
          fontWeight: 500, color: "#888", marginBottom: "1.5rem",
        }}>
          Other Policies
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {otherPolicies
            .filter((p) => p.href !== `/legal/${currentSlug}`)
            .map((policy) => (
              <li key={policy.label}>
                <Link
                  href={policy.href}
                  style={{
                    fontSize: "1.3rem", color: "#009BFF", textDecoration: "none",
                    display: "block", padding: "0.4rem 0",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  {policy.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
