// src/pages/AboutPage.jsx (पूरा और फ़ाइनल कोड)

import React from 'react';
import styles from './AboutPage.module.css';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';
// --- अपनी सभी इमेजेज और आइकन्स को यहाँ इम्पोर्ट करें ---
import bannerBg from '../assets/images/about.png'; // बैनर की बैकग्राउंड इमेज
import quoteIcon from '../assets/icons/q-icon.png';
import standOutIcon from '../assets/icons/about-icon1.png';
import parentsIcon from '../assets/icons/about-icon2.png';
import greenerWorldIcon from '../assets/icons/about-icon1.png';
import logo from '../assets/images/logo.png'; // tbs.studio का लोगो
import SignatureProjects from '../components/SignatureProjects/SignatureProjects';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import FaqSection from '../components/FaqSection/FaqSection';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';


const AboutPage = () => {
  return (
    <>
      <div className={styles.aboutPage}>
        {/* --- हीरो बैनर सेक्शन --- */}
        <header className={styles.heroBanner} style={{ backgroundImage: `url(${bannerBg})` }}>
          <h1 className={styles.heroTitle}>About the TBS.Studio</h1>
          <p className={styles.heroSubtitle}>Created by parents in an endeavor to give the best</p>
        </header>

        {/* --- वेलकम सेक्शन --- */}
        <section className={styles.welcomeSection}>
          <img src={quoteIcon} alt="Quote" className={styles.quoteIcon} />
          <h2 className={styles.welcomeTitle}>Welcome to TBS Studio!</h2>
          <p className={styles.welcomeText}>
            At The Studio, we understand the struggles of finding safe and high-quality baby furniture. That's why our founder, Sheetal Chopra, a mother herself, and co-founder Vikas Sehgal, a father, set out to create a solution. We saw a gap in the market for standardization, aesthetics, and safety in baby furniture, and knew we could do better. Our team is committed to providing the best options for parents, while also maintaining care and safety as top priorities. We follow all international norms and compliances to ensure the highest quality for your little ones. Our products are built to last, giving parents peace of mind as their baby grows and explores. And, because we know that every parent wants something unique for their child, we offer customization options while still maintaining the basic structural integrity for standardization. At The Studio, we believe that every baby deserves the best, and we’re dedicated to giving them just that.
          </p>
          <div className={styles.founders}>
            <p>Our Founders</p>
            <h4>Vikas Sehgal | Sheetal Chopra</h4>
          </div>
        </section>

        {/* --- मिशन ग्रिड सेक्शन --- */}
        <section className={styles.missionGrid}>
          <div className={`${styles.missionCard} ${styles.card1}`}>
            <img src={standOutIcon} alt="How we stand out" />
            <h3>How do we stand out</h3>
            <p>At our company, we prioritize safety and style in every product we create. Our furniture is made with non-toxic finishes and sturdy construction to ensure the well-being of your little ones. Plus, we go above and beyond industry safety standards to give you peace of mind. But that's not all - our furniture is also customizable to fit your personal taste and needs.
              Choose from a variety of finishes, colors, and sizes to create the perfect nursery for your little one. And if you need help, our design consultation service is here to provide personalized recommendations and assistance.
              Upgrade your nursery with our safe and stylish furniture options.</p>
          </div>

          <div className={`${styles.gridImage} ${styles.image1}`}><img src={image1} alt="Nursery setup 1" /></div>
          <div className={`${styles.gridImage} ${styles.image2}`}><img src={image2} alt="Nursery setup 2" /></div>

          <div className={styles.logoContainer}>
            <img src={logo} alt="TBS Studio Logo" />
          </div>

          <div className={`${styles.missionCard} ${styles.card2}`}>
            <img src={parentsIcon} alt="For the parents by the parents" />
            <h3>For the parents by the parents</h3>
            <p>At The Studio, we believe that your little ones deserve nothing but the best. That’s why we refuse to settle for mediocre products with low-quality standards or a lack of scientific approach. We understand that the furniture you choose for your baby or child can impact their sleep, comfort, and safety, which is why we put extra care and attention into creating our baby and kids furniture range.</p>
          </div>

          <div className={`${styles.gridImage} ${styles.image3}`}><img src={image3} alt="Close up of a cot" /></div>
          <div className={`${styles.gridImage} ${styles.image4}`}><img src={image4} alt="Bunk bed setup" /></div>
          <div className={`${styles.gridImage} ${styles.image5}`}><img src={image5} alt="Stylish nursery room" /></div>

          <div className={`${styles.missionCard} ${styles.card3}`}>
            <img src={greenerWorldIcon} alt="Leave a greener world" />
            <h3>Leave a greener world to the future generation</h3>
            <p>At our company, we are dedicated to not only creating high-quality furniture but also making a positive impact on the environment. We are proud to stress our commitment to sustainability and eco-friendly practices in every aspect of our business.</p>
          </div>

          <div className={`${styles.gridImage} ${styles.image6}`}><img src={image6} alt="House-shaped shelf" /></div>
          <div className={`${styles.gridImage} ${styles.image7}`}><img src={image7} alt="Natural wood cot" /></div>
        </section>
      </div>
      <FloatingIcons />
      <SignatureProjects />
      <DesignProcess />
      <FaqSection />
    </>
  );
};

export default AboutPage;