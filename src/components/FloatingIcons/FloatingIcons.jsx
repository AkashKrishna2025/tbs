// src/components/FloatingIcons/FloatingIcons.jsx
import React from 'react';
import styles from './FloatingIcons.module.css';
import giftIcon from '../../assets/icons/gift.png'; // gift-icon.png का सही पाथ दें
import whatsappIcon from '../../assets/icons/whatsapp.png'; // whatsapp-icon.png का सही पाथ दें

const FloatingIcons = () => {
  return (
    <div className={styles.floatingContainer}>
      <a href="#" className={styles.iconLink}>
        <img src={giftIcon} alt="Gift" />
      </a>
      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FloatingIcons;