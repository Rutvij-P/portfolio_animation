import React, { useState, useEffect, useRef } from 'react';
import '../styles/CursorRevealText.css';

const CursorRevealText = () => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null); // Reference to the container

  useEffect(() => {
    // Clean up the trail to keep a maximum of 10 divs at a time
    const intervalId = setInterval(() => {
      setTrail(trail => trail.slice());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const onMouseMove = (e) => {
    // Get the bounding rectangle of the container
    const rect = containerRef.current.getBoundingClientRect();

    // Adjust the mouse coordinates to be relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
      setTrail(trail => [...trail.slice(), { x, y }]);
    });
  };

  return (
    <div ref={containerRef} className="cursor-reveal-container" onMouseMove={onMouseMove}>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="scratch-off"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
        />
      ))}
      <h1 className="portfolio-text">PORTFOLIO</h1>
      <p className="hidden-text indent-80 w-full px-28 text-4xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
      Hi there! I'm Rutu, a bright-eyed, recent Computer Science grad buzzing with enthusiasm to dive into the tech world, where I can blend my love for website creation and AI innovations into something spectacular!
      </p>
    </div>
  );
};

export default CursorRevealText;
