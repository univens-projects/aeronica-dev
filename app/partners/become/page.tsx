"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight, ArrowLeft, Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function BecomePartner() {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    contactName: "",
    email: "",
    phone: "",
    domain: "agriculture",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="partner-split-layout">
      {/* Left side: Form */}
      <div className="partner-right-panel">
        {/* Back Link */}
        <Link href="/" style={{
          position: "absolute",
          top: "4rem",
          left: "6rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.8rem",
          fontSize: "1.3rem",
          fontWeight: 600,
          color: "#21389A",
          textDecoration: "none",
        }}>
          <ArrowLeft style={{ width: "1.6rem", height: "1.6rem" }} /> Back to Home
        </Link>

        <div style={{ width: "100%", maxWidth: "54rem" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div style={{
                width: "6rem", height: "6rem", borderRadius: "50%",
                background: "#e6f9ed", color: "#0cc820",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                marginBottom: "2.5rem"
              }}>
                <ShieldCheck style={{ width: "3.2rem", height: "3.2rem" }} />
              </div>
              <h2 style={{ fontSize: "3rem", fontWeight: 600, color: "#111", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
                Application Submitted!
              </h2>
              <p style={{ fontSize: "1.55rem", color: "#555", lineHeight: 1.7, marginBottom: "3rem" }}>
                Thank you for applying to join the Aeronica Partner Network. Our partnership management division in Pune will review your business credentials and get in touch within 2-3 business days.
              </p>
              <Link href="/" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "1.3rem 3rem", background: "#21389A", color: "#fff",
                borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none"
              }}>
                Return to Homepage
              </Link>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "4rem", marginTop: "3rem" }}>
                <h2 style={{ fontSize: "3rem", fontWeight: 600, color: "#111", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                  Join the Partner Network
                </h2>
                <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>
                  Grow your business by offering India's leading indigenous UAV platforms, custom avionics modules, and AI photogrammetry pipelines.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* 2-col inputs */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Enterprise Pvt Ltd"
                      style={{
                        width: "100%", padding: "1.2rem 1.4rem",
                        border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                        fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s"
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Company Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://company.com"
                      style={{
                        width: "100%", padding: "1.2rem 1.4rem",
                        border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                        fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s"
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Primary Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Gourab Roy"
                    style={{
                      width: "100%", padding: "1.2rem 1.4rem",
                      border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                      fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s"
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="gourab@company.com"
                      style={{
                        width: "100%", padding: "1.2rem 1.4rem",
                        border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                        fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s"
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      style={{
                        width: "100%", padding: "1.2rem 1.4rem",
                        border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                        fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s"
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Primary Business Vertical
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    style={{
                      width: "100%", padding: "1.2rem 1.4rem",
                      border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                      fontSize: "1.35rem", outline: "none", background: "#fff", transition: "border-color 0.2s"
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                  >
                    <option value="agriculture">Agriculture & Precision Spraying</option>
                    <option value="survey">GIS Land Surveying & Mapping</option>
                    <option value="inspection">Industrial Facade & Thermal Inspection</option>
                    <option value="defence">Defence & Government Contracts</option>
                    <option value="oem">UAV Hardware OEM Integration</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Partnership Interest & Capabilities
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your field capabilities, active territories, and why you want to partner with Aeronica."
                    style={{
                      width: "100%", padding: "1.2rem 1.4rem",
                      border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                      fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s",
                      resize: "vertical"
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: "100%",
                    padding: "1.4rem",
                    background: "#21389A",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0.4rem",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    cursor: isLoading ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    transition: "opacity 0.2s",
                    opacity: isLoading ? 0.7 : 1,
                    marginTop: "1rem"
                  }}
                >
                  {isLoading ? "Submitting Application..." : "Submit Application"} <Send style={{ width: "1.6rem", height: "1.6rem" }} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Right side: Info Panel */}
      <div className="partner-left-panel">
        {/* Subtle dot watermark grid background */}
        <div className="dot-watermark" style={{ opacity: 0.05 }} />

        {/* Header logo */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
          <Image
            src="/assets/img/aeronica-logo.png"
            alt="Aeronica"
            width={140}
            height={56}
            style={{ width: "12rem", height: "auto", filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Content */}
        <div style={{ maxWidth: "46rem", zIndex: 1 }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "2rem"
          }}>
            Aeronica Authorized
          </span>
          <h1 style={{
            fontSize: "clamp(3rem, 4vw, 4.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "2.5rem"
          }}>
            Empowering UAV Service Providers
          </h1>
          <p style={{
            fontSize: "1.6rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: "3rem"
          }}>
            We support our authorized network with specialized training, priority spare dispatch, custom GCS software overlays, and direct lead mapping in their respective states.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              { title: "Priority Support", text: "24/7 technical field line and quick spare swaps direct from Pune." },
              { title: "Flight Crew Onboarding", text: "Free DGCA pilot license training slots for long-term contract partners." },
              { title: "AI Credits", text: "Discounted Aeroni.AI photogrammetry and analytical processing volume." }
            ].map((p, idx) => (
              <div key={idx} style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{
                  width: "2.4rem", height: "2.4rem", borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                  fontSize: "1.2rem", fontWeight: 700
                }}>
                  {idx + 1}
                </div>
                <div>
                  <h4 style={{ fontSize: "1.45rem", fontWeight: 600, margin: "0 0 0.4rem" }}>{p.title}</h4>
                  <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.4 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div style={{ zIndex: 1 }}>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            Already registered?{" "}
            <Link href="/partners/login" style={{ color: "#ffffff", fontWeight: 600, textDecoration: "underline" }}>
              Log In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
