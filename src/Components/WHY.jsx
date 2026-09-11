import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaCarSide, FaSearch, FaTags } from 'react-icons/fa';

const WhyChooseUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    { 
      icon: <FaCheckCircle />, 
      title: t('feature1Title'), 
      desc: t('feature1Desc') 
    },
    { 
      icon: <FaCarSide />, 
      title: t('feature2Title'), 
      desc: t('feature2Desc') 
    },
    { 
      icon: <FaSearch />, 
      title: t('feature3Title'), 
      desc: t('feature3Desc') 
    },
    { 
      icon: <FaTags />, 
      title: t('feature4Title'), 
      desc: t('feature4Desc') 
    }
  ];

  return (
    <section style={{
      backgroundColor: '#ffffff',
      color: '#111111',
      padding: '40px 3%',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      borderBottom: '1px solid #eaeaea',
      overflow: 'hidden',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#111111',
            margin: 0
          }}>
            {isRTL ? (
              <>
                {t('whyChooseUsTitle')} <span style={{ color: '#d32f2f' }}>{t('whyChooseUsTitleSpan')}</span>
              </>
            ) : (
              <>
                {t('whyChooseUsTitle')} <span style={{ color: '#d32f2f' }}>{t('whyChooseUsTitleSpan')}</span>
              </>
            )}
          </h2>
          <div style={{
            width: '40px',
            height: '2.5px',
            backgroundColor: '#d32f2f',
            margin: '8px auto 0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* 4 Cards in a Single Row Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
          alignItems: 'stretch'
        }}>
          {features.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#fafafa',
                borderRadius: '10px',
                padding: '20px 15px',
                border: '1px solid #eaeaea',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.01)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#d32f2f';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(211, 47, 47, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#fafafa';
                e.currentTarget.style.borderColor = '#eaeaea';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.01)';
              }}
            >
              {/* Top Accent Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2.5px',
                backgroundColor: '#d32f2f'
              }}></div>

              {/* Icon Box */}
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#fff5f5',
                border: '1px solid #ffd6d6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d32f2f',
                fontSize: '18px',
                marginBottom: '12px'
              }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '11.5px',
                fontWeight: '800',
                textTransform: 'uppercase',
                color: '#111111',
                margin: '0 0 6px 0',
                letterSpacing: '0.4px',
                lineHeight: '1.3'
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '11px',
                color: '#666666',
                margin: 0,
                lineHeight: '1.4'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;