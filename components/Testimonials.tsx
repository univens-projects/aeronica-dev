"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const testimonials = [
  { 
    quote: "Aeronica delivered exceptional precision in their GIS mapping for our railway corridor project. The sub-centimeter accuracy and detailed terrain analysis exceeded our expectations.", 
    author: "Chief Engineer", 
    title: "Central Railway", 
    avatarClass: "author-avatar-1" 
  },
  { 
    quote: "The drone spraying service from Aeronica transformed our farming operations. The precision and efficiency of their DGCA-certified Samrudhhi-10L drones reduced our pesticide usage by 30% while improving coverage.", 
    author: "Farm Operations Head", 
    title: "BASF India", 
    avatarClass: "author-avatar-2" 
  },
  { 
    quote: "Aeronica's Unified Surveillance System has been instrumental in securing our pipeline infrastructure. The AI-powered anomaly detection and real-time monitoring capabilities give us unprecedented visibility.", 
    author: "Safety & Security Director", 
    title: "IOCL", 
    avatarClass: "author-avatar-3" 
  },
  { 
    quote: "Working with Aeronica on our mine volumetric survey was a fantastic experience. Their drone-based surveying reduced our measurement time from weeks to days, with far greater accuracy.", 
    author: "Mine Operations Manager", 
    title: "JSW Steel", 
    avatarClass: "author-avatar-4" 
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useSectionObserver();

  useEffect(() => {
    // Logic handled by useSectionObserver for section-visible
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials section-hidden" ref={sectionRef} id="testimonials">
      <div className="section-header">
        <h2 className="section-title">What our clients say about working with us.</h2>
      </div>

      <div className="testimonial-carousel" id="testimonialCarousel">
        {testimonials.map((t, index) => (
          <div key={index} className={`testimonial-slide ${index === currentIndex ? "active" : ""}`}>
            <div className="testimonial-content">
              <svg className="quote-svg" viewBox="0 0 24 18" fill="none">
                <path d="M0 18V10.5C0 6.5 1.5 3.5 4.5 1.5L7.5 0L9 3C6.5 5 5.5 7 5.5 9H9V18H0ZM14.5 18V10.5C14.5 6.5 16 3.5 19 1.5L22 0L23.5 3C21 5 20 7 20 9H23.5V18H14.5Z" fill="currentColor" opacity="0.3"/>
              </svg>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className={`author-avatar ${t.avatarClass}`}></div>
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-title">{t.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots" id="carouselDots">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`dot ${index === currentIndex ? "active" : ""}`} 
            onClick={() => setCurrentIndex(index)}
            aria-label={`Testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="section-footer">
        <Link href="/contact" className="explore-link">
          Let's work together
          <svg className="dot-grid-icon explore-icon" viewBox="0 0 100 100" fill="none">
            <g transform="translate(-18.375, 6.125)">
              <rect x="51" y="14.25" width="10.25" height="10.25" rx="5.125"/>
              <rect x="63.25" y="26.5" width="10.25" height="10.25" rx="5.125"/>
              <rect x="75.5" y="38.75" width="10.25" height="10.25" rx="5.125"/>
              <rect x="63.25" y="51" width="10.25" height="10.25" rx="5.125"/>
              <rect x="51" y="63.25" width="10.25" height="10.25" rx="5.125"/>
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
