import React from 'react';
import { Link } from 'react-router-dom';
import './OurTeam.css';
import aboutLogo from '../../assets/AboutLogo.png';
import arrowUpRight from '../../assets/ArrowUpRight.png';
import team1 from '../../assets/team-1.png';
import team2 from '../../assets/team-2.png';
import team3 from '../../assets/team-3.png';
import team4 from '../../assets/team-4.png';

export default function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      image: team1,
      name: 'Ronald Richards',
      role: 'Manufacturing Executive',
    },
    {
      id: 2,
      image: team2,
      name: 'Brooklyn Simmons',
      role: 'Industrial Engineer',
    },
    {
      id: 3,
      image: team3,
      name: 'Cameron Williamson',
      role: 'Production Supervisor',
    },
    {
      id: 4,
      image: team4,
      name: 'Darlene Robertson',
      role: 'Manufacturing Executive',
    },
  ];

  return (
    <section className="ot-section-wrapper">
      
      <div className="ot-header-container">
        <div className="ot-header-left">
          <div className="ot-badge">
            <img src={aboutLogo} alt="Team Badge" className="ot-badge-icon" />
            <span className="ot-badge-text">OUR TEAM</span>
          </div>
          <h2 className="ot-main-title">
            <span className="ot-title-light">Core strengths in</span>
            <span className="ot-title-bold">industrial innovation</span>
          </h2>
        </div>

        <div className="ot-header-right">
          <Link to="/team" className="ot-all-members-btn">
            <span className="ot-btn-text">All Member</span>
            <span className="ot-btn-icon-wrapper">
              <img src={arrowUpRight} alt="Arrow" className="ot-btn-icon" />
            </span>
          </Link>
        </div>
      </div>

      <div className="ot-cards-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="ot-card">
            <div className="ot-image-box">
              <img src={member.image} alt={member.name} className="ot-member-img" />
            </div>
            <div className="ot-info-box">
              <h3 className="ot-member-name">{member.name}</h3>
              <p className="ot-member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}