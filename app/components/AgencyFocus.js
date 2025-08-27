import React from 'react';

/**
 * A section component that displays the agency's primary focus with a heading and a description.
 * It is designed to be responsive and is styled using Tailwind CSS.
 */
const AgencyFocus = () => {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-white text-2xl md:text-4xl font-extralight leading-tight max-w-4xl mx-auto">
          FRST Subject strictly focuses on developing the next gen of the internet
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed font-mediumtracking-wider mt-8 max-w-3xl mx-auto">
          The focus of the agency. Unlock new revenue and... 
          {/* The repeating text from the image suggests a placeholder. 
              I've used a concise version. You can replace it with the full intended text. */}
        </p>
      </div>
    </section>
  );
};

export default AgencyFocus;