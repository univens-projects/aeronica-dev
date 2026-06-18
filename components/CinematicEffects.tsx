"use client";

import React, { useEffect } from "react";

const CinematicEffects = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // ─── 3D Card Tilt ───
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.bento-item, .project-card, .industry-card, .stat-box, .process-step, .news-card') as HTMLElement | null;
      
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.bento-item, .project-card, .industry-card, .stat-box, .process-step, .news-card') as HTMLElement | null;
      if (card) {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    };

    // ─── Global Parallax ───
    const updateParallax = () => {
      const scrollY = window.scrollY;
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        const htmlLayer = layer as HTMLElement;
        const speed = parseFloat(htmlLayer.getAttribute('data-parallax-speed') || '0');
        const rect = htmlLayer.getBoundingClientRect();
        const layerCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (layerCenter - viewportCenter) * speed;
        htmlLayer.style.transform = `translateY(${offset * -1}px)`;
      });
    };

    // ─── Smooth Anchor Scroll ───
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href');
        const targetEl = document.querySelector(id!);
        if (targetEl) {
          e.preventDefault();
          const offset = 80;
          const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default CinematicEffects;
