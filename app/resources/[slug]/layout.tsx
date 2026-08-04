import React from "react";

export function generateStaticParams() {
  return [
    { slug: "blog" },
    { slug: "whitepapers" },
    { slug: "news-media" },
    { slug: "drone-regulations" },
    { slug: "faqs" },
    { slug: "downloads" },
  ];
}

export default function ResourceGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
