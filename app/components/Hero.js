"use client";

import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero mt-4" aria-label="Intro">
      <div className="hero-inner">
        <h1 className="hero-title">
          unlock the next
          <br />
          stage of growth.
        </h1>
        <p className="hero-sub">
          FRST Subject provides world class growth marketing services that extend across the
          entire customer journey.
        </p>
        <div className="hero-cta">
        <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-200/80 px-3 py-2 text-sm font-medium text-black
                           ring-1 ring-black/10 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Book a call"
              >
                {/* Simple ticket/receipt icon */}
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M5 6h14v5a2 2 0 0 0 0 2v5H5v-5a2 2 0 0 0 0-2V6zm4 2v8m6-8v8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Book a Call
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium
                           ring-1 ring-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Begin your journey"
              >
                Begin Your Journey
              </Link>
        </div>
      </div>

      <style jsx>{`
        .hero{position:relative; width:100%; display:flex; justify-content:center; padding:clamp(24px, 6vw, 48px) var(--g, 20px)}
        .hero-inner{position:relative; width:min(800px, 100%); height:auto}
     .hero-title {
  margin: 0;
  color: var(--foreground);
  text-transform: uppercase;
  font: 100 clamp(32px, 8vw, 80px) / 1 Inter, system-ui, sans-serif;
  letter-spacing: 0.8px;
}

.hero-sub {
  margin-top: clamp(8px, 2vw, 16px);
  max-width: ch;
  color: var(--foreground);
  font: 500 clamp(10px, 2vw, 17px) / clamp(20px, 3.5vw, 28px) Inter, system-ui, sans-serif;
  letter-spacing: 0.8px;
}

        .hero-cta{display:flex; gap:clamp(8px,2vw,12px); margin-top:clamp(12px,3vw,24px)}
        @media (max-width:600px){
          .hero-cta{
            transform: scale(0.9);
            transform-origin: left;
          }
        }
      `}</style>
    </section>
  );
}
