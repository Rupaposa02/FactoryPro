import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './CustomHero.css';

import logoImg from '../../assets/Logo.png';
import phoneIcon from '../../assets/Phone.png';
import heroBg from '../../assets/AboutHeroBackground.png';

export default function CustomHero() {
  return (
    <section 
      className="custom-hero-frame"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="custom-hero-bg-overlay" />

      
      <header className="custom-hero-header">
        <div className="custom-hero-container header-inner">
          
          <div className="custom-navbar-logo">
            <NavLink to="/">
              <img src={logoImg} alt="FactoryPro Logo" className="logo-asset" />
            </NavLink>
          </div>
          <nav className="custom-navbar-menu">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About Us
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Services <span className="caret">⌵</span>
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Blog
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Projects
            </NavLink>
            <NavLink to="/page" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Page <span className="caret">⌵</span>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact Us
            </NavLink>
          </nav>

          <div className="custom-navbar-contact">
            <img src={phoneIcon} alt="Phone Icon" className="phone-symbol" />
            <span className="phone-digits">+01 123456789</span>
          </div>

        </div>
      </header>
      <div className="custom-hero-container content-area">
        <h1 className="custom-hero-h1">
          <span className="text-light">Custom Manufacturing </span>
          <span className="text-bold">Solution</span>
        </h1>

        <nav className="custom-hero-breadcrumb" aria-label="Breadcrumbs">
          <Link to="/" className="bc-link">Home</Link>
          <span className="bc-bullet">•</span>
          <Link to="/services" className="bc-link">Services</Link>
          <span className="bc-bullet">•</span>
          <span className="bc-current">Custom Manufacturing Solution</span>
        </nav>
      </div>
    </section>
  );
}