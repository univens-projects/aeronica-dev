"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  style?: React.CSSProperties;
  action?: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  style,
  action,
}: SectionHeaderProps) {
  const textColor = light ? "#fff" : "#1a1a1a";
  const mutedColor = light ? "rgba(255,255,255,0.6)" : "#555";
  const metaColor = light ? "rgba(255,255,255,0.4)" : "#888";

  return (
    <motion.div
      className={className}
      style={{
        marginBottom: "5rem",
        maxWidth: align === "center" ? "80rem" : undefined,
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
        ...style,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "80px 0px" }}
    >
      {eyebrow && (
        <motion.span
          variants={childVariants}
          className="section-title"
          style={{
            justifyContent: "flex-start",
            color: metaColor,
          }}
        >
          <span></span>
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={childVariants}
        style={{
          fontSize: "clamp(2.8rem, 4vw, 4rem)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          marginTop: "1.5rem",
          lineHeight: 1.15,
          color: textColor,
          textAlign: align,
        }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={childVariants}
          style={{
            fontSize: "1.6rem",
            color: mutedColor,
            lineHeight: 1.7,
            maxWidth: align === "left" ? "56rem" : "60rem",
            marginTop: "2rem",
            textAlign: align,
          }}
        >
          {description}
        </motion.p>
      )}
      {action && (
        <motion.div variants={childVariants} className="section-header-action" style={{ textAlign: "right", marginTop: "2rem" }}>
          {action}
        </motion.div>
      )}
    </motion.div>
  );
}
