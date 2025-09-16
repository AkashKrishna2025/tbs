import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GiftCard.module.css';

// Default images - can be overridden via props
import defaultLeftImage from '../../assets/images/gift-card1.png';
import rightGiftContentBgImage from '../../assets/images/gift-card2.png';
import wavyTitleBackground from '../../assets/images/textbg.png';

const GiftCard = ({ 
  leftImage = defaultLeftImage,
  title = "Give the Gift of Meaning",
  description = "From the heart of the TBS.Studio – a gift rooted in purity, empowerment, and sustainability.",
  buttonText = "Shop Now",
  buttonLink = "/collection",
  className = ""
}) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.giftContainer}>
        {/* Left side - Image part */}
        <div
          className={styles.giftImageSide}
          style={{ backgroundImage: `url(${leftImage})` }}
          aria-label="A decorated kids' room with a play tent"
        ></div>

        {/* Right side - Content part */}
        <div
          className={styles.giftContentSide}
          style={{ backgroundImage: `url(${rightGiftContentBgImage})` }}
        >
          <div className={styles.contentWrapper}>
            <div
              className={styles.giftTitleBackground}
              style={{ backgroundImage: `url(${wavyTitleBackground})` }}
            >
              <h3 className={styles.giftTitle}>{title}</h3>
            </div>
            <p className={styles.giftDescription}>
              {description}
            </p>
            <Link to={buttonLink} className={styles.shopNowButton}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
