import React, { useState } from 'react';
import './OurApproach.css';

import serviceBg from '../../assets/ServiceBackground.jpg';
import workerImg from '../../assets/ApproachWorker.png';
import missionIcon from '../../assets/MissionIcon.png';
import visionIcon from '../../assets/VisionIcon.png';
import valueIcon from '../../assets/ValueIcon.png';
import AboutLogo from '../../assets/AboutLogo.png';
import featureIcon from '../../assets/FeatureIcon.png';

export default function OurApproach() {
  const [activeTab, setActiveTab] = useState('mission');

  const contentMap = {
    mission: {
      text: 'Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.',
      bullets: [
        'Sustainable Manufacturing Practices',
        'Advanced Technology Integration',
        'Community and Environmental Responsibility',
        'Innovation-Driven Growth',
      ],
    },
    vision: {
      text: 'Our vision is to lead global industrial transformation by deploying high-efficiency automation systems, reducing ecological footprint, and advancing robotic manufacturing.',
      bullets: [
        'Global Industrial Benchmark',
        'Next-Gen Robotics Deployment',
        'Eco-Conscious Infrastructure',
        'Long-term Sustainable Value',
      ],
    },
    value: {
      text: 'Our values are built on safety excellence, unwavering precision, customer partnership, and continuous innovation across all manufacturing pipelines.',
      bullets: [
        'Precision Engineering Standards',
        'Safety-First Factory Operations',
        'Transparent Client Partnerships',
        'Constant Technological Evolution',
      ],
    },
  };

  const current = contentMap[activeTab];

  return (
    <section className="oa-section-wrapper">
     
      <div className="oa-bg-container">
        <img src={serviceBg} alt="Factory Background" className="oa-bg-image" />
        <div className="oa-bg-overlay" />
      </div>

      
      <div className="oa-header-row">
        <div className="oa-header-left">
          <div className="oa-badge">
            <img src={AboutLogo} alt="CheckMark" className="oa-check-badge-icon" />
            <span className="oa-badge-text">OUR APPROACH</span>
          </div>
          <h2 className="oa-title">
            <span className="oa-title-light">Empowering sustainable</span>
            <span className="oa-title-bold">growth in industry</span>
          </h2>
        </div>

        <div className="oa-header-right">
          <p className="oa-header-desc">
            We provide a wide range of services tailored to meet the unique needs of
            modern industries. From precision manufacturing and advanced
            automation to custom product design and efficient logistics.
          </p>
        </div>
      </div>
      <div className="oa-main-card">
      
        <div className="oa-tabs-bar">
          <button
            type="button"
            className={`oa-tab-btn oa-tab-mission ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            <div className="oa-tab-content">
              <img src={missionIcon} alt="Mission" className="oa-tab-icon" />
              <span className="oa-tab-text">Our Mission</span>
            </div>
          </button>
          <button
            type="button"
            className={`oa-tab-btn oa-tab-vision ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
          >
            <div className="oa-tab-content">
              <img src={visionIcon} alt="Vision" className="oa-tab-icon" />
              <span className="oa-tab-text">Our Vision</span>
            </div>
          </button>
          <button
            type="button"
            className={`oa-tab-btn oa-tab-value ${activeTab === 'value' ? 'active' : ''}`}
            onClick={() => setActiveTab('value')}
          >
            <div className="oa-tab-content">
              <img src={valueIcon} alt="Value" className="oa-tab-icon" />
              <span className="oa-tab-text">Our Value</span>
            </div>
          </button>
        </div>
        <div className="oa-card-body">
          <div className="oa-body-left">
            <p className="oa-body-para">{current.text}</p>
            <div className="oa-checklist">
              {current.bullets.map((item) => (
                <div key={item} className="oa-check-item">
                  <img src={featureIcon} alt="CheckMark" className="oa-check-badge-icon" />
                  <span className="oa-check-label">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="oa-body-right">
            <img src={workerImg} alt="Specialist" className="oa-worker-img" />
          </div>
        </div>
      </div>
    </section>
  );
}