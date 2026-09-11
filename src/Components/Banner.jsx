import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section className="slim-banner-section" id="banner">
      <div className={`slim-banner-container ${isRtl ? 'rtl' : 'ltr'}`}>
        
        {/* Content Box over Background Image */}
        <div className="slim-banner-content">
          <span className="slim-badge">{t('bannerBadge')}</span>
          <h2>{t('bannerImageTitle')}</h2>
        
          
          <div className="slim-btn-wrapper">
            <a 
              href="https://wa.me/966502748270?text=Hello%20Al-Saqar,%20I%20want%20to%20inquire%20about%20spare%20parts." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="slim-whatsapp-btn"
            >
              💬 {t('contactBtnText')}
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .slim-banner-section {
            position: relative;
            width: 100%;
            /* Height yahan choti/slim rakhi hai taaki banner chota lage */
            min-height:280px; 
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bnr.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px 20px;
            font-family: 'Inter', sans-serif;
            box-sizing: border-box;
        }

        .slim-banner-container {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
        }

        .slim-banner-container.rtl {
            direction: rtl;
        }

        .slim-banner-container.ltr {
            direction: ltr;
        }

        .slim-banner-content {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .slim-badge {
            display: inline-block;
            background-color: #e60000;
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 10px;
            box-shadow: 0 2px 8px rgba(230, 0, 0, 0.4);
        }

        .slim-banner-content h2 {
            font-size: 22px;
            font-weight: 800;
            color: #ffffff;
            line-height: 1.3;
            margin-bottom: 8px;
            max-width: 800px;
        }

        .slim-banner-content p {
            font-size: 13.5px;
            color: #f1f5f9;
            margin-bottom: 16px;
            max-width: 700px;
            line-height: 1.4;
            font-weight: 500;
        }

        .slim-whatsapp-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #e60000;
            color: #ffffff;
            padding: 8px 22px;
            margin-top:2px;

            border-radius: 6px;
            text-decoration: none;
            font-weight: 700;
            font-size: 13px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(230, 0, 0, 0.4);
        }

        .slim-whatsapp-btn:hover {
            background-color: #cc0000;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(230, 0, 0, 0.6);
        }

        @media (max-width: 768px) {
            .slim-banner-section {
                min-height: 240px;
                padding: 20px 10px;
            }

            .slim-banner-content {
                padding: 20px 15px;
            }

            .slim-banner-content h2 {
                font-size: 17px;
            }

            .slim-banner-content p {
                font-size: 12.5px;
                margin-bottom: 12px;
            }

            .slim-whatsapp-btn {
                font-size: 12px;
                padding: 8px 18px;
            }
        }
      `}</style>
    </section>
  );
}