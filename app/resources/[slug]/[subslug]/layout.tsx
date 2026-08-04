import React from "react";

const pageSlugs = [
  "blog", "whitepapers", "news-media", "drone-regulations", "faqs", "downloads"
];

const contentSlugs = [
  "precision-agriculture-in-2026",
  "the-future-of-lidar-surveying",
  "dgca-compliance-guide",
  "why-indigenous-flight-controllers-matter",
  "drone-based-pipeline-surveillance",
  "composite-airframe-design-for-agricultural-uavs",
  "sensor-fusion-for-precision-mapping",
  "ai-based-crop-health-classification",
  "secure-telemetry-protocols-for-drone-operations",
  "railway-corridor-mapping-central-railway",
  "mine-volumetric-analysis-jsw-steel",
  "pipeline-surveillance-iocl",
  "aeronica-receives-dgca-type-certification-for-samrudhhi-10l",
  "partnership-with-iit-bombay-for-ai-research",
  "expansion-of-rd-facility-in-pune",
  "the-economic-times-aeronica-feature",
  "yourstory-aeronica-feature",
  "business-standard-aeronica-feature",
  "drone-rules-2021-amended-2025",
  "digital-sky-platform",
  "type-certification-process",
  "remote-pilot-license-rpl",
  "airspace-authorizations",
  "insurance-requirements",
  "payload-and-weight-classifications",
];

export function generateStaticParams() {
  const params: { slug: string; subslug: string }[] = [];
  for (const slug of pageSlugs) {
    for (const subslug of contentSlugs) {
      params.push({ slug, subslug });
    }
  }
  return params;
}

export default function ResourceSubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
