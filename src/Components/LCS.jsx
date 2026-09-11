import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const LocationContactSection = () => {
  const { t } = useTranslation();

  return (
    <section style={{
      width: '100%',
      backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop")', // FAQ/Contact background image style reference
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      padding: '70px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxSizing: 'border-box',
      borderTop: '1px solid #eaeaea'
    }}>
      {/* Light overlay for UI readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        zIndex: 1
      }}></div>

      <div style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Section Heading */}
        <h2 style={{
          fontSize: 'clamp(26px, 3.5vw, 36px)',
          fontWeight: '900',
          color: '#111111',
          textTransform: 'uppercase',
          textAlign: 'center',
          letterSpacing: '0.5px',
          marginBottom: '45px'
        }}>
          {t('getInTouchTitlePart1')} <span style={{ color: '#d32f2f' }}>{t('getInTouchTitlePart2')}</span>
        </h2>

        {/* Main Centered Grid Container */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '30px'
        }}>
          
          {/* Left Side: Interactive Map */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '540px',
            backgroundColor: '#ffffff',
            padding: '12px',
            borderRadius: '16px',
            border: '1px solid #eaeaea',
            boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
            boxSizing: 'border-box'
          }}>
            <div style={{ width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2882998687747!2d39.8262!3d21.3891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDIzJzIwLjgiTiAz!5e0!3m2!1sen!2ssa!4v1710000000000!5m2!1sen!2ssa" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Company Details & Contact Info */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '540px',
            backgroundColor: '#ffffff',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid #eaeaea',
            boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#111111',
                textTransform: 'uppercase',
                marginBottom: '22px',
                letterSpacing: '0.5px'
              }}>
                {t('visitOurOffice')}
              </h3>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={iconBoxStyle}>
                    <FaMapMarkerAlt color="#d32f2f" size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: '#666666', textTransform: 'uppercase', marginBottom: '3px', fontWeight: '700' }}>
                      {t('addressLabel')}
                    </strong>
                    <span style={{ fontSize: '15px', color: '#222222', fontWeight: '600', lineHeight: '1.5' }}>
                      {t('addressValue')}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={iconBoxStyle}>
                    <FaPhoneAlt color="#d32f2f" size={17} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: '#666666', textTransform: 'uppercase', marginBottom: '3px', fontWeight: '700' }}>
                      {t('phoneLabel')}
                    </strong>
                    <span style={{ fontSize: '15px', color: '#222222', fontWeight: '600' }}>
                      +966 50 274 8270
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={iconBoxStyle}>
                    <FaEnvelope color="#d32f2f" size={17} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: '#666666', textTransform: 'uppercase', marginBottom: '3px', fontWeight: '700' }}>
                      {t('emailLabel')}
                    </strong>
                    <span style={{ fontSize: '15px', color: '#222222', fontWeight: '600' }}>
                      saqrcompany4@gmail.com
                    </span>
                  </div>
                </div>

                {/* Timings */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={iconBoxStyle}>
                    <FaClock color="#d32f2f" size={17} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: '#666666', textTransform: 'uppercase', marginBottom: '3px', fontWeight: '700' }}>
                      {t('storeTimingsLabel')}
                    </strong>
                    <span style={{ fontSize: '15px', color: '#222222', fontWeight: '600', display: 'block', marginBottom: '4px' }}>
                      {t('storeTimingsValue')}
                    </span>
                    <span style={{ fontSize: '14px', color: '#d32f2f', fontWeight: '700' }}>
                      {t('fridayOff')}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Button for WhatsApp */}
            <div style={{ marginTop: '30px' }}>
              <a 
                href="https://wa.me/923192608796" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  padding: '14px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  transition: 'background 0.2s'
                }}
              >
                <FaWhatsapp size={20} color="#25D366" /> {t('connectWhatsApp')}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

// Reusable Icon Box Style
const iconBoxStyle = {
  width: '42px',
  height: '42px',
  minWidth: '42px',
  borderRadius: '50%',
  backgroundColor: '#ffebee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2px'
};

export default LocationContactSection;
