import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ProjectHero.css';

import heroBg from '../../assets/HeroBackground.jpg';
import brandLogo from '../../assets/Logo.png';
import phoneIcon from '../../assets/Phone.png';

export default function ProjectHero() {
  return (
    <header 
      className="project-hero-banner" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="project-hero-gradient-overlay" />

      <nav className="project-navbar">
        <div className="project-navbar-inner">
  
          <Link to="/" className="project-brand-logo">
            <img src={brandLogo} alt="FactoryPro" />
          </Link>

          <ul className="project-nav-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                <span>Services</span>
                <svg className="nav-dropdown-chevron" viewBox="0 0 10 6" width="10" height="6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                <span>Page</span>
                <svg className="nav-dropdown-chevron" viewBox="0 0 10 6" width="10" height="6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'project-nav-link active' : 'project-nav-link'}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <a href="tel:+01123456789" className="project-nav-contact">
            <div className="project-phone-icon-wrap">
              <img src={phoneIcon} alt="Phone" />
            </div>
            <span className="project-phone-number">+01123456789</span>
          </a>

        </div>
      </nav>

      <div className="project-hero-content-frame">
        <h1 className="project-hero-title">Our Project</h1>
        <div className="project-breadcrumb">
          <Link to="/" className="project-breadcrumb-home">Home</Link>
          <span className="project-breadcrumb-dot">•</span>
          <span className="project-breadcrumb-active">Project</span>
        </div>
      </div>

    </header>
  );
}