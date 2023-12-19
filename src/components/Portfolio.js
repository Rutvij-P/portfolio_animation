import React from 'react';
// import { motion } from 'framer-motion';



const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8 pt-20 bg-white">
      <div className="md:w-1/2 relative -translate-y-6">
  <p className="text-3xl">
    Kommunikationsdesigner
  </p>
  {/* Image container with relative positioning */}
  <div className="relative ">
    <img src="/profilep.jpg" alt="Bastian Gasser" className="w-full rounded-lg" />
    {/* Absolute positioned text */}
    <div className="absolute top-0 left-0 w-full">
      <p className="text-2xl">
        San Francisco State University
      </p>
    </div>
  </div>
  <div className="space-y-3">
    {/* Add actual links and text accordingly */}
    <p>HEUTE</p>
    <p>HTL Villach - Medientechnik</p>
    {/* ... more items */}
  </div>
</div>

      <div className="md:w-1/3 space-y-6 mt-8 md:mt-0">
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Hard Skills:</h2>
          <p>Adobe CC</p>
          <p>Figma</p>
          {/* ... more items */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Kompetenzen:</h2>
          <p>Strategie & Konzeption</p>
          <p>Visuelle Identitäten</p>
          {/* ... more items */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Achievements:</h2>
          <p>K3 Film Festival - Hoch Unten</p>
          <p>MKG Hamburg - THE F*WORD</p>
          {/* ... more items */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl underline font-semibold">Preise:</h2>
          <p>Awwwards (HM) - kurzform.®</p>
          <p>Awwwards (HM) - Portfolio</p>
          {/* ... more items */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
