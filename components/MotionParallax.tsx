"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MotionParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MotionParallax({ children, speed = 0.4, className, style }: MotionParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const movement = speed * 20;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${movement}%`, `${-movement}%`]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        overflow: "hidden",
        position: style?.position || "relative",
      }}
    >
      <motion.div style={{ y, willChange: "transform", height: "100%", width: "100%" }}>
        {children}
      </motion.div>
    </div>
  );
}
