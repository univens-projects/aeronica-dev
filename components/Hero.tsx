"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

class Particle {
  x: number; y: number; size: number; baseX: number; baseY: number; vx: number; vy: number;
  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 0.8 + 0.2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
  }
  update(canvasWidth: number, canvasHeight: number, mouse: { x: number | null, y: number | null }) {
    this.x += this.vx + Math.sin(Date.now() * 0.0005 + this.baseX) * 0.1;
    this.y += this.vy + Math.cos(Date.now() * 0.0005 + this.baseY) * 0.1;
    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        const angle = Math.atan2(dy, dx);
        const force = (150 - distance) / 150;
        this.x += Math.cos(angle) * force * 2.5;
        this.y += Math.sin(angle) * force * 2.5;
      }
    }
    this.vx *= 0.98; this.vy *= 0.98;
    this.vx += (Math.random() - 0.5) * 0.01;
    this.vy += (Math.random() - 0.5) * 0.01;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useSectionObserver();
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouse = { x: null as number | null, y: null as number | null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 60) {
            let opacity = 1 - (distance / 60);
            let color = `rgba(255, 255, 255, ${opacity * 0.15})`;
            if (mouse.x !== null && mouse.y !== null) {
              const mdx = mouse.x - particles[a].x;
              const mdy = mouse.y - particles[a].y;
              const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
              if (mdist < 150) color = `rgba(0, 123, 255, ${opacity * 0.6})`;
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) particles.push(new Particle(canvas.width, canvas.height));
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      connectParticles();
      particles.forEach(p => { 
        p.update(canvas.width, canvas.height, mouse); 
        p.draw(ctx); 
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current || !containerRef.current) return;
      const scrollY = window.scrollY;
      const height = sectionRef.current.offsetHeight;
      const progress = Math.min(scrollY / height, 1);
      bgRef.current.style.transform = `translateY(${progress * -60}px)`;
      containerRef.current.style.transform = `translateY(${progress * 20}px)`;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero section-hidden" ref={sectionRef} id="hero">
      <div className="hero-bg parallax-layer" ref={bgRef} data-parallax-speed="0.35">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/video/hero section video background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <canvas ref={canvasRef} id="heroCanvas"></canvas>
        <div className="hero-video-overlay"></div>
      </div>
      <div className="hero-container parallax-layer" ref={containerRef} data-parallax-speed="0.15">
        <span className="section-label">Glazing specialists</span>
        <h1 className="hero-heading">Drones, built with Purpose.<br />Flying with Precision.</h1>
        <div className="hero-text">Aeronica Advance Technologies — indigenous UAV solutions for agriculture, GIS, surveillance, and industrial applications.</div>
      </div>
      <Link href="/services/gis-survey-mapping" className="hero-overlay">
        <span className="hero-pagination">01 / 03</span>
        <span className="hero-title">GIS Survey & Mapping</span>
      </Link>
    </section>
  );
};

export default Hero;
