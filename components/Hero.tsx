"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DotArrowRight } from "@/components/DotIcons";

interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

// Sample images (Unsplash License — free for commercial use).
// Swap these for your own Aeronica drone photography before going live.
const slides: Slide[] = [
  {
    image:
      "/assets/images/Hero-Section/Sam 10LH website image 2.png",
    eyebrow: "Agriculture",
    title: "Samrudhhi 10LH",
    description:
      "Improve farm productivity with the Samrudhhi-10LH agriculture spraying drone. Designed for efficient pesticide and nutrient application across different crops.",
    ctaLabel: "Get in Touch",
    ctaHref: "/contact",
  },
  
  {
    image:
      "/assets/images/Website Hero Images/Flycra 2.0 Hero img.png",
    eyebrow: "GIS & Mapping",
    title: "Flycra 2.0",
    description:
      "Flycra 2.0 helps capture accurate aerial data for mapping, inspections, surveying, and surveillance across industrial and commercial projects.",
    ctaLabel: "View Products",
    ctaHref: "/products/flycra-20",
  },
   {
    image:
      "/assets/images/Website Hero Images/Flyura drone.png",
    eyebrow: "Defence & Surveillance",
    title: "Flyura",
    description:
      "Flyura is designed for surveillance across defence and critical infrastructure. Equipped with EO/IR imaging, laser rangefinder, and AI target detection.",
    ctaLabel: "Learn More",
    ctaHref: "/products/flyura",
  },
  {
    image:
      "/assets/images/Website Hero Images/Uday 1.6 (2).png",
    eyebrow: "Reconnaissance",
    title: "Uday 1.6",
    description:
      "UDAY 1.6 compact surveillance and reconnaissance drone. High-resolution aerial imaging capabilities for defence operations, border security, and critical infrastructure assessment.",
    ctaLabel: "Contact Us",
    ctaHref: "/products/uday-16",
  },
];

const AUTOPLAY_DELAY = 6000;

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: direction === "left" ? "rotate(180deg)" : undefined }}
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const activeRef = useRef(active);
  activeRef.current = active;

  const goTo = useCallback((index: number, dir?: number) => {
    const total = slides.length;
    const newIndex = (index + total) % total;
    setDirection(dir ?? (newIndex > activeRef.current ? 1 : -1));
    setActive(newIndex);
  }, []);

  // Restarts automatically whenever `active` changes, whether that change
  // came from autoplay or a manual click — so the timing never drifts and
  // never gets permanently stuck.
  useEffect(() => {
    if (isPaused) return;
    const id = setTimeout(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => clearTimeout(id);
  }, [active, isPaused]);

  const current = slides[active];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        maxHeight: "1080px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#21389A",
      }}
      id="hero"
    >
      {/* Background — renders directly so it's visible without JS */}
      <div className="hero-bg-container" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image
          src={current.image}
          alt={current.title.replace("\n", " ")}
          fill
          priority={active === 0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />
      </div>

      {/* Prev / Next Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(active - 1, -1)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="hero-arrow hero-arrow-left"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(active + 1, 1)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="hero-arrow hero-arrow-right"
      >
        <ArrowIcon direction="right" />
      </button>

      {/* Text Layer */}
      <div
        className="hero-text-wrap"
        style={{
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          width: "100%",
          maxWidth: "120rem",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 4vw, 6rem)",
          textAlign: "left",
          minHeight: "42rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
          }}
        >
          <div style={{ transform: "translateY(-50%)", paddingLeft: "5rem" }}>
            <h1 className="hero-title">{current.title}</h1>
            <p className="hero-description">{current.description}</p>
            <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap" }}>
              <Link href={current.ctaHref} className="hero-cta">
                <span>{current.ctaLabel}</span>
                <DotArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div
        className="hero-controls"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image + index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`hero-control-item ${index === active ? "is-active" : ""}`}
          >

            <span className="hero-control-track">
              {index === active && (
                <motion.span
                  key={active}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: AUTOPLAY_DELAY / 1000,
                    ease: "linear",
                  }}
                  style={{
                    display: "block",
                    height: "100%",
                    background: "#fff",
                    transformOrigin: "left",
                  }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

    </section>
  );
};

export default Hero;