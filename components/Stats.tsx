"use client";

import React, { useEffect, useRef, useState } from "react";
import MotionReveal from "@/components/MotionReveal";

const StatNumber = ({ target, animated }: { target: number; animated: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (animated) {
      let start = 0;
      const duration = 2200;
      const startTime = performance.now();
      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, [animated, target]);

  return <span>{count}</span>;
};

const stats = [
  { value: 120, suffix: "+", label: "Cities Covered" },
  { value: 25000, suffix: "+", label: "Acres Surveyed" },
  { value: 98, suffix: "%", label: "Mapping Accuracy" },
  { value: 4, suffix: "+", label: "DGCA Certifications" },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats" style={{
      background: "#21389A",
      padding: "10rem var(--section-px)",
      color: "#fff",
      overflow: "hidden",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div style={{
        position: "absolute", top: "-30%", right: "-10%",
        width: "50rem", height: "50rem",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,155,255,0.06) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", left: "-5%",
        width: "40rem", height: "40rem",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,155,255,0.04) 0%, transparent 70%)",
      }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <MotionReveal as="div" y={15}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.2rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 500,
            }}>
              Our Impact
            </span>
            <h2 style={{
              fontSize: "clamp(2.8rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginTop: "1.5rem",
              lineHeight: 1.15,
              color: "#fff",
            }}>
              By the Numbers
            </h2>
            <p style={{
              fontSize: "1.6rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              marginTop: "2rem",
              maxWidth: "56rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              DGCA-certified drone solutions across agriculture, infrastructure, and surveillance.
            </p>
          </div>
        </MotionReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "0.4rem",
          overflow: "hidden",
        }}>
          {stats.map((stat, i) => (
            <MotionReveal key={i} as="div" y={25} delay={i * 0.1}>
              <div style={{
                textAlign: "center",
                padding: "4rem 2rem 3.5rem",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(4px)",
                cursor: "default",
              }}>
                <div style={{
                  width: "2.5rem", height: "2px",
                  background: "linear-gradient(90deg, rgba(0,155,255,0.5), rgba(0,155,255,0.1))",
                  borderRadius: "1px",
                  margin: "0 auto 2rem",
                }} />
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.15rem" }}>
                  <span style={{ fontSize: "clamp(3.6rem, 5vw, 6rem)", fontWeight: 600, lineHeight: 1, color: "#fff", fontFamily: "var(--font-mono)", letterSpacing: "-0.04em" }}>
                    <StatNumber target={stat.value} animated={animated} />
                  </span>
                  <span style={{ fontSize: "clamp(1.8rem, 2.5vw, 3rem)", fontWeight: 300, color: "rgba(255,255,255,0.25)", lineHeight: 1 }}>
                    {stat.suffix}
                  </span>
                </div>
                <div style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, marginTop: "0.8rem", letterSpacing: "0.06em", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
