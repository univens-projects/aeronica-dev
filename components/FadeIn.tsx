"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "section" | "div";
}

export default function FadeIn({ children, delay = 0, y = 40, className, style, as = "div" }: FadeInProps) {
  const Tag = as === "section" ? motion.section : motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
