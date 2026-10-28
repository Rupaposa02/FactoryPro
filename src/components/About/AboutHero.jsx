import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './AboutHero.css';
import logo from '../../assets/Logo.png';
import phoneIcon from '../../assets/Phone.png';
import herobgImage from '../../assets/AboutHeroBackground.png';

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      
      <div className="about-hero-dark-overlay" />
      <header className="about-hero-navbar-wrapper">
        <div className="about-hero-navbar-container">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="FactoryPro Logo" className="logo-img" />
            </NavLink>
          </div>

          <nav className="navbar-menu">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              About Us
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Services <span className="dropdown-caret">⌵</span>
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Blog
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Projects
            </NavLink>
            <NavLink to="/page" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Pages <span className="dropdown-caret">⌵</span>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Contact Us
            </NavLink>
          </nav>

          <div className="navbar-phone">
            <img src={phoneIcon} alt="Phone" className="phone-icon" />
            <span className="phone-text">+01 123456789</span>
          </div>
        </div>
      </header>
     
      <div className="about-hero-content-area">
        <h1 className="about-hero-title">
          <span className="title-light">About </span>
          <span className="title-bold">Us</span>
        </h1>

        <nav className="about-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-bullet">•</span>
          <span className="breadcrumb-current">About Us</span>
        </nav>
      </div>
    </section>
  );
}