'use client';

// app/components/ProjectShowcase.js
import Image from 'next/image';

// Define the images for the top row (scrolling left)
const topRowImages = [
  { id: 't1', src: 'https://placehold.co/447x330', alt: 'Project 1', width: 447, height: 330 },
  { id: 't2', src: 'https://placehold.co/230x330', alt: 'Project 2', width: 230, height: 330 },
  { id: 't3', src: 'https://placehold.co/447x330', alt: 'Project 3', width: 447, height: 330 },
  { id: 't4', src: 'https://placehold.co/230x330', alt: 'Project 4', width: 230, height: 330 },
  { id: 't5', src: 'https://placehold.co/447x330', alt: 'Project 5', width: 447, height: 330 },
];

// Define the images for the bottom row (scrolling right)
const bottomRowImages = [
  { id: 'b1', src: 'https://placehold.co/447x330', alt: 'D project 1', width: 447, height: 330 },
  { id: 'b2', src: 'https://placehold.co/230x330', alt: 'D project 2', width: 230, height: 330 },
  { id: 'b3', src: 'https://placehold.co/447x330', alt: 'D project 3', width: 447, height: 330 },
  { id: 'b4', src: 'https://placehold.co/230x330', alt: 'D project 4', width: 230, height: 330 },
  { id: 'b5', src: 'https://placehold.co/230x330', alt: 'D project 5', width: 230, height: 330 },
];

const ProjectShowcase = () => {
  const topLoop = [...topRowImages, ...topRowImages, ...topRowImages];
  const bottomLoop = [...bottomRowImages, ...bottomRowImages, ...bottomRowImages];
  return (
    // Main container for the showcase. `group` enables pause-on-hover for children.
    <section className="w-full py-10" aria-label="Project showcase">
      <div className="relative flex flex-col gap-y-2.5 overflow-hidden">
        
        {/* Top Row - Scrolling Left */}
        <div className="marqueeRow marquee-left flex flex-nowrap items-center gap-x-2.5">
          {topRowImages.map((image, index) => (
            <div key={`top-a-${index}`} className="flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width:768px) 80vw, (max-width:1200px) 50vw, 33vw"
                priority={index < 2}
                loading="eager"
                className="h-[330px] w-auto rounded-md object-cover"
              />
            </div>
          ))}
          {topLoop.map((image, index) => (
            <div key={`top-b-${index}`} className="flex-shrink-0" aria-hidden="true">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width:768px) 80vw, (max-width:1200px) 50vw, 33vw"
                loading="eager"
                className="h-[330px] w-auto rounded-md object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row - Scrolling Right */}
        <div className="marqueeRow marquee-right flex flex-nowrap items-center gap-x-2.5">
          {bottomRowImages.map((image, index) => (
            <div key={`bottom-a-${index}`} className="flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width:768px) 80vw, (max-width:1200px) 50vw, 33vw"
                priority={index < 2}
                loading="eager"
                className="h-[330px] w-auto rounded-md object-cover"
              />
            </div>
          ))}
          {bottomLoop.map((image, index) => (
            <div key={`bottom-b-${index}`} className="flex-shrink-0" aria-hidden="true">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width:768px) 80vw, (max-width:1200px) 50vw, 33vw"
                loading="eager"
                className="h-[330px] w-auto rounded-md object-cover"
              />
            </div>
          ))}
        </div>

        {/* Edge masks */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 showcase-mask" />
        </div>

      </div>

      <style jsx>{`
        .marqueeRow{animation-duration:var(--marquee-duration,20s);animation-timing-function:linear;animation-iteration-count:infinite;will-change:transform}
        .marquee-left{animation-name:marquee-left}
        .marquee-right{animation-name:marquee-right}
        @keyframes marquee-left{from{transform:translate3d(0,0,0)}to{transform:translate3d(-33.3333%,0,0)}}
        @keyframes marquee-right{from{transform:translate3d(-33.3333%,0,0)}to{transform:translate3d(0,0,0)}}
        @media (max-width:768px){.marqueeRow{--marquee-duration:30s}}
        @media (prefers-reduced-motion:reduce){.marqueeRow{animation:none}}
   
      `}</style>
    </section>
  );
};

export default ProjectShowcase;