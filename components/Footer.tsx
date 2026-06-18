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
            <li><Link href="/services/gis-survey-mapping">GIS Survey & Mapping</Link></li>
            <li><Link href="/services/agriculture-spraying">Agriculture Spraying</Link></li>
            <li><Link href="/services/multispectral-scanning">Multispectral Scanning</Link></li>
            <li><Link href="/services/security-surveillance">Security Surveillance</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-category">Products</h4>
          <ul className="footer-links">
            <li><Link href="/products/samrudhhi-10l">Samrudhhi-10L</Link></li>
            <li><Link href="/products/samrudhhi-10lh">Samrudhhi-10LH</Link></li>
            <li><Link href="/products/flycra-2-0">Flycra 2.0</Link></li>
            <li><Link href="/products/nitya-fc">Nitya FC</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-category">Solutions</h4>
          <ul className="footer-links">
            <li><Link href="/solutions/uss">Unified Surveillance System</Link></li>
            <li><Link href="/solutions/aeroni-ai">Aeroni.AI</Link></li>
            <li><Link href="/research">R & D</Link></li>
            <li><Link href="/partners">Partner Portal</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-category">Connect</h4>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/aeronica_at" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://in.linkedin.com/company/aeronica-advance-technologies" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@aeronicaadvancedtechnologi5521" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="mailto:info@aeronica.in">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-simplified">
        <div className="simplified-col">
          <h4>Services</h4>
          <Link href="/services/gis-survey-mapping">GIS Survey & Mapping</Link>
          <Link href="/services/agriculture-spraying">Agriculture Spraying</Link>
          <Link href="/services/multispectral-scanning">Multispectral Scanning</Link>
          <Link href="/services/security-surveillance">Security Surveillance</Link>
        </div>
        <div className="simplified-col">
          <h4>Technology</h4>
          <Link href="/products/samrudhhi-10l">Samrudhhi-10L</Link>
          <Link href="/solutions/uss">Unified Surveillance</Link>
          <Link href="/solutions/aeroni-ai">Aeroni.AI</Link>
          <Link href="/research">R & D</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <Image src="/assets/img/logo.png" alt="Aeronica Logo" width={140} height={40} className="footer-logo-img" />
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/aeronica_at" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://in.linkedin.com/company/aeronica-advance-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://www.youtube.com/@aeronicaadvancedtechnologi5521" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
          <a href="mailto:info@aeronica.in" aria-label="Email">Mail</a>
        </div>
        <Link href="/privacy-policy" className="footer-privacy">Privacy Policy</Link>
      </div>

      <div className="footer-legal">
        <p>&copy; 2026 Aeronica Advance Technologies Pvt. Ltd.</p>
        <a href="https://www.aeronica.in" target="_blank" rel="noopener noreferrer">Aeronica.in</a>
      </div>
    </footer>
  );
};

export default Footer;
