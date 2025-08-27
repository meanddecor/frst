'use client';

import Image from 'next/image';

// Add the paths to your logo images here.
// Make sure they are in the /public directory.
const logos = [
  { id: 1, src: '/haute.png', alt: 'Haute Living Logo', width: 282, height: 68 },
  { id: 2, src: '/michelin.png', alt: 'Michelin Guide Logo', width: 283, height: 148 },
  { id: 3, src: '/travel.png', alt: 'Forbes Travel Guide Logo', width: 80, height: 123 },
  // For a better visual loop, it's good to have enough logos to fill more than the screen width.
  // Add duplicates or other logos if your list is short.
  { id: 4, src: '/haute.png', alt: 'Haute Living Logo', width: 282, height: 68 }, // Example duplicate
  { id: 5, src: '/michelin.png', alt: 'Michelin Guide Logo', width: 283, height: 148 }, // Example duplicate
];

const ScrollingLogos = () => {
  const loop = [...logos, ...logos, ...logos];
  return (
    <section className="group w-full overflow-hidden py-[45px]" aria-label="Brand logos">
      <div className="relative flex">
        {/* The scrolling container */}
        <div className="marquee">
          {/* First set (visible to AT) */}
          {logos.map(({ id, src, alt, width, height }, idx) => (
            <div key={`logo-a-${id}`} className="flex-shrink-0">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(max-width:768px) 33vw, (max-width:1200px) 20vw, 10vw"
                priority={idx < 3}
                loading="eager"
                className="h-[68px] w-auto max-w-none"
              />
            </div>
          ))}
          {/* Second and third sets for seamless loop (hidden from AT) */}
          {loop.map(({ id, src, alt, width, height }, i) => (
            <div key={`logo-b-${id}-${i}`} className="flex-shrink-0" aria-hidden="true">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(max-width:768px) 33vw, (max-width:1200px) 20vw, 10vw"
                loading="eager"
                className="h-[68px] w-auto max-w-none"
              />
            </div>
          ))}
        </div>

        {/* Edge fade masks for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 marquee-mask" />
        </div>
      </div>

      <style jsx>{`
        .marquee{display:flex;flex-wrap:nowrap;align-items:center;gap:254px;animation:marquee var(--marquee-duration,40s) linear infinite;animation-direction:reverse;will-change:transform}
        @keyframes marquee{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-33.3333%,0,0)}}
        @media (max-width:768px){.marquee{--marquee-duration:60s;gap:128px}}
        @media (prefers-reduced-motion:reduce){.marquee{animation:none}}
        
      `}</style>
    </section>
  );
};

export default ScrollingLogos;