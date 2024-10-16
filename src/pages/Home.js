// src/pages/Home.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import usa from '../assets/usa.png'
import uk from '../assets/uk.png'
import canada from '../assets/canada.png'
import australia from '../assets/australia.png'
import newZealand from '../assets/newZealand.png'
import ireland from '../assets/ireland.png'

// import USAcountry from '../countries/USAcountry'
// import UKcountry from '../countries/UKcountry'
// import CanadaCountry from '../countries/CanadaCountry'
// import IrelandCountry from '../countries/IrelandCountry'
// import NewzealandCountry from '../countries/NewzealandCountry'
// import AustraliaCountry from '../countries/AustraliaCountry'

const countries = [
  { name: 'USA', description: 'Guidance for studying in top universities in the USA.',backgroundImage: `${usa}`,to:'/usa' },
  { name: 'UK', description: 'Comprehensive support for education in the UK.',backgroundImage: `${uk}`,to:'/uk' },
  { name: 'Canada', description: 'Helping students secure a future in Canada’s educational institutions.',backgroundImage: `${canada}`,to:'/canada' },
  { name: 'New Zealand', description: 'Complete assistance for studying in New Zealand.',backgroundImage: `${newZealand}`,to:'/newzealand' },
  { name: 'Ireland', description: 'Services for students aiming to study in Ireland.',backgroundImage: `${ireland}`,to:'/ireland' },
  { name: 'Australia', description: 'Expert consulting for Australian universities.',backgroundImage: `${australia}`,to:'/australia' },
];


const Home = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the #about section if the URL contains #about
    if (location.hash === '#services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }
    }
  }, [location]);
  return (
    <div className="bg-white py-12 min-h-screen" id='home'>
      <div className="container mx-auto my-4">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to World Wide Education</h2>
        <p className="mt-4 text-lg text-gray-600">
          Your one-stop solution for studying abroad in countries like the USA, UK, Canada, Australia, Ireland, and New Zealand.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <Link to={country.to}>
          <div key={index} className="border p-6 rounded-lg shadow-lg bg-white min-h-60 hover:scale-105 duration-1000" style={{
            backgroundImage:`url(${country.backgroundImage})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            
           
          }}>
            <h3 className="text-2xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">{country.name}</h3>
            <h5 className="mt-4 text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.9)]">{country.description}</h5>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
