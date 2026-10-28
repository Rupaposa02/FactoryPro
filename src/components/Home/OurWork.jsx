import React, { useState } from 'react';
import './OurWork.css';

import aboutLogo from '../../assets/AboutLogo.png';
import workImage1 from '../../assets/WorkImage1.png';
import workImage2 from '../../assets/WorkImage2.png';
import workImage3 from '../../assets/WorkImage3.png';
import workImage4 from '../../assets/WorkImage4.png';

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = [
    'All',
    'Automation',
    'Development',
    'Infrastructure',
    'Manufacturing',
    'Sustainability'
  ];

  const projects = [
    {
      img: workImage1,
      tag: 'Development',
      title: 'Total Quality Management Implementation'
    },
    {
      img: workImage2,
      tag: 'Automation',
      title: 'Advanced Research In Material Science'
    },
    {
      img: workImage3,
      tag: 'Infrastructure',
      title: 'Workplace Safety Enhancement Initiative'
    },
    {
      img: workImage4,
      tag: 'Infrastructure',
      title: 'Robotic Process Automation Deployment'
    }
  ];

  return (
    <section className="our-work-section">
      <div className="our-work-container">
        
        <div className="our-work-header">
          <div className="our-work-header-left">
            <div className="our-work-tagline">
              <img src={aboutLogo} alt="badge" className="our-work-tag-icon" />
              <span>OUR WORK</span>
            </div>
            <h2 className="our-work-heading">
              <span className="heading-light">Our successful project</span>
              <span className="heading-bold">initiatives</span>
            </h2>
          </div>

          <div className="our-work-header-right">
            <p className="our-work-desc">
              Our successful project initiatives showcase our commitment to excellence
              and innovation across various industries.
            </p>
          </div>
        </div>

        <div className="our-work-filter-bar">
          {filterTabs.map((tab, idx) => (
            <React.Fragment key={tab}>
              <button
                className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab === 'Sustainability' && <span className="sustainability-dot">•</span>}
                {tab}
              </button>
              {idx < filterTabs.length - 1 && <span className="filter-slash">/</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="our-work-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-item-card">
              <div className="project-image-box">
                <img src={project.img} alt={project.title} className="project-image" />
                <span className="project-category-badge">{project.tag}</span>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}