import React, { useState } from 'react';
import '../styles/Navbar.css'; // Make sure this CSS file is in the same directory

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar bg-white">
      <div className="logo">rutvij patel</div>
      <div className={`nav-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#Projects" onClick={toggleMenu}>Project</a></li>
        <li><a href="#archiv" onClick={toggleMenu}>Archiv</a></li>
        <li><a href="#info" onClick={toggleMenu}>Info</a></li>
        <li><a href="#kontakt" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
