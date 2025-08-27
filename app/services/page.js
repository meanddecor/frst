'use client';
import Hero from "../components/Hero";
import MediaZoomSection from "../components/MediaZoomSection";
import SectionGrid from "../components/SectionGrid";
import FAQ from "../components/faq";

const brandCreative = {
  id: 'brand-creative',
  title: 'Brand & Creative',
  subtitle:
    'The core focus of the agency. Unlock new revenue and accelerate in-store sales powering growth through retail media, shopper marketing, and multi-marketplace strategy.',
  items: [
    {
      id: '3d',
      title: '3D Visualization & Rendering',
      description:
        'Grow sales and brand value with fully managed visualization, materials, and creative development.',
      media: { type: 'image', src: '/images/card-3d.jpg', alt: '3D render' },
      cta: { href: '/services/3d', label: 'Learn More' },
    },
    {
      id: 'branding-2',
      title: 'Branding & Identity',
      description:
        'Strategy, naming, identity systems, packaging, and rollout across touchpoints.',
      media: { type: 'image', src: '/images/card-branding.jpg', alt: 'Branding' },
      cta: {
        modalContent: (
          <>
            <p>
              We build brand systems that scale: logos, typography, color, visual language,
              motion rules, and content templates.
            </p>
            <ul>
              <li>Discovery & positioning</li>
              <li>Naming & trademark-ready marks</li>
              <li>Guidelines + asset kit</li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 'direction-2',
      title: 'Creative Direction',
      description:
        'On-set leadership for photo/video, product storytelling, and campaign orchestration.',
      media: { type: 'image', src: '/images/card-direction.jpg', alt: 'Creative Direction' },
      cta: { href: '/services/creative-direction' },
    },
    {
      id: 'graphic-2',
      title: 'Graphic Design',
      description:
        'Retail & shopper creative across big box and specialty—retailers, signage, and sell-in decks.',
      media: { type: 'image', src: '/images/card-graphic.jpg', alt: 'Graphic design' },
      cta: { href: '/services/graphic-design' },
    },
    {
      id: 'perf-2',
      title: 'Performance Creative',
      description:
        'High-velocity ad creative with testing frameworks and cross-channel analytics.',
      media: { type: 'image', src: '/images/card-performance.jpg', alt: 'Performance' },
      cta: { href: '/services/performance-creative' },
    },
    {
      id: 'content-2',
      title: 'Content Production',
      description:
        'Studio and location production for photo, video, UGC, and retail placements.',
      media: { type: 'image', src: '/images/card-content.jpg', alt: 'Content' },
      cta: { href: '/services/content-production' },
    },
  ],
};


const New = {
  id: 'new',
  title: 'Done W/ Datt',
  subtitle:
    'The core focus of the agency. Unlock new revenue and accelerate in-store sales powering growth through retail media, shopper marketing, and multi-marketplace strategy.',
  items: [
    {
      id: '3d',
      title: '3D Visualization & Rendering',
      description:
        'Grow sales and brand value with fully managed visualization, materials, and creative development.',
      media: { type: 'image', src: '/images/card-3d.jpg', alt: '3D render' },
      cta: { href: '/services/3d', label: 'Learn More' },
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      description:
        'Strategy, naming, identity systems, packaging, and rollout across touchpoints.',
      media: { type: 'image', src: '/images/card-branding.jpg', alt: 'Branding' },
      cta: {
        modalContent: (
          <>
            <p>
              We build brand systems that scale: logos, typography, color, visual language,
              motion rules, and content templates.
            </p>
            <ul>
              <li>Discovery & positioning</li>
              <li>Naming & trademark-ready marks</li>
              <li>Guidelines + asset kit</li>
            </ul>
          </>
        ),
      },
    },
    {
      id: 'direction',
      title: 'Creative Direction',
      description:
        'On-set leadership for photo/video, product storytelling, and campaign orchestration.',
      media: { type: 'image', src: '/images/card-direction.jpg', alt: 'Creative Direction' },
      cta: { href: '/services/creative-direction' },
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
      description:
        'Retail & shopper creative across big box and specialty—retailers, signage, and sell-in decks.',
      media: { type: 'image', src: '/images/card-graphic.jpg', alt: 'Graphic design' },
      cta: { href: '/services/graphic-design' },
    },
    {
      id: 'perf',
      title: 'Performance Creative',
      description:
        'High-velocity ad creative with testing frameworks and cross-channel analytics.',
      media: { type: 'image', src: '/images/card-performance.jpg', alt: 'Performance' },
      cta: { href: '/services/performance-creative' },
    },
    {
      id: 'content',
      title: 'Content Production',
      description:
        'Studio and location production for photo, video, UGC, and retail placements.',
      media: { type: 'image', src: '/images/card-content.jpg', alt: 'Content' },
      cta: { href: '/services/content-production' },
    },
  ],
};

export default function Home() {
  return (
    <main>
        <Hero />
           {/* Some content above */}
      <MediaZoomSection
        kind="image"
        src="/bg.png"
        width={1920}
        height={1080}
        startScale={0.6}   // starts smaller
        zoomStart={0.08}   // when zoom begins
        zoomEnd={0.6}      // when it reaches 100%
        sectionVH={200}    // length of the pinned effect
      />

    
      <section className="relative mx-auto max-w-[914px] overflow-hidden px-4 py-8">
      <div className="relative">
        <h2 className="text-[37px] leading-[44px] font-normal font-inter">
          <span className="block text-[#F5F5F5]">All Services</span>
          <span className="block text-[#474747]">
            Explore our core digital marketing services
          </span>
        </h2>
      </div>
    </section>
    <SectionGrid {...brandCreative} />
    <SectionGrid {...New} />
      {/* You can render more sections by passing different data objects */}
      {/* <SectionGrid {...anotherSection} /> */}

      
<FAQ /> </main>
  );
}
