import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">Danford</span>
            </h1>
            <p className="hero-subtitle">
              Frontend Developer and Designer specializing in building exceptional digital experiences.
            </p>
            <button className="hero-button" onClick={() => window.location.href = '#projects'}>
              View My Work
            </button>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <div className="profile-placeholder">
                {/* <img src={backgroundImage} alt="profile-photo" /> */}
                <img src="images/dp.jpg" alt="profile-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;