import React from 'react';
import './Footer.css';

import aboutLogo from '../../assets/AboutLogo.png';
import footerBg from '../../assets/FooterBackground.png';
import connectBadgeImg from '../../assets/ConnectBadge.png';
import iconPinterest from '../../assets/SocialPinterest.png';
import iconFacebook from '../../assets/SocialFacebook.png';
import iconInstagram from '../../assets/SocialInstagram.png';
import logo from '../../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-bg-graphic">
        <img src={footerBg} alt="Factory background sketch" />
      </div>

      <div className="footer-container">
  
        <div className="footer-cta-row">
          <div className="footer-cta-text">
            <h2 className="footer-cta-heading">Ready to work with us?</h2>
            <p className="footer-cta-desc">
              Join us to experience cutting-edge industrial solutions that drive innovation, lasting success.
            </p>
          </div>

          <a href="#contact" className="footer-connect-badge" aria-label="Connect Now">
            <img 
              src={connectBadgeImg} 
              alt="Connect Now" 
              className="badge-image" 
            />
          </a>
        </div>

        <div className="footer-divider-cta" />
        <div className="footer-columns-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src={logo} alt="FactoryPro logo" className="logo-icon" />
              
            </div>
            <p className="footer-brand-desc">
              We are committed to providing personalized industrial solutions.
            </p>
          
            <div className="footer-social-row">
              <a href="#pinterest" className="social-icon-btn" aria-label="Pinterest">
                <img src={iconPinterest} alt="Pinterest" />
              </a>
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook">
                <img src={iconFacebook} alt="Facebook" />
              </a>
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-nav-col footer-col-quicklinks">
              <h4 className="footer-nav-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>

            <div className="footer-nav-col footer-col-security">
              <h4 className="footer-nav-title">Security</h4>
              <ul className="footer-links-list">
                <li><a href="#terms">Term & Condition</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-nav-col footer-col-contact">
              <h4 className="footer-nav-title">Contact</h4>
              <ul className="footer-contact-list">
                <li>+91 123654789</li>
                <li>info@domainname.com</li>
                <li>520, West Valley, Amin and minim</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright-strip">
          <p>Copyright © 2026 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}