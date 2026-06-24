"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import MotionParallax from "./MotionParallax";

const products = [
  {
    title: "Samrudhhi-10L",
    tag: "DGCA Certified",
    desc: "Our flagship agricultural UAV, designed for precision spraying and maximum efficiency in Indian farming conditions. Engineered for reliability and ease of use.",
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
    tag: "Heavy Lift",
    desc: "The heavy-duty sibling of the Samrudhhi series, capable of transporting larger payloads for industrial applications and large-scale agricultural needs.",
    href: "/products/samrudhhi-10lh",
    img: "/assets/img/Samrudhhi-10LH.png",
    specs: [
      { label: "Payload", value: "30 Kg" },
      { label: "Flight Time", value: "20 min" },
      { label: "Frame", value: "Carbon Fibre" },
    ],
  },
  {
    title: "Flycra 2.0",
    tag: "Mapping",
    desc: "A compact, high-performance mapping drone that delivers sub-centimeter accuracy. Ideal for GIS surveys, construction monitoring, and infrastructure inspection.",
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
    desc: "The brain of our UAVs. An indigenous flight controller offering unparalleled stability and integration with our proprietary AI analytics platforms.",
    href: "/products/nitya-fc",
    img: "/assets/img/Nitya Front.png",
    specs: [
      { label: "Processor", value: "STM32" },
      { label: "Sensors", value: "IMU + GPS" },
      { label: "Firmware", value: "ArduPilot" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    setActiveIndex(index);
    containerRef.current?.children[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 1;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    const index = Math.round(scrollLeft / totalCardWidth);
    if (index !== activeIndex && index >= 0 && index < products.length) {
      setActiveIndex(index);
    }
  };

  const accentColor = "#21389a";

  return (
    <section style={{ padding: "8rem var(--section-px)", maxWidth: "1440px", margin: "0 auto", color: "#1a1a1a" }} id="products">
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
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
          <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
            <button
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              style={{
                width: "4rem", height: "4rem", borderRadius: "50%", border: "1px solid #e5e5e5",
                background: activeIndex === 0 ? "#f3f0ec" : "#fff", color: activeIndex === 0 ? "#888" : "#111",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: activeIndex === 0 ? "default" : "pointer",
                transition: "all 0.2s ease",
              }}
              disabled={activeIndex === 0}
            >
              <ChevronLeft style={{ width: "1.8rem", height: "1.8rem" }} />
            </button>
            <button
              onClick={() => scrollTo(Math.min(products.length - 1, activeIndex + 1))}
              style={{
                width: "4rem", height: "4rem", borderRadius: "50%", border: "1px solid #e5e5e5",
                background: activeIndex === products.length - 1 ? "#f3f0ec" : "#fff", color: activeIndex === products.length - 1 ? "#888" : "#111",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: activeIndex === products.length - 1 ? "default" : "pointer",
                transition: "all 0.2s ease",
              }}
              disabled={activeIndex === products.length - 1}
            >
              <ChevronRight style={{ width: "1.8rem", height: "1.8rem" }} />
            </button>
          </div>
        </div>
      </FadeIn>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{ position: "relative" }}
      >
        <div
          ref={containerRef}
          onScroll={handleScroll}
          style={{
            display: "flex", gap: "2.4rem", overflowX: "auto", scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom: "0.4rem",
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              custom={index}
              variants={cardVariants}
              style={{
                flexShrink: 0, scrollSnapAlign: "start",
                background: "#fff", border: "1px solid #e5e5e5", borderRadius: "0.4rem", overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}
            >
              <div style={{
                height: "24rem", background: `linear-gradient(135deg, ${accentColor} 0%, #009BFF 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }} />
                <MotionParallax speed={0.25} style={{ position: "relative", zIndex: 1, width: "70%", height: "70%" }}>
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={280}
                    height={200}
                    style={{
                      width: "100%", height: "100%", objectFit: "contain",
                      filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.3))",
                    }}
                    priority={index < 2}
                  />
                </MotionParallax>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "1rem", textTransform: "uppercase",
                  letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", position: "absolute", top: "1.6rem", left: "1.6rem",
                  background: "rgba(255,255,255,0.1)", padding: "0.3rem 1rem", borderRadius: "0.4rem",
                }}>
                  {product.tag}
                </span>
                <span style={{
                  fontSize: "3rem", fontWeight: 700, color: "rgba(255,255,255,0.08)",
                  fontFamily: "var(--font-mono)", position: "absolute", bottom: "1.2rem", right: "1.6rem", lineHeight: 1,
                  letterSpacing: "-0.03em", userSelect: "none",
                }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div style={{ padding: "2.4rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.8rem", lineHeight: 1.2 }}>{product.title}</h3>
                <p style={{ fontSize: "1.4rem", color: "#555", lineHeight: 1.6, flexGrow: 1, marginBottom: "2rem" }}>{product.desc}</p>
                <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "1.6rem", marginBottom: "2rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.8rem" }}>
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginBottom: "0.2rem" }}>{spec.label}</div>
                        <div style={{ fontSize: "1.4rem", fontWeight: 600, color: "#111" }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href={product.href} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.6rem", alignSelf: "flex-start",
                  fontSize: "1.3rem", fontWeight: 600, color: accentColor, textDecoration: "none", padding: "0.6rem 0",
                }}>
                  View Details <ArrowRight style={{ width: "1.3rem", height: "1.3rem" }} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginTop: "3rem" }}
      >
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            style={{
              width: index === activeIndex ? "2.4rem" : "0.8rem", height: "0.8rem", borderRadius: "0.4rem",
              background: index === activeIndex ? accentColor : "#888", border: "none", cursor: "pointer",
              transition: "all 0.3s ease", padding: 0,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Products;
