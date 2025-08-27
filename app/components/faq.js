// app/components/Faq.tsx
'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const ITEMS = [
  {
    q: 'We need results immediately. H',
    a: `The focus of the agency. Unlock new revenue and the focus of the agency.
        Unlock new revenue and the focus of the agency. Unlock new revenue and
        the focus of the agency. Unlock new revenue and…`,
  },
  { q: 'What makes your process unique?', a: 'Short answer explaining your differentiators, methodology, and proof.' },
  { q: 'What makes your process unique?', a: 'Short answer explaining your differentiators, methodology, and proof.' },
  { q: 'What makes your process unique?', a: 'Short answer explaining your differentiators, methodology, and proof.' },
];

export default function Faq() {
  const [open, setOpen] = useState(0); // first item open (like your mock)

  return (
    <section className={`${inter.className} w-full  text-white`}>
      <div className="mx-auto max-w-[1265px] px-4 sm:px-6 lg:px-8 py-10">
        {/* Header row */}
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <h2 className="max-w-[900px] text-[28px] leading-tight sm:text-[40px] sm:leading-[1.2] md:text-[48px] lg:text-[51.56px] lg:leading-[60.75px] font-normal">
            Have Questions?
            <br />
            We have specific answers.
          </h2>

          <a
            href="#book"
            className="w-full sm:w-auto justify-center sm:justify-normal shrink-0 inline-flex items-center gap-3 rounded-[4.35px] bg-[rgba(229,229,229,0.70)] px-4 py-3 text-base sm:px-5 sm:text-[18.85px] font-medium text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            {/* tiny icon block like your asset */}
            <span aria-hidden className="inline-block h-[28px] w-[21px] bg-gradient-to-b from-[#555] to-[#111] rounded-[2px] opacity-90" />
            Book a Call
          </a>
        </div>

        {/* List */}
        <div className="mt-8">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="select-none">
                {/* top hairline */}
                <div className="h-px w-full bg-white" />

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-6 py-5 text-left"
                >
                  <span className="text-base sm:text-[18.54px] sm:leading-[31.5px]">
                    {item.q}
                  </span>

                  {/* plus/minus icon (1px lines to match comp) */}
                  <span className="relative inline-flex h-3 w-3 items-center justify-center">
                    {/* horizontal */}
                    <span className="absolute h-px w-3 bg-white" />
                    {/* vertical (hide when open -> minus) */}
                    <span className={`absolute w-px h-3 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                  </span>
                </button>

                {/* answer */}
                {isOpen && (
                  <div className="pb-6 pr-4 sm:pr-10">
                    <p className="max-w-[1199px] text-base leading-normal sm:text-[18.12px] sm:leading-[27.06px] tracking-[0.77px] font-light text-white/95">
                      {item.a}
                    </p>
                  </div>
                )}

                {/* bottom hairline */}
                <div className="h-px w-full bg-white" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
