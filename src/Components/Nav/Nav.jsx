import './index.css'

import { useState, useEffect } from 'react';

const Nav = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isNavActive) {
        setIsNavActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavActive]);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">Super<span>Sports</span></a>
        <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
          <li><a href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${1 / 7 + 0.3}s` : ''}}>Home</a></li>
          <li><a href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${2 / 7 + 0.3}s` : ''}}>Products</a></li>
          <li><a href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${3 / 7 + 0.3}s` : ''}}>About</a></li>
          <li><a href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${4 / 7 + 0.3}s` : ''}}>Contact</a></li>
        </ul>
        <div className={`burger ${isNavActive ? 'toggle' : ''}`} onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
