import React, { useRef, useState } from 'react';

const Project = ({ id, title, description, year, image }) => {
  const ref = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [imageCoords, setImageCoords] = useState({ x: 0, y: 0 });

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
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  // Debug: Log the image URL
  console.log(`Image URL for project ${id}:`, image);

  return (
    <div 
      ref={ref} 
      className="project-container flex flex-col max-w-4xl mx-auto my-8 border-b-2 border-black py-6 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
            width: '200px',
            height: 'auto',
            pointerEvents: 'none', // Ignore the mouse events
          }}
        />
      )}
      <p className="text-2xl text-right font-light">{year}</p>
      <div className="flex justify-between items-end mb-2">          
        <div className="flex gap-4">            
          <span className="text-2xl font-light">{id.toString().padStart(2, '0')}</span>
          <h3 className="text-8xl font-bold leading-none">{title}</h3>
        </div>
      </div>
      <p className="text-xl font-light tracking-wider text-right uppercase">{description}</p>
    </div>
  );
};

export default Project;
