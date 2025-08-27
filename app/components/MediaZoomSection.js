// app/components/MediaZoomSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function MediaZoomSection({
  kind,
  src,
  width,
  height,
  poster,
  zoomStart = 0.05,
  zoomEnd = 0.65,
  startScale = 0.6,
  endScale = 1.25,
  sectionVH = 140,
  tailSpacePx = 0,
}) {
  const containerRef = useRef(null);

  // Progress of the whole section as it scrolls past the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scale from startScale -> 1.0 within the chosen window of the scroll
  const scale = useTransform(
    scrollYProgress,
    [zoomStart, zoomEnd],
    [startScale, endScale],
    { clamp: true }
  );

  // We keep the media centered and sticky, while the container is taller than the viewport
  return (
    <section
      ref={containerRef}
      className="relative w-full  "
      style={{ height: `calc(${sectionVH}vh)`, marginBottom: tailSpacePx }} // controls total scroll length and bottom spacing
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Aspect-ratio lock box (so the media never warps) */}
        <motion.div
          style={{ scale }}
          className="relative"
        >
          <div
            className="relative w-[min(90vw,1200px)]"
            style={{ aspectRatio: `${width} / ${height}` }}
          >
            {kind === 'image' ? (
              <Image
                src={src}
                alt=""
                fill
                priority
                className="rounded-xl object-cover"
                sizes="90vw"
              />
            ) : (
              <video
                className="h-full w-full rounded-xl object-cover"
                src={src}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
