import React from 'react';
import './Service.css';

import serviceBg from '../../assets/ServiceBackground.jpg';
import aboutLogo from '../../assets/AboutLogo.png';
import icon1 from '../../assets/ServicesIcon1.png';
import icon2 from '../../assets/ServicesIcon2.png';
import icon3 from '../../assets/ServicesIcon3.png';
import icon4 from '../../assets/ServicesIcon4.png';

export default function Service() {
  const serviceCards = [
    {
      icon: icon1,
      title: 'Custom Manufacturing Solution',
    },
    {
      icon: icon2,
      title: 'Industrial Automation And Robotics',
    },
    {
      icon: icon3,
      title: 'Product Design And Prototyping',
    },
    {
      icon: icon4,
      title: 'Equipment Maintenance Support',
    },
  ];

  return (
    <section className="services-section-wrapper">

      <div className="services-banner-dark">
        <div className="services-bg-container">
          <img src={serviceBg} alt="Factory Robotics" className="services-bg-img" />
          
        </div>
        <div className="services-header-container"></div>

        <div className="services-header-container">
          <div className="services-header-left">
            <div className="services-badge">
              <img src={aboutLogo} alt="badge" className="services-badge-icon" />
              <span>SERVICES</span>
            </div>
            <h2 className="services-main-title">
              Comprehensive solutions <br />
              <strong>for industrial excellence</strong>
            </h2>
          </div>

          <div className="services-header-right">
            <p className="services-lead-text">
              We provide a wide range of services tailored to meet the unique needs of
              modern industries. From precision manufacturing and advanced
              automation to custom product design and efficient logistics.
            </p>
          </div>
        </div>
      </div>

      <div className="services-floating-container">
        <div className="services-cards-box">
          {serviceCards.map((item, index) => (
            <div key={index} className="service-property-card">
              <div className="service-card-icon-box">
                <img src={item.icon} alt={item.title} className="service-card-icon" />
              </div>

              <h4 className="service-card-title">{item.title}</h4>

              <a href="#service-detail" className="service-card-btn">
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}