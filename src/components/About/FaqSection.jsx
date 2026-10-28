import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FaqSection.css';

import aboutLogo from '../../assets/AboutLogo.png';
import arrowUpRight from '../../assets/ArrowUpRight.png';
import faqFactoryImg from '../../assets/FaqFactory.png';
import phoneIcon from '../../assets/Phone.png';
import mailIcon from '../../assets/FaqMail.png';
import arrowDownIcon from '../../assets/ArrowDown.png';

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(1); 

  const faqs = [
    {
      id: 0,
      question: 'What industries do you serve?',
      answer: 'We provide specialized industrial engineering, automated manufacturing, and infrastructure services to energy, automotive, chemical, and heavy machinery industries.',
    },
    {
      id: 1,
      question: 'How do you ensure product quality?',
      answer: 'We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.',
    },
    {
      id: 2,
      question: 'What sustainability practices do you follow?',
      answer: 'We implement zero-carbon operational workflows, waste-reduction recycling, eco-safe materials, and energy-efficient manufacturing automation.',
    },
    {
      id: 3,
      question: 'Do you offer customized solutions?',
      answer: 'Yes, our engineering teams design tailored hardware blueprints, automated assembly flows, and custom machinery suited for client-specific parameters.',
    },
    {
      id: 4,
      question: 'How do you handle safety in the workplace?',
      answer: 'We enforce stringent OSHA-compliant safety guidelines, recurring staff training routines, robotic safety sensors, and proactive environmental hazard monitoring.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section-wrapper">
      
      <div className="faq-header-container">
        <div className="faq-header-left">
          <div className="faq-badge">
            <img src={aboutLogo} alt="FAQ Badge" className="faq-badge-icon" />
            <span className="faq-badge-text">FAQS</span>
          </div>
          <h2 className="faq-main-title">
            <span className="faq-title-light">Frequently asked</span>
            <span className="faq-title-bold">questions</span>
          </h2>
        </div>

        <div className="faq-header-right">
          <Link to="/faqs" className="faq-all-btn">
            <span className="faq-btn-text">All FAQs</span>
            <span className="faq-btn-icon-wrapper">
              <img src={arrowUpRight} alt="Arrow" className="faq-btn-icon" />
            </span>
          </Link>
        </div>
      </div>     
      <div className="faq-content-container">
        
        <div className="faq-image-card">
          <img src={faqFactoryImg} alt="Industrial Facility" className="faq-img" />

          <div className="faq-contact-overlay">
            <div className="faq-contact-item faq-phone-item">
              <img src={phoneIcon} alt="Phone" className="faq-contact-icon" />
              <span className="faq-contact-text">+91 1236547890</span>
            </div>

            <div className="faq-contact-item faq-mail-item">
              <img src={mailIcon} alt="Mail" className="faq-contact-icon" />
              <span className="faq-contact-text">info@domainname.com</span>
            </div>
          </div>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <span className="faq-question-text">{faq.question}</span>
                  <img
                    src={arrowDownIcon}
                    alt="Toggle"
                    className={`faq-arrow-icon`}
                  />
                </div>

                {isOpen && (
                  <div className="faq-answer-row">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}