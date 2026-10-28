import React from 'react';
import ProjectHero from '../../components/Projects/ProjectHero';
import ProjectGrid from '../../components/Projects/ProjectGrid';
import Footer from '../../components/Home/Footer';

export default function Project() {
  return (
    <div className="project-page">
      <ProjectHero />
      <ProjectGrid/>
      <Footer />
    </div>
  );
}