import { notFound } from 'next/navigation';
import Image from 'next/image';

const projects = {
  'crate-and-barrel': {
    clientName: 'Crate&Barrel',
    taglineLines: ['Building a Bespoke Collection', 'Experience in Two Months.'],
    discipline: 'Digital',
    services: ['Web Optimization', 'Conversion Rate Optimization'],
    heroImage: 'https://placehold.co/1860x860',
    overview: [
      'Crate&Barrel, global leader in home furnishings, approached us with a focused ask: bring a curated product collection to life—fast. The timeline was sharp, the expectations high. They weren’t looking for an off-the-shelf solution, but a tailored experience built with both intention and agility. Our role was to interpret a bold creative direction through the lens of digital execution, shaping a microsite that could serve as both a brand expression and a performance engine.',
      'We designed a high-touch user journey that translated complex product stories into clean, compelling interaction. Through motion, prototyping, and constant iteration, we created a responsive environment that balanced speed with craft. The result was a digital experience that felt distinct, cohesive, and ready to perform in one of the most competitive eCommerce ecosystems.',
    ],
    stats: [
      { value: '  %', caption: 'Increase in new collection web traffic from press' },
      { value: '14', caption: 'Days to create the functional version of a micro-site' },
    ],
    gridImages: ['https://placehold.co/920x900', 'https://placehold.co/920x900'],
    fullImages: ['https://placehold.co/1860x860', 'https://placehold.co/1860x800'],
    tallImage: 'https://placehold.co/1860x2658',
  },
  'complex': {
    clientName: 'Complex',
    taglineLines: ['Reimagining a performance-first content platform.'],
    discipline: 'Digital',
    services: ['Platform Redesign', 'Performance Engineering'],
    heroImage: 'https://placehold.co/1860x860',
    overview: [
      'Complex partnered with us to modernize their content delivery with a scalable, performance-first architecture.',
      'We delivered a system that increased engaged sessions and ad revenue through speed and design craft.',
    ],
    stats: [
      { value: '59%', caption: 'Increase in engaged sessions after relaunch' },
      { value: '16', caption: 'Weeks to ship MVP platform' },
    ],
    gridImages: ['https://placehold.co/920x900', 'https://placehold.co/920x900'],
    fullImages: ['https://placehold.co/1860x860'],
  },
  'diet-prada': {
    clientName: 'Diet Prada',
    taglineLines: ['A full-funnel campaign that energized a global audience.'],
    discipline: 'Growth',
    services: ['Creative Direction', 'Paid Social', 'CTV'],
    heroImage: 'https://placehold.co/1860x860',
    overview: [
      'We led creative and production for a cross-channel campaign across CTV, YouTube, and paid social.',
      'The work lifted revenue meaningfully and expanded audience depth across key cohorts.',
    ],
    stats: [
      { value: '3x', caption: 'Revenue growth in 2023' },
      { value: '8', caption: 'Weeks from concept to launch' },
    ],
    gridImages: ['https://placehold.co/920x900', 'https://placehold.co/920x900'],
    fullImages: ['https://placehold.co/1860x860'],
  },
  'hypebeast': {
    clientName: 'Hypebeast',
    taglineLines: ['High-performance storefront integration for HBX.'],
    discipline: 'Commerce',
    services: ['Edge Caching', 'Frontend Optimization'],
    heroImage: 'https://placehold.co/1860x860',
    overview: [
      'We engineered a storefront integration focused on speed and conversion.',
      'Latency reductions made browsing feel instant and conversion more likely.',
    ],
    stats: [
      { value: '-60%', caption: 'Reduction in page load times' },
      { value: '30%', caption: 'Increase in add-to-cart rate' },
    ],
    gridImages: ['https://placehold.co/920x900', 'https://placehold.co/920x900'],
    fullImages: ['https://placehold.co/1860x860'],
  },
  'another-project': {
    clientName: 'Another Project',
    taglineLines: ['Brand, product, and performance in one cohesive sprint.'],
    discipline: 'Integrated',
    services: ['Brand', 'Web', 'Growth'],
    heroImage: 'https://placehold.co/1860x860',
    overview: [
      'A cross-functional initiative spanning brand, product, and growth marketing.',
      'Delivered measurable pipeline and a strong creative foundation.',
    ],
    stats: [
      { value: '100%', caption: 'Increase in qualified leads in first quarter' },
      { value: '14', caption: 'Days to ship first version' },
    ],
    gridImages: ['https://placehold.co/920x900', 'https://placehold.co/920x900'],
    fullImages: ['https://placehold.co/1860x860'],
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = projects[params.slug];
  if (!project) {
    return { title: 'Project | FRST', description: 'Selected client project' };
  }
  return {
    title: `${project.clientName} | FRST`,
    description: project.taglineLines.join(' '),
  };
}

export default function ProjectPage({ params }) {
  const getProjectData = (slug) => {
    const raw = projects[slug];
    if (!raw) return null;
    return {
      clientName: raw.clientName ?? '',
      taglineLines: Array.isArray(raw.taglineLines) ? raw.taglineLines : [],
      discipline: raw.discipline ?? null,
      services: Array.isArray(raw.services) ? raw.services : [],
      overview: Array.isArray(raw.overview) ? raw.overview : [],
      stats: Array.isArray(raw.stats) ? raw.stats : [],
      heroMedia: raw.heroMedia ?? raw.heroImage ?? null,
      gridMedia: raw.gridMedia ?? raw.gridImages ?? [],
      fullMedia: raw.fullMedia ?? raw.fullImages ?? [],
      tallMedia: raw.tallMedia ?? raw.tallImage ?? null,
    };
  };

  const project = getProjectData(params.slug);
  if (!project) {
    notFound();
  }

  const isVideoUrl = (url) => typeof url === 'string' && /\.(mp4|webm|ogg)$/i.test(url);
  const getMediaType = (item) => {
    if (!item) return 'none';
    if (typeof item === 'string') return isVideoUrl(item) ? 'video' : 'image';
    if (item.type) return item.type;
    if (item.src) return isVideoUrl(item.src) ? 'video' : 'image';
    return 'image';
  };
  const getSrc = (item) => (typeof item === 'string' ? item : item?.src);
  const getAlt = (item, fallback = 'Project media') => (typeof item === 'object' && item?.alt) ? item.alt : fallback;
  const getDims = (item) => ({ width: typeof item === 'object' ? item.width : undefined, height: typeof item === 'object' ? item.height : undefined });
  const getAspect = (item) => (typeof item === 'object' ? item.aspect : undefined);
  const shouldAutoplay = (item, fallback) => (typeof item === 'object' && typeof item.autoplay === 'boolean') ? item.autoplay : fallback;

  const renderImage = (item, className, rounded) => {
    const src = getSrc(item);
    const alt = getAlt(item);
    const { width, height } = getDims(item);
    const aspect = getAspect(item);
    const roundedClass = rounded ? ' rounded-md' : '';
    if (!src) return null;
    if (width && height) {
      return (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={(className + roundedClass).trim()}
          sizes="(max-width: 1024px) 100vw, 1920px"
        />
      );
    }
    return (
      <div className={(rounded ? 'rounded-md overflow-hidden' : '')} style={aspect ? { aspectRatio: aspect } : undefined}>
        <div className="relative w-full" style={!aspect ? { aspectRatio: '16/9' } : undefined}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1920px"
            className={("object-cover " + className).trim()}
            priority={false}
          />
        </div>
      </div>
    );
  };

  const renderMedia = (item, className = '', { autoPlay = false, rounded = true } = {}) => {
    if (!item) return null;
    const type = getMediaType(item);
    const src = getSrc(item);
    if (!src) return null;
    if (type === 'video') {
      const poster = typeof item === 'object' ? item.poster : undefined;
      const autoplayResolved = shouldAutoplay(item, autoPlay);
      return (
        <video
          className={(className + (rounded ? ' rounded-md' : '')).trim()}
          src={src}
          poster={poster}
          playsInline
          controls={!autoplayResolved}
          autoPlay={autoplayResolved}
          muted={autoplayResolved}
          loop={autoplayResolved}
        />
      );
    }
    return renderImage(item, className, rounded);
  };

  return (
    <main>
      {/* Hero */}
      <section className="w-full pt-10 sm:pt-16">
        <div className="mx-auto max-w-[1860px] px-[20px] sm:px-6 lg:px-8">
          <div className="relative">
            <div className="pt-[40px] sm:pt-[80px] lg:pt-[160px]">
              <div className="w-full max-w-[910px] overflow-hidden">
                <h1
                  className="text-left text-[#1E1E1E] font-normal leading-[38px] sm:leading-[56px] lg:leading-[72px]
                             text-[clamp(28px,6vw,55.9px)]"
                >
                  {project.clientName}
                </h1>
                <p
                  className="mt-2 text-left text-[#1E1E1E] font-light
                             text-[clamp(22px,5vw,50.39px)] leading-[40px] sm:leading-[48px] lg:leading-[66px]"
                >
                  {project.taglineLines.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < project.taglineLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          {/* Discipline / Services Row */}
          <div className="mt-6 lg:mt-[40px] flex items-center justify-between">
            <div className="flex items-center gap-4 text-[#0C0C0C]">
              <span className="text-[11.5px] leading-[18.9px]">Discipline</span>
              <span className="text-[11.62px] leading-[16.8px] tracking-[0.24px]">{project.discipline}</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#0C0C0C]">
              <span className="text-[10.65px] leading-[18.9px]">Services</span>
              {project.services.map((svc, i) => (
                <span key={i} className="text-[11.44px] leading-[16.8px] tracking-[0.24px] text-center">
                  {svc}
                </span>
              ))}
            </div>
          </div>
          {/* Mobile Services line */}
          <div className="sm:hidden mt-2 flex flex-wrap items-center gap-3 text-[#0C0C0C]">
            <span className="text-[10.65px]">Services</span>
            <span className="text-[11.44px] tracking-[0.24px]">{project.services[0]}</span>
            {project.services[1] && (
              <span className="text-[11.44px] tracking-[0.24px]">{project.services[1]}</span>
            )}
          </div>
        </div>
      </section>

      {/* Main hero media */}
      {project.heroMedia && (
        <section className="w-full mt-6 lg:mt-[28px]">
          <div className="mx-auto max-w-[1920px]">
            <div className="px-[20px] sm:px-[30px]">
              <div className="overflow-hidden rounded-md">
                {renderMedia(project.heroMedia, 'w-full h-auto', { autoPlay: getMediaType(project.heroMedia) === 'video' })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview copy blocks */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1920px] px-[20px] sm:px-[30px] py-10 lg:py-[50px]">
          <div className="mx-auto max-w-[1711px]">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              <div className="order-2 lg:order-1" />
              <div className="order-1 lg:order-2">
                <p className="text-black text-[14.62px] leading-[22.4px] tracking-[0.36px]">
                  {project.overview[0]}
                </p>
                <p className="mt-5 text-black text-[14.62px] leading-[22.4px] tracking-[0.36px]">
                  {project.overview[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1920px] px-[20px] sm:px-[30px] py-10">
          <div className="mx-auto max-w-[1674px]">
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <div className="text-black text-[clamp(48px,10vw,95.03px)] leading-[1.1]">
                  {project.stats[0].value}
                </div>
                <div className="mt-2 text-[#1E1E1E] text-[15px] leading-[17.6px] tracking-[0.32px]">
                  {project.stats[0].caption}
                </div>
              </div>
              <div>
                <div className="text-black text-[clamp(40px,8vw,91.23px)] leading-[1.1]">
                  {project.stats[1].value}
                </div>
                <div className="mt-2 text-[#1E1E1E] text-[14.88px] leading-[17.6px] tracking-[0.32px]">
                  {project.stats[1].caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column media grid */}
      {Array.isArray(project.gridMedia) && project.gridMedia.length > 0 && (
        <section className="w-full bg-white">
          <div className="mx-auto max-w-[1920px] px-[20px] sm:px-[30px] py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              {project.gridMedia.map((item, i) => (
                <div key={i} className="w-full">
                  {renderMedia(item, 'w-full h-auto')}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full-width media sections */}
      {Array.isArray(project.fullMedia) && project.fullMedia.length > 0 && project.fullMedia.map((item, i) => (
        <section key={i} className="w-full bg-white">
          <div className="mx-auto max-w-[1920px] px-[20px] sm:px-[30px] py-6">
            <div className="overflow-hidden rounded-md">
              {renderMedia(item, 'w-full h-auto')}
            </div>
          </div>
        </section>
      ))}

      {/* Tall media */}
      {project.tallMedia && (
        <section className="w-full bg-white">
          <div className="mx-auto max-w-[1920px] px-[20px] sm:px-[30px] py-6">
            <div className="overflow-hidden rounded-md">
              {renderMedia(project.tallMedia, 'w-full h-auto')}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}


