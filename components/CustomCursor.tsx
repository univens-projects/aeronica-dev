"use client";

import React, { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable = target.closest("a, button, [role=button], input, select, textarea, label");
    document.documentElement.classList.toggle("cursor-on-link", !!isClickable);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";

    const loop = () => {
      const easeDot = 0.18;
      const easeRing = 0.07;

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
