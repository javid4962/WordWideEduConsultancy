// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import wwec from '../assets/wwec1.png'
import usa from '../assets/usa.png'
import uk from '../assets/uk.png'
import canada from '../assets/canada.png'
import australia from '../assets/australia.png'
import newZealand from '../assets/newZealand.png'
import ireland from '../assets/ireland.png'


const Hero = () => {
  // Array of objects with text and corresponding background images
  const slides = [
    {
      text: '',
      backgroundImage: `url(${wwec})`, 
    },
    {
      text: 'Your Gateway to Global Education',
      backgroundImage: `url(${usa})`, 
    },
    {
      text: 'Study Abroad in USA, UK, Canada, Australia, Ireland, and New Zealand',
      backgroundImage: `url(${uk})`,
    },
    {
      text: 'Helping Students Fulfill Their Study Abroad Dreams',
      backgroundImage: `url(${canada})`,
    },
    {
      text: 'Expert Guidance for Your Overseas Education Journey',
      backgroundImage: `url(${australia})`,
    },
    {
      text: 'Invites Highly Motivated Entrepreneurs and Companies',
      backgroundImage: `url(${newZealand})`,
    },
    {
      text: 'We are looking for Associates and franchisees to be part of our dream',
      backgroundImage: `url(${ireland})`,
    },
  ];

  // State to track the current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect to rotate the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="bg-cover bg-center py-20 transition-all duration-1000 "
      style={{
        backgroundImage: slides[currentSlideIndex].backgroundImage,
        backgroundSize:'cover',
        minHeight:'90vh'
      }}
    >
      <div className="container mx-auto text-center">
        {/* Carousel Text */}
        <h1 className="text-3xl font-bold text-white transition-opacity duration-1000 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] leading-none sm:text-5xl">
          {slides[currentSlideIndex].text}
        </h1>
        <p className="mt-4 text-xl text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.3)] leading-5">
          Offering expert guidance for students in their academic journey.
        </p>
        {/* <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-gray-600  ">
          <a href={'#home'} className='transition-all duration-1000'>Get Started</a>
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
