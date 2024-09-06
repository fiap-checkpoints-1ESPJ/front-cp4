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
        setIsNavActive(prev => {
            window.document.body.style.overflow = prev ? 'auto' : 'hidden'
            return !prev
        });
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a href="#" className="logo">Super<span>Sports</span></a>
                <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
                    <li><Link onClick={() => toggleNav()} to="/" style={{ animation: isNavActive ? `navLinkFade 0.5s ease forwards ${1 / 7 + 0.3}s` : '' }}>Home</Link></li>
                    <li><Link onClick={() => toggleNav()} to="/products" style={{ animation: isNavActive ? `navLinkFade 0.5s ease forwards ${2 / 7 + 0.3}s` : '' }}>Products</Link></li>
                    <li><Link onClick={() => toggleNav()} to="/about" style={{ animation: isNavActive ? `navLinkFade 0.5s ease forwards ${3 / 7 + 0.3}s` : '' }}>About</Link></li>
                    <li><Link onClick={() => toggleNav()} to="/contact" style={{ animation: isNavActive ? `navLinkFade 0.5s ease forwards ${4 / 7 + 0.3}s` : '' }}>Contact</Link></li>
                </ul>
                <section className={`burger ${isNavActive ? 'toggle' : ''}`} onClick={toggleNav}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </section>
            </nav>
        </header>
    );
};

export default Nav;
