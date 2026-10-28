import React, { useState } from 'react';
import './ProjectGrid.css';

import img1 from '../../assets/WorkImage1.png';
import img2 from '../../assets/WorkImage2.png';
import img3 from '../../assets/WorkImage3.png';
import img4 from '../../assets/WorkImage4.png';
import img5 from '../../assets/CustomRobotHero.png'; 
import img6 from '../../assets/StoryMainImage.png'; 

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Automation',
    'Development',
    'Infrastructure',
    'Manufacturing',
    'Sustainability'
  ];

  const projects = [
    {
      id: 1,
      image: img1,
      tag: 'Development',
      tagWidth: '122.16px',
      title: 'Total Quality Management Implementation',
      category: 'Development'
    },
    {
      id: 2,
      image: img2,
      tag: 'Automation',
      tagWidth: '110.77px',
      title: 'Advanced Research In Material Science',
      category: 'Automation'
    },
    {
      id: 3,
      image: img3,
      tag: 'Infrastructure',
      tagWidth: '127.06px',
      title: 'Workplace Safety Enhancement Initiative',
      category: 'Infrastructure'
    },
    {
      id: 4,
      image: img4,
      tag: 'Infrastructure',
      tagWidth: '127.06px',
      title: 'Robotic Process Automation Deployment',
      category: 'Infrastructure'
    },
    {
      id: 5,
      image: img5,
      tag: 'Development',
      tagWidth: '122.16px',
      title: 'Energy-Efficient Manufacturing Systems',
      category: 'Development'
    },
    {
      id: 6,
      image: img6,
      tag: 'Development',
      tagWidth: '122.16px',
      title: 'Redesigning Factory Layouts For Efficiency',
      category: 'Development'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="project-grid-section">
      <div className="project-grid-container">

        <nav className="project-filter-bar">
          {categories.map((cat, index) => {
            const isActive = selectedCategory === cat;
            return (
              <React.Fragment key={cat}>
                <button
                  type="button"
                  className={`filter-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
               {cat === 'Sustainability' && <span className="category-dot">• </span>}
          {cat}
        </button>
        {index < categories.length - 1 && (
          <span className="filter-divider">/</span>
        )}   
              </React.Fragment>
            );
          })}
        </nav>

        <div className="project-cards-layout">
          {filteredProjects.map((item) => (
            <article key={item.id} className="project-card-box">
              <div className="project-card-img-wrap">
                <img src={item.image} alt={item.title} className="project-card-image" />
                
                <span 
                  className="project-card-tag" 
                  style={{ width: item.tagWidth }}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="project-card-title">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}