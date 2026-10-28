import React from 'react';
import './ClientReviews.css';

import aboutLogo from '../../assets/AboutLogo.png';
import mainClientImg from '../../assets/MainClientImage.png';
import authorImg from '../../assets/Author.png';
import horizontalBorder from '../../assets/HorizontalBorder.png';

export default function ClientReviews() {
  return (
    <section className="client-reviews-section">
      <div className="client-reviews-container">
        
      
        <div className="client-reviews-main-row">
          
          <div className="client-reviews-image-box">
            <img 
              src={mainClientImg} 
              alt="Manager inspecting robotic welding arm" 
              className="client-reviews-main-img" 
            />
          </div>

          <div className="client-reviews-content-side">

            <div className="client-reviews-tagline">
              <img src={aboutLogo} alt="badge" className="client-reviews-tag-icon" />
              <span>OUR CLIENT SAY</span>
            </div>

            <h2 className="client-reviews-heading">
              <span className="heading-light">What our satisfied clients</span>
              <br />
              <span className="heading-bold">are saying</span>
            </h2>

            <p className="client-reviews-quote">
              "The team's attention to detail and commitment to quality exceeded our
              expectations. They delivered on time, and their innovative solutions
              improved our production efficiency by 30%. Highly recommended!"
            </p>

            <div className="client-reviews-footer-row">
              <div className="client-reviews-author-box">
                <img 
                  src={authorImg} 
                  alt="Brooklyn Simmons" 
                  className="client-reviews-author-avatar" 
                />
                <div className="author-details">
                  <h4 className="author-name">Brooklyn Simmons</h4>
                  <span className="author-role">Homeowner</span>
                </div>
              </div>

              <div className="client-reviews-arrows">
                <button className="slider-arrow-btn" aria-label="Previous review">
                  ←
                </button>
                <button className="slider-arrow-btn" aria-label="Next review">
                  →
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="testimonial-logos-strip">
          <img 
            src={horizontalBorder} 
            alt="Client Brand Logos" 
            className="client-logos-banner-img" 
          />
        </div>

      </div>
    </section>
  );
}