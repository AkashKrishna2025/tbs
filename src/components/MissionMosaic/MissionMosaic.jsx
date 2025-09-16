// src/components/MissionMosaic/MissionMosaic.jsx

import React from 'react';
import styles from './MissionMosaic.module.css';

// Import icons
import standOutIcon from '../../assets/icons/about-icon1.png';
import parentsIcon from '../../assets/icons/about-icon2.png';
import greenerWorldIcon from '../../assets/icons/about-icon1.png';
import logo from '../../assets/images/logo.png';

// Import images
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/5.jpg';
import image6 from '../../assets/images/6.jpg';
import image7 from '../../assets/images/7.jpg';

const MissionMosaic = () => {
  return (
    <section className={styles.missionMosaic}>
      {/* Parent Row 1: 3 columns */}
      <div className={styles.topRow}>
        {/* Col 1: row with [content card | image] */}
        <div className={styles.topColOne}>
          <div className={styles.inlineRow}>
            <div className={styles.card}>
              <img src={standOutIcon} alt="Icon" className={styles.cardIcon} />
              <h3>How do we stand out</h3>
              <p>
                At our company, we prioritize safety and style in every product we create.
                Our furniture is made with non-toxic finishes and sturdy construction to
                ensure the well-being of your little ones. Choose from a variety of finishes,
                colors, and sizes to create the perfect nursery.
              </p>
            </div>
            <div className={styles.tile}>
              <img src={image3} alt="Nursery setup 1" />
            </div>
          </div>
        </div>

        {/* Col 2-3: span 2 with two rows inside */}
        <div className={styles.topRightSpan}>
          {/* Row A: two image tiles */}
          <div className={styles.topRightRowA}>
            <div className={styles.tile}>
              <img src={image1} alt="Nursery setup 2" />
            </div>
            <div className={styles.tile}>
              <img src={image2} alt="Close up of a cot" />
            </div>
          </div>
          {/* Row B: [two stacked images | content card] */}
          <div className={styles.topRightRowB}>
            <div className={styles.stackedImages}>
              
              <div className={styles.tile}>
                <img className={styles.logoImage} src={logo} alt="TBS Studio Logo" />
              </div>
              <div className={`${styles.tile} ${styles.fixHeight}`}>
                <img src={image5} alt="Stylish nursery" />
              </div>
            </div>
            <div className={styles.card}>
              <img src={parentsIcon} alt="Icon" className={styles.cardIcon} />
              <h3>For the parents by the parents</h3>
              <p>
                We refuse to settle for mediocre products with low-quality standards.
                The furniture you choose can impact sleep, comfort, and safety, so we
                put extra care and attention into every detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Row 2: 3 columns */}
      <div className={styles.bottomRow}>
        {/* Col 1: two image boxes in a row */}
        <div className={styles.inlineRow}>
          <div className={styles.tile}>
            <img src={image4} alt="House-shaped shelf" />
          </div>
          <div className={styles.tile}>
            <img src={image6} alt="Nursery setup 2" />
          </div>
        </div>

        {/* Col 2: content card */}
        <div className={styles.card}>
          <img src={greenerWorldIcon} alt="Icon" className={styles.cardIcon} />
          <h3>Leave a greener world to the future generation</h3>
          <p>
            We are committed to sustainability and eco‑friendly practices in every
            aspect of our business, from sourcing materials to manufacturing.
          </p>
        </div>

        {/* Col 3: single image */}
        <div className={`${styles.tile} ${styles.fixHeight}`}>
          <img src={image7} alt="Bunk bed" />
        </div>
      </div>
    </section>
  );
};

export default MissionMosaic;
