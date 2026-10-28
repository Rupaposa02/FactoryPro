import React from 'react';
import { Link } from 'react-router-dom';
import './PricingHero.css';

import logoImg from '../../assets/Logo.png';
import phoneIcon from '../../assets/Phone.png';
import heroBg from '../../assets/AboutHeroBackground.png';

export default function PricingHero() {
  return (
    <section 
      className="pricing-hero-wrapper"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="pricing-hero-gradient-overlay">
 
        <header className="hero-navbar">
          <div className="navbar-inner">
            
            <Link to="/" className="navbar-logo">
              <img src={logoImg} alt="FactoryPro Logo" />
            </Link>
            <nav className="nav-menu">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              
              <div className="nav-link-with-icon">
                <Link to="/services" className="nav-link">Services</Link>
                <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              
              <div className="nav-link-with-icon">
                <span className="nav-link">Page</span>
                <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <Link to="/contact" className="nav-link">Contact Us</Link>
            </nav>

            <div className="nav-contact-block">
              <img src={phoneIcon} alt="phone" className="contact-symbol" />
              <span className="contact-number">+01 123456789</span>
            </div>

          </div>
        </header>

        <div className="hero-content-wrapper">
          <h1 className="hero-heading">
            Pricing <span className="hero-heading-bold">plan</span>
          </h1>

          <div className="hero-breadcrumb">
            <Link to="/" className="breadcrumb-home">Home</Link>
            <span className="breadcrumb-dot">•</span>
            <span className="breadcrumb-current">Pricing</span>
          </div>
        </div>

      </div>
    </section>
  );
}