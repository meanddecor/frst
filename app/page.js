import Hero from "./components/Hero";
import ScrollingLogos from "./components/ScrollingLogos";
import ProjectShowcase from "./components/ProjectShowcase";
import DefinitionBar from "./components/DefinitionBar";
import ProvenTrackRecord from "./components/ProvenTrackRecord";
import AgencyFocus from "./components/AgencyFocus";
import StatsGrid from "./components/StatsGrid";
import ServicesSection from "./components/ServicesSection.client";
import ServiceHero from "./components/ServiceHero.client";
import ServicesGrid from "./components/ServicesGrid";
import FAQ from "./components/faq";
import Footer from "./components/Footer";
import PageFade from "./components/PageFade";
import Reveal from "./components/Reveal";
export default function Home() {
  return (
    <main>
      <PageFade>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.05}>
          <DefinitionBar />
        </Reveal>
        <Reveal delay={0.1}>
          <ScrollingLogos />
        </Reveal>
        <Reveal delay={0.15}>
          <ProjectShowcase />
        </Reveal>
        <Reveal delay={0.2}>
          <ProvenTrackRecord />
        </Reveal>
        <Reveal delay={0.25}>
          <StatsGrid />
        </Reveal>
        <Reveal delay={0.3}>
          <AgencyFocus />
        </Reveal>
        <Reveal delay={0.35}>
          <ServicesSection />
        </Reveal>
        <Reveal delay={0.4}>
          <ServiceHero />
        </Reveal>
        <Reveal delay={0.45}>
          <ServicesGrid />
        </Reveal>
        <Reveal delay={0.5}>
          <FAQ />
        </Reveal>
    
      </PageFade>
    </main>
  );
}
