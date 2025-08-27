'use client';
import ServicesListSection from "../components/ServicesListSection";
import Button from "../components/Button";

export default function Home() {
  return (
    <main>
       <section className="hero" aria-label="Intro">
      <div className="hero-inner">
        <h1 className="hero-title">
          unlock the next
      
        </h1>
    
      
      </div>

      <style jsx>{`
        .hero{position:relative; width:100%; display:flex; justify-content:center; padding:clamp(32px, 8vw, 72px) var(--g, 24px)}
        .hero-inner{position:relative; width:min(1045px, 100%); height:auto}
        .hero-title{margin:0; color:var(--foreground); text-transform:uppercase; font:200 clamp(40px,10vw,106.7px)/1 Inter,system-ui,sans-serif; letter-spacing:1px}
        .hero-sub{margin-top:clamp(12px,2.5vw,24px); max-width:ch; color:var(--foreground); font:500 clamp(16px,2.4vw,26px)/clamp(24px,4.2vw,40px) Inter,system-ui,sans-serif; letter-spacing:1px}
        .hero-cta{display:flex; gap:clamp(12px,2.4vw,14px); margin-top:clamp(16px,4vw,32px)}
        @media (max-width:600px){
          .hero-cta{flex-direction:column; width:100%}
          .hero-cta :global(a), .hero-cta :global(button){width:100%}
        }
      `}</style>
    </section>
        <ServicesListSection />
    </main>
  );
}
