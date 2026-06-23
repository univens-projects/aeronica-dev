"use client";

import React, { useEffect, useRef } from "react";

const TILT_SELECTOR = '.project-card, .industry-card, .stat-box, .process-step, .news-card';

const CinematicEffects = ({ children }: { children: React.ReactNode }) => {
  const tiltRAF = useRef(0);
  const currentCard = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // ─── 3D Card Tilt (active only when hovering a card) ───
    let mousemoveListener: ((e: MouseEvent) => void) | null = null;

    const applyTilt = (e: MouseEvent) => {
      const card = currentCard.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      cancelAnimationFrame(tiltRAF.current);
      tiltRAF.current = requestAnimationFrame(() => {
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
    };

    const resetTilt = () => {
      const card = currentCard.current;
      if (!card) return;
      document.removeEventListener('mousemove', mousemoveListener!);
      cancelAnimationFrame(tiltRAF.current);
      tiltRAF.current = requestAnimationFrame(() => {
        card.style.transform = '';
      });
      currentCard.current = null;
      mousemoveListener = null;
    };

    const onMouseOver = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest(TILT_SELECTOR) as HTMLElement | null;
      if (card && card !== currentCard.current) {
        currentCard.current = card;
        mousemoveListener = applyTilt;
        document.addEventListener('mousemove', applyTilt, { passive: true });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Node | null;
      if (currentCard.current && !currentCard.current.contains(related)) {
        resetTilt();
      }
    };

    // ─── Smooth Anchor Scroll ───
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (anchor?.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href')!;
        const targetEl = document.querySelector(id);
        if (targetEl) {
          e.preventDefault();
          const top = targetEl.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('click', onAnchorClick);
      if (mousemoveListener) document.removeEventListener('mousemove', mousemoveListener);
      cancelAnimationFrame(tiltRAF.current);
    };
  }, []);

  return <>{children}</>;
};

export default CinematicEffects;
