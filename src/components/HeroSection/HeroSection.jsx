import React from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

// Assets
import heroBackground from '../../assets/images/hero-background.png';
import happyCustomersIcon from '../../assets/icons/customers.png';
import nonToxicIcon from '../../assets/icons/non-toxic.png';
import certificateIcon from '../../assets/icons/certificate.png';
import yearsIcon from '../../assets/icons/years.png';
import giftIcon from '../../assets/icons/gift.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

const HeroSection = () => {
  const trustFeatures = [
    { icon: happyCustomersIcon, title: '10,000+', text: 'Happy Customers' },
    { icon: nonToxicIcon, title: '100%', text: 'Non Toxic' },
    { icon: certificateIcon, title: 'ISO', text: 'Certified' },
    { icon: yearsIcon, title: '10+', text: 'Years of Trust' },
  ];

  return (
    <section>
      <div className={styles.heroContainer}>
        <img src={heroBackground} alt="Nursery with furniture" className={styles.heroImage} />

        <div className={styles.heroContent}>
          <h1>From Sketch to Storybook Spaces</h1>
          <p className={styles.herosection}>
            Luxury furniture and bespoke nursery interiors,<br />
            crafted for your little one's world.
          </p>
          <button className={styles.shopButton}>Shop Now</button>
        </div>

        {/* NEW: Trust Bar Overlay */}
        <div className={styles.trustBarOverlay}>
          <div className={styles.trustBarContainer}>
            {trustFeatures.map((feature, index) => (
              <div key={index} className={styles.trustItem}>
                <img src={feature.icon} alt={feature.text} />
                <div className={styles.trustText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className={styles.floatingActions}>
          <a href="#"><img src={giftIcon} alt="Gifts" /></a>
          <a href="#"><img src={whatsappIcon} alt="WhatsApp" /></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;