"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const clients = [
  { name: "BASF", url: "/assets/img/client logos/basf.jpg" },
  { name: "Central Railway", url: "/assets/img/client logos/central-railway.png" },
  { name: "IOCL", url: "/assets/img/client logos/iocl.jpg" },
  { name: "JSW Steel", url: "/assets/img/client logos/jsw.jpg" },
  { name: "Amazing Aerial", url: "/assets/img/client logos/amazing-aerial.jpg" },
  { name: "Asian Paints", url: "/assets/img/client logos/asian-paints.jpg" },
  { name: "Inforob", url: "/assets/img/client logos/inforob.jpg" },
  { name: "Infostorm", url: "/assets/img/client logos/infostorm.jpg" },
  { name: "LTIMindtree", url: "/assets/img/client logos/ltimindtree.jpg" },
  { name: "MH Agriculture", url: "/assets/img/client logos/mh-agriculture.jpg" },
  { name: "MH Forest", url: "/assets/img/client logos/mh-forest.jpg" },
  { name: "Padeco", url: "/assets/img/client logos/padeco.jpg" },
  { name: "Sagunabag", url: "/assets/img/client logos/sagunabag.jpg" },
  { name: "SRV Media", url: "/assets/img/client logos/srv-media.jpg" },
  { name: "UPL", url: "/assets/img/client logos/upl.jpg" },
];

const ClientsMarquee = () => {
  const sectionRef = useSectionObserver();
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="clients-marquee section-hidden" ref={sectionRef}>
      <div className="section-header" style={{ marginBottom: "4rem", textAlign: "center" as const }}>
        <h2 className="section-title" style={{ justifyContent: "center" }}>

          Trusted by leading organisations
        </h2>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Row 1 */}
          <div className="marquee-row">
            {duplicatedClients.map((client, index) => (
            <div key={`row1-${index}`} className="client-card">
              <img src={client.url} alt={client.name} className="client-logo" />
            </div>

            ))}
          </div>
          {/* Row 2 */}
          <div className="marquee-row">
            {[...clients].reverse().concat([...clients].reverse()).map((client, index) => (
            <div key={`row2-${index}`} className="client-card">
              <img src={client.url} alt={client.name} className="client-logo" />
            </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
