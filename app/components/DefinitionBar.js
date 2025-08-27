"use client";

import { useEffect, useRef, useState } from "react";

export default function DefinitionBar() {
  const BASE_WIDTH = 1616;
  const BASE_HEIGHT = 23;
  // We now only need one ref for the outer container
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const updateScale = () => {
      const availableWidth = element.clientWidth;
      if (availableWidth > 0) {
        const nextScale = Math.min(1, availableWidth / BASE_WIDTH);
        setScale(nextScale);
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    // THE FIX: The section is now the positioning context and measures its own width.
    // The height is calculated and set here to prevent layout shifts.
    <section
      ref={sectionRef}
      className="relative w-full text-white font-['Inter'] py-2"
      style={{ height: `${(BASE_HEIGHT * scale) + 16}px` }} // 16px is for py-2 (1rem)
      aria-label="Term definition bar"
    >
      {/* 
        This div is now absolutely positioned. This removes its 1616px width 
        from the normal page layout, which is the key to removing the scrollbar.
        It's centered horizontally with the left-1/2 and -translate-x-1/2 trick.
      */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2"
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* All your inner, absolutely positioned text elements remain unchanged */}
        <div className="absolute left-0 top-0 flex h-[23px] w-[174px] items-center justify-center uppercase font-semibold tracking-[0.46px] text-[22.75px] leading-[22.81px]">
          FRST SUBJECT
        </div>
        <div className="absolute left-[174.36px] top-[11.98px] flex h-[8.55px] w-[13.28px] items-center justify-center uppercase font-semibold tracking-[0.46px] text-[7.53px] leading-[22.8px]">
          TM
        </div>
        <div className="absolute left-[497px] top-0 flex h-[22.81px] w-[70px] items-center justify-center uppercase font-normal tracking-[0.46px] text-[22.75px] leading-[22.81px]">
          NOUN
        </div>
        <div className="absolute left-[1116px] top-0 flex h-[22.81px] w-[124.17px] items-center justify-center uppercase font-normal tracking-[0.46px] text-[22.75px] leading-[22.81px]">
          /ˈFRST/
        </div>
        <div className="absolute left-[1403px] top-0 flex h-[23px] w-[213px] items-center justify-center uppercase font-semibold tracking-[0.46px] text-[22.75px] leading-[22.81px]">
          Creative Studio
        </div>
      </div>
    </section>
  );
}