// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';
import bannerBg from '../assets/images/about.png';
import quoteIcon from '../assets/icons/q-icon.png';
// 'SignProject' को 'Signproject' में बदलें
import Signproject from '../components/SignAbout/Signproject';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import FaqSection from '../components/FaqSection/FaqSection';
import MissionMosaic from '../components/MissionMosaic/MissionMosaic';

const AboutPage = () => {
  return (
    <>
      <div className={styles.aboutPage}>
        {/* --- Hero Banner --- */}
        <header
          className={styles.heroBanner}
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About the TBS.Studio</h1>
            <p className={styles.heroSubtitle}>
              Created by parents in an endeavor to give the best
            </p>
          </div>
        </header>

        {/* --- Welcome Section --- */}
        <section className={styles.welcomeSection}>
          <img src={quoteIcon} alt="Quote" className={styles.quoteIcon} />
          <h2 className={styles.welcomeTitle}>Welcome to Tbs Studio!</h2>
          <p className={styles.welcomeText}>
            At The Studio, we understand the struggles of finding safe and
            high-quality baby furniture. That's why our founder, Sheetal Chopra,
            a mother herself, and co-founder Vikas Sehgal, a father, set out to
            create a solution. We saw a gap in the market for standardization,
            aesthetics, and safety in baby furniture, and knew we could do
            better. Our team is committed to providing the best options for
            parents, while also maintaining care and safety as top priorities.
            We follow all international norms and compliances to ensure the
            highest quality for your little ones. Our products are built to
            last, giving parents peace of mind as their baby grows and explores.
            And, because we know that every parent wants something unique for
            their child, we offer customization options while still maintaining
            the basic structural integrity for standardization. At The Studio,
            we believe that every baby deserves the best, and we’re dedicated to
            giving them just that.
          </p>
          <div className={styles.founders}>
            <p>Our Founders</p>
            <h4>Vikas Sehgal | Sheetal Chopra</h4>
          </div>
        </section>

        {/* --- Mosaic Mission Section --- */}
        <MissionMosaic />
      </div>

      {/* Other sections */}
      <FloatingIcons />
      <Signproject /> {/* यह पहले से ही सही नाम है */}
      <DesignProcess />
      <FaqSection />
    </>
  );
};

export default AboutPage;