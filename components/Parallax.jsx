'use client';

import React from 'react';
import Donate from './Donate';

const ParallaxSection = () => {
  return (
    <section
      className="relative md:h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(1, 39, 39, 0.8), rgba(1, 39, 39, 0.8)), url('/banners/4.jpg')",
      }}
    >
      <div className="relative z-10 w-full flex flex-col items-center justify-center ">
        <Donate />
      </div>
    </section>
  );
};

export default ParallaxSection;