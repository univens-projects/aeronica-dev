"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function PartnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage({ type: "error", text: "Please enter both email and password." });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // Simulate login verification
    setTimeout(() => {
      setIsLoading(false);
      if (email === "demo@aeronica.in" && password === "partner123") {
        setMessage({ type: "success", text: "Login successful! Redirecting to portal..." });
      } else {
        setMessage({ type: "error", text: "Invalid credentials. Try demo@aeronica.in / partner123" });
      }
    }, 1500);
  };

  return (
    <div className="partner-split-layout">
      {/* Left side: branding/imagery panel */}
      <div className="partner-left-panel">
        {/* Subtle dot watermark grid background */}
        <div className="dot-watermark" style={{ opacity: 0.05 }} />

        {/* Header */}
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
            Partner Ecosystem
          </span>
          <h1 style={{
            fontSize: "clamp(3rem, 4vw, 4.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "2.5rem"
          }}>
            India's premier indigenous UAV network
          </h1>
          <p style={{
            fontSize: "1.6rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: "3rem"
          }}>
            Access real-time telemetry pipelines, processing credits, order tracking, and co-marketing kits built for Aeronica authorized channels.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "0.4rem",
            padding: "2rem",
          }}>
            <ShieldCheck style={{ width: "3.2rem", height: "3.2rem", color: "white", flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: "1.45rem", fontWeight: 600, margin: "0 0 0.4rem" }}>DGCA Compliant Portal</h4>
              <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.4 }}>
                Secure OAuth2 validation and MIL-grade AES-256 flight log sync.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div style={{ zIndex: 1 }}>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            &copy; {new Date().getFullYear()} Aeronica Advance Technologies. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right side: Login form */}
      <div className="partner-right-panel">
        {/* Back Link */}
        <Link href="/" style={{
          position: "absolute",
          top: "4rem",
          right: "6rem",
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

        <div style={{ width: "100%", maxWidth: "42rem" }}>
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 600, color: "#111", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              Partner Log In
            </h2>
            <p style={{ fontSize: "1.45rem", color: "#555", lineHeight: 1.6 }}>
              Enter your credential details to log in to the channel portal.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Email Field */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <label style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <Mail style={{ width: "1.8rem", height: "1.8rem", color: "#888", position: "absolute", left: "1.6rem", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  style={{
                    width: "100%",
                    padding: "1.4rem 1.6rem 1.4rem 4.6rem",
                    border: "1px solid #e5e5e5",
                    borderRadius: "0.4rem",
                    fontSize: "1.4rem",
                    color: "#111",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Password
                </label>
                <Link href="#" style={{ fontSize: "1.25rem", color: "#009BFF", textDecoration: "none", fontWeight: 500 }}>
                  Forgot Password?
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <Lock style={{ width: "1.8rem", height: "1.8rem", color: "#888", position: "absolute", left: "1.6rem", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    padding: "1.4rem 1.6rem 1.4rem 4.6rem",
                    border: "1px solid #e5e5e5",
                    borderRadius: "0.4rem",
                    fontSize: "1.4rem",
                    color: "#111",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#21389A"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; }}
                />
              </div>
            </div>

            {/* Remember Me */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <input type="checkbox" id="remember" style={{ width: "1.6rem", height: "1.6rem", accentColor: "#21389A", cursor: "pointer" }} />
              <label htmlFor="remember" style={{ fontSize: "1.3rem", color: "#555", cursor: "pointer" }}>
                Remember device for 30 days
              </label>
            </div>

            {/* Status Messages */}
            {message && (
              <div style={{
                padding: "1.5rem",
                borderRadius: "0.4rem",
                fontSize: "1.35rem",
                lineHeight: 1.5,
                background: message.type === "success" ? "#e6f9ed" : "#fdf0f0",
                border: `1px solid ${message.type === "success" ? "#ccefd7" : "#fbd5d5"}`,
                color: message.type === "success" ? "#137333" : "#c5221f",
              }}>
                {message.text}
              </div>
            )}

            {/* Submit Button */}
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
              }}
            >
              {isLoading ? "Authenticating..." : "Sign In"} <ArrowRight style={{ width: "1.6rem", height: "1.6rem" }} />
            </button>
          </form>

          {/* Registration link */}
          <div style={{ marginTop: "4rem", textAlign: "center", borderTop: "1px solid #e5e5e5", paddingTop: "3rem" }}>
            <span style={{ fontSize: "1.35rem", color: "#666" }}>
              Interested in partnership?{" "}
            </span>
            <Link href="/partners/become" style={{ fontSize: "1.35rem", color: "#009BFF", fontWeight: 600, textDecoration: "none" }}>
              Apply to Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
