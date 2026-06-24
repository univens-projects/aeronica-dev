import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wordmark">
        <svg viewBox="0 0 800 120" fill="none">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="90" letterSpacing="4" fill="currentColor">AERONICA</text>
        </svg>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h4 className="footer-category">Services</h4>
          <ul className="footer-links">
            <li><Link href="/solutions/drone-survey-mapping">Drone Survey & Mapping</Link></li>
            <li><Link href="/solutions/gis-geospatial-intelligence">GIS & Geospatial Intelligence</Link></li>
            <li><Link href="/solutions/infrastructure-inspection">Infrastructure Inspection</Link></li>
            <li><Link href="/solutions/ai-drone-intelligence">AI Drone Intelligence</Link></li>
            <li><Link href="/solutions/disaster-emergency-response">Disaster & Emergency Response</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-category">Industries</h4>
          <ul className="footer-links">
            <li><Link href="/industries/agriculture">Agriculture</Link></li>
            <li><Link href="/industries/mining">Mining</Link></li>
            <li><Link href="/industries/construction">Construction</Link></li>
            <li><Link href="/industries/energy">Energy</Link></li>
            <li><Link href="/industries/transportation">Transportation</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-category">Company</h4>
          <ul className="footer-links">
            <li><Link href="/about/about-aeronica">About Us</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/resources/blog">Blog</Link></li>
            <li><Link href="/resources/drone-regulations">Drone Regulations</Link></li>
            <li><Link href="/contact/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-category">Connect</h4>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/aeronica_at" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/ImAeronica" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://in.linkedin.com/company/aeronica-advance-technologies" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@aeronicaadvancedtechnologi5521" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="mailto:info@aeronica.in">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-simplified">
        <div className="simplified-col">
          <h4>Quick Links</h4>
          <Link href="/solutions">All Solutions</Link>
          <Link href="/industries">Industries Served</Link>
          <Link href="/resources/faqs">FAQs</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="simplified-col">
          <h4>Legal</h4>
          <Link href="/legal/privacy-policy">Privacy Policy</Link>
          <Link href="/legal/terms-conditions">Terms & Conditions</Link>
          <Link href="/legal/refund-policy">Refund Policy</Link>
          <Link href="/legal/cookie-policy">Cookie Policy</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <Image src="/assets/img/logo.png" alt="Aeronica Logo" width={280} height={80} className="footer-logo-img" />
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/aeronica_at" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://www.facebook.com/ImAeronica" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a href="https://in.linkedin.com/company/aeronica-advance-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://www.youtube.com/@aeronicaadvancedtechnologi5521" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
          <a href="mailto:info@aeronica.in" aria-label="Email">Mail</a>
        </div>
        <Link href="/legal/privacy-policy" className="footer-privacy">Privacy Policy</Link>
      </div>

      <div className="footer-legal">
        <p>&copy; 2026 Aeronica Advance Technologies Pvt. Ltd.</p>
        <a href="https://www.aeronica.in" target="_blank" rel="noopener noreferrer">Aeronica.in</a>
      </div>
    </footer>
  );
};

export default Footer;
