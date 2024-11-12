// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Tests from './pages/Tests/Tests';
import Hero from './components/Hero';


import USAcountry from './countries/USAcountry'
import UKcountry from './countries/UKcountry'
import CanadaCountry from './countries/CanadaCountry'
import IrelandCountry from './countries/IrelandCountry'
import NewzealandCountry from './countries/NewzealandCountry'
import AustraliaCountry from './countries/AustraliaCountry'
import Management from './pages/About/Management';
import Association from './pages/About/Association';
import Vision from './pages/About/Vision';
import GRE from './pages/Tests/GRE';
import GMAT from './pages/Tests/GMAT';
import SAT from './pages/Tests/SAT';
import TOEFL from './pages/Tests/TOEFL';
import IELTS from './pages/Tests/IELTS';

function App() {
  return (
    <Router>
      <div className='min-w-screen '>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/about/association" element={<Association />} />
          <Route path="/about/vision" element={<Vision />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/tests" element={<Tests />} />
          <Route path="/tests/GRE" element={<GRE />} />
          <Route path="/tests/GMAT" element={<GMAT />} />
          <Route path="/tests/SAT" element={<SAT />} />
          <Route path="/tests/TOEFL" element={<TOEFL />} />
          <Route path="/tests/IELTS" element={<IELTS />} />

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
