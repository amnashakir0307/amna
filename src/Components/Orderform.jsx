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

        {/* Main Grid Wrapper */}
        <div className="order-content-grid">
          
          {/* Left Info Box */}
          <div className="order-info-box">
            <div className="info-glow-effect"></div>
            <div className="info-top">
              <h3>{t('orderBoxHeading')}</h3>
              <p>{t('orderBoxDesc')}</p>
            </div>

            <div className="info-highlights">
              <div className="highlight-item">
                <span className="check-icon">✓</span> 
                <span>{t('highlight1')}</span>
              </div>
              <div className="highlight-item">
                <span className="check-icon">✓</span> 
                <span>{t('highlight2')}</span>
              </div>
              <div className="highlight-item">
                <span className="check-icon">✓</span> 
                <span>{t('highlight3')}</span>
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
                <span>💬</span> {t('whatsappButtonText')}
              </button>

            </form>
          </div>

        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .order-section {
            position: relative;
            background: linear-gradient(135deg, rgba(8, 8, 8, 0.95), rgba(15, 15, 15, 0.98)), url('/order.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            padding: 90px 20px;
            font-family: 'Inter', sans-serif;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .order-container {
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
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
            margin-bottom: 50px;
        }

        .order-badge {
            display: inline-block;
            background: linear-gradient(135deg, rgba(230, 0, 0, 0.2), rgba(255, 0, 0, 0.05));
            color: #ff3333;
            padding: 8px 18px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 14px;
            border: 1px solid rgba(230, 0, 0, 0.4);
            box-shadow: 0 4px 15px rgba(230, 0, 0, 0.15);
        }

        .order-header h2 {
            font-size: 38px;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.02em;
            margin: 0;
            text-transform: uppercase;
        }

        .order-header h2 span {
            color: #e60000;
            text-shadow: 0 0 20px rgba(230, 0, 0, 0.4);
        }

        .order-content-grid {
            display: flex;
            gap: 35px;
            align-items: stretch;
            justify-content: center;
        }

        .rtl .order-content-grid {
            flex-direction: row-reverse;
        }

        /* Left Info Box Styles */
        .order-info-box {
            flex: 1;
            position: relative;
            background: linear-gradient(145deg, rgba(22, 22, 22, 0.85), rgba(12, 12, 12, 0.95));
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 6px solid #e60000;
            border-radius: 18px;
            padding: 45px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
            box-sizing: border-box;
            overflow: hidden;
        }

        .rtl .order-info-box {
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            border-right: 6px solid #e60000;
        }

        .info-glow-effect {
            position: absolute;
            top: -50px;
            left: -50px;
            width: 150px;
            height: 150px;
            background: rgba(230, 0, 0, 0.15);
            filter: blur(60px);
            z-index: 0;
            pointer-events: none;
        }

        .info-top {
            position: relative;
            z-index: 1;
        }

        .info-top h3 {
            font-size: 26px;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 18px;
            line-height: 1.35;
            letter-spacing: -0.01em;
        }

        .info-top p {
            font-size: 15px;
            color: #94a3b8;
            line-height: 1.75;
            margin-bottom: 30px;
        }

        .info-highlights {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 35px;
        }

        .highlight-item {
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 15px;
            color: #f1f5f9;
            font-weight: 600;
        }

        .check-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background: rgba(37, 211, 102, 0.15);
            color: #25D366;
            border-radius: 50%;
            font-size: 12px;
            font-weight: 900;
            border: 1px solid rgba(37, 211, 102, 0.3);
            flex-shrink: 0;
        }

        .info-footer {
            position: relative;
            z-index: 1;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 22px;
        }

        .info-footer p {
            font-size: 13px;
            color: #64748b;
            margin: 0;
            font-weight: 600;
            letter-spacing: 0.02em;
        }

        /* Right Form Box Styles */
        .order-form-box {
            flex: 1;
            background: linear-gradient(145deg, rgba(22, 22, 22, 0.9), rgba(12, 12, 12, 0.98));
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            padding: 45px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
            box-sizing: border-box;
        }

        .order-form-box h3 {
            font-size: 24px;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 25px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 15px;
            letter-spacing: -0.01em;
        }

        .form-group {
            margin-bottom: 18px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .form-group label {
            font-size: 13px;
            font-weight: 700;
            color: #cbd5e1;
            letter-spacing: 0.03em;
            text-transform: uppercase;
        }

        .form-group .optional {
            color: #64748b;
            font-weight: 500;
            font-size: 11px;
            text-transform: none;
        }

        .form-group input,
        .form-group textarea {
            background-color: rgba(10, 10, 10, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 14px 16px;
            color: #ffffff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s ease;
            outline: none;
            width: 100%;
            box-sizing: border-box;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #475569;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: #e60000;
            background-color: rgba(15, 15, 15, 0.95);
            box-shadow: 0 0 0 4px rgba(230, 0, 0, 0.15), 0 0 20px rgba(230, 0, 0, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 90px;
        }

        .whatsapp-submit-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: linear-gradient(135deg, #25D366, #1ebe57);
            color: #ffffff;
            width: 100%;
            padding: 16px;
            border-radius: 10px;
            border: none;
            font-weight: 800;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
            margin-top: 15px;
            letter-spacing: 0.02em;
        }

        .whatsapp-submit-btn:hover {
            background: linear-gradient(135deg, #22bf5b, #189e47);
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5);
        }

        @media (max-width: 992px) {
            .order-content-grid, .rtl .order-content-grid {
                flex-direction: column;
            }

            .order-section {
                padding: 60px 15px;
            }

            .order-header h2 {
                font-size: 28px;
            }

            .order-info-box,
            .order-form-box {
                padding: 30px 20px;
            }
        }
      `}</style>
    </section>
  );
}