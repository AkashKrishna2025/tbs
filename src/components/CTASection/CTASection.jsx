// src/components/CTASection/CTASection.jsx
import React from 'react';
import styles from './CTASection.module.css';
import ctaBackground from '../../assets/images/cta-background.gif';

const CTASection = () => {
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${ctaBackground})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2>Ready to design your dream nursery?</h2>
        <p>At TBS Studio, we prioritize safety and style in every product we create. Our furniture is made with non-toxic finishes and sturdy construction to ensure the well-being of your little ones.</p>
      <button
               className={styles.consultationButton}
               onClick={() => (window.location.href = '/contact')}
             >
               Book Consultation
             </button>
      </div>
    </section>
  );
};

export default CTASection;