import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function OrderSection() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    chassis: '',
    partDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, vehicle, chassis, partDetails } = formData;
    
    const whatsappMessage = `*New Part Request - Al-Saqar*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Vehicle:* ${vehicle}\n*Chassis/VIN:* ${chassis || 'N/A'}\n*Required Parts:* ${partDetails}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/966502748270?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="order-section" id="order">
      <div className={`order-container ${isRtl ? 'rtl' : 'ltr'}`}>
        
        {/* Section Header */}
        <div className="order-header">
          <span className="order-badge">{t('orderSectionBadge')}</span>
          <h2>{t('orderSectionTitle')} <span>{t('orderSectionTitleSpan')}</span></h2>
        </div>

        {/* Main Grid Wrapper (Left Info Box & Right Form Box) */}
        <div className="order-content-grid">
          
          {/* Left Info Box */}
          <div className="order-info-box">
            <div className="info-top">
              <h3>{t('orderBoxHeading')}</h3>
              <p>{t('orderBoxDesc')}</p>
            </div>

            <div className="info-highlights">
              <div className="highlight-item">
                <span>✔</span> {t('highlight1')}
              </div>
              <div className="highlight-item">
                <span>✔</span> {t('highlight2')}
              </div>
              <div className="highlight-item">
                <span>✔</span> {t('highlight3')}
              </div>
            </div>

            <div className="info-footer">
              <p>{t('workingHoursText')}</p>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="order-form-box">
            <h3>{t('formHeading')}</h3>
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label>{t('labelName')}</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder={t('placeholderName')} 
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label>{t('labelPhone')}</label>
                <input 
                  type="text" 
                  name="phone" 
                  required 
                  placeholder={t('placeholderPhone')} 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label>{t('labelVehicle')}</label>
                <input 
                  type="text" 
                  name="vehicle" 
                  required 
                  placeholder={t('placeholderVehicle')} 
                  value={formData.vehicle} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label>{t('labelChassis')} <span className="optional">{t('optionalText')}</span></label>
                <input 
                  type="text" 
                  name="chassis" 
                  placeholder={t('placeholderChassis')} 
                  value={formData.chassis} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label>{t('labelPartDetails')}</label>
                <textarea 
                  name="partDetails" 
                  rows="3" 
                  required 
                  placeholder={t('placeholderPartDetails')} 
                  value={formData.partDetails} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="whatsapp-submit-btn">
                💬 {t('whatsappButtonText')}
              </button>

            </form>
          </div>

        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .order-section {
            position: relative;
            background: linear-gradient(rgba(10, 10, 10, 0.88), rgba(10, 10, 10, 0.94)), url('/order.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            padding: 90px 20px;
            font-family: 'Inter', sans-serif;
            width: 100%;
            box-sizing: border-box;
        }

        .order-container {
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
        }

        .order-container.rtl {
            direction: rtl;
            text-align: right;
        }

        .order-container.ltr {
            direction: ltr;
            text-align: left;
        }

        .order-header {
            text-align: center;
            margin-bottom: 45px;
        }

        .order-badge {
            display: inline-block;
            background-color: rgba(230, 0, 0, 0.15);
            color: #ff1a1a;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 12px;
            border: 1px solid rgba(230, 0, 0, 0.3);
        }

        .order-header h2 {
            font-size: 36px;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
            margin: 0;
        }

        .order-header h2 span {
            color: #e60000;
        }

        .order-content-grid {
            display: flex;
            gap: 30px;
            align-items: stretch;
            justify-content: center;
        }

        .rtl .order-content-grid {
            flex-direction: row-reverse;
        }

        .order-info-box {
            flex: 1;
            background: rgba(18, 18, 18, 0.82);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 5px solid #e60000;
            border-radius: 16px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            box-sizing: border-box;
        }

        .rtl .order-info-box {
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            border-right: 5px solid #e60000;
        }

        .info-top h3 {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 15px;
            line-height: 1.3;
        }

        .info-top p {
            font-size: 15px;
            color: #cbd5e1;
            line-height: 1.7;
            margin-bottom: 25px;
        }

        .info-highlights {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 30px;
        }

        .highlight-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14.5px;
            color: #ffffff;
            font-weight: 500;
        }

        .highlight-item span {
            color: #25D366;
            font-weight: bold;
            font-size: 16px;
        }

        .info-footer {
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 20px;
        }

        .info-footer p {
            font-size: 13px;
            color: #94a3b8;
            margin: 0;
            font-weight: 500;
        }

        .order-form-box {
            flex: 1;
            background: rgba(18, 18, 18, 0.88);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            box-sizing: border-box;
        }

        .order-form-box h3 {
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 25px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 15px;
        }

        .form-group {
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .form-group label {
            font-size: 13.5px;
            font-weight: 600;
            color: #e2e8f0;
        }

        .form-group .optional {
            color: #64748b;
            font-weight: 400;
            font-size: 12px;
        }

        .form-group input,
        .form-group textarea {
            background-color: rgba(10, 10, 10, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 8px;
            padding: 12px 15px;
            color: #ffffff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            transition: all 0.2s ease;
            outline: none;
            width: 100%;
            box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: #e60000;
            box-shadow: 0 0 0 3px rgba(230, 0, 0, 0.2);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 80px;
        }

        .whatsapp-submit-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: #25D366;
            color: #ffffff;
            width: 100%;
            padding: 14px;
            border-radius: 8px;
            border: none;
            font-weight: 700;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
            margin-top: 10px;
        }

        .whatsapp-submit-btn:hover {
            background-color: #1ebe57;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        @media (max-width: 900px) {
            .order-content-grid, .rtl .order-content-grid {
                flex-direction: column;
            }

            .order-header h2 {
                font-size: 28px;
            }

            .order-info-box,
            .order-form-box {
                padding: 25px 20px;
            }
        }
      `}</style>
    </section>
  );
}