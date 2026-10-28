import React from 'react';
import './About.css';
import AboutLogo from '../../assets/AboutLogo.png';
import aboutAutomation from '../../assets/AboutAutomation.png';
import aboutEngineer from '../../assets/AboutEngineer.png';
import featureIcon from '../../assets/FeatureIcon.png';
import arrowUpRight from '../../assets/ArrowUpRight.png';
import factorySketch from '../../assets/FooterBackground.png';

export default function About() {
  return (
    <section className="about-section-container">
      <img src={factorySketch} alt="" className="about-bg-sketch" />
      <div className="about-content-wrapper">
        
        
        <div className="about-visuals-col">
          
          <div className="about-top-thumb">
            <img src={aboutAutomation} alt="Industrial Automation" />
          </div>

          
          <div className="about-exp-badge">
            <span className="exp-num">25+</span>
            <span className="exp-text">Year Of<br />Experience</span>
          </div>

          
          <div className="about-main-thumb">
            <img src={aboutEngineer} alt="Engineer inspecting blueprint" />
          </div>
        </div>

       
        <div className="about-info-col">
          <div className="about-tagline">
            <img src={AboutLogo} alt="About Us Badge" className="AboutLogo" />
            <span className="tag-label">ABOUT US</span>
          </div>

          <h2 className="about-title">
            <span className="title-light">Building quality through</span>
            <span className="title-bold">industrial innovation</span>
          </h2>

          <p className="about-desc">
            At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.
          </p>

          <div className="about-bottom-flex">
        
            <div className="about-features-block">
              <div className="feature-item">
                <img src={featureIcon} alt="check" className="feature-icon" />
                <span>Sustainable Manufacturing</span>
              </div>
              <div className="feature-item">
                <img src={featureIcon} alt="check" className="feature-icon" />
                <span>Advanced Automation</span>
              </div>
              <div className="feature-item">
                <img src={featureIcon} alt="check" className="feature-icon" />
                <span>Efficient Production Processes</span>
              </div>
              <div className="feature-item">
                <img src={featureIcon} alt="check" className="feature-icon" />
                <span>Reliable Delivery Services</span>
              </div>

             
              <a href="#learn-more" className="about-btn">
                <span className="btn-pill-label">Learn More</span>
                <img src={arrowUpRight} alt="Arrow" className="about-btn-arrow" />
              </a>
            </div>

            
            <div className="about-rating-box">
              <div className="stars-row">★★★★★</div>
              <span className="rating-caption">15.5K Genuine Rating</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}