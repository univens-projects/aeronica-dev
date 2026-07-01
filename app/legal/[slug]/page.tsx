"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  ShieldCheck, FileText, RotateCcw, Cookie,
  CheckCircle, Mail, MapPin, Phone, Calendar,
  ArrowLeft,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { DotArrowLeft } from "@/components/DotIcons";

const legalPages: Record<string, any> = {
  "privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How Aeronica Advance Technologies Pvt. Ltd. collects, uses, stores, and protects your personal information.",
    icon: ShieldCheck,
    lastUpdated: "1 July 2025",
    sections: [
      {
        heading: "Introduction",
        content: `Aeronica Advance Technologies Pvt. Ltd. ("Aeronica", "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (aeronica.in), use our services, or interact with us in any capacity.\n\nThis policy applies to all users of our website, clients engaging our drone survey, mapping, and agricultural services, and partners or vendors who interact with our platforms. By using our website or services, you consent to the practices described in this policy.`,
      },
      {
        heading: "Information We Collect",
        list: [
          {
            title: "Personal Information",
            items: [
              "Full name, email address, phone number, and company name when you submit a contact form, request a quote, or schedule a demo",
              "Billing and invoicing details when you engage our commercial drone services",
              "Government-issued identification (e.g., Aadhaar, PAN) when required for regulatory compliance under DGCA UAS Rules 2021",
              "Professional credentials and certifications for partner and vendor onboarding",
            ],
          },
          {
            title: "Technical & Usage Data",
            items: [
              "IP address, browser type, operating system, and device information",
              "Pages visited, time spent on pages, referring URLs, and navigation patterns",
              "Cookies and similar tracking technologies (see our Cookie Policy for details)",
            ],
          },
          {
            title: "Geospatial & Mission Data",
            items: [
              "Aerial imagery, LiDAR point clouds, orthomosaics, and 3D models collected during drone survey operations on behalf of clients",
              "GPS coordinates and flight telemetry data from drone operations",
              "This data is collected solely for service delivery and is owned by the client unless otherwise agreed in the service contract",
            ],
          },
        ],
      },
      {
        heading: "How We Use Your Information",
        bullets: [
          "To process and respond to your inquiries, quote requests, and demo scheduling",
          "To deliver contracted drone survey, mapping, inspection, and agricultural services",
          "To process payments and manage client accounts",
          "To comply with DGCA regulatory requirements, including flight logging and airspace clearance documentation via the Digital Sky Platform",
          "To send you relevant updates about our services, products, and industry insights (only with your consent)",
          "To improve our website, services, and user experience through analytics",
          "To maintain the security and integrity of our IT systems and data processing infrastructure",
          "To enforce our Terms and Conditions and protect against fraud or misuse",
        ],
      },
      {
        heading: "Data Storage & Security",
        content: `All personal and client data is stored on secure, ISO 27001-aligned cloud infrastructure. Sensitive geospatial data from government and defence clients is processed on isolated, air-gapped systems at our Pune facility.\n\nWe implement industry-standard security measures including:\n• 256-bit AES encryption for data in transit and at rest\n• Role-based access controls with multi-factor authentication\n• Regular security audits and vulnerability assessments\n• Automated intrusion detection and monitoring systems\n• Secure backup and disaster recovery protocols`,
      },
      {
        heading: "Data Sharing & Disclosure",
        content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:`,
        bullets: [
          "With service providers who assist in delivering our services (cloud hosting, payment processing) — bound by strict confidentiality agreements",
          "With regulatory authorities (DGCA, BCAS, or law enforcement) when required by law or to comply with airspace regulations",
          "With your explicit consent for specific purposes",
          "To protect the rights, property, or safety of Aeronica, our clients, or others",
          "In connection with a merger, acquisition, or sale of assets (with prior notice to affected parties)",
        ],
      },
      {
        heading: "Data Retention",
        content: `We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. Specific retention periods:\n\n• Contact form submissions: 2 years from last interaction\n• Client project data: Duration of contract + 5 years (or as specified in the service agreement)\n• Flight logs and regulatory documentation: 7 years (as required by DGCA)\n• Website analytics data: 26 months\n\nYou may request deletion of your personal data at any time, subject to our legal and regulatory obligations.`,
      },
      {
        heading: "Your Rights",
        bullets: [
          "Right to access: Request a copy of the personal data we hold about you",
          "Right to correction: Request correction of inaccurate or incomplete data",
          "Right to deletion: Request deletion of your personal data (subject to legal obligations)",
          "Right to restrict processing: Request that we limit how we use your data",
          "Right to data portability: Request your data in a structured, machine-readable format",
          "Right to withdraw consent: Withdraw consent for marketing communications at any time",
          "Right to object: Object to processing of your personal data for specific purposes",
        ],
      },
      {
        heading: "Children's Privacy",
        content: "Our website and services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.",
      },
      {
        heading: "Changes to This Policy",
        content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Any changes will be posted on this page with an updated \"Last Updated\" date. We encourage you to review this policy periodically.",
      },
      {
        heading: "Contact Us",
        contact: true,
      },
    ],
  },

  "terms-conditions": {
    title: "Terms & Conditions",
    subtitle: "The terms governing your use of Aeronica's website, services, and products.",
    icon: FileText,
    lastUpdated: "1 July 2025",
    sections: [
      {
        heading: "Acceptance of Terms",
        content: `These Terms and Conditions ("Terms") govern your use of the website operated by Aeronica Advance Technologies Pvt. Ltd. ("Aeronica", "we", "us", or "our") at aeronica.in and all related services, products, and platforms.\n\nBy accessing or using our website, submitting a contact form, engaging our services, or purchasing our products, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.`,
      },
      {
        heading: "Services Overview",
        content: "Aeronica provides the following categories of services and products:",
        bullets: [
          "Drone survey, mapping, and GIS services — including topographic surveys, LiDAR data collection, orthomosaic generation, volumetric analysis, and corridor mapping",
          "Agricultural drone services — including precision spraying, crop health analytics, NDVI mapping, and variable-rate application using our DGCA type-certified Samrudhhi-10L platform",
          "Industrial inspection services — including solar farm inspection, power line corridor surveys, structural inspection, and thermal anomaly detection",
          "UAV hardware products — including the Samrudhhi-10L, Samrudhhi-10LH, Flycra 2.0, and Nitya FC flight controller",
          "Geospatial data processing — via our Aeroni.AI cloud platform for photogrammetry, point cloud processing, and AI-based defect detection",
        ],
      },
      {
        heading: "Intellectual Property",
        content: `All content on this website — including text, graphics, logos, images, product designs, software, firmware source code, and brand identity — is the exclusive property of Aeronica Advance Technologies Pvt. Ltd. and is protected under Indian intellectual property laws.\n\nThe Nitya FC flight controller firmware, Aeroni.AI processing pipeline, and all proprietary hardware designs are protected under DIPP (Department for Promotion of Industry and Internal Trade) startup recognition and Indian patent/trade secret provisions.\n\nYou may not reproduce, distribute, modify, create derivative works from, or publicly display any content from this website without our prior written consent.`,
      },
      {
        heading: "Use of Website",
        content: "You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others. You agree not to:",
        bullets: [
          "Use the website in any way that violates applicable local, state, national, or international law",
          "Attempt to gain unauthorised access to any part of the website, server, or connected databases",
          "Use automated tools (bots, scrapers, spiders) to extract content from the website",
          "Transmit any material that is defamatory, offensive, or otherwise objectionable",
          "Interfere with or disrupt the integrity or performance of the website or its underlying infrastructure",
          "Impersonate any person or entity, or misrepresent your affiliation with any person or entity",
        ],
      },
      {
        heading: "Service Engagements & Contracts",
        content: `All commercial service engagements (drone surveys, inspections, agricultural operations, product purchases) are governed by separate service agreements or purchase orders executed between Aeronica and the client.\n\nThese Terms provide the general framework, but specific project terms — including scope of work, deliverables, timelines, payment terms, and liability provisions — are defined in the individual service agreement.\n\nQuotations provided via our website or sales team are valid for 30 days from the date of issue unless otherwise specified.`,
      },
      {
        heading: "Product Warranties",
        content: `Aeronica UAV hardware products (Samrudhhi-10L, Samrudhhi-10LH, Flycra 2.0, Nitya FC) are covered by a limited manufacturer warranty as specified in the product documentation provided at the time of purchase.\n\nWarranty coverage applies to manufacturing defects in materials and workmanship under normal use conditions. Warranty does not cover:\n• Damage caused by crashes, misuse, unauthorised modification, or improper maintenance\n• Wear and tear of consumable components (propellers, batteries, spray nozzles)\n• Damage caused by operation outside specified environmental parameters\n• Damage resulting from use of non-Aeronica replacement parts\n\nAll warranty claims must be submitted through our official support channel within the warranty period.`,
      },
      {
        heading: "DGCA Compliance & Regulatory Obligations",
        content: `All drone operations conducted by Aeronica are fully compliant with DGCA UAS Rules 2021 and applicable Civil Aviation Requirements. Clients engaging our field services acknowledge that:\n\n• All flights require prior airspace clearance via the Digital Sky Platform\n• Aeronica's pilots hold valid DGCA Remote Pilot Licences (RPL)\n• Operations in restricted or controlled airspace require additional permissions that may affect project timelines\n• Weather conditions, NOTAMs, and local authority directives may necessitate rescheduling of operations\n• The Samrudhhi-10L is the only DGCA type-certified agricultural drone in our fleet; other platforms operate under applicable DGCA categories`,
      },
      {
        heading: "Limitation of Liability",
        content: `To the fullest extent permitted by Indian law, Aeronica shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services.\n\nOur total liability for any claim arising from a service engagement shall not exceed the total fees paid by the client for the specific project giving rise to the claim.\n\nAeronica is not liable for delays or failures in service delivery caused by force majeure events including but not limited to natural disasters, government actions, airspace restrictions, pandemics, or equipment failure beyond our reasonable control.`,
      },
      {
        heading: "Indemnification",
        content: "You agree to indemnify and hold harmless Aeronica, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of our website, violation of these Terms, or infringement of any third-party rights.",
      },
      {
        heading: "Governing Law & Jurisdiction",
        content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.",
      },
      {
        heading: "Modifications to Terms",
        content: "Aeronica reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes your acceptance of the updated Terms.",
      },
      {
        heading: "Contact Us",
        contact: true,
      },
    ],
  },

  "refund-policy": {
    title: "Refund & Cancellation Policy",
    subtitle: "Our policies regarding refunds, cancellations, and rescheduling of services and product purchases.",
    icon: RotateCcw,
    lastUpdated: "1 July 2025",
    sections: [
      {
        heading: "Overview",
        content: "This Refund & Cancellation Policy outlines the conditions under which Aeronica Advance Technologies Pvt. Ltd. provides refunds for services rendered and products purchased. We aim to be fair and transparent in all our refund processes while ensuring operational sustainability.",
      },
      {
        heading: "Drone Survey & Mapping Services",
        content: "Our drone survey and mapping services are governed by individual service agreements. The following general refund provisions apply:",
        bullets: [
          "Cancellation before mobilisation: Full refund of any advance payment, minus a 10% administrative fee",
          "Cancellation after mobilisation but before flight operations: Refund of advance payment minus actual costs incurred (travel, accommodation, equipment logistics)",
          "Cancellation after flight operations have commenced: No refund for completed flight days; remaining days may be refunded minus costs incurred",
          "Data processing cancellation: If flight operations are complete but data processing has not started, a partial refund for the processing component may be issued",
          "Unsatisfactory deliverables: If deliverables do not meet the accuracy specifications agreed upon in the service contract, Aeronica will re-fly the project at no additional cost or provide a proportional refund",
        ],
      },
      {
        heading: "Agricultural Drone Services",
        content: "Agricultural spraying and crop monitoring services are seasonal and weather-dependent:",
        bullets: [
          "Weather-related cancellations: If operations cannot be conducted due to weather conditions (wind speed > 12 m/s, rain, poor visibility), the project will be rescheduled at no additional cost",
          "Client-initiated cancellation before spraying: Full refund of advance payment, minus chemical procurement costs if chemicals have been purchased",
          "Client-initiated cancellation after partial spraying: No refund for completed area; remaining area may be refunded proportionally",
          "Crop damage claims: Aeronica carries third-party liability insurance for field operations; damage claims are processed through our insurance partner as per policy terms",
        ],
      },
      {
        heading: "UAV Hardware Products",
        content: "Refund and return conditions for Aeronica hardware products (Samrudhhi-10L, Samrudhhi-10LH, Flycra 2.0, Nitya FC):",
        bullets: [
          "Order cancellation before dispatch: Full refund within 7 business days",
          "Order cancellation after dispatch but before delivery: Refund minus shipping and logistics costs",
          "Defective product on arrival (DOA): Full replacement or refund within 15 days of delivery upon inspection and confirmation of manufacturing defect",
          "Return after use: Products that have been powered on, flown, or modified are not eligible for return or refund under general return policy (warranty claims are separate)",
          "Custom configurations: Products configured to client specifications (custom firmware, specific payload integrations) are non-refundable",
          "Spare parts and accessories: Non-refundable once dispatched unless defective on arrival",
        ],
      },
      {
        heading: "Aeroni.AI Data Processing",
        content: "Cloud-based data processing services via our Aeroni.AI platform:",
        bullets: [
          "Processing credits purchased but unused: Refundable within 6 months of purchase",
          "Processing already initiated: Non-refundable once data upload and processing has commenced",
          "Processing failures: If our platform fails to deliver outputs due to system errors, full refund or re-processing at no charge",
          "Data accuracy disputes: If processed outputs do not meet stated accuracy specifications, Aeronica will re-process the dataset or provide a proportional refund",
        ],
      },
      {
        heading: "How to Request a Refund",
        content: `To request a refund, please contact our support team with the following information:\n\n• Your name, company name, and contact details\n• Order/project reference number or service agreement ID\n• Reason for the refund request\n• Supporting documentation (if applicable)\n\nRefund requests are processed within 10 business days of receipt. Approved refunds are credited to the original payment method within 15 business days.`,
      },
      {
        heading: "Force Majeure",
        content: "Neither party shall be liable for delays or cancellations caused by force majeure events, including but not limited to natural disasters, government-imposed airspace restrictions, pandemics, civil unrest, or acts of God. In such cases, the project will be rescheduled to a mutually agreed date at no additional cost.",
      },
      {
        heading: "Disputes",
        content: "If you are dissatisfied with a refund decision, you may escalate the matter by writing to our registered office. All refund disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.",
      },
      {
        heading: "Contact Us",
        contact: true,
      },
    ],
  },

  "cookie-policy": {
    title: "Cookie Policy",
    subtitle: "How Aeronica uses cookies and similar tracking technologies on our website.",
    icon: Cookie,
    lastUpdated: "1 July 2025",
    sections: [
      {
        heading: "What Are Cookies?",
        content: "Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide information to website owners. Cookies can be \"session\" cookies (deleted when you close your browser) or \"persistent\" cookies (remain on your device until they expire or you delete them).",
      },
      {
        heading: "How We Use Cookies",
        content: "Aeronica's website (aeronica.in) uses cookies for the following purposes:",
        list: [
          {
            title: "Strictly Necessary Cookies",
            items: [
              "Session management — maintaining your browsing session across pages",
              "Security — protecting against cross-site request forgery (CSRF) and other threats",
              "Load balancing — ensuring optimal server performance during high traffic",
              "These cookies are essential for the website to function and cannot be disabled",
            ],
          },
          {
            title: "Analytics & Performance Cookies",
            items: [
              "Google Analytics — tracking page views, session duration, bounce rates, and user flow to improve our website",
              "Performance monitoring — identifying slow-loading pages and optimising site speed",
              "Traffic source analysis — understanding how visitors discover our website (organic search, social media, referral links)",
              "These cookies help us understand how visitors interact with our website so we can improve content and navigation",
            ],
          },
          {
            title: "Functional Cookies",
            items: [
              "Language and region preferences",
              "Form auto-fill — remembering information you have previously submitted in contact forms",
              "Video player preferences for embedded product demonstration videos",
              "These cookies enhance your browsing experience by remembering your preferences",
            ],
          },
          {
            title: "Marketing & Advertising Cookies",
            items: [
              "Google Ads remarketing — showing relevant ads to visitors who have previously visited our website",
              "LinkedIn Insight Tag — measuring the effectiveness of our LinkedIn advertising campaigns",
              "Facebook Pixel — tracking conversions from our Facebook/Instagram advertisements",
              "These cookies are used to deliver advertisements that are relevant to your interests. You can opt out of these at any time",
            ],
          },
        ],
      },
      {
        heading: "Third-Party Cookies",
        content: "Some cookies on our website are set by third-party services that appear on our pages. We do not control the cookies set by these third parties. Key third-party cookie providers include:",
        bullets: [
          "Google (Analytics, Ads, YouTube embedded videos)",
          "LinkedIn (Insight Tag for B2B advertising)",
          "Facebook/Meta (Pixel for social media advertising)",
          "Microsoft Clarity (heatmaps and session recordings for UX analysis)",
        ],
      },
      {
        heading: "Managing Your Cookie Preferences",
        content: `You can control and manage cookies in several ways:\n\n• Browser settings: Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only first-party cookies, or delete cookies when you close the browser.\n• Opt-out links: You can opt out of specific third-party cookies:\n  — Google Analytics: https://tools.google.com/dlpage/gaoptout\n  — Google Ads: https://adssettings.google.com\n  — LinkedIn: https://www.linkedin.com/psettings/advertising\n  — Facebook: https://www.facebook.com/ads/preferences\n\nPlease note that disabling cookies may affect the functionality of our website. Some features may not work as intended if cookies are disabled.`,
      },
      {
        heading: "Cookie Retention Periods",
        content: "Different cookies have different retention periods:",
        bullets: [
          "Session cookies: Deleted when you close your browser",
          "Analytics cookies: Up to 26 months from your last visit",
          "Advertising cookies: Up to 13 months from placement",
          "Functional cookies: Up to 12 months from your last interaction",
        ],
      },
      {
        heading: "Updates to This Policy",
        content: "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.",
      },
      {
        heading: "Contact Us",
        contact: true,
      },
    ],
  },
};

const contactInfo = {
  company: "Aeronica Advance Technologies Pvt. Ltd.",
  email: "info@aeronica.in",
  phone: "+91 20 XXXX XXXX",
  address: "Khed Shivapur, Pune, Maharashtra, India",
};

const otherPolicies = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms-conditions" },
  { label: "Refund Policy", href: "/legal/refund-policy" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
];

export default function LegalPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = legalPages[slug];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div style={{ paddingTop: "0", paddingBottom: "0", color: "#1a1a1a" }}>
      <PageHero
        variant="child"
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legal", href: "#" },
          { label: data.title, href: `/legal/${slug}` },
        ]}
      />

      <FadeIn as="section" className="section-py" style={{ maxWidth: "160rem", margin: "0 auto" }}>
        <div className="seo-split-layout">
          {/* Main Content */}
          <div>
            {/* Last Updated Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.8rem",
              padding: "0.8rem 1.6rem", background: "#f5f5f5", border: "1px solid #e5e5e5",
              borderRadius: "0.4rem", marginBottom: "4rem",
            }}>
              <Calendar style={{ width: "1.4rem", height: "1.4rem", color: "#888" }} />
              <span style={{ fontSize: "1.25rem", color: "#555", fontFamily: "var(--font-mono)", letterSpacing: "0.03em" }}>
                Last updated: {data.lastUpdated}
              </span>
            </div>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
              {data.sections.map((section: any, idx: number) => (
                <div key={idx} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} style={{ scrollMarginTop: "12rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "2rem" }}>
                    <div style={{
                      width: "3.6rem", height: "3.6rem", borderRadius: "0.4rem",
                      background: "#21389A", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.3rem", fontWeight: 600 }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 style={{
                      fontSize: "clamp(2rem, 3vw, 2.4rem)", fontWeight: 600,
                      letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0,
                    }}>
                      {section.heading}
                    </h2>
                  </div>

                  {/* Text content */}
                  {section.content && (
                    <div style={{ marginBottom: section.bullets || section.list ? "2rem" : "0" }}>
                      {section.content.split("\n\n").map((para: string, pIdx: number) => (
                        <p key={pIdx} style={{
                          fontSize: "1.5rem", color: "#555", lineHeight: 1.8,
                          marginBottom: pIdx < section.content.split("\n\n").length - 1 ? "1.5rem" : "0",
                          whiteSpace: "pre-line",
                        }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Bullet list */}
                  {section.bullets && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {section.bullets.map((bullet: string, bIdx: number) => (
                        <li key={bIdx} style={{
                          display: "flex", gap: "1rem", alignItems: "start",
                          fontSize: "1.45rem", color: "#555", lineHeight: 1.6,
                        }}>
                          <CheckCircle style={{ width: "1.6rem", height: "1.6rem", color: "#21389A", flexShrink: 0, marginTop: "0.3rem" }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Grouped list (with titles) */}
                  {section.list && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                      {section.list.map((group: any, gIdx: number) => (
                        <div key={gIdx} className="card-hover" style={{
                          background: "#fff", border: "1px solid #e5e5e5",
                          borderRadius: "0.4rem", padding: "2.5rem",
                        }}>
                          <h3 style={{
                            fontSize: "1.7rem", fontWeight: 600, marginBottom: "1.5rem",
                            letterSpacing: "-0.01em", color: "#111",
                          }}>
                            {group.title}
                          </h3>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            {group.items.map((item: string, iIdx: number) => (
                              <li key={iIdx} style={{
                                display: "flex", gap: "0.8rem", alignItems: "start",
                                fontSize: "1.4rem", color: "#555", lineHeight: 1.6,
                              }}>
                                <CheckCircle style={{ width: "1.4rem", height: "1.4rem", color: "#009BFF", flexShrink: 0, marginTop: "0.3rem" }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Contact section */}
                  {section.contact && (
                    <div className="card-hover" style={{
                      background: "#fff", border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem", padding: "3rem",
                    }}>
                      <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>
                        If you have any questions about this {data.title.toLowerCase()}, please contact us:
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <Mail style={{ width: "1.6rem", height: "1.6rem", color: "#21389A" }} />
                          <a href={`mailto:${contactInfo.email}`} style={{
                            fontSize: "1.4rem", color: "#009BFF", textDecoration: "none",
                          }}>
                            {contactInfo.email}
                          </a>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <MapPin style={{ width: "1.6rem", height: "1.6rem", color: "#21389A" }} />
                          <span style={{ fontSize: "1.4rem", color: "#555" }}>
                            {contactInfo.address}
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <span style={{ fontSize: "1.3rem", color: "#888", fontFamily: "var(--font-mono)" }}>
                            {contactInfo.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Separator */}
                  {idx < data.sections.length - 1 && (
                    <div style={{ width: "100%", height: "1px", background: "#e5e5e5", marginTop: "4rem" }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="legal-sidebar" style={{ position: "sticky", top: "12rem" }}>
            {/* TOC */}
            <div style={{
              background: "#fff", border: "1px solid #e5e5e5",
              borderRadius: "0.4rem", padding: "2.5rem", marginBottom: "2rem",
            }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "1.1rem",
                textTransform: "uppercase", letterSpacing: "0.08em",
                fontWeight: 500, color: "#888", marginBottom: "1.5rem",
              }}>
                On This Page
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {data.sections.map((section: any, idx: number) => (
                  <li key={idx}>
                    <a
                      href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      style={{
                        fontSize: "1.3rem", color: "#555", textDecoration: "none",
                        display: "flex", alignItems: "center", gap: "0.8rem",
                        padding: "0.4rem 0", transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#21389A"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#555"; }}
                    >
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "1.1rem",
                        color: "#ccc", minWidth: "2rem",
                      }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Policies */}
            <div style={{
              background: "#fff", border: "1px solid #e5e5e5",
              borderRadius: "0.4rem", padding: "2.5rem",
            }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "1.1rem",
                textTransform: "uppercase", letterSpacing: "0.08em",
                fontWeight: 500, color: "#888", marginBottom: "1.5rem",
              }}>
                Other Policies
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {otherPolicies
                  .filter((p) => p.href !== `/legal/${slug}`)
                  .map((policy) => (
                    <li key={policy.label}>
                      <Link
                        href={policy.href}
                        style={{
                          fontSize: "1.3rem", color: "#009BFF", textDecoration: "none",
                          display: "block", padding: "0.4rem 0",
                          transition: "opacity 0.2s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                      >
                        {policy.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <CTA />
    </div>
  );
}
