"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const CTA = () => {
  const sectionRef = useSectionObserver();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Logic handled by useSectionObserver for section-visible
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section className="cta-section section-hidden" ref={sectionRef} id="cta">
      <div className="cta-container">
        <span className="section-label cta-eyebrow">Get in touch</span>
        <h2 className="cta-heading">Ready to transform<br />your operations?</h2>
        <p className="cta-text">From precision agriculture to industrial surveillance — we build<br />drone solutions that deliver real results.</p>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="email" placeholder="Email Address" className="form-input" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company" className="form-input" />
          <select className="form-input form-select" defaultValue="" required>
            <option value="" disabled>Select Service</option>
            <option value="gis">GIS Survey & Mapping</option>
            <option value="agri">Agriculture Spraying</option>
            <option value="surveillance">Security Surveillance</option>
            <option value="other">Other</option>
          </select>
          </div>
          <textarea placeholder="Tell us about your project" className="form-input form-textarea" required></textarea>
          <button type="submit" className="cta-btn-primary form-submit">
            <span>{formSubmitted ? "Message Sent!" : "Start a Conversation"}</span>
            <svg className="dot-grid-icon cta-btn-icon" viewBox="0 0 100 100" fill="none">
              <g transform="translate(-18.375, 6.125)">
                <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
                <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125" fill="currentColor"/>
              </g>
            </svg>
          </button>
          <p className="form-note">Our team typically responds within 24-48 hours.</p>
        </form>
      </div>
    </section>
  );
};

export default CTA;
