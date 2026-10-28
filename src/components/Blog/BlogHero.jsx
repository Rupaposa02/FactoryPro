import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './BlogHero.css';

import heroBg from '../../assets/HeroBackground.jpg';
import brandLogo from '../../assets/Logo.png';
import phoneIcon from '../../assets/Phone.png';

export default function BlogHero() {
  return (
    <header 
      className="blog-hero-banner" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="blog-hero-gradient-overlay" />


      <nav className="blog-navbar">
        <div className="blog-navbar-inner">
          
          <Link to="/" className="blog-brand-logo">
            <img src={brandLogo} alt="FactoryPro" />
          </Link>
          <ul className="blog-nav-menu">
            <li className="nav-item-home">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item-about">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item-services">
              <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <span>Services</span>
                <svg className="nav-dropdown-chevron" viewBox="0 0 10 6" width="10" height="6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            </li>
            <li className="nav-item-blog">
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item-projects">
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item-page">
              <NavLink to="/pricing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <span>Page</span>
                <svg className="nav-dropdown-chevron" viewBox="0 0 10 6" width="10" height="6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            </li>
            <li className="nav-item-contact">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <a href="tel:+01123456789" className="blog-nav-contact">
            <div className="phone-icon-wrap">
              <img src={phoneIcon} alt="Phone" />
            </div>
            <span className="phone-number-text">+01123456789</span>
          </a>

        </div>
      </nav>

      <div className="blog-hero-content-frame">

        <h1 className="blog-hero-title">Latest Post</h1>
        <div className="blog-breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          <span className="breadcrumb-dot">•</span>
          <span className="breadcrumb-blog">Blog</span>
        </div>
      </div>

    </header>
  );
}