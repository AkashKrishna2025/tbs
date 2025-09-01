import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GiftSection.module.css';

// आपकी पूरी इमेज यहाँ इम्पोर्ट की गई है
import finalGiftImage from '../../assets/images/gift-card.png';
import wavyTitleBackground from '../../assets/images/textbg.png';

const GiftSection = () => {
  return (
    <section className={styles.section}>
      <div
        className={styles.giftContainer}
        style={{ backgroundImage: `url(${finalGiftImage})` }} // पूरी इमेज को बैकग्राउंड के रूप में उपयोग करें
        aria-label="Gift of Meaning section with kids room and text"
      >
        <div className={styles.contentOverlay}>
          <div className={styles.contentWrapper}>
            <div
              className={styles.giftTitleBackground}
              style={{ backgroundImage: `url(${wavyTitleBackground})` }} // लहरदार इमेज को बैकग्राउंड के रूप में उपयोग करें
            >
              <h3 className={styles.giftTitle}>Give the Gift of Meaning</h3>
            </div>
            <p className={styles.giftDescription}>
              From the heart of the TBS.Studio – a gift rooted in purity, empowerment, and sustainability.
            </p>
            <Link to="/collection" className={styles.shopNowButton}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;