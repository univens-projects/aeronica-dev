"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function GsapParallax({ children, speed = 0.4, className, style }: GsapParallaxProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const movement = speed * 20;

    const ctx = gsap.context(() => {
      gsap.fromTo(inner,
        { y: `${movement}%` },
        {
          y: `${-movement}%`,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={outerRef} className={className} style={{
      ...style,
      overflow: "hidden",
      position: style?.position || "relative",
    }}>
      <div ref={innerRef} style={{ willChange: "transform", height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
