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
      padding: "8rem var(--section-px)",
      color: "#fff",
      overflow: "hidden",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <MotionReveal as="div" y={15}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.2rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 600,
              display: "block",
              marginBottom: "1.2rem",
            }}>
              Our Impact
            </span>
            <h2 style={{
              fontSize: "clamp(2.8rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#fff",
            }}>
              By the Numbers
            </h2>
          </div>
        </MotionReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "0.4rem",
          overflow: "hidden",
        }}>
          {stats.map((stat, i) => (
            <MotionReveal key={i} as="div" y={15} delay={i * 0.1}>
              <div style={{
                textAlign: "center",
                padding: "3.5rem 2rem",
                background: "#21389A",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.15rem" }}>
                  <span style={{ fontSize: "clamp(3.2rem, 4vw, 4.8rem)", fontWeight: 500, lineHeight: 1, color: "#fff", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>
                    <StatNumber target={stat.value} animated={animated} />
                  </span>
                  <span style={{ fontSize: "clamp(1.6rem, 2vw, 2.4rem)", fontWeight: 300, color: "rgba(255,255,255,0.2)", lineHeight: 1 }}>
                    {stat.suffix}
                  </span>
                </div>
                <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.3)", fontWeight: 500, marginTop: "0.6rem", letterSpacing: "0.08em", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
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
