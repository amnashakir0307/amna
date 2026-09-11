import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaWhatsapp, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/hero1.jpeg', titleKey: 'heroSlide1Title', descKey: 'heroSlide1Desc' },
    { image: '/hero2.jpeg', titleKey: 'heroSlide2Title', descKey: 'heroSlide2Desc' },
    { image: '/hero3.jpeg', titleKey: 'heroSlide3Title', descKey: 'heroSlide3Desc' },
    { image: '/hero4.jpeg', titleKey: 'heroSlide4Title', descKey: 'heroSlide4Desc' }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Check current language direction (RTL for Arabic)
  const isRTL = i18n.language === 'ar';

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '85vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      direction: isRTL ? 'rtl' : 'ltr',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      
      {/* Background Animated Slider using AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
      </AnimatePresence>

      {/* Left Arrow */}
      <button onClick={prevSlide} style={{
        position: 'absolute',
        left: isRTL ? 'auto' : '20px',
        right: isRTL ? '20px' : 'auto',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 3,
        transition: 'background 0.3s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b0b0b'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
      >
        {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Right Arrow */}
      <button onClick={nextSlide} style={{
        position: 'absolute',
        right: isRTL ? 'auto' : '20px',
        left: isRTL ? '20px' : 'auto',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 3,
        transition: 'background 0.3s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b0b0b'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
      >
        {isRTL ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Content Box with Animation */}
      <div style={{
        maxWidth: '900px',
        textAlign: 'center',
        color: '#ffffff',
        zIndex: 2,
        padding: '60px 20px'
      }}>
        
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(139, 11, 11, 0.85)',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '30px',
            marginBottom: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}>
            <FaShieldAlt style={{ fontSize: '14px' }} /> 100% Genuine Auto Components
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 50px)',
            fontWeight: '900',
            textTransform: 'uppercase',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            {t(slides[currentSlide].titleKey)}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: '#e0e0e0',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 35px auto',
            fontWeight: '400'
          }}>
            {t(slides[currentSlide].descKey)}
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              backgroundColor: '#8b0b0b',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(139, 11, 11, 0.4)'
            }}>
              {t('getQuote')} <FaArrowRight style={{ fontSize: '12px' }} />
            </Link>

            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}>
              <FaWhatsapp style={{ fontSize: '18px' }} /> {t('quickWhatsApp')}
            </a>
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '25px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentSlide === index ? '#8b0b0b' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.3s'
              }}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Hero;