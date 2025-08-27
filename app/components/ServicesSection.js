// app/components/ServicesSection.js
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, animate } from 'framer-motion';

// ------- Data -------
const services = [
  {
    title: 'Amazon Marketplace Management',
    description:
      'Grow sales and brand value on Amazon. Fully-managed marketplace strategy, PPC implementation, creative strategy, and business forecasting.',
    price: '$5,000/mo',
    imageUrl: 'https://placehold.co/711x494',
    testimonial: {
      text: 'The team launched and turned Amazon into a revenue powerhouse for our company.',
      author: 'Chrissy Teigen',
      role: 'Founder, Cravings',
    },
  },
  {
    title: 'Retail & E-commerce Consulting',
    description:
      'Expert guidance to optimize your online store, improve customer experience, and boost conversion rates across all digital channels.',
    price: '$4,500/mo',
    imageUrl: 'https://placehold.co/711x494?2',
    testimonial: {
      text: 'Their insights were invaluable in scaling our direct-to-consumer business.',
      author: 'John Doe',
      role: 'CEO, Example Inc.',
    },
  },
  {
    title: 'Creative & Branding Services',
    description:
      'Develop a compelling brand identity with our full suite of creative services, including logo design, product photography, and content creation.',
    price: '$3,000/mo',
    imageUrl: 'https://placehold.co/711x494?3',
    testimonial: {
      text: 'The new branding they created has elevated our market presence significantly.',
      author: 'Jane Smith',
      role: 'Marketing Director, Awesome Co.',
    },
  },
];

const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export default function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  const [snapOffset, setSnapOffset] = useState(0);
  const mediaPinTop = '10vh';
  const headerPinTop = '10vh';
  
  // Refs for robust, decoupled scroll logic
  const isAnimatingRef = useRef(false);
  const scrollQueueRef = useRef([]);
  const animationControlsRef = useRef(null);
  const logicalIndexRef = useRef(0); // <-- The key fix: logical state tracker

  // All initial useEffect hooks for setup are correct and remain the same.
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isDesktop) return;
    const calc = () => {
      const el = headerRef.current;
      if (!el) return;
      const cs = getComputedStyle(el);
      const top = parseFloat(cs.top) || 0;
      const h = el.offsetHeight || 0;
      setSnapOffset(Math.round(top + h));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [mounted, isDesktop]);

  // This observer is now ONLY responsible for updating visual UI state.
  useEffect(() => {
    if (!mounted || !isDesktop) return;
    const rootMargin = `-${snapOffset}px 0px -60% 0px`;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index') || 0);
            setActiveServiceIndex(idx);
          }
        });
      },
      { root: null, rootMargin, threshold: 0 }
    );
    const container = listRef.current;
    if (!container) return;
    const nodes = container.querySelectorAll('[data-index]');
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [mounted, snapOffset, isDesktop]);

  // --- STABLE & DECOUPLED SCROLL LOGIC ---
  useEffect(() => {
    if (!mounted || !isDesktop) return;
    const el = sectionRef.current;
    if (!el) return;

    const isCoveringViewport = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      return rect.top <= 0 && rect.bottom >= vh;
    };

    const processQueue = () => {
      if (scrollQueueRef.current.length === 0) {
        isAnimatingRef.current = false;
        return;
      }
      isAnimatingRef.current = true;
      
      const { direction, velocity } = scrollQueueRef.current.shift();
      // Use the logical ref to determine the next index
      const nextIndex = Math.min(
        Math.max(logicalIndexRef.current + direction, 0),
        services.length - 1
      );

      if (nextIndex === logicalIndexRef.current) {
        processQueue(); // At a boundary, process next item immediately
        return;
      }
      
      const target = listRef.current?.querySelector(`[data-index="${nextIndex}"]`);
      if (!target) {
        processQueue();
        return;
      }

      const rect = target.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - snapOffset;
      
      if (animationControlsRef.current) animationControlsRef.current.stop();

      const duration = mapRange(Math.abs(velocity), 20, 150, 0.8, 0.35);
      const clampedDuration = Math.max(0.35, Math.min(duration, 0.8));

      animationControlsRef.current = animate(window.scrollY, targetY, {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        // duration: clampedDuration, // Using spring physics is often smoother
        onUpdate: (latest) => window.scrollTo(0, latest),
        onComplete: () => {
          logicalIndexRef.current = nextIndex; // Update logical index ONLY on completion
          processQueue(); // Process the next item in the queue
        },
      });
    };

    const onWheel = (e) => {
      if (!isCoveringViewport()) return;
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const velocity = e.deltaY;
      
      scrollQueueRef.current.push({ direction, velocity });
      
      if (!isAnimatingRef.current) {
        processQueue();
      }
    };
    
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);

  // CRITICAL: No dependency on `activeServiceIndex`. This listener is now stable.
  }, [mounted, isDesktop, snapOffset]);


  if (!mounted) return null;

  return (
    // Your entire JSX remains unchanged
    <section ref={sectionRef} className="relative bg-[#0a0a0a] text-white">
      {isDesktop ? (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ------- LEFT: pinned media ------- */}
          <div className="py-24 flex items-start justify-center">
            <div className="sticky" style={{ top: mediaPinTop }}>
              <div className="relative w-[711px] max-w-full h-[494px] rounded-[6px] overflow-hidden">
                {services.map((service, index) => (
                  <motion.div
                    key={`media-${service.title}-${index}`}
                    className="absolute inset-0"
                    animate={{ opacity: activeServiceIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <Image
                      alt={service.title}
                      src={service.imageUrl}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 711px, 100vw"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ------- RIGHT: sticky curtain header + list ------- */}
          <div className="relative z-10 pt-0 pb-24">
            {/* Sticky header (the "curtain") */}
            <div ref={headerRef} className="sticky z-30" style={{ top: 0 }}>
              <div className="bg-[#0a0a0a]" style={{ paddingTop: headerPinTop }}>
                <h2
                  className="mix-blend-difference text-white"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '51.56px',
                    fontWeight: 400,
                    lineHeight: '60.75px',
                  }}
                >
                  Our services extend the entire customer journey.
                </h2>
                <div className="mt-8 h-[0.1rem] w-[40rem] max-w-full bg-white/80" />
                {/* small fade */}
                <div className="pointer-events-none h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
              </div>
            </div>

            {/* Cards list */}
            <div
              ref={listRef}
              className="relative mt-20 space-y-[4vh]"
              style={{
                scrollPaddingTop: `${snapOffset}px`, // aligns IO/snap window under the curtain
                paddingBottom: `${snapOffset}px`,     // lets the LAST card reach the same Y as the first
              }}
            >
              {services.map((service, index) => (
                <motion.article
                  key={`item-${service.title}-${index}`}
                  data-index={index}
                  className="transition-opacity duration-300"
                  style={{ scrollMarginTop: `${snapOffset}px` }} // each card snaps under the curtain
                  animate={{ opacity: activeServiceIndex === index ? 1 : 0.45 }}
                >
                  <div className="space-y-3">
                    <h3
                      className="text-[28px] leading-[1.2] md:text-[34px]"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-[#979797] tracking-[0.01em] text-[17px] md:text-[18.5px] leading-[1.55]">
                      {service.description}
                    </p>

                    <div className="mt-2 flex items-center gap-3 flex-wrap">
                      <div className="text-[#6F6F6F] tracking-[0.02em]">Starts at</div>
                      <div className="text-white">{service.price}</div>
                      <div className="mx-2 h-7 w-px bg-white/30" />
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-[#E3E3E3] px-3.5 py-1.5 text-sm text-[#080808]"
                      >
                        Learn More
                      </a>
                    </div>

                    <div className="mt-5 rounded-xl bg-[#F2F2F2] p-5 text-black">
                      <p className="text-[18px] leading-[1.5]">{service.testimonial.text}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-black/10" />
                        <div>
                          <div className="text-[#0C0C0C]">{service.testimonial.author}</div>
                          <div className="text-[#6F6F6F] text-sm">{service.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Mobile view remains the same
        <div className="container mx-auto py-16">
           <h2
            className="text-white"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '34px',
              fontWeight: 400,
              lineHeight: '1.2',
            }}
          >
            Our services extend the entire customer journey.
          </h2>
          <div className="mt-6 h-[0.1rem] w-full bg-white/80" />
          <div className="mt-10 space-y-12">
            {services.map((service, index) => (
              <article key={`m-item-${service.title}-${index}`}>
                <div className="relative w-full rounded-[6px] overflow-hidden aspect-[711/494]">
                  <Image
                    alt={service.title}
                    src={service.imageUrl}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
                <div className="mt-5 space-y-3">
                  <h3
                    className="text-[24px] leading-[1.25]"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#979797] tracking-[0.01em] text-[16.5px] leading-[1.55]">
                    {service.description}
                  </p>
                  <div className="mt-2 flex items-center gap-3 flex-wrap">
                    <div className="text-[#6F6F6F] tracking-[0.02em]">Starts at</div>
                    <div className="text-white">{service.price}</div>
                    <div className="mx-2 h-7 w-px bg-white/30" />
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-[#E3E3E3] px-3.5 py-1.5 text-sm text-[#080808]"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="mt-5 rounded-xl bg-[#F2F2F2] p-5 text-black">
                    <p className="text-[17px] leading-[1.5]">{service.testimonial.text}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden bg-black/10" />
                      <div>
                        <div className="text-[#0C0C0C]">{service.testimonial.author}</div>
                        <div className="text-[#6F6F6F] text-sm">{service.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}