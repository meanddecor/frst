// app/components/IdeasSplitExact.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function IdeasSplitExact() {
  return (
    <section className="w-full  text-white">
      <div className="mx-auto max-w-[1158px] min-h-[512px] px-4 lg:px-0 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[492px_1fr] lg:gap-x-[39px]">
          {/* Left image */}
          <div className="relative w-full h-[320px] lg:w-[492px] lg:h-[512px] overflow-hidden rounded-[3px]">
            {/* Replace with your asset; if remote, add domain to next.config.js */}
            <Image
              src="/images/ideas-left.jpg"
              alt="Golden statue artwork"
              fill
              sizes="(max-width:1024px) 100vw, 492px"
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Right column */}
          <div className="pt-4 lg:pt-[16px]">
            <h2 className="font-light text-[clamp(28px,5vw,54px)] leading-[1.05] lg:leading-[50px] tracking-tight">
              Transforming ideas with a creative
            </h2>

            <p className="mt-6 text-[18px] leading-[26px] font-medium">
              Your Vision. My Passion.
            </p>

            <p className="mt-2 max-w-[513px] text-[16px] leading-[26px] text-white/50">
              Every project is an opportunity to push boundaries and create something truly
              original. With a blend of creativity, expertise, and technology, I transform ideas
              into experiences that resonate.
            </p>

            <p className="mt-6 text-[18px] leading-[26px] font-medium">
              Ongoing Partnership for Long Term Success
            </p>

            <p className="mt-2 max-w-[556px] text-[16px] leading-[26px] text-white/50">
              My commitment doesn’t end at launch. I’m dedicated to ensuring your digital solution
              evolves with your business, providing continuous support, optimization, and updates
              to keep everything running seamlessly and aligned with your goals.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex h-[50px] w-[160px] items-center justify-center gap-2 rounded-[3.75px]
                           bg-neutral-200/70 px-3 text-[16px] font-medium text-black ring-1 ring-black/10
                           hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Book a Call"
              >
                {/* simple receipt icon @ 19×24 */}
                <svg aria-hidden viewBox="0 0 24 24" className="h-[24px] w-[19px]">
                  <rect x="4" y="3" width="16" height="18" rx="2" fill="currentColor" />
                  <path d="M10 8v8m4-8v8" stroke="black" strokeWidth="1.5" />
                </svg>
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
