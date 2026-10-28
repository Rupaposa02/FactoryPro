import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/Logo.png';
import phoneIcon from '../../assets/Phone.png';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="FactoryPro Logo" className="logo-img" />
          </NavLink>
        </div>

        <nav className="navbar-menu">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-item nav-home ${isActive ? "active" : ""}`}
            end
          >
            <span className="nav-text text-home">Home</span>
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-item nav-about ${isActive ? "active" : ""}`}
          >
            <span className="nav-text text-about">About Us</span>
          </NavLink>

          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-item nav-services ${isActive ? "active" : ""}`}
          >
            <span className="nav-text text-services">Services</span>
            <svg 
              className="dropdown-chevron chevron-services" 
              viewBox="0 0 12 12" 
              width="12" 
              height="12" 
              fill="none"
            >
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>

          <NavLink 
            to="/blog" 
            className={({ isActive }) => `nav-item nav-blog ${isActive ? "active" : ""}`}
          >
            <span className="nav-text text-blog">Blog</span>
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => `nav-item nav-projects ${isActive ? "active" : ""}`}
          >
            <span className="nav-text text-projects">Projects</span>
          </NavLink>

          <NavLink 
            to="/pricing" 
            className={({ isActive }) => `nav-item nav-page ${isActive ? "active" : ""}`}
          >
            <span className="nav-text text-page">Page</span>
            <svg 
              className="dropdown-chevron chevron-page" 
              viewBox="0 0 12 12" 
              width="12" 
              height="12" 
              fill="none"
            >
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-item nav-contact ${isActive ? "active" : ""}`}
          >
            <span className="nav-text text-contact">Contact Us</span>
          </NavLink>
        </nav>

        <div className="navbar-phone">
          <div className="phone-icon-wrap">
            <img src={phoneIcon} alt="Phone" className="phone-icon" />
          </div>
          <span className="phone-text">+01 123456789</span>
        </div>

      </div>
    </header>
  );
}