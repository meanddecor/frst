// app/components/CaseStudiesSection.js
'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHero from '../components/ServiceHero';
import FAQ from '../components/FAQ';

// --- DATA ---
// Best Practice: Data is separated from the component logic.
// It's structured and includes everything the component needs.
const CASE_STUDIES = [
  { 
    id: "complex", 
    slug: "complex",
    title: "COMPLEX", 
    year: "2025", 
    description: "Led a full-scale digital transformation for Complex, redesigning their content platform to increase user engagement and ad revenue by 40%.",
    summary: "We partnered with Complex to reimagine their digital ecosystem and build a performance-first content platform that scales.",
    kpiValue: "59%",
    kpiCaption: "Increase in engaged sessions after relaunch",
    media: { type: 'image', src: "/haute.png", alt: "Complex media feature" } 
  },
  { 
    id: "diet-prada-1", 
    slug: "diet-prada",
    title: "DIET PRADA", 
    year: "2023", 
    description: "Developed a viral social media campaign and interactive story format that doubled Diet Prada's follower interaction rate in three months.",
    summary: "We creative-directed and executed a full-funnel campaign across CTV, YouTube, and paid social that energized a global audience.",
    kpiValue: "3x",
    kpiCaption: "Campaign fueled 3x revenue growth in 2023",
    media: { type: 'image', src: "/michelin.png", alt: "Diet Prada media feature" } 
  },
  { 
    id: "hypebeast", 
    slug: "hypebeast",
    title: "HYPEBEAST", 
    year: "2021", 
    description: "Engineered a high-performance e-commerce integration for HBX, reducing page load times by 60% and lifting conversion rates.",
    summary: "High-performance storefront integration and caching strategy that made shopping feel instant and inspired.",
    kpiValue: "-60%",
    kpiCaption: "Reduction in page load times post-integration",
    media: { type: 'image', src: "/travel.png", alt: "Hypebeast media feature" } 
  },
  { 
    id: "diet-prada-2", 
    slug: "another-project",
    title: "Another Project", 
    year: "2024", 
    description: "This is a placeholder description for another amazing project, showcasing our versatile skills and client successes.",
    summary: "A multidisciplinary engagement delivering brand, product, and performance in one cohesive sprint.",
    kpiValue: "100%",
    kpiCaption: "Increase in qualified leads within first quarter",
    media: { type: 'image', src: "/bg.png", alt: "Another project media feature" } 
  },
];

// --- CATEGORY MENU DATA ---
const CATEGORIES = [
  "Brand & Creative",
  "Web & Digital",
  "Marketing & Growth",
  "Strategy & Consulting",
];

const CATEGORY_ITEMS = {
  "Brand & Creative": [
    { id: "b1", title: "Remi", subtitle: "Brand Systems", img: "/haute.png", aspect: "square" },
    { id: "b2", title: "Coalition", subtitle: "Art Direction", img: "/bg.png", aspect: "wide" },
    { id: "b3", title: "Atlas", subtitle: "Identity", img: "/michelin.png", aspect: "portrait" },
    { id: "b4", title: "Horizon", subtitle: "Campaign", img: "/travel.png", aspect: "tall" },
    { id: "b5", title: "North", subtitle: "Packaging", img: "/haute.png", aspect: "square" },
    { id: "b6", title: "Fjord", subtitle: "Motion", img: "/bg.png", aspect: "wide" },
  ],
  "Web & Digital": [
    { id: "w1", title: "Remi", subtitle: "Product Site", img: "/travel.png", aspect: "wide" },
    { id: "w2", title: "Lumen", subtitle: "Web App", img: "/michelin.png", aspect: "square" },
    { id: "w3", title: "Oasis", subtitle: "E‑commerce", img: "/haute.png", aspect: "portrait" },
    { id: "w4", title: "Pulse", subtitle: "Marketing Site", img: "/bg.png", aspect: "square" },
  ],
  "Marketing & Growth": [
    { id: "m1", title: "Remi", subtitle: "Retention Marketing", img: "/bg.png", aspect: "square" },
    { id: "m2", title: "Remi", subtitle: "Lifecycle", img: "/michelin.png", aspect: "portrait" },
    { id: "m3", title: "Remi", subtitle: "Paid Media", img: "/travel.png", aspect: "wide" },
    { id: "m4", title: "Remi", subtitle: "Attribution", img: "/haute.png", aspect: "tall" },
    { id: "m5", title: "Remi", subtitle: "CRM", img: "/bg.png", aspect: "square" },
  ],
  "Strategy & Consulting": [
    { id: "s1", title: "Remi", subtitle: "Research", img: "/travel.png", aspect: "portrait" },
    { id: "s2", title: "Remi", subtitle: "Roadmapping", img: "/michelin.png", aspect: "square" },
    { id: "s3", title: "Remi", subtitle: "Org Design", img: "/haute.png", aspect: "wide" },
    { id: "s4", title: "Remi", subtitle: "Analytics", img: "/bg.png", aspect: "square" },
  ],
};

// --- SUB-COMPONENTS ---
// Best Practice: Breaking the UI into smaller, memoized components prevents unnecessary re-renders.

// A reusable component for rendering either an image or video
const MediaDisplay = memo(function MediaDisplay({ media }) {
  if (!media?.src) return null;
  
  if (media.type === 'video') {
    return (
      <video
        className="h-full w-full object-cover object-center lg:object-[85%_50%] rounded-md"
        src={media.src}
        playsInline
        autoPlay
        muted
        loop
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover object-center lg:object-[85%_50%] transition-opacity duration-500"
      priority
    />
  );
});

// A component for each row in the list
const StudyItem = memo(function StudyItem({ item, isActive, onActivate }) {
  return (
    // On mobile, this is a button to allow tapping. On desktop, hover is used.
    <button 
      className="group w-full text-left"
      onClick={onActivate} // For mobile tap
      onMouseEnter={onActivate} // For desktop hover
    >
      <div className="flex flex-col">
        {/* Title and Year */}
        <div className="flex w-full items-center justify-between">
          <h3 
            className={`text-2xl font-normal transition-colors sm:text-3xl lg:text-4xl xl:text-5xl ${
              isActive ? "text-white" : "text-white/60"
            }`}
          >
            {item.title}
          </h3>
          <span 
            className={`text-sm font-light uppercase tracking-widest transition-colors sm:text-base lg:text-lg ${
              isActive ? "text-white" : "text-white/60"
            }`}
          >
            {item.year}
          </span>
        </div>
        
        {/* Description (expands on mobile) */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
            isActive ? "max-h-40 mt-4" : "max-h-0 mt-0"
          }`}
        >
          <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
        </div>
        
        {/* Divider Line */}
        <div 
          className={`mt-4 h-[1.5px] bg-white/20 transition-all duration-500 ease-in-out ${
            isActive ? "w-full bg-white/60" : "w-1/2"
          }`} 
        />
        
        {/* Media (shown inside the accordion on mobile) */}
        <div 
          className={`overflow-hidden rounded-md transition-all duration-500 ease-in-out lg:hidden ${
            isActive ? "max-h-64 mt-4 aspect-video" : "max-h-0 mt-0"
          }`}
        >
          <div className="relative h-full w-full">
            <MediaDisplay media={item.media} />
          </div>
        </div>
      </div>
    </button>
  );
});


// --- MAIN PAGE COMPONENT ---
export default function CaseStudiesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const active = CASE_STUDIES[activeIndex] ?? CASE_STUDIES[0];

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className=" w-full text-white mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            2025
          </p>
          <p className="mt-2 max-w-2xl text-sm sm:text-base font-medium leading-relaxed text-white/80">
            FRST Subject provides world-class growth marketing services that extend across the entire customer journey.
          </p>
        </div>
      </section>

      

      {/* Case Studies Section */}
      <section className="relative w-full text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          
          {/* Left Column: List of Studies */}
          <div className="flex flex-col gap-y-8">
            {CASE_STUDIES.map((item, index) => (
              <StudyItem
                key={item.id}
                item={item}
                isActive={activeIndex === index}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Media Display (Desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 w-full overflow-hidden rounded-lg aspect-square max-h-[50vh] xl:max-h-[45vh]">
              <div className="relative h-full w-full bg-black/20">
                {/* 
                  Best Practice: Render all images but only show the active one.
                  This allows for smooth cross-fade transitions.
                */}
                {CASE_STUDIES.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={activeIndex !== index}
                  >
                    <MediaDisplay media={item.media} />
                  </div>
                ))}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end">
                  {/* Gradient for readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="relative z-10 w-full px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="max-w-xl md:max-w-2xl xl:max-w-3xl rounded-md border border-white/10 bg-white/10 p-3 sm:p-4 backdrop-blur-md">
                      <div className="flex items-end justify-between gap-3 sm:gap-4">
                        <div className="flex flex-col items-start text-left">
                          <p className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-none">{active.kpiValue}</p>
                          <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-white/80">{active.kpiCaption}</p>
                        </div>
                        <Link
                          href={`/project/${active.slug}`}
                          className="inline-flex h-9 md:h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 px-3 md:px-4 text-xs md:text-sm font-medium text-white transition-colors hover:bg-white/20"
                        >
                          Read On
                        </Link>
                      </div>
                      <p className="mt-2 sm:mt-3 text-xs md:text-sm leading-relaxed text-white/90">{active.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom content removed; replaced by sticky overlay CTA */}
      </section>

      {/* Category Menu + Dynamic Grid */}
      <section className="w-full text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Menu Wrapper with outer border */}
          <div className="relative rounded-[3px] border border-white/20 p-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-1">
              {CATEGORIES.map((label) => {
                const isActive = selectedCategory === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedCategory(label)}
                    className={`${isActive ? "border border-white/80 bg-transparent" : "border border-white/10 bg-white/5 hover:bg-white/10"} w-full h-[54px] rounded-[3px] px-4 text-white transition-colors inline-flex items-center justify-center text-center`}
                    aria-pressed={isActive}
                  >
                    <span className="text-[18px] font-medium leading-[19px]">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(CATEGORY_ITEMS[selectedCategory] || []).map((card) => {
              const aspectClass =
                card.aspect === "square"
                  ? "aspect-square"
                  : card.aspect === "portrait"
                  ? "aspect-[3/4]"
                  : card.aspect === "tall"
                  ? "aspect-[2/3]"
                  : card.aspect === "wide"
                  ? "aspect-[4/3]"
                  : "aspect-video";
              return (
                <div key={card.id} className="group">
                  <div className={`overflow-hidden rounded-md bg-white/5 ${aspectClass}`}>
                    <div className="relative h-full w-full">
                      <Image src={card.img} alt={card.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-white text-[18px] font-medium leading-[19px]">{card.title}</p>
                    <p className="text-white/40 text-[14px] leading-[18px]">{card.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ServicesHero />
      <FAQ />
    </main>
  );
}