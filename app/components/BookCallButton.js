"use client"; // <-- Add this line at the top

import Image from 'next/image';

const BookCallButton = ({ href = '#', className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      className={`group relative h-[58px] w-[185.60px] overflow-hidden rounded-[4.35px] bg-transparent transition-all duration-300 ease-in-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      aria-label="Book a Call"
    >
      {/* Background overlay */}
      <Image
        src="/path-to-your/overlay-image.png"
        alt="Button background texture"
        fill
        className="absolute left-0 top-0 h-full w-full rounded-[4.35px] bg-gray-200/70 opacity-100 object-cover"
        priority={false}
      />

      <div className="absolute inset-0 flex items-center justify-start px-[26.10px]">
        <div className="relative h-[26.10px] w-[20.88px]">
          <Image
            src="/path-to-your/icon-image.svg"
            alt="Call icon"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
        <span className="relative ml-4 flex h-full items-center justify-center font-sans text-[18.85px] font-medium leading-[19px] text-black">
          Book a Call
        </span>
      </div>
    </a>
  );
};

export default BookCallButton;