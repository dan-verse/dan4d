import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Danford</h3>
            <p className="footer-subtitle">Building amazing web experiences</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/dan-verse" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/obae" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:danford.obae01@gmail.com" className="footer-social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Danford Obae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;