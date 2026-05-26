import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-[#58b9e6] focus:text-white focus:rounded-md focus:font-semibold"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
