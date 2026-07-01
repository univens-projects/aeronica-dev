"use client";

import React from "react";

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
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="marquee-section">
      <div style={{ maxWidth: "160rem", margin: "0 auto", textAlign: "center", padding: "0 var(--section-px)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", fontWeight: 600, display: "block", marginBottom: "5rem" }}>
          Trusted by Leading Organisations
        </span>
      </div>
      <div className="marquee-track">
        <div className="marquee-row">
          {duplicatedClients.map((client, index) => (
            <img key={`row1-${index}`} src={client.url} alt={client.name} className="client-logo" />
          ))}
        </div>
        <div className="marquee-row">
          {[...clients].reverse().concat([...clients].reverse()).map((client, index) => (
            <img key={`row2-${index}`} src={client.url} alt={client.name} className="client-logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
