import React from 'react';
import ContactHero from '../../components/Contact/ContactHero';
import ContactForm from '../../components/Contact/ContactForm';
import MapSection from '../../components/Contact/MapSection';
import Footer from '../../components/Home/Footer';

export default function Contact(){
    return(
        <div className="contact-page">

            <ContactHero/>
            <ContactForm/>
            <MapSection/>
            <Footer/>
        </div>
    )
}