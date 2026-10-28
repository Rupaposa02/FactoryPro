import React from 'react';
import CustomHero from '../../components/CustomServices/CustomHero';
import ServiceDetails from '../../components/CustomServices/ServiceDetails'
import Footer from '../../components/Home/Footer';


export default function CustomSolution() {
  return (
    <div className="custom-solution-page">
      
      <CustomHero />
      <ServiceDetails/>

      
      <Footer />
    </div>
  );
}