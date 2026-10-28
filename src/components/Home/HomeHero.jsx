import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHero.css';

import heroBg from '../../assets/Background-Image.png';
import featureIcon from '../../assets/FeatureIcon.png';
import arrowUpRight from '../../assets/ArrowUpRight.png';

export default function HomeHero() {
  return (
    <section className="hero-viewport">
      <div className="hero-bg-container">
        <img 
          src={heroBg} 
          alt="FactoryPro Industrial Hero" 
          className="hero-bg-photo" 
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-content-layer">
        <div className="hero-text-block">
          <h1 className="hero-title">
            <span className="hero-title-light">Excellence innovating</span>
            <span className="hero-title-bold">industry for today</span>
          </h1>

          <p className="hero-description">
            At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.
          </p>

          <Link to="/about" className="explore-more-box">
            <span className="explore-pill">
                Explore More
            </span>
              <img src={arrowUpRight} alt="Arrow" className="explore-arrow-icon" />
          </Link>
        </div>

        <div className="hero-bottom-badges">
          <div className="badge-item">
            <img src={featureIcon} alt="Feature check icon" className="badge-icon" />
            <span>Advanced Manufacturing Solutions</span>
          </div>
          <div className="badge-item">
            <img src={featureIcon} alt="Feature check icon" className="badge-icon" />
            <span>Quality Assurance Systems</span>
          </div>
          <div className="badge-item">
            <img src={featureIcon} alt="Feature check icon" className="badge-icon" />
            <span>State-of-the-Art Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}