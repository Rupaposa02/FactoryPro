import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import bg from '../../assets/ServiceBackground.jpg';

export default function NotFound() {
  return (
    <div className="nf-page">
      <section className="nf-section" style={{ backgroundImage: `url(${bg})` }}>
        <div className="nf-overlay" />

        <div className="nf-content-box">
         
          <h1 className="nf-code">404</h1>
          
          <h2 className="nf-title">
            Oops! This page <strong>can’t be found</strong>
          </h2>
          
          <p className="nf-text">
            The page you are looking for might have been removed, had its name changed<br />
            or is temporarily unavailable.
          </p>
          <div className="nf-btn-wrap">
            <Link to="/" className="nf-btn">
              Back To Home
            </Link>
          </div>
        </div>
      </section>    
    </div>
  );
}