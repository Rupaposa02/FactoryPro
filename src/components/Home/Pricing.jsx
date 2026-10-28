
import React from 'react';
import './Pricing.css';

import aboutLogo from '../../assets/AboutLogo.png';
import featureIcon from '../../assets/FeatureIcon.png';
import pricingIcon1 from '../../assets/PricingIcon1.png';
import pricingIcon2 from '../../assets/PricingIcon2.png';
import pricingIcon3 from '../../assets/PricingIcon3.png';
import Calendar from '../../assets/CalendarIcon.png';
import Wallet from '../../assets/Wallet.png';
import Clock from '../../assets/Clock.png';

export default function Pricing() {
  const perks = [
    'Standard Manufacturing Services',
    'Quality Control Checks',
    'Technical Support',
    'Monthly Progress Reports',
  ];

  return (
    <section className="pricing-plan-section">
      <div className="pricing-plan-container">
        
        <div className="pricing-header-row">
          <div className="pricing-header-left">
            <div className="pricing-tagline">
              <img src={aboutLogo} alt="badge" className="pricing-tag-icon" />
              <span>PRICING PLAN</span>
            </div>
            <h2 className="pricing-heading">
              <span className="heading-light">Transparent pricing for</span>
              <br />
              <span className="heading-bold">every solution</span>
            </h2>
          </div>

          <div className="pricing-header-right">
            <p className="pricing-desc">
              We believe in providing clear and upfront pricing to ensure that you
              understand the value of our services.
            </p>
          </div>
        </div>


        <div className="pricing-cards-grid">

          <div className="pricing-card card-default">
            <div className="decor-badge-wrapper decor-one">
              <img src={pricingIcon1} alt="decor" />
            </div>
            
            <div className="pricing-inner-content">
              <div className="card-price-header">
                <span className="price-amount">$39</span>
                <span className="price-unit">/month</span>
              </div>
              <h4 className="plan-name">Advanced Plan</h4>

              <ul className="plan-perks-list">
                {perks.map((perk, i) => (
                  <li key={i} className="perk-item">
                    <img src={featureIcon} alt="check" className="perk-check-icon" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button className="pricing-btn btn-outline">Purchase Now</button>
            </div>
          </div>

          <div className="pricing-card card-featured">
            <div className="decor-badge-wrapper decor-two">
              <img src={pricingIcon2} alt="decor" />
            </div>

            <div className="pricing-inner-content">
              <div className="card-price-header">
                <span className="price-amount">$39</span>
                <span className="price-unit">/month</span>
              </div>
              <h4 className="plan-name">Advanced Plan</h4>

              <ul className="plan-perks-list">
                {perks.map((perk, i) => (
                  <li key={i} className="perk-item">
                    <img src={featureIcon} alt="check" className="perk-check-icon check-white" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button className="pricing-btn btn-white-border">Purchase Now</button>
            </div>
          </div>

          <div className="pricing-card card-default">
            <div className="decor-badge-wrapper decor-three">
              <img src={pricingIcon3} alt="decor" />
            </div>

            <div className="pricing-inner-content">
              <div className="card-price-header">
                <span className="price-amount">$39</span>
                <span className="price-unit">/month</span>
              </div>
              <h4 className="plan-name">Advanced Plan</h4>

              <ul className="plan-perks-list">
                {perks.map((perk, i) => (
                  <li key={i} className="perk-item">
                    <img src={featureIcon} alt="check" className="perk-check-icon" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button className="pricing-btn btn-outline">Purchase Now</button>
            </div>
          </div>

        </div>

        <div className="pricing-bottom-guarantee">
          <div className="guarantee-item">
            <img src={Calendar} alt="Calendar icon" className="guarantee-icon" />
            <span>Get 30 day free trial</span>
          </div>
          <div className="guarantee-item">
            <img src={Wallet} alt="Wallet icon" className="guarantee-icon" />
            <span>No any hidden fees pay</span>
          </div>
          <div className="guarantee-item">
            <img src={Clock} alt="Clock icon" className="guarantee-icon" />
            <span>You can cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
}