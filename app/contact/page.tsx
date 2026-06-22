"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Building, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="contact-page-wrapper" style={{ paddingTop: "120px", paddingBottom: "80px", color: "#1a1a1a" }}>
      {/* Page Header */}
      <div className="section-header centered" style={{ marginBottom: "6rem", padding: "0 var(--section-px)" }}>
        <span className="section-title" style={{ justifyContent: "center" }}>
          Contact Us
        </span>
        <h1 style={{ fontSize: "clamp(3.6rem, 5vw, 5.6rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem" }}>
          Let's Build Something Precision-Driven
        </h1>
        <p className="section-subtitle" style={{ maxWidth: "70rem", margin: "1.5rem auto 0" }}>
          Connect with our corporate office or production facility in Pune, India. Request a product demo, schedule a GIS flight campaign, or discuss payload customization.
        </p>
      </div>

      <section style={{ padding: "0 var(--section-px)", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "6rem", alignItems: "start" }}>
          {/* LEFT SIDE: DETAILS & OFFICE/FACTORY CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1.5rem", padding: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                <Building style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
                <h2 style={{ fontSize: "2.2rem", fontWeight: 600 }}>Headquarters</h2>
              </div>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem" }}>
                Our corporate hub is located in the heart of Pune, handling client relations, avionics R&D, and regulatory affairs.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start", marginBottom: "1.5rem" }}>
                <MapPin style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.45rem", color: "#111" }}>
                  101, Sunrise Apartments, Opp. Kamla Nehru Park, Pune, IN 411004
                </span>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <Phone style={{ width: "2rem", height: "2rem", color: "#888" }} />
                <span style={{ fontSize: "1.45rem", color: "#111" }}>(+91) 727 646 9160</span>
              </div>
            </div>

            <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1.5rem", padding: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                <Sparkles style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
                <h2 style={{ fontSize: "2.2rem", fontWeight: 600 }}>Manufacturing Plant</h2>
              </div>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: "1.6", marginBottom: "2rem" }}>
                Our production, assembly, and flight-testing facility is located just outside Pune city, fully optimized for composite fabrication.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <MapPin style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.45rem", color: "#111" }}>
                  Gat No.32, Khed Shivapur, Haveli, Pune, IN 412205
                </span>
              </div>
            </div>

            <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "1.5rem", padding: "4rem", display: "flex", gap: "2rem", alignItems: "center" }}>
              <div style={{ width: "5rem", height: "5rem", borderRadius: "50%", background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail style={{ width: "2.2rem", height: "2.2rem" }} />
              </div>
              <div>
                <span style={{ fontSize: "1.2rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>General Inquiries</span>
                <strong style={{ fontSize: "1.8rem", color: "#111" }}>info@aeronica.in</strong>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MODERN CONTACT FORM */}
          <div style={{ background: "#fbfbfb", border: "1px solid #e5e5e5", borderRadius: "2rem", padding: "5rem", boxShadow: "0 15px 40px rgba(0,0,0,0.01)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <MessageSquare style={{ width: "2.2rem", height: "2.2rem", color: "#111" }} />
              <h2 style={{ fontSize: "2.4rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Full Name *</label>
                  <input type="text" placeholder="John Doe" required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.8rem", outline: "none", fontSize: "1.45rem" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.8rem", outline: "none", fontSize: "1.45rem" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.8rem", outline: "none", fontSize: "1.45rem" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Subject *</label>
                  <select required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.8rem", outline: "none", fontSize: "1.45rem", color: "#555" }}>
                    <option value="">Select Topic</option>
                    <option value="demo">Product Demo Request</option>
                    <option value="gis">GIS Mapping Project</option>
                    <option value="spray">Agriculture Spraying Service</option>
                    <option value="custom">Bespoke UAV Design</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Message *</label>
                <textarea placeholder="Tell us more about your mission and payload requirements..." required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.8rem", outline: "none", fontSize: "1.45rem", minHeight: "120px", resize: "vertical" }} />
              </div>

              <button type="submit" style={{ display: "flex", alignItems: "center", justifySelf: "start", justifyContent: "center", gap: "1rem", background: "#111", color: "#fff", border: "none", padding: "1.4rem 3rem", borderRadius: "0.8rem", fontSize: "1.45rem", fontWeight: "600", cursor: "pointer", transition: "all 0.3s ease" }}>
                <span>{formSubmitted ? "Message Sent!" : "Submit Inquiry"}</span>
                <ArrowRight style={{ width: "1.6rem", height: "1.6rem" }} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
