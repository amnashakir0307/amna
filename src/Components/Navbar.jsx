import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isArabic]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (targetId) => {
    setIsOpen(false);
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
    }}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .ticker-wrap {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
          }
          .ticker-move {
            display: inline-block;
            animation: marquee 25s linear infinite;
          }
          .ticker-move span {
            display: inline-block;
            padding-right: 50px;
          }
          .mobile-hamburger {
            display: none;
            background: none;
            border: none;
            color: #ffffff;
            font-size: 24px;
            cursor: pointer;
          }
          .desktop-contact-btn {
            display: inline-block;
          }
          .nav-link-item {
            position: relative;
            text-decoration: none;
            color: #222;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding-bottom: 4px;
            cursor: pointer;
            background: none;
            border: none;
            font-family: inherit;
          }
          .nav-link-item::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: -6px;
            left: 0;
            background-color: #8b0b0b;
            transition: width 0.3s ease-in-out;
          }
          .nav-link-item:hover::after,
          .nav-link-item.active::after {
            width: 100%;
          }

          .action-btn {
            background-color: #8b0b0b;
            color: #fff;
            border: 2px solid #8b0b0b;
            padding: 8px 18px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .action-btn:hover {
            background-color: #ffffff;
            color: #8b0b0b;
            border-color: #8b0b0b;
          }

          @media screen and (max-width: 960px) {
            .desktop-menu { display: none !important; }
            .mobile-hamburger { display: block !important; }
            .desktop-contact-btn { display: none !important; }
          }
        `}
      </style>

      {/* Red Ticker Bar */}
      <div style={{
        backgroundColor: '#8b0b0b',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: '600',
        height: showTopBar ? '34px' : '0px',
        lineHeight: '34px',
        overflow: 'hidden',
        opacity: showTopBar ? 1 : 0,
        transition: 'height 0.3s ease, opacity 0.3s ease',
        boxSizing: 'border-box',
        direction: isArabic ? 'rtl' : 'ltr'
      }}>
        <div className="ticker-wrap">
          <div className="ticker-move">
            <span>{t('welcomeText')}</span>
            <span>{t('welcomeText')}</span>
          </div>
        </div>
      </div>

      {/* Black Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 5%',
        backgroundColor: '#111111',
        color: '#ffffff',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', background: '#222', width: '32px', height: '32px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FaFacebookF /></a>
          <a href="https://www.instagram.com/alsaqar_spare_parts?utm_source=qr&stkn=MXdicjBicnh6anJ5Mw==" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', background: '#222', width: '32px', height: '32px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', background: '#222', width: '32px', height: '32px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FaTiktok /></a>
        </div>

        {/* Modern Al-Saqar Branding */}
        <div style={{
          fontSize: '20px',
          fontWeight: '800',
          letterSpacing: '2px',
          color: '#ffffff',
          textTransform: 'none'
        }}>
          Al-Saqar
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            onClick={toggleLanguage} 
            className="action-btn"
            style={{ padding: '6px 12px', fontSize: '12px' }}
          >
            {isArabic ? 'English' : 'العربية'}
          </button>
          
          <div className="desktop-contact-btn">
            <button onClick={() => scrollToSection('contact')} className="action-btn">
              {t('contact')}
            </button>
          </div>

          <button className="mobile-hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav style={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 5%', borderBottom: '2px solid #f0f0f0', position: 'relative' }}>
        <ul className="desktop-menu" style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', margin: 0, padding: '16px 0', direction: isArabic ? 'rtl' : 'ltr' }}>
          {[
            { name: t('home'), target: 'hero' },
            { name: t('about'), target: 'about' },
            { name: t('whyUs'), target: 'why-us' },
            { name: t('location'), target: 'location' },
            { name: t('contact'), target: 'contact' }
          ].map((item, index) => (
            <li key={index}>
              <button 
                onClick={() => scrollToSection(item.target)} 
                className={`nav-link-item ${activeSection === item.target ? 'active' : ''}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {isOpen && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: '#111111', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', padding: '20px 0', margin: 0, gap: '15px', zIndex: 1100, textAlign: 'center' }}>
            {[
              { name: t('home'), target: 'hero' },
              { name: t('about'), target: 'about' },
              { name: t('whyUs'), target: 'why-us' },
              { name: t('location'), target: 'location' },
              { name: t('contact'), target: 'contact' }
            ].map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => scrollToSection(item.target)} 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none', color: activeSection === item.target ? '#8b0b0b' : '#ffffff', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;