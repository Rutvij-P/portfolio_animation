import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Project = ({ id, title, description, year, image, onHover, onHoverEnd }) => {
  const ref = useRef(null);
  const [showImage, setShowImage] = useState(false);
  
  const [imageCoords, setImageCoords] = useState({ x: 0, y: 0 });

  // Framer Motion variants for border and text animations
  const borderVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 0.8 } }
  };

  const textVariants = {
    hidden: { y: 120, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.25 } }
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top } = ref.current.getBoundingClientRect();

    // Calculate the position for the floating image
    const x = clientX - left;
    const y = clientY - top;

    // Update the floating image's coordinates
    setImageCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setShowImage(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setShowImage(false);
    onHoverEnd(false);  
  };


  return (
    <motion.div 
      ref={ref} 
      className="project-container flex flex-col max-w-6xl mx-auto py-6 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true}} 
    >
      <motion.div className="max-w-6xl my-8 border-b-2 border-black" variants={borderVariants} />
      {showImage && (
        <img
          src={image}
          alt={`Project ${title}`}
          onError={() => console.error(`Error loading image for project ${title}`)}
          style={{
            display: 'block',
            position: 'absolute',
            left: imageCoords.x,
            top: imageCoords.y,
            transform: 'translate(-50%, -50%)',
            maxWidth: '350px',
            height: 'auto',
            maxHeight: '250px',
            pointerEvents: 'none', // Ignore the mouse events
          }}
        />
      )}
      <motion.p className="text-2xl text-right font-light" variants={textVariants}>{year}</motion.p>
      <div className="flex justify-between items-end mb-2 z-20">          
        <div className="flex gap-4">            
          <motion.span className="text-2xl font-light" variants={textVariants}>{id.toString().padStart(2, '0')}</motion.span>
          <motion.h3 className="text-8xl font-bold leading-none" variants={textVariants}>{title}</motion.h3>
        </div>
      </div>
      <motion.p className="text-xl font-light tracking-wider text-right uppercase" variants={textVariants}>{description}</motion.p>
    </motion.div>
  );
};

export default Project;
