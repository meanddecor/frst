// app/components/ServicesGrid.tsx
"use client";
import { useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ['latin'] });

const ITEMS = [
  // ... your items array remains the same
  {
    id: 1,
    title: 'BRANDING',
    blurb:
      'Establishing a data-driven foundation through in-depth user research and competitive analysis.',
    href: '#branding',
  },
  {
    id: 2,
    title: (
      <>
        <span className="block">WEBSITE</span>
        <span className="block text-3xl lg:text-[32px] leading-[1.15]">
          DEVELOPMENT
        </span>
      </>
    ),
    blurb:
      'Establishing a data-driven foundation through in-depth user research and competitive analysis.',
    href: '#web',
  },
  {
    id: 3,
    title: (
      <>
        <span className="block">GRAPHIC</span>
        <span className="block text-3xl lg:text-[32px] leading-[1.15]">
          DESIGN
        </span>
      </>
    ),
    blurb:
      'Establishing a data-driven foundation through in-depth user research and competitive analysis.',
    href: '#graphic',
  },
  {
    id: 4,
    title: (
      <>
        <span className="block">GRAPHIC</span>
        <span className="block text-3xl lg:text-[32px] leading-[1.15]">
          DESIGN
        </span>
      </>
    ),
    blurb:
      'Establishing a data-driven foundation through in-depth user research and competitive analysis.',
    href: '#graphic',
  },
  {
    id: 5,
    title: (
      <>
        <span className="block">GRAPHIC</span>
        <span className="block text-3xl lg:text-[32px] leading-[1.15]">
          DESIGN
        </span>
      </>
    ),
    blurb:
      'Establishing a data-driven foundation through in-depth user research and competitive analysis.',
    href: '#graphic',
  },
];


export default function ServicesGrid({ items = ITEMS }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Your useEffect hook with all the GSAP logic remains exactly the same.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ro;
    const mm = ScrollTrigger.matchMedia({
      '(min-width: 1024px)': () => {
        let ctx;
        const rafId = requestAnimationFrame(() => {
          ctx = gsap.context(() => {
            const END_OFFSET_PX = 94;
            const calcTotalX = () =>
              Math.max(0, track.scrollWidth - section.clientWidth + END_OFFSET_PX);
            gsap.to(track, {
              x: () => -calcTotalX(),
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${calcTotalX()}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
              },
            });
          }, section);

          ro = new ResizeObserver(() => ScrollTrigger.refresh());
          ro.observe(track);
          ro.observe(section);
        });
        
        return () => {
          cancelAnimationFrame(rafId);
          if (ctx) ctx.revert();
          if (ro) ro.disconnect();
        };
      },
      '(max-width: 1023px)': () => {
        gsap.set(track, { clearProps: 'transform' });
        return () => {};
      },
    });

    return () => {
      if (mm) mm.revert();
      if (ro) ro.disconnect();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      // 👇 FIX: Removed `w-screen`. `overflow-x-hidden` is the key part to keep.
      className={`${inter.className} relative text-white overflow-x-hidden`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/80" aria-hidden="true" />

      {/* 👇 FIX: Removed `w-screen` here as well. It will now correctly fill its parent. */}
      <div className="px-4 sm:px-6 lg:px-8 overflow-x-auto lg:overflow-hidden flex items-center py-12 sm:py-16 lg:py-20 touch-pan-x">
        <div
          ref={trackRef}
          className="flex gap-8 lg:gap-16 pr-4 will-change-transform"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[520px] lg:w-[420px] flex min-h-[258px] flex-col justify-between"
            >
              {/* number */}
              <div className="text-white text-[22px] leading-none uppercase">{item.id}</div>

              {/* title */}
              <h3 className="mt-6 font-normal uppercase leading-[1.15]">
                <span className="block text-[54px] sm:text-[68px] lg:text-[81.87px]">
                  {item.title}
                </span>
              </h3>

              {/* blurb */}
              <p className="mt-6 text-[18.21px] leading-[31.5px] text-white">
                {item.blurb}
              </p>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={item.href}
                  className="inline-flex h-[44.65px] items-center justify-center rounded-[6.2px] bg-[#E3E3E3] px-5 text-[17.15px] leading-[26.05px] tracking-[0.37px] text-[#080808] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}