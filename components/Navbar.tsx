"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { DotArrowDown, DotCross } from "@/components/DotIcons";

const solutionCategories = [
  {
    title: "Survey & Mapping",
    links: [
      { label: "Drone Survey & Mapping", href: "/solutions/drone-survey-mapping" },
      { label: "GIS & Geospatial Intelligence", href: "/solutions/gis-geospatial-intelligence" },
    ],
  },
  {
    title: "Industry Applications",
    links: [
      { label: "Infrastructure Inspection", href: "/solutions/infrastructure-inspection" },
      { label: "Disaster & Emergency Response", href: "/solutions/disaster-emergency-response" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "AI Drone Intelligence", href: "/solutions/ai-drone-intelligence" },
    ],
  },
];

const industryCategories = [
  {
    title: "Industrial & Energy",
    links: [
      { label: "Mining & Volumetric Analysis", href: "/industries/mining" },
      { label: "Energy & Renewable Power", href: "/industries/energy" },
    ],
  },
  {
    title: "Infrastructure",
    links: [
      { label: "Construction & Infrastructure", href: "/industries/construction" },
      { label: "Utilities & Grid Management", href: "/industries/utilities" },
      { label: "Transportation & Logistics", href: "/industries/transportation" },
    ],
  },
  {
    title: "Public Sector & Agriculture",
    links: [
      { label: "Government & Public Sector", href: "/industries/government" },
      { label: "Agriculture & Precision Farming", href: "/industries/agriculture" },
      { label: "Telecommunications", href: "/industries/telecom" },
    ],
  },
];

const solutionLinks = solutionCategories.flatMap(c => c.links);
const industryLinks = industryCategories.flatMap(c => c.links);

const caseStudyCategories = [
  {
    title: "By Sector",
    links: [
      { label: "Government Projects", href: "/case-studies/government-projects" },
      { label: "Infrastructure Projects", href: "/case-studies/infrastructure-projects" },
      { label: "Agriculture Projects", href: "/case-studies/agriculture-projects" },
      { label: "Mining Projects", href: "/case-studies/mining-projects" },
      { label: "Utility Projects", href: "/case-studies/utility-projects" },
    ],
  },
  {
    title: "Featured",
    links: [
      { label: "Smart City Projects", href: "/case-studies/smart-city-projects" },
      { label: "Project Gallery", href: "/case-studies/project-gallery" },
    ],
  },
];

const caseStudyLinks = caseStudyCategories.flatMap(c => c.links);

const resourceCategories = [
  {
    title: "Content",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "News & Media", href: "/resources/news-media" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Drone Regulations", href: "/resources/drone-regulations" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Downloads", href: "/resources/downloads" },
    ],
  },
];

const resourceLinks = resourceCategories.flatMap(c => c.links);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
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
  const isSolutionsActive = pathname.startsWith("/solutions");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isCaseStudiesActive = pathname.startsWith("/case-studies");
  const isResourcesActive = pathname.startsWith("/resources");

  return (
    <>
      <div className={`navbar ${showBackground ? "is-scrolled" : ""}`} id="navbar" suppressHydrationWarning>
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" aria-label="Aeronica">
            <Image 
              src="/assets/img/aeronica-logo.png" 
              alt="Aeronica Logo" 
              width={160} 
              height={64} 
              className="navbar-logo-img"
            />
          </Link>

          <nav className="navbar-menu" id="navbarMenu">
            <Link href="/" className={`navbar-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link href="/about" className={`navbar-link ${pathname.startsWith("/about") ? "active" : ""}`}>About</Link>
            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isSolutionsActive ? "active" : ""}`} onClick={() => router.push("/solutions")}>
                Solutions <DotArrowDown size={12} style={{ marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "solutions" ? "is-open" : ""}`}>
                <div className="navbar-dropdown-grid">
                  {solutionCategories.map((cat) => (
                    <div key={cat.title} className="navbar-dropdown-col">
                      <span className="navbar-dropdown-heading">{cat.title}</span>
                      {cat.links.map((link) => (
                        <Link key={link.href} href={link.href} className="navbar-dropdown-link">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("industries")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isIndustriesActive ? "active" : ""}`} onClick={() => router.push("/industries")}>
                Industries <DotArrowDown size={12} style={{ marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "industries" ? "is-open" : ""}`}>
                <div className="navbar-dropdown-grid">
                  {industryCategories.map((cat) => (
                    <div key={cat.title} className="navbar-dropdown-col">
                      <span className="navbar-dropdown-heading">{cat.title}</span>
                      {cat.links.map((link) => (
                        <Link key={link.href} href={link.href} className="navbar-dropdown-link">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("case-studies")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isCaseStudiesActive ? "active" : ""}`} onClick={() => router.push("/case-studies")}>
                Case Studies <DotArrowDown size={12} style={{ marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "case-studies" ? "is-open" : ""}`}>
                <div className="navbar-dropdown-grid">
                  {caseStudyCategories.map((cat) => (
                    <div key={cat.title} className="navbar-dropdown-col">
                      <span className="navbar-dropdown-heading">{cat.title}</span>
                      {cat.links.map((link) => (
                        <Link key={link.href} href={link.href} className="navbar-dropdown-link">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isResourcesActive ? "active" : ""}`} onClick={() => router.push("/resources")}>
                Resources <DotArrowDown size={12} style={{ marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "resources" ? "is-open" : ""}`}>
                <div className="navbar-dropdown-grid">
                  {resourceCategories.map((cat) => (
                    <div key={cat.title} className="navbar-dropdown-col">
                      <span className="navbar-dropdown-heading">{cat.title}</span>
                      {cat.links.map((link) => (
                        <Link key={link.href} href={link.href} className="navbar-dropdown-link">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="navbar-actions">
            <Link href="/contact" className="navbar-cta-button">
              <span>Get in Touch</span>
              <DotCross size={14} className="navbar-cta-icon" />
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
          <div className="nav-overlay-group">
            <button 
              className={`nav-overlay-link nav-overlay-group-trigger ${isSolutionsActive ? "active" : ""}`}
              onClick={() => setOpenDropdown(openDropdown === "mobile-solutions" ? null : "mobile-solutions")}
            >
              Solutions <DotArrowDown size={12} />
            </button>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-solutions" ? "is-open" : ""}`}>
              {solutionLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <button 
              className={`nav-overlay-link nav-overlay-group-trigger ${isIndustriesActive ? "active" : ""}`}
              onClick={() => setOpenDropdown(openDropdown === "mobile-industries" ? null : "mobile-industries")}
            >
              Industries <DotArrowDown size={12} />
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
              Case Studies <DotArrowDown size={12} />
            </button>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-case-studies" ? "is-open" : ""}`}>
              {caseStudyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <button 
              className={`nav-overlay-link nav-overlay-group-trigger ${isResourcesActive ? "active" : ""}`}
              onClick={() => setOpenDropdown(openDropdown === "mobile-resources" ? null : "mobile-resources")}
            >
              Resources <DotArrowDown size={12} />
            </button>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-resources" ? "is-open" : ""}`}>
              {resourceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="nav-overlay-cta" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
