"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const news = [
  { title: "Precision Agriculture: How Drones Are Transforming Indian Farming", date: "June 10", href: "/insights/drone-technology-agriculture-2026", imgClass: "news-img-1" },
  { title: "GIS and Drone Mapping: The Future of Infrastructure Development", date: "May 28", href: "/insights/gis-drone-mapping-infrastructure", imgClass: "news-img-2" },
];

const News = () => {
  const sectionRef = useSectionObserver();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.children;
            Array.from(items).forEach((item, index) => {
              item.classList.add("stagger-item");
              setTimeout(() => {
                item.classList.add("is-visible");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="news section-hidden" ref={sectionRef} id="news">
      <div className="section-header">
        <h2 className="section-title"><span></span>Latest News</h2>
      </div>
      <div className="news-grid" ref={gridRef} data-stagger>
        {news.map((item, index) => (
          <Link key={index} href={item.href} className="news-card">
            <div className={`news-image ${item.imgClass}`}></div>
            <div className="news-content">
              <h3>{item.title}</h3>
              <span className="news-date">{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="section-footer">
        <Link href="/insights" className="explore-link">
          View all news
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

export default News;
