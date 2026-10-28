import React from 'react';


import AboutHero from '../../components/About/AboutHero';
import AboutSection from '../../components/Home/About';
import OurApproach from '../../components/About/OurApproach';
import OurHistory from '../../components/About/OurHistory';
import WhatWeDo from '../../components/Home/WhatWeDo';
import KeyFeatures from '../../components/About/KeyFeatures';
import OurProcess from '../../components/Home/OurProcess';
import OurTeam from '../../components/About/OurTeam';
import ClientReviews from '../../components/Home/ClientReviews';
import FaqSection from '../../components/About/FaqSection';
import Footer from '../../components/Home/Footer';
export default function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutSection/>
      <OurApproach/>
      <OurHistory/>
      <WhatWeDo/>
      <KeyFeatures/>
      <OurProcess/>
      <OurTeam/>
      <ClientReviews />
      <FaqSection/>
      <Footer />
    </div>
  );
}