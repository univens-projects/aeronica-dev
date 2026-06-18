import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CinematicEffects from "@/components/CinematicEffects";

export default function Page() {
  return (
    <>
      <div className="film-grain"></div>
      <LoadingScreen />
      <CinematicEffects>
        <Navbar />
        <main>
          <Hero />
          <ClientsMarquee />
          <Stats />
          <Services />
          <Technology />
          <Process />
          <Products />
          <Portfolio />
          <Industries />
          <Testimonials />
          <News />
          <CTA />
        </main>
        <BackToTop />
        <Footer />
      </CinematicEffects>
    </>
  );
}
