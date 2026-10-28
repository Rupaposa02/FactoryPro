import React from 'react';
import './MapSection.css';
import mapImage from '../../assets/ContactMap.png';

export default function MapSection({ interactive = false }) {
  return (
    <section className="factory-map-section">
      {interactive ? (
        <iframe
          title="Factory Location Map"
          className="factory-map-frame"
          src="https://maps.google.com/maps?q=lastminute.com%20London%20Eye,%20Riverside%20Building,%20County%20Hall,%20London%20SE1%207PB&t=&z=14&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <img 
          src={mapImage} 
          alt="Location Map - London Eye" 
          className="factory-map-image"
        />
      )}
    </section>
  );
}