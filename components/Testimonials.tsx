"use client";

import React, { useState, useEffect } from "react";
import { DotArrowLeft, DotArrowRight, DotIndicator } from "@/components/DotIcons";
import MotionReveal from "@/components/MotionReveal";

const testimonials = [
  {
    quote:
      "Aeronica delivered exceptional precision in their GIS mapping for our railway corridor project. The sub-centimeter accuracy and detailed terrain analysis exceeded our expectations.",
    author: "Chief Engineer",
    title: "Central Railway",
  },
  {
    quote:
      "The drone spraying service from Aeronica transformed our farming operations. The precision and efficiency of their DGCA-certified Samrudhhi-10L drones reduced our pesticide usage by 30% while improving coverage.",
    author: "Farm Operations Head",
    title: "BASF India",
  },
  {
    quote:
      "Aeronica's Unified Surveillance System has been instrumental in securing our pipeline infrastructure. The AI-powered anomaly detection and real-time monitoring capabilities give us unprecedented visibility.",
    author: "Safety & Security Director",
    title: "IOCL",
  },
  {
    quote:
      "Working with Aeronica on our mine volumetric survey was a fantastic experience. Their drone-based surveying reduced our measurement time from weeks to days, with far greater accuracy.",
    author: "Mine Operations Manager",
    title: "JSW Steel",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <section
      className="section-py-lg"
      id="testimonials"
      style={{
        background: "#21389A",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "160rem",
          margin: "0 auto",
          padding: "0 var(--section-px)",
          position: "relative",
        }}
      >
        {/* Background Quote */}
        <span
          style={{
            position: "absolute",
            top: "-6rem",
            left: "var(--section-px)",
            fontSize: "clamp(20rem, 30vw, 40rem)",
            lineHeight: 1,
            fontWeight: 700,
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            pointerEvents: "none",
            fontFamily: "Georgia, serif",
          }}
        >
          &ldquo;
        </span>

        {/* Heading */}
        <MotionReveal as="div" y={20}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "6rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.6rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(255,255,255,0.35)",
                }}
              />

              <span
                style={{
                  fontSize: "1.1rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Client Testimonials
              </span>

              <div
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(255,255,255,0.35)",
                }}
              />
            </div>

            <h2
              style={{
                fontSize: "clamp(3.2rem, 5vw, 5.2rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Trusted by Industry Leaders
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "2rem auto 0",
                color: "rgba(255,255,255,0.68)",
                fontSize: "1.6rem",
                lineHeight: 1.8,
              }}
            >
              From critical infrastructure and mining to agriculture and
              industrial operations, organizations trust Aeronica to deliver
              reliable drone, GIS, surveillance, and geospatial intelligence
              solutions.
            </p>
          </div>
        </MotionReveal>

        {/* Testimonial */}
        <MotionReveal as="div" y={20}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                transition: "opacity 0.5s ease",
                minHeight: "16rem",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.6rem, 4.5vw, 2.8rem)",
                  lineHeight: 1.4,
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  opacity: 0.92,
                }}
              >
                {t.quote}
              </p>
            </div>

            <div className="testimonials-footer">
              <div>
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {t.author}
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: "0.15rem",
                  }}
                >
                  {t.title}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  style={{
                    width: "3.2rem",
                    height: "3.2rem",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <DotArrowLeft size={16} />
                </button>

                <div
                  style={{
                    display: "flex",
                    gap: "0.8rem",
                    alignItems: "center",
                  }}
                >
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <DotIndicator active={i === currentIndex} size={14} />
                    </button>
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  style={{
                    width: "3.2rem",
                    height: "3.2rem",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <DotArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default Testimonials;