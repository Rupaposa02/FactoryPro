import React, { useState } from 'react';
import './OurHistory.css';

import historyImg from '../../assets/HistoryPlanning.png';
import checkBadgeIcon from '../../assets/AboutLogo.png';
import featureIcon from '../../assets/FeatureIcon.png';

export default function OurHistory() {
  const [activeYear, setActiveYear] = useState('1920');

  const historyData = {
    '1920': {
      titleLight: 'Company ',
      titleBold: 'started',
      desc: 'Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.',
      points: [
        'Quality Control System',
        'Building Quality Industrial',
        'Environmental Responsibility',
        'Building Quality Industrial',
      ],
    },
    '1922': {
      titleLight: 'Journey ',
      titleBold: 'Started',
      desc: 'By 1922, our core workshop operations transitioned into organized industrial manufacturing lines, establishing standardized production frameworks.',
      points: [
        'Standardized Manufacturing',
        'Pioneering Machine Assemblies',
        'Early Industrial Safety Codes',
        'Skilled Artisan Workforce',
      ],
    },
    '1925': {
      titleLight: 'Journey ',
      titleBold: 'Progress',
      desc: 'A significant expansion occurred in 1925 as we integrated advanced metallurgical fabrication techniques and expanded regional distribution.',
      points: [
        'Metallurgical Innovation',
        'Regional Logistics Network',
        'Enhanced Material Durability',
        'Precision Gear Casting',
      ],
    },
    '1930': {
      titleLight: 'Global ',
      titleBold: 'Reach',
      desc: 'Expanding across borders in 1930, our machinery and precision parts served global clients, setting foundational benchmarks in engineering consistency.',
      points: [
        'Cross-Border Exports',
        'International Quality Accreditations',
        'Expanded Assembly Plants',
        'High-Output Steam Turbines',
      ],
    },
    '1940': {
      titleLight: 'Industry ',
      titleBold: 'Leadership',
      desc: 'Solidifying leadership through heavy industrial machinery, research laboratories, and resilient automated engineering developments.',
      points: [
        'Dedicated R&D Laboratories',
        'Heavy Industrial Tooling',
        'Automated Line Prototyping',
        'National Infrastructure Supply',
      ],
    },
  };

  const timelineTabs = [
    { id: '1920', label: 'In 1920 - Planning' },
    { id: '1922', label: 'In 1922 - Journey Started' },
    { id: '1925', label: 'In 1925 - Journey Progress' },
    { id: '1930', label: 'In 1930 - Global Reach' },
    { id: '1940', label: 'In 1940 - Industry Leadership' },
  ];

  const current = historyData[activeYear];

  return (
    <section className="oh-section-wrapper">
      
      <div className="oh-header-container">
        <div className="oh-header-left">
          <div className="oh-badge">
            <img src={checkBadgeIcon} alt="History Badge" className="oh-badge-icon" />
            <span className="oh-badge-text">OUR HISTORY</span>
          </div>
          <h2 className="oh-main-title">
            <span className="oh-title-light">Foundation of excellences</span>
            <span className="oh-title-bold">in industry</span>
          </h2>
        </div>

        <div className="oh-header-right">
          <p className="oh-header-desc">
            Built on a legacy of quality and innovation, we have established a strong
            foundation in the industrial sector, consistently delivering reliable
            solutions that drive progress and set industry standards.
          </p>
        </div>
      </div>

      <div className="oh-main-box">
        <div className="oh-timeline-col">
          {timelineTabs.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`oh-timeline-tab ${activeYear === item.id ? 'active' : ''}`}
              onClick={() => setActiveYear(item.id)}
            >
              <span className="oh-tab-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="oh-details-col">

          <div className="oh-details-content">
            <h3 className="oh-details-title">
              <span className="oh-title-light">{current.titleLight}</span>
              <span className="oh-title-bold">{current.titleBold}</span>
            </h3>

            <p className="oh-details-desc">{current.desc}</p>

            <div className="oh-checklist">
              {current.points.map((pt, index) => (
                <div key={index} className="oh-check-item">
                  <img src={featureIcon} alt="Checkmark" className="oh-check-icon" />
                  <span className="oh-check-text">{pt}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="oh-image-box">
            <img src={historyImg} alt="Historical industrial planning" className="oh-img" />
          </div>
        </div>
      </div>
    </section>
  );
}