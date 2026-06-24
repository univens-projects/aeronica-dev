"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [stage, setStage] = useState<"loading" | "logo-exit" | "cinematic-transition" | "gone">("loading");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 1. Logo animation duration
    const logoTimer = setTimeout(() => {
      setStage("logo-exit");
    }, 2000);

    // 2. Transition to cinematic blur after logo exits (Disabled as requested)
    /*
    const cinematicTimer = setTimeout(() => {
      setStage("cinematic-transition");
    }, 2500);
    */

    // 3. Fully remove component
    const goneTimer = setTimeout(() => {
      setStage("gone");
      document.body.classList.add("preloader-finished");
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (!mounted || stage === "gone") return null;

  return (
    <div className={`loading-screen ${stage === "cinematic-transition" ? "cinematic-transition" : ""}`} id="loadingScreen">
      <div className={`loading-logo-container ${stage !== "loading" ? "logo-exit" : ""}`}>
        <Image 
          src="/assets/img/aeronica-logo.png" 
          alt="Aeronica Logo" 
          width={300} 
          height={100} 
          className="loading-logo"
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
