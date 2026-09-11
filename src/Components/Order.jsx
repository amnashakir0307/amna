import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCamera, FaWhatsapp, FaFileInvoiceDollar } from 'react-icons/fa';

const Order = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const steps = [
    {
      step: "01",
      title: t('orderStep1Title', { defaultValue: "CAPTURE & SHARE" }),
      desc: t('orderStep1Desc', { defaultValue: "Send photo, model number, or Chassis / VIN." }),
      icon: <FaCamera style={{ color: '#d32f2f', fontSize: '24px' }} />,
      borderColor: "#d32f2f"
    },
    {
      step: "02",
      title: t('orderStep2Title', { defaultValue: "WHATSAPP EXPERTS" }),
      desc: t('orderStep2Desc', { defaultValue: "Connect directly with our sales team." }),
      icon: <FaWhatsapp style={{ color: '#25D366', fontSize: '28px' }} />,
      borderColor: "#25D366"
    },
    {
      step: "03",
      title: t('orderStep3Title', { defaultValue: "CONFIRM & DISPATCH" }),
      desc: t('orderStep3Desc', { defaultValue: "Verify price & stock, then collect or ship." }),
      icon: <FaFileInvoiceDollar style={{ color: '#d32f2f', fontSize: '26px' }} />,
      borderColor: "#d32f2f"
    }
  ];

  return (
    <section style={{
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '70px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxSizing: 'border-box',
      borderTop: '1px solid #eaeaea',
      borderBottom: '1px solid #eaeaea',
      direction: isArabic ? 'rtl' : 'ltr'
    }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Modern Tagline */}
        <div style={{
          display: 'inline-block',
          backgroundColor: '#ffebee',
          color: '#d32f2f',
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          padding: '5px 14px',
          borderRadius: '20px',
          marginBottom: '10px'
        }}>
          {t('orderTagline', { defaultValue: "SIMPLE & FAST PROCESS" })}
        </div>

        {/* Modern Enhanced Heading */}
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: '900',
          color: '#111111',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '45px'
        }}>
          {t('orderHeadingPrefix', { defaultValue: "HOW TO" })} <span style={{ color: '#d32f2f' }}>{t('orderHeadingHighlight', { defaultValue: "ORDER YOUR PARTS" })}</span>
        </h2>

        {/* Responsive Grid Container with proper gap */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px'
        }}>
          {steps.map((item, index) => (
            <div key={index} className="flip-card" style={{
              width: '280px',
              height: '180px',
              perspective: '1000px',
              cursor: 'pointer',
              flexShrink: 0
            }}>
              <div className="flip-card-inner" style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
                transformStyle: 'preserve-3d',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}>
                
                {/* Front Side */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  backgroundColor: '#fafafa',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  border: '1px solid #e8e8e8',
                  boxSizing: 'border-box',
                  zIndex: 2
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: `2px solid ${item.borderColor}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                    marginBottom: '12px'
                  }}>
                    {item.icon}
                  </div>

                  <span style={{
                    fontSize: '11.5px',
                    fontWeight: '800',
                    color: '#111111',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    {item.title}
                  </span>
                  <p style={{
                    fontSize: '11px',
                    color: '#666666',
                    lineHeight: '1.4',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Back Side (Red Background, Black Heading, White Text) */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  backgroundColor: '#d32f2f',
                  color: '#ffffff',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  boxSizing: 'border-box',
                  transform: 'rotateY(180deg)',
                  WebkitTransform: 'rotateY(180deg)',
                  textAlign: 'center',
                  zIndex: 1
                }}>
                  <span style={{
                    fontSize: '11.5px',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                    color: '#111111',
                    textTransform: 'uppercase'
                  }}>
                    {isArabic ? `تفاصيل الخطوة ${item.step}` : `Step ${item.step} Details`}
                  </span>
                  <p style={{
                    fontSize: '11px',
                    lineHeight: '1.5',
                    margin: 0,
                    color: '#ffffff',
                    fontWeight: '500'
                  }}>
                    {item.desc} - {isArabic ? 'عملية سريعة، موثوقة وآمنة مضمونة.' : 'Fast, reliable & secure process guaranteed.'}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Flip Animation CSS */}
      <style>{`
        .flip-card:hover .flip-card-inner {
          transform: rotateY(${isArabic ? '-180deg' : '180deg'});
        }
      `}</style>
    </section>
  );
};

export default Order;