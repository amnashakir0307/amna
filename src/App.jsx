import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Deal from './Components/Deal';
import Hero from './Components/Hero';
import About from './Components/About';
import WH from './Components/WHY';
import Order from './Components/Order';
import FAQ from './Components/FAQ';
import State from './Components/State';
import Ai from './Components/Ai';
import LCS from './Components/LCS';
import Orderform from './Components/Orderform';
import Banner from './Components/Banner';

const Home = () => {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="state"><State /></div>
      <div id="about"><About /></div>
     
      <div id="why-us"><WH /></div>
       <div id="Banner"><Banner /> </div>
      <div id="ai"><Ai /></div>
      <div id="faq"><FAQ /></div>
    
      <div id="deal"><Deal /></div>
      <div id="order-form"><Orderform /></div>
      <div id="contact"><Order /></div>
         <div id="location"><LCS /></div>
    </>
  );
};

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;