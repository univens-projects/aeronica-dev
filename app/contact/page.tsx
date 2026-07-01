"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DotArrowRight } from "@/components/DotIcons";
import { Mail, Phone, MapPin, Building, Sparkles, MessageSquare, Calendar, ClipboardList, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
// import CTA from "@/components/CTA";

export default function ContactHub() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="contact-hub-wrapper" style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        title="Connect with Aeronica"
        subtitle="Ready to transform your operations with precision aerial intelligence? Whether you need a custom drone build or a full-scale GIS campaign, we are here to help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        {/* QUICK ACTION GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "8rem" }}>
          {[
            { title: "Request a Demo", desc: "See our platforms in action. Schedule a live demo of Samrudhhi or Flycra.", href: "/contact/request-demo", icon: Zap },
            { title: "Get a Quote", desc: "Custom pricing for GIS surveys, DaaS campaigns, or drone hardware purchases.", href: "/contact/get-quote", icon: ClipboardList },
            { title: "Book Consultation", desc: "1-on-1 expert consultation for regulatory compliance and mission planning.", href: "/contact/book-consultation", icon: Calendar },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} href={action.href} className="card-hover" style={{
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
                border: "1px solid #e5e5e5",
                padding: "3rem",
                borderRadius: "0.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem"
              }}
              >
                <div style={{ width: "4rem", height: "4rem", borderRadius: "0.4rem", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: "2rem", height: "2rem" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.8rem" }}>{action.title}</h3>
                  <p style={{ fontSize: "1.35rem", color: "#555", lineHeight: "1.6" }}>{action.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="contact-grid">
          {/* LEFT SIDE: OFFICE & FACTORY */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                <Building style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
                <h2 style={{ fontSize: "2.2rem", fontWeight: 600 }}>Corporate Headquarters</h2>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start", marginBottom: "1.5rem" }}>
                <MapPin style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.4rem", color: "#111" }}>
                  101, Sunrise Apartments, Opp. Kamla Nehru Park main gate, Dr. Ketkar path near Prabhat road, Pune, MH India 411004.
                </span>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <Phone style={{ width: "2rem", height: "2rem", color: "#888" }} />
                <span style={{ fontSize: "1.4rem", color: "#111" }}>(+91) 727 646 9160</span>
              </div>
            </div>

            <div className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                <Sparkles style={{ width: "2.4rem", height: "2.4rem", color: "#111" }} />
                <h2 style={{ fontSize: "2.2rem", fontWeight: 600 }}>Manufacturing Facility</h2>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                <MapPin style={{ width: "2rem", height: "2rem", color: "#888", flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "1.4rem", color: "#111" }}>
                  Gat No.32, Khed Shivapur, Haveli, Pune, IN 412205
                </span>
              </div>
            </div>

            <div className="card-hover p-4" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ width: "5rem", height: "5rem", borderRadius: "50%", background: "#21389A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail style={{ width: "2.2rem", height: "2.2rem" }} />
              </div>
              <div>
                <span style={{ fontSize: "1.2rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>General Inquiries</span>
                <strong style={{ fontSize: "1.8rem", color: "#111" }}>info@aeronica.in</strong>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MODERN CONTACT FORM */}
          <div className="card-padding-xl" style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", boxShadow: "0 15px 40px rgba(0,0,0,0.01)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <MessageSquare style={{ width: "2.2rem", height: "2.2rem", color: "#111" }} />
              <h2 style={{ fontSize: "2.4rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Full Name *</label>
                  <input type="text" placeholder="John Doe" required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", outline: "none", fontSize: "1.4rem" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", outline: "none", fontSize: "1.4rem" }} />
                </div>
              </div>

              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", outline: "none", fontSize: "1.4rem" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <label style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#888" }}>Subject *</label>
                  <select required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", outline: "none", fontSize: "1.4rem", color: "#555" }}>
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
                <textarea placeholder="Tell us more about your mission and payload requirements..." required style={{ width: "100%", padding: "1.4rem", background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", outline: "none", fontSize: "1.4rem", minHeight: "120px", resize: "vertical" }} />
              </div>

              <button type="submit" style={{ display: "flex", alignItems: "center", justifySelf: "start", justifyContent: "center", gap: "1rem", background: "#21389A", color: "#fff", border: "none", padding: "1.4rem 3rem", borderRadius: "0.4rem", fontSize: "1.4rem", fontWeight: "600", cursor: "pointer", transition: "all 0.3s ease" }}>
                <span>{formSubmitted ? "Message Sent!" : "Submit Inquiry"}</span>
                <DotArrowRight size={12} />
              </button>
            </form>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}

