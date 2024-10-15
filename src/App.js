// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Hero from './components/Hero';

import USAcountry from './countries/USAcountry'
import UKcountry from './countries/UKcountry'
import CanadaCountry from './countries/CanadaCountry'
import IrelandCountry from './countries/IrelandCountry'
import NewzealandCountry from './countries/NewzealandCountry'
import AustraliaCountry from './countries/AustraliaCountry'

function App() {
  return (
    <Router>
      <div className='min-w-screen'>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usa" element={<USAcountry />} />
          <Route path="/uk" element={<UKcountry />} />
          <Route path="/canada" element={<CanadaCountry />} />
          <Route path="/australia" element={<AustraliaCountry />} />
          <Route path="/newzealand" element={<NewzealandCountry />} />
          <Route path="/ireland" element={<IrelandCountry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
