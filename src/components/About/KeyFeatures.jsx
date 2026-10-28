import React from 'react';
import './KeyFeatures.css';

import aboutLogo from '../../assets/AboutLogo.png';
import keyfeatureicon1 from '../../assets/KeyFeatureIcon1.png';
import keyfeatureicon2 from '../../assets/KeyFeatureIcon2.png';
import keyfeatureicon3 from '../../assets/KeyFeatureIcon3.png';
import featureBoxImg from '../../assets/FeatureGrinding.png';

export default function KeyFeatures() {
  return (
    <section className="kf-section-wrapper">
    
      <div className="kf-header-container">
        <div className="kf-header-left">
          <div className="kf-badge">
            <img src={aboutLogo} alt="Key Feature Badge" className="kf-badge-icon" />
            <span className="kf-badge-text">OUR KEY FEATURE</span>
          </div>
          <h2 className="kf-main-title">
            <span className="kf-title-light">Core strengths in</span>
            <span className="kf-title-bold">industrial innovation</span>
          </h2>
        </div>

        <div className="kf-header-right">
          <p className="kf-header-desc">
            Our expertise in industrial innovation combines advanced technology,
            sustainable practices, and a skilled workforce to deliver efficient,
            future-ready solutions that drive industry progress.
          </p>
        </div>
      </div>

      <div className="kf-grid-box">
        <div className="kf-cell kf-cell-top-left">
          <img src={keyfeatureicon1} alt="Advanced Technology" className="kf-cell-icon" />
          <h3 className="kf-cell-title">Advanced Technology Integration</h3>
          <p className="kf-cell-desc">
            We integrate cutting-edge technologies into every aspect of our operations,
            enhancing efficiency, precision, and innovation to deliver superior
            industrial solutions.
          </p>
        </div>
        <div className="kf-cell kf-cell-top-right">
          <img src={keyfeatureicon2} alt="Quality Standards" className="kf-cell-icon" />
          <h3 className="kf-cell-title">Uncompromising Quality Standards</h3>
          <p className="kf-cell-desc">
            We uphold the highest quality standards across all processes, ensuring
            consistency, reliability, and excellence in every product and service we
            deliver.
          </p>
        </div>
        <div className="kf-cell kf-cell-bottom-left">
          <img src={keyfeatureicon3} alt="Continuous Innovation" className="kf-cell-icon" />
          <h3 className="kf-cell-title">Continuous Innovation and R&D</h3>
          <p className="kf-cell-desc">
            We prioritize ongoing research and development to drive continuous
            innovation, staying ahead of industry trends and creating advanced
            solutions that meet evolving market demands.
          </p>
        </div>
        <div className="kf-cell kf-cell-bottom-right">
          <img
            src={featureBoxImg}
            alt="Industrial Metal Grinding Work"
            className="kf-feature-img"
          />
        </div>
      </div>
    </section>
  );
}