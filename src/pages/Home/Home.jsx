import React from 'react';
import Navbar from '../../components/Home/Navbar';
import HomeHero from '../../components/Home/HomeHero';
import About from '../../components/Home/About';
import Service from '../../components/Home/Service';
import OurStory from '../../components/Home/OurStory';
import WhatWeDo from '../../components/Home/WhatWeDo';
import OurWork from '../../components/Home/OurWork';
import OurProcess from '../../components/Home/OurProcess';
import Pricing from '../../components/Home/Pricing';
import ClientReviews from '../../components/Home/ClientReviews';
import LatestBlog from '../../components/Home/LatestBlog';
import Footer from '../../components/Home/Footer';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HomeHero />
      <About />
      <Service />
      <OurStory />
      <WhatWeDo />
      <OurWork />
      <OurProcess />
      <Pricing />
      <ClientReviews />
      <LatestBlog />
      <Footer />
    </div>
  );
}