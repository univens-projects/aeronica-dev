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
import Hero from "@/components/Hero";


export default function Page() {
  return (
    <>
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
    </>
  );
}
