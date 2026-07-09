"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, ShieldAlert, FileText, CheckCircle } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/aeronica_at", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/ImAeronica", icon: "facebook" },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/aeronica-advance-technologies", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@aeronicaadvancedtechnologi5521", icon: "youtube" },
  { label: "Email", href: "mailto:info@aeronica.in", icon: "mail" },
];

const SocialIcon = ({ name }: { name: string }) => {
  const props = { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "instagram":
      return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></svg>;
    case "facebook":
      return <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
    case "linkedin":
      return <svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "youtube":
      return <svg {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>;
    case "mail":
      return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>;
    default:
      return null;
  }
};

const seoLandingPages = [
  { label: "Drone Survey Company Pune", href: "/seo/drone-survey-company-pune" },
  { label: "Drone Survey Maharashtra", href: "/seo/drone-survey-maharashtra" },
  { label: "LiDAR Survey Services India", href: "/seo/lidar-survey-services-india" },
  { label: "GIS Solutions India", href: "/seo/gis-solutions-india" },
  { label: "Drone Inspection Services", href: "/seo/drone-inspection-services" },
  { label: "Digital Twin Services", href: "/seo/digital-twin-services" },
  { label: "Solar Plant Inspection", href: "/seo/solar-plant-inspection" },
  { label: "Mining Drone Survey", href: "/seo/mining-drone-survey" },
  { label: "Highway Mapping Services", href: "/seo/highway-mapping-services" },
];

const Footer = () => {
  return (
    <footer style={{ background: "#21389A", color: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: "160rem", margin: "0 auto", padding: "6rem var(--section-px) 0" }}>

        {/* Main Footer Directory */}
        <div className="footer-grid"
          style={{
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
          <div>
            <Image src="/assets/img/aeronica-logo.png" alt="Aeronica" width={200} height={50} style={{ width: "16rem", height: "auto", filter: "brightness(0) invert(1)", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "28rem" }}>
              Indigenous drone hardware, avionics, and GIS software solutions for agriculture, surveillance, and industrial applications.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", marginBottom: "2.5rem" }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                  width: "3.2rem", height: "3.2rem", borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
            <Link href="/partners/login" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.3rem 2.8rem",
              background: "#ffffff",
              color: "#21389A",
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textDecoration: "none",
              transition: "all 0.3s ease",
              border: "1px solid #ffffff",
              width: "18rem",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#21389A"; }}
            >
              Partner Login
            </Link>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>Solutions</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { label: "Drone Survey & Mapping", href: "/solutions/drone-survey-mapping" },
                { label: "GIS & Spatial Intelligence", href: "/solutions/gis-geospatial-intelligence" },
                { label: "Infrastructure Inspection", href: "/solutions/infrastructure-inspection" },
                { label: "AI Drone Intelligence", href: "/solutions/ai-drone-intelligence" },
                { label: "Disaster Response", href: "/solutions/disaster-emergency-response" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{
                    fontSize: "1.3rem", color: "rgba(255,255,255,0.7)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>Products</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { label: "Samrudhhi-10L", href: "/products/samrudhhi-10l" },
                { label: "Samrudhhi-10LH", href: "/products/samrudhhi-10lh" },
                { label: "Flycra 2.0", href: "/products/flycra-20" },
                { label: "Nitya FC Module", href: "/products/nitya-fc" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{
                    fontSize: "1.3rem", color: "rgba(255,255,255,0.7)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { label: "About Aeronica", href: "/about" },
                { label: "Leadership Team", href: "/about/leadership-team" },
                { label: "Technology Stack", href: "/about/technology-stack" },
                { label: "Certifications", href: "/about/certifications" },
                { label: "Partners & Alliances", href: "/about/partners-alliances" },
                { label: "Research & R&D", href: "/research" },
                { label: "Become a Partner", href: "/partners/become" },
                { label: "Careers", href: "/about/careers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{
                    fontSize: "1.3rem", color: "rgba(255,255,255,0.7)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Landing Pages footer links */}
        <div style={{
          padding: "4rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}>
            {seoLandingPages.map((page) => (
              <Link key={page.label} href={page.href} style={{
                fontSize: "1.25rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal, Compliance Badges, Copyright */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          padding: "4rem 0",
        }}>
          {/* Compliance badges row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            paddingBottom: "2rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
              <ShieldCheck style={{ width: "2rem", height: "2rem", color: "white" }} />
              <span style={{ fontSize: "1.3rem", fontWeight: 600 }}>DGCA Compliant</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
              <CheckCircle style={{ width: "2rem", height: "2rem", color: "white" }} />
              <span style={{ fontSize: "1.3rem", fontWeight: 600 }}>ISO Certified</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
              <Award style={{ width: "2rem", height: "2rem", color: "#fff" }} />
              <span style={{ fontSize: "1.3rem", fontWeight: 600 }}>Data Security Guaranteed</span>
            </div>
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              &copy; {new Date().getFullYear()} Aeronica Advance Technologies Pvt. Ltd. All rights reserved.
              DIPP Recognized Startup. Drone operations fully compliant with DGCA regulations. Data processed under ISO standards.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Privacy Policy", href: "/legal/privacy-policy" },
                { label: "Terms & Conditions", href: "/legal/terms-conditions" },
                { label: "Refund Policy", href: "/legal/refund-policy" },
                { label: "Sitemap", href: "/sitemap" },
                { label: "Cookie Policy", href: "/legal/cookie-policy" },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{
                  fontSize: "1.15rem", color: "rgba(255,255,255,0.5)", textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
