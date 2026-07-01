"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { DotArrowRight } from "@/components/DotIcons";

const aboutCategories = [
  {
    title: "Company",
    links: [
      { label: "About Aeronica", href: "/about" },
      { label: "Why Aeronica", href: "/about/why-aeronica" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "Our People",
    links: [{ label: "Leadership Team", href: "/about/leadership-team" }],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Technology Stack", href: "/about/technology-stack" },
      { label: "Certifications", href: "/about/certifications" },
      { label: "Partners & Alliances", href: "/about/partners-alliances" },
    ],
  },
];

const productCategories = [
  {
    title: "Agricultural UAVs",
    links: [
      { label: "Samrudhhi-10L", href: "/products/samrudhhi-10l" },
      { label: "Samrudhhi-10LH", href: "/products/samrudhhi-10lh" },
    ],
  },
  {
    title: "Survey & Mapping",
    links: [{ label: "Flycra 2.0", href: "/products/flycra-20" }],
  },
  {
    title: "Avionics",
    links: [{ label: "Nitya FC", href: "/products/nitya-fc" }],
  },
];

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
    links: [{ label: "AI Drone Intelligence", href: "/solutions/ai-drone-intelligence" }],
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
    title: "Public Sector & Urban",
    links: [
      { label: "Government & Public Sector", href: "/industries/government" },
      { label: "Smart Cities & Urban Dev.", href: "/industries/smart-cities" },
      { label: "Agriculture & Precision Farming", href: "/industries/agriculture" },
      { label: "Telecommunications", href: "/industries/telecom" },
      { label: "Real Estate & Property", href: "/industries/real-estate" },
    ],
  },
];

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
  {
    title: "Research",
    links: [{ label: "Research & R&D", href: "/research" }],
  },
];

const contactCategories = [
  {
    title: "Get Started",
    links: [
      { label: "Request a Demo", href: "/contact/request-demo" },
      { label: "Get a Quote", href: "/contact/get-quote" },
      { label: "Book Consultation", href: "/contact/book-consultation" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Office Locations", href: "/contact/office-locations" },
    ],
  },
];

// Config-driven nav sections — keeps desktop + mobile in sync from ONE source
const navSections = [
  { key: "about", label: "About", basePath: "/about", categories: aboutCategories },
  { key: "products", label: "Products", basePath: "/products", categories: productCategories, showAllLink: true },
  { key: "solutions", label: "Solutions", basePath: "/solutions", categories: solutionCategories, showAllLink: true },
  { key: "industries", label: "Industries", basePath: "/industries", categories: industryCategories, showAllLink: true },
  { key: "case-studies", label: "Case Studies", basePath: "/case-studies", categories: caseStudyCategories, showAllLink: true },
  {
    key: "resources",
    label: "Resources",
    basePath: "/resources",
    extraActivePath: "/research",
    categories: resourceCategories,
    showAllLink: true,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop hover-dropdowns (independent from mobile accordion)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Mobile accordion — its OWN state so it can never be closed by the
  // desktop "click outside" listener below
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only closes DESKTOP dropdowns. Scoped strictly to desktopNavRef so it
  // can never fire for taps inside the mobile overlay.
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      // Reset accordion so it doesn't re-open on a stale section next time
      setOpenMobileSection(null);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const showBackground = pathname !== "/" || isScrolled;

  const isSectionActive = (section: (typeof navSections)[number]) =>
    pathname.startsWith(section.basePath) ||
    (section.extraActivePath ? pathname.startsWith(section.extraActivePath) : false);

  const isContactActive = pathname.startsWith("/contact");

  return (
    <>
      <div
        ref={desktopNavRef}
        className={`navbar ${showBackground ? "is-scrolled" : ""} ${isMobileMenuOpen ? "overlay-open" : ""}`}
        id="navbar"
        suppressHydrationWarning
      >
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
            <Link href="/" className={`navbar-link ${pathname === "/" ? "active" : ""}`}>
              Home
            </Link>

            {navSections.map((section) => (
              <div
                key={section.key}
                className="navbar-dropdown"
                onMouseEnter={() => setActiveDropdown(section.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`navbar-link navbar-dropdown-trigger ${isSectionActive(section) ? "active" : ""}`}
                  onClick={() => router.push(section.basePath)}
                >
                  {section.label}
                  <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
                </button>
                <div className={`navbar-dropdown-menu ${activeDropdown === section.key ? "is-open" : ""}`}>
                  <div className="navbar-dropdown-grid">
                    {section.categories.map((cat) => (
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
            ))}
          </nav>

          <div className="navbar-actions">
            <Link href="/partners/become" className="navbar-partner-link">
              Become a Partner
            </Link>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setActiveDropdown("contact")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`navbar-cta-button ${isContactActive ? "active" : ""}`} onClick={() => router.push("/contact")}>
                <span>Contact</span>
                <ChevronDown
                  style={{ width: "1.3rem", height: "1.3rem", marginLeft: "0.2rem" }}
                  className="navbar-cta-chevron"
                />
              </button>
              <div
                className={`navbar-dropdown-menu navbar-contact-dropdown ${activeDropdown === "contact" ? "is-open" : ""}`}
                style={{ right: 0, left: "auto" }}
              >
                <div className="navbar-dropdown-grid">
                  {contactCategories.map((cat) => (
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

            <button
              className={`navbar-toggle ${isMobileMenuOpen ? "is-active" : ""}`}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`nav-overlay ${isMobileMenuOpen ? "is-open" : ""}`}
        id="navOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMobileMenu();
        }}
      >
        <nav className="nav-overlay-menu">
          <Link href="/" className={`nav-overlay-link ${pathname === "/" ? "active" : ""}`} onClick={closeMobileMenu}>
            Home
          </Link>

          {navSections.map((section) => {
            const isOpen = openMobileSection === section.key;
            return (
              <div className="nav-overlay-group" key={section.key}>
                <button
                  className={`nav-overlay-group-trigger ${isOpen ? "is-open" : ""} ${isSectionActive(section) ? "active" : ""}`}
                  onClick={() => setOpenMobileSection((prev) => (prev === section.key ? null : section.key))}
                >
                  {section.label} <ChevronDown style={{ width: "2rem", height: "2rem" }} />
                </button>
                <div className={`nav-overlay-sublinks ${isOpen ? "is-open" : ""}`}>
                  {section.showAllLink && (
                    <Link
                      href={section.basePath}
                      className="nav-overlay-sublink nav-overlay-sublink-all"
                      onClick={closeMobileMenu}
                    >
                      All {section.label}
                    </Link>
                  )}
                  {section.categories.map((cat) => (
                    <div key={cat.title} className="nav-overlay-subgroup">
                      <span className="nav-overlay-subheading">{cat.title}</span>
                      {cat.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="nav-overlay-sublink"
                          onClick={closeMobileMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Contact */}
          <div className="nav-overlay-group">
            <button
              className={`nav-overlay-group-trigger ${openMobileSection === "contact" ? "is-open" : ""} ${isContactActive ? "active" : ""}`}
              onClick={() => setOpenMobileSection((prev) => (prev === "contact" ? null : "contact"))}
            >
              Contact <ChevronDown style={{ width: "2rem", height: "2rem" }} />
            </button>
            <div className={`nav-overlay-sublinks ${openMobileSection === "contact" ? "is-open" : ""}`}>
              {contactCategories.map((cat) => (
                <div key={cat.title} className="nav-overlay-subgroup">
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={closeMobileMenu}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-cta-group">
            <Link href="/partners/become" className="nav-overlay-cta-contact" onClick={closeMobileMenu}>
              Become a Partner <DotArrowRight size={14} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;