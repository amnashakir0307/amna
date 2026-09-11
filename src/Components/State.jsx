import React, { useState, useEffect, useRef } from 'react';

// Custom Hook for Animated Counter effect triggered on scroll/view
function useCounter(target, duration = 3500) {
  const [count, setCount] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 1;
    const incrementTime = Math.max(Math.floor(duration / target), 30);
    
    const timer = setInterval(() => {
      start += Math.ceil(target / 50);
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return [count, elementRef];
}

export default function Stats() {
  const [guaranteeCount, guaranteeRef] = useCounter(100, 3000); 
  const [partsCount, partsRef] = useCounter(5000, 3500);    
  const [reviewsCount, reviewsRef] = useCounter(500, 3500);   
  const [brandsCount, brandsRef] = useCounter(5, 2500);      

  return (
    <div style={styles.section}>
      <div style={styles.grid}>
        <div style={styles.card} className="stats-card" ref={guaranteeRef}>
          <h2 style={styles.number}>{guaranteeCount}<span style={styles.accent}>%</span></h2>
          <p style={styles.text}>Authentic Guarantee & Quality</p>
        </div>
        
        <div style={styles.card} className="stats-card" ref={partsRef}>
          <h2 style={styles.number}>{partsCount.toLocaleString()}<span style={styles.accent}>+</span></h2>
          <p style={styles.text}>Available Spare Parts</p>
        </div>
        
        <div style={styles.card} className="stats-card" ref={reviewsRef}>
          <h2 style={styles.number}>{reviewsCount}<span style={styles.accent}>+</span></h2>
          <p style={styles.text}>Satisfied Customer Reviews</p>
        </div>
        
        <div style={styles.card} className="stats-card" ref={brandsRef}>
          <h2 style={styles.number}>{brandsCount}<span style={styles.accent}>+</span></h2>
          <p style={styles.text}>Major Genuine Brands Covered</p>
        </div>
      </div>

      {/* Embedded CSS Styles for Modern Aesthetic look and Outfit font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;800&display=swap');
        
        .stats-card {
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stats-card:hover {
          transform: translateY(-6px);
          border-color: #D32F2F !important;
          box-shadow: 0 20px 25px -5px rgba(211, 47, 47, 0.12), 0 10px 10px -5px rgba(211, 47, 47, 0.06) !important;
        }
      `}</style>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: '#f8fafc',
    padding: '40px 20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Outfit', sans-serif",
    boxSizing: 'border-box',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    backgroundColor: '#ffffff',
    padding: '30px 20px',
    gap: '16px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px 15px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
  },
  number: {
    fontSize: '38px',
    color: '#0f172a',
    marginBottom: '6px',
    fontWeight: '800',
    letterSpacing: '-1px',
    lineHeight: '1',
  },
  accent: {
    color: '#D32F2F',
  },
  text: {
    color: '#64748b',
    fontSize: '13px',
    fontWeight: '500',
    margin: 0,
  },
};