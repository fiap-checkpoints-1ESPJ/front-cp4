import { Link } from 'react-router-dom';
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
        <a href="#" className="logo">Super<span>Hydrate</span></a>
        <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
          <li><Link href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${1 / 7 + 0.3}s` : ''}}>Home</Link></li>
          <li><Link href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${2 / 7 + 0.3}s` : ''}}>Products</Link></li>
          <li><Link href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${3 / 7 + 0.3}s` : ''}}>About</Link></li>
          <li><Link href="#" style={{animation: isNavActive ? `navLinkFade 0.5s ease forwards ${4 / 7 + 0.3}s` : ''}}>Contact</Link></li>
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
