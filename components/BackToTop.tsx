"use client";

import React, { useState, useEffect } from "react";
import { DotArrowUp } from "@/components/DotIcons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      className={`back-to-top ${isVisible ? "is-visible" : ""}`} 
      onClick={scrollToTop}
      aria-label="Back to top"
      suppressHydrationWarning
    >
      <DotArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
