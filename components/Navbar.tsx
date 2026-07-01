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
    links: [
      { label: "Leadership Team", href: "/about/leadership-team" },
    ],
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
    links: [
      { label: "Flycra 2.0", href: "/products/flycra-20" },
    ],
  },
  {
    title: "Avionics",
    links: [
      { label: "Nitya FC", href: "/products/nitya-fc" },
    ],
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
    links: [
      { label: "Research & R&D", href: "/research" },
    ],
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

const aboutLinks = aboutCategories.flatMap(c => c.links);
const productLinks = productCategories.flatMap(c => c.links);
const solutionLinks = solutionCategories.flatMap(c => c.links);
const industryLinks = industryCategories.flatMap(c => c.links);
const caseStudyLinks = caseStudyCategories.flatMap(c => c.links);
const resourceLinks = resourceCategories.flatMap(c => c.links);
const contactLinks = contactCategories.flatMap(c => c.links);

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleScroll = () => setIsMobileMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const showBackground = pathname !== "/" || isScrolled;
  const isAboutActive = pathname.startsWith("/about");
  const isProductsActive = pathname.startsWith("/products");
  const isSolutionsActive = pathname.startsWith("/solutions");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isCaseStudiesActive = pathname.startsWith("/case-studies");
  const isResourcesActive = pathname.startsWith("/resources") || pathname.startsWith("/research");
  const isContactActive = pathname.startsWith("/contact");

  return (
    <>
      <div ref={dropdownRef} className={`navbar ${showBackground ? "is-scrolled" : ""} ${isMobileMenuOpen ? "overlay-open" : ""}`} id="navbar" suppressHydrationWarning>
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

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isAboutActive ? "active" : ""}`} onClick={() => router.push("/about")}>
                About <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "about" ? "is-open" : ""}`}>
                <div className="navbar-dropdown-grid">
                  {aboutCategories.map((cat) => (
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
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isProductsActive ? "active" : ""}`} onClick={() => router.push("/products")}>
                Products <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
              </button>
              <div className={`navbar-dropdown-menu ${openDropdown === "products" ? "is-open" : ""}`}>
                <div className="navbar-dropdown-grid">
                  {productCategories.map((cat) => (
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
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-link navbar-dropdown-trigger ${isSolutionsActive ? "active" : ""}`} onClick={() => router.push("/solutions")}>
                Solutions <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
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
                Industries <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
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
                Case Studies <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
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
                Resources <ChevronDown style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.2rem" }} />
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
            <a
              href="https://partners.aeronica.in"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-partner-link"
            >
              Become a Partner
            </a>

            <div
              className="navbar-dropdown"
              onMouseEnter={() => setOpenDropdown("contact")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`navbar-cta-button ${isContactActive ? "active" : ""}`} onClick={() => router.push("/contact")}>
                <span>Contact</span>
                <ChevronDown style={{ width: "1.3rem", height: "1.3rem", marginLeft: "0.2rem" }} className="navbar-cta-chevron" />
              </button>
              <div className={`navbar-dropdown-menu navbar-contact-dropdown ${openDropdown === "contact" ? "is-open" : ""}`} style={{ right: 0, left: "auto" }}>
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-overlay ${isMobileMenuOpen ? "is-open" : ""}`} id="navOverlay" onClick={(e) => { const t = e.target as HTMLElement; if (t === e.currentTarget || t.classList.contains("nav-overlay-menu")) setIsMobileMenuOpen(false); }}>
        <nav className="nav-overlay-menu">
          <Link href="/" className={`nav-overlay-link ${pathname === "/" ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/about" className={`nav-overlay-link ${isAboutActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-about" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-about" ? null : "mobile-about")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-about" ? "is-open" : ""}`}>
              {aboutCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/products" className={`nav-overlay-link ${isProductsActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-products" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-products" ? null : "mobile-products")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-products" ? "is-open" : ""}`}>
              {productCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/solutions" className={`nav-overlay-link ${isSolutionsActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-solutions" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-solutions" ? null : "mobile-solutions")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-solutions" ? "is-open" : ""}`}>
              {solutionCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/industries" className={`nav-overlay-link ${isIndustriesActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-industries" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-industries" ? null : "mobile-industries")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-industries" ? "is-open" : ""}`}>
              {industryCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/case-studies" className={`nav-overlay-link ${isCaseStudiesActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-case-studies" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-case-studies" ? null : "mobile-case-studies")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-case-studies" ? "is-open" : ""}`}>
              {caseStudyCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/resources" className={`nav-overlay-link ${isResourcesActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-resources" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-resources" ? null : "mobile-resources")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-resources" ? "is-open" : ""}`}>
              {resourceCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-overlay-group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <Link href="/contact" className={`nav-overlay-link ${isContactActive ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <button
                className={`nav-overlay-group-trigger ${openDropdown === "mobile-contact" ? "is-open" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === "mobile-contact" ? null : "mobile-contact")}
                style={{ padding: "0.5rem", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
              >
                <ChevronDown style={{ width: "1.4rem", height: "1.4rem" }} />
              </button>
            </div>
            <div className={`nav-overlay-sublinks ${openDropdown === "mobile-contact" ? "is-open" : ""}`}>
              {contactCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="nav-overlay-subheading">{cat.title}</span>
                  {cat.links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-overlay-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://partners.aeronica.in"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-overlay-cta"
            style={{ marginTop: "1rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Become a Partner <DotArrowRight size={12} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
