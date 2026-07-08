"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
      "/assets/images/Hero-Section/Sam 10L website image 1.png",
    eyebrow: "Agriculture",
    title: "Samrudhhi 10L",
    description:
      "Where Innovation Meets Modern Farming",
    ctaLabel: "Get in Touch",
    ctaHref: "/contact",
  },
  {
    image:
      "/assets/images/Hero-Section/Sam 10LH website image 2.png",
    eyebrow: "Industrial",
    title: "Samrudhhi 10LH",
    description:
      "Built for Bigger Fields",
    ctaLabel: "View Products",
    ctaHref: "/products",
  },
  {
    image:
      "/assets/images/agriculture spraying.jpg",
    eyebrow: "GIS & Mapping",
    title: "Flycra 2.4",
    description:
      "See Beyond the Surfaces",
    ctaLabel: "Learn More",
    ctaHref: "/solutions/gis",
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

// Background slides horizontally across its full width — a classic
// sliding-door carousel effect (new slide pushes the old one out).
const bgSlideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

// Text uses the EXACT same transform, duration, and easing as the
// background slide — so image + text move together as one single unit.
const textSlideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

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
      {/* Background Slides — slide left/right as a unit */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={active}
            custom={direction}
            variants={bgSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ position: "absolute", inset: 0 }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: AUTOPLAY_DELAY / 1000 + 1, ease: "linear" }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={current.image}
                alt={current.title.replace("\n", " ")}
                fill
                priority={active === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>
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

      {/* Text Layer — absolutely positioned inside its wrapper so the
          exiting and entering slides overlap in place instead of
          stacking in normal flow (which caused the vertical jump). */}
      <div
        className="hero-text-wrap"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={active}
            custom={direction}
            variants={textSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
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
                  <span className="hero-cta">{current.ctaLabel}</span>
                  <DotArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
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

      <style jsx>{`
        .hero-text-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 120rem;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 6rem);
          text-align: left;
          min-height: 42rem; /* reserve space so absolutely-positioned
                                 text children don't collapse the parent
                                 and the block stays vertically centered */
        }

        .hero-eyebrow {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(3.2rem, 5.5vw, 6.8rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 2.4rem;
          max-width: 56rem;
          white-space: pre-line;
        }

        .hero-description {
          font-size: clamp(1.6rem, 2vw, 2rem);
          color: rgba(255, 255, 255, 0.75);
          max-width: 52rem;
          margin: 0 0 4rem;
          line-height: 1.6;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: 600;
          padding: 1.2rem 2.8rem;
          border-radius: 4px;
          background: #21389a;
          color: #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          background: #1a2d7a;
        }

        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .hero-arrow:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.06);
        }

        .hero-arrow-left {
          left: var(--section-px);
        }

        .hero-arrow-right {
          right: var(--section-px);
        }

        .hero-controls {
          position: absolute;
          bottom: clamp(2rem, 4vw, 3.6rem);
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          gap: 2.4rem;
          padding: 1rem 1.6rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-control-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hero-control-index {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
        }

        .hero-control-item.is-active .hero-control-index {
          color: #fff;
        }

        .hero-control-track {
          display: block;
          width: 3.6rem;
          height: 3px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.25);
          overflow: hidden;
        }

          @media (max-width: 768px) {
          .hero-text-wrap {
            min-height: 38rem;
          }

          .hero-title {
            max-width: 100%;
          }

          .hero-description {
            max-width: 100%;
            margin-bottom: 3rem;
          }

          .hero-arrow {
            width: 3.8rem;
            height: 3.8rem;
          }

          .hero-controls {
            gap: 1.4rem;
            bottom: 1.6rem;
            padding: 0.8rem 1.2rem;
          }

          .hero-control-track {
            width: 2.4rem;
          }

          .hero-control-index {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          section#hero {
            min-height: 70vh;
          }

          .hero-text-wrap {
            min-height: 30rem;
          }

          section#hero img {
            object-fit: contain !important;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-controls {
            gap: 1rem;
          }

          .hero-control-track {
            width: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;