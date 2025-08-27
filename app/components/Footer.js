// app/components/Footer.tsx
import Link from 'next/link';

const ext = (
  <svg aria-hidden viewBox="0 0 12 12" className="inline h-[12px] w-[12px] translate-y-[-1px]">
    <path d="M4 2h6v6M10 2 5 7" fill="none" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full  text-white">
      <div className="w-full max-w-none px-5 sm:px-8 lg:px-12 py-10 lg:py-12">
        {/* Top grid — mobile: 2 columns to match comp; lg: 3 */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3"
        >
          {/* Discover (col 1) */}
          <div>
            <h3 className="mb-3 text-[14px] leading-[18.2px] font-semibold uppercase tracking-[0.27px]">
              Discover
            </h3>
            <ul className="space-y-3 text-[14px] leading-[14px] uppercase tracking-[0.27px]">
              <li><Link href="/" className="hover:opacity-80">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-80">About</Link></li>
              <li><Link href="/wineries" className="hover:opacity-80">Wineries</Link></li>
              <li><Link href="/ideas" className="hover:opacity-80">Ideas</Link></li>
            </ul>
          </div>

          {/* Support (col 2) */}
          <div>
            <h3 className="mb-3 text-[14px] leading-[18.2px] font-semibold uppercase tracking-[0.27px]">
              Support
            </h3>
            <ul className="space-y-3 text-[14px] leading-[14px] uppercase tracking-[0.27px]">
              <li><Link href="/contact" className="hover:opacity-80">Get in touch</Link></li>
              <li><Link href="/faqs" className="hover:opacity-80">FAQs</Link></li>
              <li><Link href="/account" className="hover:opacity-80">Account</Link></li>
              <li><Link href="/terms" className="hover:opacity-80">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:opacity-80">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:opacity-80">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Follow — starts next row on mobile, stays right on lg */}
          <div className="lg:justify-self-end">
            <h3 className="mb-3 text-[14px] leading-[18.2px] font-semibold uppercase tracking-[0.27px]">
              Follow
            </h3>
            <ul className="space-y-3 text-[14px] leading-[14px] uppercase tracking-[0.27px]">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
                  Instagram {ext}
                </a>
              </li>
              <li>
                <a href="https://drinkwise.org.au" target="_blank" rel="noreferrer" className="hover:opacity-80">
                  DrinkWise.org.au {ext}
                </a>
              </li>
              <li>
                <Link href="/newsletter" className="hover:opacity-80">
                  Sign up to newsletter
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Divider — aligns with comp */}
        <div className="mt-12 h-px w-full bg-white" />

        {/* Bottom row — sizes/leading/letter-spacing per comp */}
        <div className="mt-5 grid items-start gap-6 uppercase tracking-[0.20px] text-[10px] leading-[10px] md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr]">
          {/* Acknowledgement (wraps naturally over two lines on mobile) */}
          <p className="text-white/90">
            VNTNR
            <sup className="text-[8px] align-super">TM</sup>{' '}
            acknowledge the Traditional Owners of the land where we work and live. VNTNR
            <sup className="text-[8px] align-super">TM</sup>{' '}
            pay our respects to Elders past and present..
          </p>

          {/* Copyright (center on mobile/tablet, left on lg) */}
          <p className="text-center lg:text-left text-white/90">
            © 2025 Pernod Ricard Winemakers
            <br className="hidden sm:block" />
            <span>All rights reserved</span>
          </p>

          {/* Licence (right aligned on lg; right on mobile like comp) */}
          <p className="text-right text-white/90">
            Liquor Licence: 57703968 (SA).
            <br className="hidden sm:block" />
            Please enjoy our products
            <br className="hidden sm:block" />
            responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
