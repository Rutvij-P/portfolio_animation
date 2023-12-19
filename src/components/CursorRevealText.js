import React, { useState } from 'react';
import '../styles/CursorRevealText.css';

const CursorRevealText = () => {
  const [trail, setTrail] = useState([]);

  const onMouseMove = (e) => {
    // Continuously add new divs to the trail without removing them
    setTrail(trail => [...trail, { x: e.clientX, y: e.clientY }]);
  };

  return (
    <div className="cursor-reveal-container" onMouseMove={onMouseMove}>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="scratch-off"
          style={{
            left: pos.x,
            top: pos.y,
          }}
        />
      ))}
      <h1 className="portfolio-text">PORTFOLIO</h1>
      <p className="hidden-text indent-40 text-left w-full px-28">
        Bastian Gasser ist ein exhibierender Kommunikationsdesigner mit Fokus auf Visuelle Identitäten, Motion & Fotografie. Er hat eine Leidenschaft für reduziertes Design und klare Botschaften.
      </p>
    </div>
  );
};

export default CursorRevealText;
