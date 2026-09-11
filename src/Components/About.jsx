import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section className="about-us-section" id="about">
      <div className={`about-container ${isRtl ? 'rtl' : 'ltr'}`}>
        
        {/* Left Side: Full Image Box with zero extra padding/space */}
        <div className="about-image-box">
          <img src="/image_9.png" alt="Al Saqar Spare Parts Showroom" />
        </div>

        {/* Right Side: Text Box */}
        <div className="about-text-box">
          <div className="about-text-content">
            <h2>{t('aboutTitle')} <span>{t('aboutTitleHighlight')}</span></h2>
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
          </div>

          <div className="about-contact-info">
            <div className="contact-details">
              <span>📍 <strong>{t('locationLabel')}:</strong> Kingdom of Saudi Arabia - Makkah - Al-Ukaishiyah - New Industrial City</span>
            </div>
            <a 
              href="https://wa.me/966502748270?text=Hello%20Al-Saqar,%20I%20want%20to%20inquire%20about%20spare%20parts." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn"
            >
              💬 {t('contactBtnText')}
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .about-us-section {
            background-color: #000000;
            padding: 80px 20px;
            font-family: 'Inter', sans-serif;
            width: 100%;
            box-sizing: border-box;
        }

        .about-container {
            max-width: 1250px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            align-items: stretch;
            box-sizing: border-box;
        }

        .about-container.rtl {
            direction: rtl;
            text-align: right;
        }

        .about-container.ltr {
            direction: ltr;
            text-align: left;
        }

        /* Full Image Box: No internal padding, image fits edge-to-edge with background option */
        .about-image-box {
            flex: 1;
            width: 100%;
            max-width: 580px;
            background-color: #111111;
            /* Optional background image fallback layer or container background */
            background-image: url('/about.jpg');
            background-size: cover;
            background-position: center;
            border-radius: 16px;
            display: flex;
            align-items: stretch;
            justify-content: stretch;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            border: 1px solid #222222;
            box-sizing: border-box;
            overflow: hidden;
            padding: 0;
            margin: 0;
            min-height: 480px;
        }

        .about-image-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
            display: block;
            margin: 0;
            padding: 0;
        }

        /* Text Box */
        .about-text-box {
            flex: 1;
            width: 100%;
            max-width: 580px;
            background-color: #0b0b0b;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            border: 1px solid #222222;
            border-left: 6px solid #e60000;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            text-align: center;
            align-items: center;
        }

        .rtl .about-text-box {
            border-left: 1px solid #222222;
            border-right: 6px solid #e60000;
        }

        .about-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .about-text-box h2 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 20px;
            color: #ffffff;
            letter-spacing: -0.03em;
            text-align: center;
            width: 100%;
        }

        .about-text-box h2 span {
            color: #e60000;
        }

        .about-text-box p {
            font-size: 15px;
            line-height: 1.75;
            margin-bottom: 16px;
            color: #d1d5db;
            font-weight: 400;
            text-align: center;
            max-width: 95%;
        }

        .about-text-box strong {
            color: #ffffff;
            font-weight: 600;
        }

        .about-contact-info {
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid #262626;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            width: 100%;
        }

        .contact-details {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 6px;
            font-size: 14px;
            color: #9ca3af;
            font-weight: 500;
            width: 100%;
        }

        .contact-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #25D366;
            color: #ffffff;
            padding: 12px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.02em;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .contact-btn:hover {
            background-color: #1ebe57;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .about-us-section {
                padding: 30px 10px;
            }

            .about-container {
                flex-direction: column;
                gap: 20px;
            }

            .about-image-box {
                max-width: 100%;
                min-height: 280px;
                max-height: 320px;
            }

            .about-text-box {
                max-width: 100%;
                padding: 25px 15px;
                border-left: none;
                border-top: 5px solid #e60000;
            }

            .rtl .about-text-box {
                border-right: none;
                border-top: 5px solid #e60000;
            }

            .about-text-box h2 {
                font-size: 24px;
            }

            .about-text-box p {
                font-size: 13.5px;
                max-width: 100%;
            }

            .contact-btn {
                width: 100%;
            }
        }
      `}</style>
    </section>
  );
}