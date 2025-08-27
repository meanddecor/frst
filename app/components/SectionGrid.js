"use client";
// app/components/SectionGrid.js

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionGrid({
  id,
  title,
  subtitle,
  items,
  className = '',
}) {
  const [openModalFor, setOpenModalFor] = useState(null);
  const active = items.find(i => i.id === openModalFor);

  return (
    <section
      id={id}
      className={`w-full  text-white ${className}`}
      aria-labelledby={`${id || title}-heading`}
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-0 py-10 sm:py-14">
        {/* Heading */}
        <header className="mb-8 sm:mb-10">
          <h2
            id={`${id || title}-heading`}
            className="text-[34px] sm:text-[38px] font-normal tracking-tight"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-[600px] text-sm leading-6 text-white/50">
              {subtitle}
            </p>
          )}
        </header>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => (
            <article key={card.id} className="group">
              {/* Media */}
              <div className="relative h-[200px] w-full overflow-hidden rounded-[15px]">
                {card.media.type === 'image' ? (
                  <Image
                    src={card.media.src}
                    alt={card.media.alt}
                    fill
                    sizes="(min-width:1024px) 338px, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    poster={card.media.poster}
                    muted
                    playsInline
                    autoPlay
                    loop
                  >
                    <source src={card.media.src} />
                  </video>
                )}
              </div>

              {/* Copy */}
              <div className="mt-5">
                <h3 className="text-[22px] leading-[26px] tracking-[0.02em]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[22.4px] text-[#919191]">
                  {card.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-4">
                {card.cta.href ? (
                  <Link
                    href={card.cta.href}
                    className="inline-flex items-center rounded-[4px] bg-[#E3E3E3] px-3 py-1.5 text-[11px] font-medium text-black"
                  >
                    {card.cta.label ?? 'Learn More'}
                  </Link>
                ) : card.cta.modalContent ? (
                  <button
                    type="button"
                    onClick={() => setOpenModalFor(card.id)}
                    className="inline-flex items-center rounded-[4px] bg-[#E3E3E3] px-3 py-1.5 text-[11px] font-medium text-black"
                    aria-haspopup="dialog"
                  >
                    {card.cta.label ?? 'Learn More'}
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Minimal accessible modal (no external deps) */}
      {active?.cta.modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 ${openModalFor ? '' : 'hidden'}`}
        >
          <div
            className="absolute inset-0 /60"
            onClick={() => setOpenModalFor(null)}
          />
          <div className="pointer-events-auto absolute left-1/2 top-1/2 w-[92vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-neutral-950 p-6 shadow-2xl ring-1 ring-white/10">
            <div className="mb-4 flex items-start justify-between gap-6">
              <h3 className="text-lg font-medium">{active.title}</h3>
              <button
                onClick={() => setOpenModalFor(null)}
                className="rounded-md px-2 py-1 text-sm text-white/70 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              {active.cta.modalContent}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
