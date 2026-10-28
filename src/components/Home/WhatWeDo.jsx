import React from 'react';
import './WhatWeDo.css';

import aboutLogo from '../../assets/AboutLogo.png';
import icon1 from '../../assets/WeDoIcon1.png';
import icon2 from '../../assets/WeDoIcon2.png';
import icon3 from '../../assets/WeDoIcon3.png';
import icon4 from '../../assets/WeDoIcon4.png';
import connectBadge from '../../assets/ConnectBadge.png';
import MainImage from '../../assets/WeDoMainImage.png';

export default function WhatWeDo() {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        
       
        <div className="we-do-left-column">

          <div className="we-do-tagline">
            <img src={aboutLogo} alt="badge" className="we-do-tag-icon" />
            <span className="we-do-tag-label">WHAT WE DO</span>
          </div>

          <h2 className="we-do-heading">
            <span className="heading-light">Innovative factory and industry</span>
            <span className="heading-bold">solutions today</span>
          </h2>


          <div className="we-do-cards-grid">
            <div className="we-do-card card-dark">
              <div className="we-do-card-icon-box">
                <img src={icon1} alt="Automation Solutions" className="we-do-card-icon" />
              </div>
              <h4 className="we-do-card-title">Automation Solutions</h4>
              <p className="we-do-card-desc">Streamlining processes through cutting-edge technology.</p>
            </div>

            <div className="we-do-card card-highlight">
              <div className="we-do-card-icon-box">
                <img src={icon2} alt="Quality Control" className="we-do-card-icon" />
              </div>
              <h4 className="we-do-card-title">Quality Control</h4>
              <p className="we-do-card-desc">Ensuring product excellence through rigorous testing.</p>
            </div>
            <div className="we-do-card card-highlight">
              <div className="we-do-card-icon-box">
                <img src={icon3} alt="Process Engineering" className="we-do-card-icon" />
              </div>
              <h4 className="we-do-card-title">Process Engineering</h4>
              <p className="we-do-card-desc">Ensuring product excellence through rigorous testing.</p>
            </div>

            <div className="we-do-card card-dark">
              <div className="we-do-card-icon-box">
                <img src={icon4} alt="Product Development" className="we-do-card-icon" />
              </div>
              <h4 className="we-do-card-title">Product Development</h4>
              <p className="we-do-card-desc">Streamlining processes through cutting-edge technology.</p>
            </div>
          </div>

          <div className="we-do-bottom-link">
            <span>Let's make something great work together.</span>{' '}
            <a href="#quote" className="quote-link">Get Free Quote</a>
          </div>
        </div>

        <div className="we-do-floating-badge">
          <img src={connectBadge} alt="Connect Now" className="connect-badge-img" />
        </div>

        <div className="we-do-right-image-box">
          <img src={MainImage} alt="Technician grinding metal with sparks" className="we-do-spark-img" />
        </div>

      </div>
    </section>
  );
}