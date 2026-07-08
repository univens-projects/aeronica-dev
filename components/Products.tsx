"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Weight, Timer, Layers, Radar, Cpu, Gauge } from "lucide-react";
import { DotArrowLeft, DotArrowRight, DotIndicator } from "@/components/DotIcons";
import FadeIn from "./FadeIn";
import MotionParallax from "./MotionParallax";

const products = [
  {
    title: "Samrudhhi-10L",
    tag: "DGCA Certified",
    desc: "A crop spraying drone designed for fast, safe, and efficient pesticide application on fields.",
    href: "/products/samrudhhi-10l",
    img: "/assets/img/Samrudhhi-10L.png",
    specs: [
      { label: "Payload", value: "24.9 Kg" },
      { label: "Flight Time", value: "16 min" },
      { label: "Frame", value: "Carbon Fibre" },
    ],
  },
  {
    title: "Samrudhhi-10LH",
    tag: "Heavy Lift Hybrid",
    desc: "Built for large-scale farming, it allows for more effective crop spraying and coverage.",
    href: "/products/samrudhhi-10lh",
    img: "/assets/img/Samrudhhi-10LH.png",
    specs: [
      { label: "MTOW", value: "31.5 Kg" },
      { label: "Tank Capacity", value: "10 L" },
      { label: "Flight Time", value: "24 min" },
    ],
  },
  {
    title: "Flycra 2.0",
    tag: "Mapping",
    desc: "A high-performance mapping drone that delivers sub-centimeter accuracy. Ideal for GIS surveys, construction monitoring, and infrastructure inspection.",
    href: "/products/flycra-2.0",
    img: "/assets/img/Flycra 2.0.png",
    specs: [
      { label: "Range", value: "7 Km" },
      { label: "Flight Time", value: "45 min" },
      { label: "Weight", value: "9.6 Kg" },
    ],
  },
  {
    title: "Nitya FC",
    tag: "Flight Controller",
    desc: "An indigenous flight controller that provides unprecedented stability and interoperability with our own AI analytics platforms.",
    href: "/products/nitya-fc",
    img: "/assets/img/Nitya Front.png",
    specs: [
      { label: "Processor", value: "STM32" },
      { label: "Sensors", value: "IMU + GPS" },
      { label: "Firmware", value: "ArduPilot" },
    ],
  },
];

// Maps a spec label to a representative icon (data shape unchanged, only affects presentation)
const getSpecIcon = (label: string) => {
  const key = label.toLowerCase();
  if (key.includes("payload") || key.includes("weight")) return Weight;
  if (key.includes("flight") || key.includes("time")) return Timer;
  if (key.includes("frame") || key.includes("firmware")) return Layers;
  if (key.includes("range")) return Radar;
  if (key.includes("processor")) return Cpu;
  return Gauge;
};

const AUTO_SLIDE_MS = 5000;

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dirRef = useRef(0);

  const scrollTo = (index: number) => {
    dirRef.current = index > activeIndex ? 1 : -1;
    setActiveIndex(index);
  };
  const goPrev = () => {
    dirRef.current = -1;
    setActiveIndex((i) => Math.max(0, i - 1));
  };
  const goNext = () => {
    dirRef.current = 1;
    setActiveIndex((i) => Math.min(products.length - 1, i + 1));
  };

  // Auto-slide — advances every AUTO_SLIDE_MS, loops back to the start after the last product
  useEffect(() => {
    const timer = setInterval(() => {
      dirRef.current = 1;
      setActiveIndex((i) => (i + 1) % products.length);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  const accentColor = "#21389a"; // only color already defined in the file
  const product = products[activeIndex];

  return (
    <section id="products" style={{ background: "#fff", color: "#1a1a1a" }}>
      {/* ===== Top intro — left aligned ===== */}
      <FadeIn>
        <div
          style={{
            maxWidth: "160rem", margin: "0 auto",
            padding: "var(--section-py, 6rem) var(--section-px) 3rem",
            textAlign: "left",
          }}
        >
          <span className="section-title" style={{ justifyContent: "flex-start" }}>
            <span></span>Products
          </span>
          <h2 style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Our Platform Ecosystem
          </h2>
          <p style={{ fontSize: "1.6rem", color: "#555", lineHeight: 1.7, maxWidth: "48rem", marginTop: "1.5rem" }}>
            DGCA-certified UAV platforms engineered for Indian conditions, from precision agriculture to industrial inspection.
          </p>
        </div>
      </FadeIn>

      {/* ===== Slide viewport ===== */}
      <div
        style={{
          position: "relative", overflow: "hidden",
          background: "#fff",
          padding: "2.4rem 2rem 2rem",
          minHeight: "min(78vh, 66rem)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="prod-nav-arrow"
          style={{
            position: "absolute", left: "var(--section-px)", top: "50%", transform: "translateY(-50%)", zIndex: 10,

            width: "3.6rem", height: "3.6rem", borderRadius: "50%", border: "1px solid #e5e5e5",
            background: "#fff", color: activeIndex === 0 ? "#ccc" : "#111",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: activeIndex === 0 ? "default" : "pointer", transition: "all 0.2s ease",
          }}
        >
          <DotArrowLeft size={16} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          disabled={activeIndex === products.length - 1}
          className="prod-nav-arrow"
          style={{
            position: "absolute", right: "var(--section-px)", top: "50%", transform: "translateY(-50%)", zIndex: 10,
            width: "3.6rem", height: "3.6rem", borderRadius: "50%", border: "1px solid #e5e5e5",
            background: "#fff", color: activeIndex === products.length - 1 ? "#ccc" : "#111",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: activeIndex === products.length - 1 ? "default" : "pointer", transition: "all 0.2s ease",
          }}
        >
          <DotArrowRight size={16} />
        </button>

        {/* Tabs */}
        <div
          className="prod-tabs"
          style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.6rem",
            marginBottom: "1.2rem", position: "relative", zIndex: 2,
          }}
        >
          {products.map((p, index) => (
            <button
              key={index}
              className={`prod-tab ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => scrollTo(index)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase",
                color: index === activeIndex ? accentColor : "#888",
                fontWeight: index === activeIndex ? 700 : 500,
                transition: "color 0.25s ease", padding: "0.2rem 0",
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            custom={dirRef.current}
            variants={{
              enter: (dir) => ({ x: dir > 0 ? "50%" : "-50%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir) => ({ x: dir > 0 ? "-50%" : "50%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "relative", zIndex: 2, width: "100%", maxWidth: "64rem",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}
          >
            {/* Title — centered, arrows moved outside AnimatePresence */}
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.95rem", textTransform: "uppercase",
                letterSpacing: "0.16em", color: "#888",
              }}>
                {product.tag}
              </span>
              <h3 style={{
                fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em",
                color: accentColor, marginTop: "0.3rem",
              }}>
                {product.title}
              </h3>
            </div>

            {/* Floating image — bigger, sitting on a blue panel */}
            <div
              style={{
                position: "relative", width: "100%", maxWidth: "32rem", aspectRatio: "1 / 1", margin: "1.4rem 0",
                background: `linear-gradient(135deg, ${accentColor} 0%, #009BFF 100%)`,
                borderRadius: "1rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "1.6rem",
              }}
            >
              <MotionParallax speed={0.25} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image
                  src={product.img}
                  alt={product.title}
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.35))" }}
                  priority={activeIndex < 2}
                />
              </MotionParallax>
            </div>

            <div style={{ width: "1px", height: "1.6rem", background: `linear-gradient(to bottom, ${accentColor}80, transparent)` }} />
            <div style={{
              width: "0.7rem", height: "0.7rem", borderRadius: "50%", marginTop: "-0.1rem", marginBottom: "1rem",
              background: "#c8ff4d", boxShadow: "0 0 12px 2px rgba(200,255,77,0.7)",
            }} />

            <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: 1.5, maxWidth: "46rem", marginBottom: "1.6rem" }}>
              {product.desc}
            </p>

            {/* Feature row — horizontal, space-between */}
            <div style={{
              display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center",
              width: "100%", gap: "3.2rem", marginBottom: "2.4rem",
              borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", padding: "2rem 0",
            }}>
              {product.specs.map((spec) => {
                const Icon = getSpecIcon(spec.label);
                return (
                  <div key={spec.label} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <Icon size={16} color={accentColor} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "1.1rem", letterSpacing: "0.03em", textTransform: "uppercase", color: "#111" }}>
                      {spec.value} <span style={{ color: "#888" }}>{spec.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href={product.href}
              className="prod-more-info-btn"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.8rem",
                fontSize: "1.2rem", fontWeight: 600, color: "#fff", textDecoration: "none",
                background: accentColor, padding: "1rem 2rem", borderRadius: "0.4rem",
                textTransform: "uppercase", letterSpacing: "0.04em",
              }}
            >
              More Information
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginTop: "1.2rem", position: "relative", zIndex: 2 }}
        >
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="prod-pagination-btn"
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <DotIndicator active={index === activeIndex} size={14} color={index === activeIndex ? accentColor : "#888"} />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;