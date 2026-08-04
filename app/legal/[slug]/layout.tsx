import React from "react";

export function generateStaticParams() {
  return [
    { slug: "privacy-policy" },
    { slug: "terms-conditions" },
    { slug: "refund-policy" },
    { slug: "cookie-policy" },
  ];
}

export default function LegalGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
