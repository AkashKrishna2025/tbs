import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GiftContact.module.css';

// सुनिश्चित करें कि ये इमेज आपके बताए गए पाथ पर मौजूद हैं
import leftGiftVisualImage from '../../assets/images/gift-contact.png';
import rightGiftContentBgImage from '../../assets/images/gift-card2.png';
import wavyTitleBackground from '../../assets/images/textbg.png';

const GiftContact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.giftContainer}>
        {/* बाईं ओर की इमेज, जिसे हम clip-path से आकार देंगे */}
        <div
          className={styles.giftImageSide}
          style={{ backgroundImage: `url(${leftGiftVisualImage})` }}
          aria-label="A decorated kids' room with a play tent"
        ></div>

        {/* दाईं ओर का कंटेंट सेक्शन */}
        <div
          className={styles.giftContentSide}
          style={{ backgroundImage: `url(${rightGiftContentBgImage})` }}
        >
          <div className={styles.contentWrapper}>
            <div
              className={styles.giftTitleBackground}
              style={{ backgroundImage: `url(${wavyTitleBackground})` }}
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

export default GiftContact;