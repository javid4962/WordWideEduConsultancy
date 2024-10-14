// src/pages/About.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the #about section if the URL contains #about
    if (location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }
    }
  }, [location]);

  return (
    <div className="container mx-auto py-12 min-h-screen" id='about'>
      <h2 className="text-4xl font-bold text-gray-800 mb-6" >About Us</h2>
      <p className="text-lg text-gray-600">
        World Wide Education has been helping students achieve their dreams of studying abroad since 2009. Our goal is to provide expert guidance and support for students who wish to study in the USA, UK, Canada, Australia, Ireland, and New Zealand.
      </p>
      <div id="about" className="mt-12">
        <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
        <p className="text-lg text-gray-600 mt-4">
          Our mission is to provide students with expert guidance and support for their education abroad...
        </p>
      </div>
    </div>
  );
};

export default About;
