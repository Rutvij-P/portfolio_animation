import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const Portfolio = () => {
  // State to track which timeline item is open
  const [openItem, setOpenItem] = useState(null);

  // Timeline data could be props or fetched from an API
  const timelineData = [
    { id: 1, title: "HELLA – IT Abteilung", year: "2017", detail: "More information about HELLA..." },
    { id: 2, title: "HTL Villach – Medientechnik", year: "2019", detail: "More information about HTL Villach..." },
    // ... other timeline items
  ];

  // Function to toggle the open item
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const listItemVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1 }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8 pt-20 bg-white">
      <div className="md:w-1/2 relative -translate-y-6">
  <p className="text-3xl">
    Kommunikationsdesigner
  </p>
  {/* Image container with relative positioning */}
  <div className="relative ">
    <img src="/profilep-min.png" alt="Bastian Gasser" className="w-full rounded-lg" />
    {/* Absolute positioned text */}
    <div className="absolute top-0 left-0 w-full">
      <p className="text-2xl">
        San Francisco State University
      </p>
    </div>
  </div>
  <motion.div 
  className="md:w-full mt-4"
  initial="hidden"
  animate="visible"
  variants={listVariants}>
        {timelineData.map((item) => (
          <motion.div key={item.id} className="mb-1">
            <motion.div 
              className="cursor-pointer border-t border-black" 
              onClick={() => toggleItem(item.id)}
              layout
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <span className="text-sm">{item.year}</span>
              </div>
            </motion.div>
            <AnimatePresence>
            {openItem === item.id && (
              <motion.div 
              className="text-sm mt-1 leading-snug"
              initial="closed"
              animate="open"
              exit="closed"
              variants={listItemVariants}
              transition={{duration: 0.2}}>
                {item.detail}
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        ))}
        <div className="cursor-pointer border-t border-black py-2"></div>
    </motion.div>
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
