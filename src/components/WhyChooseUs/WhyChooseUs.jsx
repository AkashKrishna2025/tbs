// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css';
import storeBackground from '../../assets/images/store-background.jpg'

const WhyChooseUs = () => {
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${storeBackground})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2>Why Choose tbs.studio</h2>
        <p>At tbs.studio, we prioritize safety and style in every product we create. Our furniture is made with non-toxic finishes and sturdy construction to ensure the well-being of your little ones.</p>
        <button>Visit Studio Now</button>
      </div>
      {/* Figma की ग्लोइंग लाइनें SVG के रूप में डालना सबसे अच्छा रहेगा */}
      <div className={styles.glowingLines}></div>
    </section>
  );
};

export default WhyChooseUs;