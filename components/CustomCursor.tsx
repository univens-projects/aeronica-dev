"use client";

import React, { useEffect, useRef, useCallback } from "react";

function getLuminance(r: number, g: number, b: number): number {
  return r * 0.299 + g * 0.587 + b * 0.114;
}

function hasDarkBackground(el: HTMLElement): boolean {
  const cs = window.getComputedStyle(el);

  // Check explicit background-color
  const bgColor = cs.backgroundColor;
  if (bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
    const m = bgColor.match(/\d+/g);
    if (m && m.length >= 3) {
      const [r, g, b] = m.map(Number);
      if (getLuminance(r, g, b) <= 140) return true;
    }
  }

  // Check background-image for gradients containing dark color stops
  const bgImage = cs.backgroundImage;
  if (bgImage && bgImage !== "none") {
    // File-based background images → treat as dark (content could be any brightness)
    if (!bgImage.startsWith("linear-gradient") && !bgImage.startsWith("radial-gradient")) return true;
    const matches = bgImage.matchAll(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g);
    for (const match of Array.from(matches)) {
      if (getLuminance(+match[1], +match[2], +match[3]) <= 140) return true;
    }
  }

  return false;
}

function isDarkBackground(x: number, y: number): boolean {
  const el = document.elementFromPoint(x, y);
  if (!el) return false;

  let current: HTMLElement | null = el as HTMLElement;
  while (current && current !== document.body) {
    // White cursor over images
    if (current.tagName === "IMG") return true;

    // Check computed dark background (solid color or gradient)
    if (hasDarkBackground(current)) return true;

    // Check if text color is white and no explicit bg → likely a dark-themed section
    // (handles cases where the dark bg is on a sibling element, e.g. hero overlay)
    const cs = window.getComputedStyle(current);
    if (cs.color === "rgb(255, 255, 255)" && cs.backgroundColor === "rgba(0, 0, 0, 0)") return true;

    current = current.parentElement as HTMLElement;
  }
  return false;
}

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });
  const lastCheck = useRef(0);
  const lastEl = useRef<Element | null>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const isTextTag = (t: HTMLElement) => /^(P|H[1-6]|LI|SPAN|TD|TH|BLOCKQUOTE|LABEL|FIGCAPTION|CITE|EM|STRONG)$/.test(t.tagName);

  const onMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable = target.closest("a, button, [role=button], input, select, textarea, label");
    document.documentElement.classList.toggle("cursor-on-link", !!isClickable);

    // Detect text elements for selection mode
    const isText = target.closest("p, h1, h2, h3, h4, h5, h6, li, blockquote, td, th, figcaption, cite, em, strong, label");
    document.documentElement.classList.toggle("cursor-on-text", !!isText);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";

    // Override default cursors on interactive elements
    const style = document.createElement("style");
    style.textContent = "input, textarea, select, [contenteditable] { cursor: none !important; }";
    document.head.appendChild(style);

    const loop = () => {
      const easeDot = 0.35;
      const easeRing = 0.12;

      dot.current.x += (mouse.current.x - dot.current.x) * easeDot;
      dot.current.y += (mouse.current.y - dot.current.y) * easeDot;
      ring.current.x += (mouse.current.x - ring.current.x) * easeRing;
      ring.current.y += (mouse.current.y - ring.current.y) * easeRing;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      const now = performance.now();
      if (now - lastCheck.current > 50) {
        lastCheck.current = now;
        const under = document.elementFromPoint(mouse.current.x, mouse.current.y);
        if (under !== lastEl.current) {
          lastEl.current = under;
          const dark = isDarkBackground(mouse.current.x, mouse.current.y);
          document.documentElement.classList.toggle("cursor-dark-bg", dark);
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver, true);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver, true);
      document.body.style.cursor = "";
      style.remove();
    };
  }, [onMouseMove, onMouseOver]);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;
