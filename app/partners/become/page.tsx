"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowLeft, Send, X } from "lucide-react";

export default function BecomePartner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.city) {
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
            <div style={{
              position: "fixed", inset: 0, zIndex: 1000,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(0,0,0,0.5)",
            }}>
              <div style={{
                background: "#fff", borderRadius: "0.8rem", padding: "4rem",
                maxWidth: "48rem", width: "90%", textAlign: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}>
                <div style={{
                  width: "6rem", height: "6rem", borderRadius: "50%",
                  background: "#e6f9ed", color: "#0cc820",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "2.5rem"
                }}>
                  <ShieldCheck style={{ width: "3.2rem", height: "3.2rem" }} />
                </div>
                <h2 style={{ fontSize: "2.8rem", fontWeight: 600, color: "#111", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
                  Form Submitted Successfully!
                </h2>
                <p style={{ fontSize: "1.55rem", color: "#555", lineHeight: 1.7, marginBottom: "3rem" }}>
                  Someone from our team shall get back to you shortly.
                </p>
                <Link href="/" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "1.3rem 3rem", background: "#21389A", color: "#fff",
                  borderRadius: "0.4rem", fontWeight: 600, fontSize: "1.4rem", textDecoration: "none"
                }}>
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "4rem", marginTop: "3rem" }}>
                <h2 style={{ fontSize: "3rem", fontWeight: 600, color: "#111", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                  Become a Partner
                </h2>
                <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>
                  Fill in your details and our team will get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
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
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <label style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Email ID *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
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
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Which city are you from?"
                    style={{
                      width: "100%", padding: "1.2rem 1.4rem",
                      border: "1px solid #e5e5e5", borderRadius: "0.4rem",
                      fontSize: "1.35rem", outline: "none", transition: "border-color 0.2s"
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
                  {isLoading ? "Submitting..." : "Submit"} <Send style={{ width: "1.6rem", height: "1.6rem" }} />
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
            src="/assets/Footer Logo.svg"
            alt="Aeronica"
            width={140}
            height={56}
            style={{ width: "18rem", height: "auto" }}
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
      </div>
    </div>
  );
}
