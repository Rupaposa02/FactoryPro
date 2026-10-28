import React from 'react';
import './OurProcess.css';

import aboutLogo from '../../assets/AboutLogo.png';
import processImg from '../../assets/ProcessMachinery.png';

export default function OurProcess() {
  return (
    <section className="our-process-section">
      <div className="our-process-container">
        
        <div className="process-header-row">
          <div className="process-header-left">
            <div className="process-tagline">
              <img src={aboutLogo} alt="badge" className="process-tag-icon" />
              <span>OUR PROCESS</span>
            </div>
            <h2 className="process-heading">
              <span className="heading-light">Streamlined processes</span>{' '}
              <span className="heading-bold">for</span>
              <br />
              <span className="heading-bold">optimal efficiency</span>
            </h2>
          </div>

          <div className="process-header-right">
            <p className="process-desc">
              Our process is designed to maximize efficiency and quality at every stage
              of production. By integrating advanced technologies and best practices,
              we ensure seamless workflows.
            </p>
          </div>
        </div>

        <div className="process-body-row">
          <div className="process-image-box">
            <img 
              src={processImg} 
              alt="Precision CNC lathe machining sparks" 
              className="process-main-img" 
            />
          </div>
          <div className="process-steps-list">
            <div className="step-card step-default">
              <span className="step-badge-number">01</span>
              <div className="step-text-content">
                <h4 className="step-title">Understanding Your Needs</h4>
                <p className="step-paragraph">
                  We begin by thoroughly assessing your requirements and
                  objectives to develop a tailored approach.
                </p>
              </div>
            </div>

            <div className="step-card step-highlighted">
              <span className="step-badge-number">02</span>
              <div className="step-text-content">
                <h4 className="step-title">Design and Planning</h4>
                <p className="step-paragraph">
                  Our team collaborates to create detailed project plans, ensuring
                  all aspects of the process.
                </p>
              </div>
            </div>
            <div className="step-card step-default">
              <span className="step-badge-number">03</span>
              <div className="step-text-content">
                <h4 className="step-title">Implementation</h4>
                <p className="step-paragraph">
                  Utilizing advanced technologies and skilled personnel, we
                  execute the project.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}