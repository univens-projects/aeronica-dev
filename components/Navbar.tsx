"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Approximately 70% of viewport height for transition
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBackground = pathname !== "/" || isScrolled;

  return (
    <>
      <div className={`navbar ${showBackground ? "is-scrolled" : ""}`} id="navbar" suppressHydrationWarning>
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" aria-label="Aeronica">
            <Image 
              src={showBackground ? "/assets/img/logo1.png" : "/assets/img/logo-lite.png"} 
              alt="Aeronica Logo" 
              width={120} 
              height={48} 
              className="navbar-logo-img"
            />
          </Link>

          <nav className="navbar-menu" id="navbarMenu">
            <Link href="/" className={`navbar-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link href="/services" className={`navbar-link ${pathname === "/services" ? "active" : ""}`}>Services</Link>
            <Link href="/technology" className={`navbar-link ${pathname === "/technology" ? "active" : ""}`}>Technology</Link>
            <Link href="/about" className={`navbar-link ${pathname === "/about" ? "active" : ""}`}>About</Link>
          </nav>

          <div className="navbar-actions">
            <Link href="/contact" className="navbar-cta-button">
              <span>Get in Touch</span>
              <svg className="navbar-cta-icon" viewBox="0 0 100 100" fill="none">
                <g transform="translate(-18.375, 6.125)">
                  <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                  <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                  <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                  <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                  <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                </g>
              </svg>
            </Link>
            <button 
              className={`navbar-toggle ${isMobileMenuOpen ? "is-active" : ""}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-overlay ${isMobileMenuOpen ? "is-open" : ""}`} id="navOverlay">
        <nav className="nav-overlay-menu">
          <Link href="/" className={`nav-overlay-link ${pathname === "/" ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className={`nav-overlay-link ${pathname === "/services" ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/technology" className={`nav-overlay-link ${pathname === "/technology" ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Technology</Link>
          <Link href="/about" className={`nav-overlay-link ${pathname === "/about" ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" className="nav-overlay-cta" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
