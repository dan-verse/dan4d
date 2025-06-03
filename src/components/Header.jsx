import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import NavLink from './NavLink';
import '../styles/Header.css';

function Header() {
  const [contactVisible, setContactVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Hide contact section when scrolling down
      if (currentScrollPos > 10) {
        setContactVisible(false);
      } else {
        setContactVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Contact section - disappears on scroll */}
      <div className={`contact-bar ${contactVisible ? 'visible' : 'hidden'}`}>
        <div className="container">
          <div className="contact-items">
            <a href="mailto:danford.obae01@gmail.com" className="contact-link">
              <Mail size={14} className="icon" /> danford.obae01@gmail.com
            </a>
            <a href="tel:+254791363617" className="contact-link">
              <Phone size={14} className="icon" /> (079) 136-3617
            </a>
            <div className="social-links">
              <a href="https://github.com/dan-verse" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={14} />
              </a>
              <a href="https://linkedin.com/in/obae" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navbar - remains sticky */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span>Dante</span>
            </div>
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <div className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;