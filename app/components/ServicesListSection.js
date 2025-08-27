// app/components/ServicesListSection.tsx
'use client';

import Link from 'next/link';

const SERVICES = [
  {
    title: 'Amazon Marketplace Management',
    description:
      'Grow sales and brand value on Amazon. Fully-managed marketplace strategy, ppc implementation, creative strategy, and business forecasting.',
    price: '$5,000/mo',
    href: '/services/amazon',
  },
  {
    title: 'Amazon Marketplace Management',
    description:
      'Grow sales and brand value on Amazon. Fully-managed marketplace strategy, ppc implementation, creative strategy, and business forecasting.',
    price: '$5,000/mo',
    href: '/services/amazon',
  },
];

function ThinDivider() {
  return <div className="h-px w-full bg-[#D9D9D9]/90" />;
}

export default function ServicesListSection() {
  return (
    <section className="w-full  text-white">
      <div className="mx-auto max-w-[1120px] px-4 py-6 md:py-10">
        {/* Layout: narrow left column, wide right column */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
          {/* Left CTA */}
          <aside className="md:pl-2">
            <p className="mb-4 max-w-[210px] text-[13px] leading-[19.6px] tracking-[0.28px] text-white">
              Speak to a member of our team.
              <br />
              No frills, no pressure.
            </p>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-3 rounded-md bg-[#E5E5E5]/70 px-4 text-[15.6px] font-medium leading-[15.72px] text-black"
            >
              {/* phone-ish glyph from your comp */}
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                aria-hidden
              >
                <rect x="0.6" y="0.2" width="17.28" height="21.6" fill="#111" />
              </svg>
              Book a Call
            </Link>
          </aside>

          {/* Right list */}
          <div className="md:pr-2">
            {/* Top thin divider (as in comp) */}
   

            <ul role="list" className="divide-y divide-[#D9D9D9]/90">
              {SERVICES.map((s, i) => (
                <li key={i} className="py-6 md:py-7">
                  <article className="max-w-[566px]">
                    {/* Title */}
                    <h3 className="mb-2 text-[13.34px] font-medium leading-[15.4px]">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-[12.9px] font-light leading-[19.6px] text-white/85">
                      {s.description}
                    </p>

                    {/* Price + vertical divider + CTA */}
                    <div className="flex items-center">
                      <div className="mr-4 flex items-baseline gap-3">
                        <span className="text-[12.8px] font-light leading-[15.4px]">
                          Starts at
                        </span>
                        <span className="text-[15.5px] font-medium leading-[17.6px]">
                          {s.price}
                        </span>
                      </div>

                      {/* thin vertical separator */}
                      <span
                        aria-hidden
                        className="mr-4 inline-block h-[31px] w-px bg-[#D9D9D9]/90"
                      />

                      <Link
                        href={s.href ?? '#'}
                        className="inline-flex h-[28.8px] items-center rounded-[3px] bg-[#E3E3E3] px-3 text-center text-[11.06px] leading-[16.8px] tracking-[0.24px] text-black hover:opacity-90"
                      >
                        Learn More
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
