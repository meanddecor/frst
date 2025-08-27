// app/components/ServicesHero.js
'use client';

import Link from 'next/link';
import { memo } from 'react';

// Memoized and responsive corner frames. Sizes are smaller for a better fit on all screens.
const CornerFrame = memo(function CornerFrame() {
  const corners = [
    { x: 'left-0', y: 'top-18' },
    { x: 'right-0', y: 'top-18' },
    { x: 'left-0', y: 'bottom-18' },
    { x: 'right-0', y: 'bottom-18' },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <div key={`v-${i}`} className={`pointer-events-none absolute ${c.x} ${c.y} h-10 w-px bg-white/90 md:h-12`} />
      ))}
      {corners.map((c, i) => (
        <div key={`h-${i}`} className={`pointer-events-none absolute ${c.x} ${c.y} h-px w-14 bg-white/90 md:w-16`} />
      ))}
    </>
  );
});

const ServicesHero = memo(function ServicesHero({
  heading = 'All Services',
  subheading = 'Explore our core digital marketing services',
  blurb = `The focus of the agency. Unlock new revenue and achieve your business goals with our comprehensive digital marketing strategies, tailored to elevate your brand's presence and impact.`,
  ctaLabel = 'Explore',
  ctaHref = '#',
  className = '',
}) {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className={`relative w-full  text-white ${className}`}
    >
      {/* Container with responsive padding and a min-height for consistent spacing */}
      <div className="relative mx-auto min-h-[37.5rem] max-w-7xl flex flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <CornerFrame />
        
        {/* Main content wrapper with a large gap between the top (heading) and bottom (blurb/cta) sections */}
        <div className="flex flex-col gap-y-16 lg:gap-y-20">
          
          {/* TOP: Heading Group */}
          <div className="max-w-4xl">
            <h1 id="services-hero-heading" className="text-balance font-normal tracking-tight">
              {/* Responsive typography scales up with breakpoints */}
              <span className="block text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {heading}
              </span>
              <span className="mt-1 block text-4xl leading-tight text-white/35 sm:text-5xl lg:text-6xl">
                {subheading}
              </span>
            </h1>
          </div>

          {/* BOTTOM: Blurb and CTA */}
          {/* 
            THIS IS THE KEY FIX:
            - On mobile (`flex-col`), it stacks the blurb and then the button.
            - On large screens (`lg:flex-row`), it becomes a row.
            - `lg:justify-between` pushes the blurb to the left and the button to the right.
            - `lg:items-end` aligns the bottom of the button with the bottom of the text block.
          */}
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Blurb on the left */}
            <p className="max-w-xl text-base leading-relaxed tracking-wide text-neutral-400 md:text-lg">
              {blurb}
            </p>

            {/* CTA on the right */}
            {/* `flex-shrink-0` is a best practice to prevent the button from shrinking on smaller screens */}
            <div className="flex-shrink-0">
              <Link
                href={ctaHref}
                className="inline-flex h-14 w-36 items-center justify-center rounded-md bg-neutral-200/90 text-base font-medium text-black shadow-sm backdrop-blur-sm
                           transition-transform duration-200 hover:scale-[1.03] hover:bg-white
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 focus-visible:ring-offset-black"
                aria-label={`${ctaLabel}: ${subheading}`}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ServicesHero;