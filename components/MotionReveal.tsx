"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "section" | "div";
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export default function MotionReveal({
  children,
  className,
  style,
  as = "div",
  y = 50,
  duration = 0.7,
  delay = 0,
  stagger = 0,
}: MotionRevealProps) {
  const Tag = as === "section" ? motion.section : motion.div;

  if (stagger > 0) {
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    };

    const childVariants = {
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: [0.4, 0, 0.2, 1] as const },
      },
    };

    return (
      <Tag
        className={className}
        style={style}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px 0px" }}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants} style={{ height: "100%" }}>
            {child}
          </motion.div>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
