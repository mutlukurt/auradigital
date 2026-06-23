import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Manifesto } from "@/components/sections/Manifesto";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { Projects } from "@/components/sections/Projects";
import { CTA } from "@/components/sections/CTA";
import { MetaStrip } from "@/components/sections/MetaStrip";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Manifesto />
        <ServicesDetail />
        <Projects />
        <CTA />
        <MetaStrip />
      </main>
      <Footer />
    </>
  );
}
