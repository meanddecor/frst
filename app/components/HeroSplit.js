
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSplit() {
  return (
    <section className="w-full  text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left column */}
          <div>
            {/* Small pills */}
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium tracking-wide text-white/80 ring-1 ring-white/15">
                2025
              </span>
              <span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium tracking-wide text-white/80 ring-1 ring-white/15">
                About
              </span>
            </div>

            {/* Headline */}
            <h1 className="uppercase font-light leading-none tracking-[0.02em]
                           text-[clamp(40px,8vw,108px)]">
              Start Your<br />Journey
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/80">
              FRST Subject provides world class growth marketing services that extend
              across the entire customer journey.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-200/80 px-4 py-3 text-sm font-medium text-black
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
                className="inline-flex items-center rounded-md px-4 py-3 text-sm font-medium
                           ring-1 ring-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Begin your journey"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>

          {/* Right column (media panel) */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[720px] rounded-xl 
                            ring-1 ring-white/10 shadow-2xl overflow-hidden">
              {/* Keep aspect similar to your mock */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/hero-shot.jpg" // put your screenshot in /public/hero-shot.jpg
                  alt="Selected work preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
