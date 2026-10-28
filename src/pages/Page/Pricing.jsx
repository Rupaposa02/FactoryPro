import React from 'react';
import PricingHero from '../../components/Page/PricingHero';
import PricingCards from '../../components/Page/PricingCards';
import WhatWeDo from '../../components/Home/WhatWeDo';
import ClientReviews from '../../components/Home/ClientReviews';
import Footer from '../../components/Home/Footer';

export default function Pricing(){
    return(
        <div className="pricing-page">

        <PricingHero/>
        <PricingCards/>
        <WhatWeDo/>
        <ClientReviews/>
        <Footer/>
        </div>
    )
}