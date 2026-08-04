import React from "react";

export function generateStaticParams() {
  return [
    { slug: "drone-survey-company-pune" },
    { slug: "drone-survey-maharashtra" },
    { slug: "lidar-survey-services-india" },
    { slug: "gis-solutions-india" },
    { slug: "drone-inspection-services" },
    { slug: "digital-twin-services" },
    { slug: "solar-plant-inspection" },
    { slug: "mining-drone-survey" },
    { slug: "highway-mapping-services" },
  ];
}

export default function SEOGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
