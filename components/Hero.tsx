"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useSectionObserver();
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  );

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Initial fast forward to 12s smoothly
      video.playbackRate = 4.0; 
      
      const checkTime = () => {
        if (video.currentTime >= 12) {
          video.playbackRate = 0.5; // Seamlessly transition to slow motion
        } else {
          requestAnimationFrame(checkTime);
        }
      };
      
      requestAnimationFrame(checkTime);
    }

    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const scrollY = window.scrollY;
      const height = sectionRef.current.offsetHeight;
      const progress = Math.min(scrollY / height, 1);
      // EFFECT: Parallax shifting for background only
      bgRef.current.style.transform = `translateY(${progress * -60}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 12;
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
  };

  return (
      <motion.section 
        style={{ filter }}
        className="hero" 
        ref={sectionRef} 
        id="hero"
      >
        {/* Background Layer: Contains cinematic blur-in video */}
        <div className="hero-bg parallax-layer" ref={bgRef} data-parallax-speed="0.35">
          <video 
            ref={videoRef} 
            autoPlay 
            muted 
            playsInline 
            onEnded={handleVideoEnd} 
            className="hero-video hero-bg-animate"
          >
            <source src="/assets/video/hero section video background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        {/* Text Layer: Cinematic entry, subtle parallax on scroll */}
        <div className="hero-container parallax-layer" ref={containerRef} data-parallax-speed="0.1">
          <span className="section-label">Glazing specialists</span>
          <h1 className="hero-heading">Drones, built with Purpose.<br />Flying with Precision.</h1>
          <div className="hero-text">Aeronica Advance Technologies — indigenous UAV solutions for agriculture, GIS, surveillance, and industrial applications.</div>
          <div className="hero-ctas">
            <a href="/contact" className="cta-button hero-cta-btn">
              <span className="cta-text">Get in Touch</span>
              <span className="dot-grid-icon">
                <svg viewBox="0 0 100 100" fill="none">
                  <g transform="translate(-18.375, 6.125)">
                    <rect x="51" y="14.25" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                    <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                    <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                    <rect x="63.25" y="51" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                    <rect x="51" y="63.25" width="10.25" height="10.25" rx="2" fill="currentColor"/>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <Link href="/services/gis-survey-mapping" className="hero-overlay">
          <span className="hero-pagination">01 / 03</span>
          <span className="hero-title">GIS Survey & Mapping</span>
        </Link>
      </motion.section>
    );
};

export default Hero;
