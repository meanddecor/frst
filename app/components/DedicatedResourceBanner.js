// app/components/DedicatedResourceBanner.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function DedicatedResourceBanner({
  bgImage = '/images/banner-915x160.jpg',
  videoSrc,
  ctaHref = '/contact',
}) {
  return (
    <section className="w-full">
      <div className="relative h-[160px] overflow-hidden rounded-[12px]">
        {/* BG image */}
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* Optional video overlay (muted visual texture) */}
        {videoSrc && (
          <video
            className="pointer-events-none absolute -left-[58.5px] -top-[58.7px] h-[326px] w-[1000px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} />
          </video>
        )}

        {/* Vignette / lighting pass to match comp */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_85%,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.9)_55%,rgba(0,0,0,0.95)_100%)]" />

        {/* Content */}
        <div className="absolute left-[126px] top-[38.8px] w-[662.6px] max-w-[calc(100%-32px)] px-4 md:px-0">
          <div className="grid grid-cols-[1fr_auto] items-start gap-6">
            {/* Copy block (width ~436 in comp) */}
            <div className="max-w-[436px] text-white">
              <h3 className="mb-2 text-[15.25px] font-normal leading-[17.6px]">
                Need a fully dedicated resource?
              </h3>
              <p className="text-[12.91px] leading-[19.6px] tracking-[0.56px]">
                Fully dedicated, high-quality marketing professionals for a fraction
                of the cost. Designers, video editors, acquisition media buyers, and
                retention marketers at Darkroom-level standards.
              </p>
            </div>

            {/* CTA */}
            <Link
              href={ctaHref}
              className="inline-flex h-[48.8px] w-[106.6px] items-center justify-center rounded-[3px] bg-white text-center text-[11.25px] leading-[16.8px] tracking-[0.24px] text-black hover:opacity-90"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
