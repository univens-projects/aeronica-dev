"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.playbackRate = 4.0;
      const checkTime = () => {
        if (video.currentTime >= 12) {
          video.playbackRate = 0.5;
        } else {
          requestAnimationFrame(checkTime);
        }
      };
      requestAnimationFrame(checkTime);
    }

    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const scrollY = window.scrollY;
      const height = sectionRef.current.offsetHeight;
      const progress = Math.min(scrollY / height, 1);
      bgRef.current.style.transform = `translateY(${progress * -60}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 12;
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
  };

  return (
    <motion.section
      style={{ position: "relative", minHeight: "100vh", maxHeight: "1080px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#21389A" }}
      ref={sectionRef}
      id="hero"
    >
      {/* Background Layer */}
      <div ref={bgRef} style={{ position: "absolute", inset: 0, bottom: "-60px", willChange: "transform" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/assets/video/hero section video background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.63) 100%)" }} />
      </div>

      {/* Text Layer */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "120rem", margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 6rem)", textAlign: "center" }}>
        <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "1.4rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>
          Glazing specialists
        </span>
        <h1 style={{ fontSize: "clamp(3.6rem, 6vw, 7.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: "2.4rem" }}>
          Drones, built with Purpose.<br />Flying with Precision.
        </h1>
        <p style={{ fontSize: "clamp(1.6rem, 2vw, 2rem)", color: "rgba(255,255,255,0.7)", maxWidth: "64rem", margin: "0 auto 4rem", lineHeight: 1.6 }}>
          Aeronica Advance Technologies — indigenous UAV solutions for agriculture, GIS, surveillance, and industrial applications.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.6rem", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", fontSize: "1.5rem", fontWeight: 600, padding: "1.2rem 2.8rem", borderRadius: "4px", background: "#fff", color: "#21389A", boxShadow: "0 4px 15px rgba(0,0,0,0.2)", transition: "all 0.3s ease" }}>
            <span>Get in Touch</span>
            <svg viewBox="0 0 100 100" fill="none" style={{ width: "1.6rem", height: "1.6rem" }}>
              <g transform="translate(-18.375, 6.125)">
                <rect x="51" y="14.25" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                <rect x="63.25" y="51" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                <rect x="51" y="63.25" width="10.25" height="10.25" rx="2" fill="currentColor"/>
              </g>
            </svg>
          </Link>
        </div>
      </div>


    </motion.section>
  );
};

export default Hero;
