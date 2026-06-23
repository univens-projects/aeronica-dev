"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const industryLinks = [
  { label: "Government & Public Sector", href: "/industries/government" },
  { label: "Agriculture & Precision Farming", href: "/industries/agriculture" },
  { label: "Construction & Infrastructure", href: "/industries/construction" },
  { label: "Mining & Volumetric Analysis", href: "/industries/mining" },
  { label: "Utilities & Grid Management", href: "/industries/utilities" },
  { label: "Energy & Renewable Power", href: "/industries/energy" },
  { label: "Telecommunications", href: "/industries/telecom" },
  { label: "Transportation & Logistics", href: "/industries/transportation" },
];

const caseStudyLinks = [
  { label: "Government Projects", href: "/case-studies/government-projects" },
  { label: "Infrastructure Projects", href: "/case-studies/infrastructure-projects" },
  { label: "Agriculture Projects", href: "/case-studies/agriculture-projects" },
  { label: "Mining Projects", href: "/case-studies/mining-projects" },
  { label: "Smart City Projects", href: "/case-studies/smart-city-projects" },
  { label: "Utility Projects", href: "/case-studies/utility-projects" },
  { label: "Project Gallery", href: "/case-studies/project-gallery" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showBackground = pathname !== "/" || isScrolled;
  const isIndustriesActive = pathname.startsWith("/industries");
  const isCaseStudiesActive = pathname.startsWith("/case-studies");

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
            <Link href="/about" className={`navbar-link ${pathname.startsWith("/about") ? "active" : ""}`}>About</Link>
            <Link href="/solutions" className={`navbar-link ${pathname.startsWith("/solutions") ? "active" : ""}`}>Solutions</Link>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("industries")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isIndustriesActive ? "active" : ""}`}>
                Industries <ChevronDown style={{ width: "1.2rem", height: "1.2rem", marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "industries" ? "is-open" : ""}`}>
                {industryLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="navbar-dropdown-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("case-studies")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isCaseStudiesActive ? "active" : ""}`}>
                Case Studies <ChevronDown style={{ width: "1.2rem", height: "1.2rem", marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "case-studies" ? "is-open" : ""}`}>
                {caseStudyLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="navbar-dropdown-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/resources" className={`navbar-link ${pathname.startsWith("/resources") ? "active" : ""}`}>Resources</Link>
            <Link href="/contact" className={`navbar-link ${pathname.startsWith("/contact") ? "active" : ""}`}>Contact</Link>
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
          <Link href="/about" className={`nav-overlay-link ${pathname.startsWith("/about") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/solutions" className={`nav-overlay-link ${pathname.startsWith("/solutions") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
          
          <div className="nav-overlay-group">
            <button 
              className={`nav-overlay-link nav-overlay-group-trigger ${isIndustriesActive ? "active" : ""}`}
              onClick={() => setOpenDropdown(openDropdown === "mobile-industries" ? null : "mobile-industries")}
            >
              Industries <ChevronDown style={{ width: "1.2rem", height: "1.2rem" }} />
            </button>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-industries" ? "is-open" : ""}`}>
              {industryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <button 
              className={`nav-overlay-link nav-overlay-group-trigger ${isCaseStudiesActive ? "active" : ""}`}
              onClick={() => setOpenDropdown(openDropdown === "mobile-case-studies" ? null : "mobile-case-studies")}
            >
              Case Studies <ChevronDown style={{ width: "1.2rem", height: "1.2rem" }} />
            </button>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-case-studies" ? "is-open" : ""}`}>
              {caseStudyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/resources" className={`nav-overlay-link ${pathname.startsWith("/resources") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
          <Link href="/contact" className="nav-overlay-cta" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
