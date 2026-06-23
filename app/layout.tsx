import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono, Sora, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CinematicEffects from "@/components/CinematicEffects";
import ClientOnly from "@/components/ClientOnly";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreenWrapper from "@/components/LoadingScreenWrapper";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeronica — Drones, built with Purpose! Flying with Precision!",
  description: "Aeronica Advance Technologies — indigenous drone solutions for agriculture, GIS, surveillance, and industrial applications. DGCA certified.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} ${ibmPlexSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientOnly>
          <>
            <div className="film-grain"></div>
            <CustomCursor />
            <LoadingScreenWrapper />
            <CinematicEffects>
              <Navbar />
              <main>{children}</main>
              <BackToTop />
              <Footer />
            </CinematicEffects>
          </>
        </ClientOnly>
      </body>
    </html>
  );
}
