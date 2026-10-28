import React from 'react';
import './OurStory.css';

import aboutLogo from '../../assets/AboutLogo.png';
import topImg1 from '../../assets/StoryTopImage1.png';
import topImg2 from '../../assets/StoryTopImage2.png';
import mainImg from '../../assets/StoryMainImage.png';
import avatar1 from '../../assets/Avatar1.png';
import avatar2 from '../../assets/Avatar2.png';
import avatar3 from '../../assets/Avatar3.png';
import playIcon from '../../assets/PlayIcon.png';

export default function OurStory() {
  return (
    <section className="our-story-container">
      <div className="our-story-wrapper">
        <div className="story-top-row">
          <div className="story-header-text">
            <div className="story-tagline">
              <img src={aboutLogo} alt="badge" className="story-tag-icon" />
              <span>OUR STORY</span>
            </div>
            <h2 className="story-heading">
              <span className="heading-light">Transforming industries</span>
              <span className="heading-bold">with innovative efficient solutions</span>
            </h2>
          </div>

          <div className="story-top-images">
            <div className="top-img-box">
              <img src={topImg1} alt="Engineers walking in industrial facility" />
            </div>
            <div className="top-img-box">
              <img src={topImg2} alt="Technician on assembly conveyor" />
            </div>
          </div>
        </div>

        <div className="story-bottom-row">
          <div className="story-main-img-box">
            <img src={mainImg} alt="Technicians welding industrial pipe" />
          </div>
          <div className="story-content-side">
            <p className="story-paragraph">
              We specialize in revolutionizing industries by delivering innovative, efficient
              solutions that enhance productivity and streamline processes. Through advanced
              technologies, precision engineering, and sustainable practices.
            </p>

            <div className="story-stats-grid">
              <div className="story-stat-card">
                <h3>10k+</h3>
                <p>Completed Project</p>
              </div>
              <div className="story-stat-card">
                <h3>15+</h3>
                <p>Satisfied Customer</p>
              </div>
              <div className="story-stat-card">
                <h3>10k+</h3>
                <p>Year Of Mastery</p>
              </div>
            </div>

            <div className="story-action-row">
              <div className="avatar-cluster">
                <img src={avatar1} alt="Client 1" className="avatar-img" />
                <img src={avatar2} alt="Client 2" className="avatar-img" />
                <img src={avatar3} alt="Client 3" className="avatar-img" />
              </div>

              <div className="watch-intro-btn">
                <img src={playIcon} alt="Play" className="play-icon" />
                <span>WATCH INTRO</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}