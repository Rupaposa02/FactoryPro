import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './ServiceDetails.css';

import arrowIcon from '../../assets/ServiceArrowUpRight.png';
import helpBg from '../../assets/HelpCardBg.jpg';
import helpLogo from '../../assets/HelpCardLogo.png';
import phoneIcon from '../../assets/Phone.png';
import mailIcon from '../../assets/FaqMail.png';
import robotMainImg from '../../assets/CustomRobotHero.png';
import featureIcon from '../../assets/FeatureIcon.png';

import icon1 from '../../assets/KeyFeatureIcon1.png';
import icon2 from '../../assets/EnhancedIcon2.png';
import icon3 from '../../assets/KeyFeatureIcon2.png';
import icon4 from '../../assets/KeyFeatureIcon3.png';

import planImg1 from '../../assets/WeldingRobot1.png';
import planImg2 from '../../assets/WeldingRobot2.png';
import checkIcon from '../../assets/AboutLogo.png';
import arrowDownIcon from '../../assets/ArrowDown.png';

export default function ServiceDetails() {

    const [activeFaq, setActiveFaq] = useState(1);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const serviceCategories = [
    { title: 'Custom Manufacturing Solution', path: '/services/custom-manufacturing', active: true },
    { title: 'Industrial Automation And Robotics', path: '/services/industrial-automation' },
    { title: 'Product Design And Prototyping', path: '/services/product-design' },
    { title: 'Equipment Maintenance Support', path: '/services/equipment-maintenance' },
    { title: 'Research And Development', path: '/services/research-development' },
  ];

  const features = [
    {
      id: 1,
      icon: icon1,
      title: 'Enhanced Efficiency',
      desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.'
    },
    {
      id: 2,
      icon: icon2,
      title: 'Enhanced Efficiency',
      desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.'
    },
    {
      id: 3,
      icon: icon3,
      title: 'Enhanced Efficiency',
      desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.'
    },
    {
      id: 4,
      icon: icon4,
      title: 'Enhanced Efficiency',
      desc: 'Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.'
    }
  ];

  const planningProperties = [
    { title: 'Needs Assessment' },
    { title: 'Timeline and Milestones' },
    { title: 'Feasibility and ROI' },
    { title: 'Technology Selection' },
    { title: 'Process Optimization' },
    { title: 'Scalability Planning' }
  ];


const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We provide specialized automation systems for aerospace, automotive, electronics, medical manufacturing, and heavy industrial assembly.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.'
    },
    {
      question: 'What sustainability practices do you follow?',
      answer: 'Our designs integrate high-efficiency servo drives, regenerative energy cycling, and minimized material waste algorithms.'
    },
    {
      question: 'Do you offer customized solutions?',
      answer: 'Yes, every robotics cell is customized from component tooling to software logic to address your facility’s exact layout.'
    },
    {
      question: 'How do you handle safety in the workplace?',
      answer: 'All equipment complies with strict ISO industrial robotics safety guidelines, featuring integrated light curtains and fail-safe sensors.'
    }
  ];
return (
  <section className="service-details-section">
    <div className="service-details-container">
      
      <aside className="service-sidebar-frame">
     
        <div className="service-category-box">
          <div className="service-category-header">
            <h3>Services Category</h3>
          </div>

          <ul className="service-category-items">
            <li className="category-row">
              <NavLink to="/services/custom-manufacturing" className="category-link">
                <span className="category-text text-custom">Custom Manufacturing Solution</span>
                <img src={arrowIcon} alt="arrow" className="category-arrow-icon" />
              </NavLink>
            </li>

            <li className="category-row">
              <NavLink to="/services/industrial-automation" className="category-link">
                <span className="category-text text-industrial">Industrial Automation And Robotics</span>
                <img src={arrowIcon} alt="arrow" className="category-arrow-icon" />
              </NavLink>
            </li>

            <li className="category-row">
              <NavLink to="/services/product-design" className="category-link">
                <span className="category-text text-product">Product Design And Prototyping</span>
                <img src={arrowIcon} alt="arrow" className="category-arrow-icon" />
              </NavLink>
            </li>

            <li className="category-row">
              <NavLink to="/services/equipment-maintenance" className="category-link">
                <span className="category-text text-equipment">Equipment Maintenance Support</span>
                <img src={arrowIcon} alt="arrow" className="category-arrow-icon" />
              </NavLink>
            </li>

            <li className="category-row last-row">
              <NavLink to="/services/research-development" className="category-link">
                <span className="category-text text-research">Research And Development</span>
                <img src={arrowIcon} alt="arrow" className="category-arrow-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
  
          <div 
            className="need-help-box" 
            style={{ backgroundImage: `url(${helpBg})` }}
          >
            <div className="need-help-backdrop-overlay" />
            
            <div className="need-help-content-layer">
             
              <div className="need-help-brand-logo">
                <img src={helpLogo} alt="Toplax Logo" className="help-brand-img" />
              </div>
              <h3 className="need-help-h3">
                Need <span className="highlight-text">help?</span>
              </h3>
              <p className="need-help-desc">
                Speak directly with an automation engineer to evaluate your line specifications.
              </p>

              
              <div className="need-help-actions">
                <a href="tel:+01123456789" className="need-help-contact-item">
                  <div className="contact-icon-glass">
                    <img src={phoneIcon} alt="Phone" />
                  </div>
                  <span className="contact-value">+1 840 841 256</span>
                </a>

                <a href="mailto:info@domainname.com" className="need-help-contact-item">
                  <div className="contact-icon-glass">
                    <img src={mailIcon} alt="Email" />
                  </div>
                  <span className="contact-value">info@domain.com</span>
                </a>
              </div>
            </div>
          </div>

        </aside>

        
        <main className="service-main-content">
          
          <div className="service-main-banner-card">
            <img 
              src={robotMainImg} 
              alt="Automated Robotics in Manufacturing" 
              className="robot-hero-img" 
            />
          </div>

          <p className="service-first-paragraph">
            Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential,overcome challenges, and achieve sustainable growth. 
            We provide tailored strategies and expert insights to improveleadership skills, enhance team performance, and streamline business operations. Whether you’re launching astartup or scaling an established business, 
            our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you
            toward building a thriving, purpose-driven enterprise.
          </p>

          <p className="service-second-paragraph">
            Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. 
            With a collaborative approach, we empower you to make confident decisions and build a sustainable,thriving business.
          </p>

          <div className="service-why-choose-block">
           
            <h2 className="why-choose-h2">
              <span className="h2-light">Why choose </span>
              <span className="h2-bold">robotics services</span>
            </h2>

            <p className="why-choose-desc">
              Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable, thriving business.
            </p>

 
            <div className="why-choose-2x2-grid">
              {features.map((item) => (
                <div key={item.id} className="why-choose-card">
                 
                  <div className="wc-icon-wrap">
                    <img src={item.icon} alt={item.title} className="wc-icon-img" />
                  </div>

                  
                  <h3 className="wc-card-title">{item.title}</h3>

                 
                  <p className="wc-card-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-planning-block">
           
            <h2 className="planning-h2">
              <span className="plan-light">Planning & </span>
              <span className="plan-bold">strategy</span>
            </h2>

            <p className="planning-desc">
              Our industrial Automation and robotic assembling and strategy services focus on designing robotics automation solutions that align with your business goals.
            </p>

            <div className="planning-properties-grid">
              {planningProperties.map((prop, idx) => (
                <div key={idx} className="planning-prop-item">
                  <img src={featureIcon} alt="Checkmark" className="planning-prop-icon" />
                  <span className="planning-prop-text">{prop.title}</span>
                </div>
              ))}
            </div>

            <div className="planning-images-row">
              <div className="plan-img-card">
                <img src={planImg1} alt="Robotic welding assembly" className="plan-img" />
              </div>
              <div className="plan-img-card">
                <img src={planImg2} alt="Multi-axis robotic arms" className="plan-img" />
              </div>
            </div>
          </div>
          <div className="service-faq-block">
          
            <h2 className="faq-h2">
              <span className="faq-light">Frequently asked </span>
              <span className="faq-bold">questions</span>
            </h2>

            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className={`faq-item-card ${isOpen ? 'active-orange' : ''}`}
                  >
                    <button 
                      type="button" 
                      className="faq-question-btn" 
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="faq-q-text">{faq.question}</span>
                      <img 
                        src={arrowDownIcon} 
                        alt="Toggle" 
                        className={`faq-toggle-arrow ${isOpen ? 'rotated' : ''}`} 
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer-drawer">
                        <p className="faq-a-text">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </main>

      </div>
    </section>
  );
}