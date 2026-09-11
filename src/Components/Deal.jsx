import React from 'react';

const brandsData = [
  { id: 1, name: 'ISUZU', logo: '/isuzu.jpg' },
 
  { id: 3, name: 'MG', logo: '/mg.jpg' },
  // { id: 4, name: 'HYUNDAI', logo: '/hundai.jpg' },
  { id: 5, name: 'CVHANGAN', logo: '/changan.jpg' },
  { id: 2, name: 'MITSUBISHI', logo: '/mitsubihi.jpg' },
  // Aap mazeed brands yahan add kar sakte hain
];

const Deal = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '60px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Section Heading */}
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: '900',
          color: '#111111',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '8px',
          margin: 0
        }}>
          Brands We Deal In
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#666666',
          marginBottom: '40px',
          fontWeight: '500'
        }}>
          Authentic supported brands
        </p>

        {/* Brands Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {brandsData.map((brand) => (
            <div 
              key={brand.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '20px 15px',
                height: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxSizing: 'border-box'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ff2222';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(255, 34, 34, 0.15)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                style={{
                  maxWidth: '100%',
                  maxHeight: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Deal;