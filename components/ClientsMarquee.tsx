"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "BASF", url: "https://ui-avatars.com/api/?name=BASF&background=random&color=fff&size=128" },
  { name: "Central Railway", url: "https://ui-avatars.com/api/?name=CR&background=random&color=fff&size=128" },
  { name: "IOCL", url: "https://ui-avatars.com/api/?name=IOCL&background=random&color=fff&size=128" },
  { name: "JSW Steel", url: "https://ui-avatars.com/api/?name=JSW&background=random&color=fff&size=128" },
];

const ClientsMarquee = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="clients-marquee">
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Row 1 */}
          <div className="marquee-row">
            {duplicatedClients.map((client, index) => (
            <div key={`row1-${index}`} className="client-card">
              <img src={client.url} alt={client.name} width={64} height={64} className="client-logo" />
            </div>

            ))}
          </div>
          {/* Row 2 */}
          <div className="marquee-row">
            {[...clients].reverse().concat([...clients].reverse()).map((client, index) => (
            <div key={`row2-${index}`} className="client-card">
              <img src={client.url} alt={client.name} width={64} height={64} className="client-logo" />
            </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
