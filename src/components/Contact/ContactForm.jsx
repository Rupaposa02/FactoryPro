import React, { useState } from 'react';
import './ContactForm.css';

import tagIcon from '../../assets/AboutLogo.png';
import phoneIcon from '../../assets/Phone.png';
import mailIcon from '../../assets/FaqMail.png';
import addressIcon from '../../assets/Location.png';
import factorySketch from '../../assets/FooterBackground.png';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log('Form Submitted successfully without page refresh:', formData);
    setIsSubmitted(true);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="contact-form-section">

      <img src={factorySketch} alt="" className="cfs-bg-sketch" />

      <div className="contact-form-container">

        <div className="cfs-left-column">
          <div className="cfs-tag-row">
            <img src={tagIcon} alt="" className="cfs-tag-icon" />
            <span className="cfs-tag-label">CONTACT US</span>
          </div>

          <h2 className="cfs-heading">
            Get in touch <span className="cfs-heading-bold">with us</span>
          </h2>

          <p className="cfs-description">
            Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.
          </p>
          <div className="cfs-info-list">
        
            <div className="cfs-info-item">
              <div className="cfs-icon-box">
                <img src={phoneIcon} alt="phone" />
              </div>
              <div className="cfs-info-meta">
                <h4 className="cfs-meta-title">Contact</h4>
                <p className="cfs-meta-value">+1.809.120.670</p>
              </div>
            </div>

            
            <div className="cfs-info-item">
              <div className="cfs-icon-box">
                <img src={mailIcon} alt="email" />
              </div>
              <div className="cfs-info-meta">
                <h4 className="cfs-meta-title">E-mail</h4>
                <p className="cfs-meta-value">info@domainname.com</p>
              </div>
            </div>

    
            <div className="cfs-info-item address-item">
              <div className="cfs-icon-box">
                <img src={addressIcon} alt="address" />
              </div>
              <div className="cfs-info-meta">
                <h4 className="cfs-meta-title">Our Address</h4>
                <p className="cfs-meta-value">37 San Juan Lane Graaf Florisstraat 22A, 3021 CH</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cfs-right-card">
          <h3 className="cfs-card-title">
            Contact <span className="cfs-card-title-bold">me</span>
          </h3>

          <form 
            className="cfs-form" 
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <div className="cfs-form-row-split">
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cfs-form-row">
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cfs-form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone no."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="cfs-form-row">
              <textarea
                name="message"
                placeholder="Write Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="cfs-submit-btn"
              onClick={(e) => {

                if (formData.firstName && formData.lastName && formData.email && formData.message) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            >
              Submit Message
            </button>

            {isSubmitted && (
              <p style={{ color: '#28a745', fontSize: '14px', marginTop: '12px', fontWeight: '600' }}>
                Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}