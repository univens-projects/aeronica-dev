"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "section" | "div";
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export default function GsapReveal({
  children,
  className,
  style,
  as = "div",
  y = 50,
  duration = 0.8,
  delay = 0,
  stagger = 0,
}: GsapRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = stagger > 0 ? el.children : el;
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger: stagger || undefined,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [y, duration, delay, stagger]);

  const Tag = as === "section" ? "section" : "div";
  return (
    <Tag ref={elRef} className={className} style={style}>
      {children}
    </Tag>
  );
}
