// src/pages/ContactPage.jsx (Final Code)
import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';
import GiftCard from '../components/GiftCard/GiftCard';
import bannerBg from '../assets/images/contact.png';
import giftContactImage from '../assets/images/gift-contact.png';
import phoneIcon from '../assets/icons/gphone.png';
import emailIcon from '../assets/icons/gmail.png';
import socialIcon from '../assets/icons/gnotification.png';
import linkedinIcon from "../assets/icons/linkdin.png";
import facebookIcon from "../assets/icons/gfacebook.png";
import instagramIcon from "../assets/icons/ginsta.png";
import otherIcon from "../assets/icons/youtube.png";
import pinterestIcon from "../assets/icons/pintrest.png";
import FaqSection from '../components/FaqSection/FaqSection';
import ReferEarn from '../components/ReferEarn/ReferEarn';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <div className={styles.contactPage}>
        <header className={styles.heroBanner} style={{ backgroundImage: `url(${bannerBg})` }}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>Created by parents in an endeavor to give the best</p>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.getInTouch}>
            <h2 className={styles.sectionTitle}>Get in touch</h2>
            <p className={styles.sectionText}>
              Have questions or need assistance? We're here to help! Reach out to us for inquiries about products, orders, or collaborations. Fill out the form below, email us, or give us a call – we'd love to hear from you!
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <img src={phoneIcon} alt="Phone" className={styles.infoIcon} />
                <p>(+91) 9811130502, 8929385402,<br />011-45509254</p>
              </div>

              <hr className={styles.divider} />

              <div className={styles.infoItem}>
                <img src={emailIcon} alt="Email" className={styles.infoIcon} />
                <p>admin@tbs.studio</p>
              </div>

              <hr className={styles.divider} />

              {/* ✅ Social Media section alag banaya */}
              <div className={styles.infoItem}>
                <img src={socialIcon} alt="Social Media" className={styles.infoIcon} />
                <p>Social Media</p>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <img src={otherIcon} alt="YouTube" className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="Pinterest">
                    <img src={pinterestIcon} alt="Pinterest" className={styles.socialIcon} />
                  </a>
                </div>
              </div>
            </div>


          </div>

          <div className={styles.contactFormContainer}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank You!</h3>
                <p>Your message has been submitted successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Ask A Question</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <input type="text" name="name" placeholder="Name*" required />
                    <input type="email" name="email" placeholder="Email Address" />
                  </div>
                  <textarea name="message" placeholder="Message*" rows="6" required></textarea>
                  <button type="submit" className={styles.submitButton}>
                    Send Message 
                    <svg className={styles.submitArrow} width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.22461 5.71753H12.3791" stroke="#9EB7A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.89355 1.18579L13.7737 5.71747L8.89355 10.2491" stroke="#9EB7A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  </button>
                </form>
              </>
            )}
          </div>
        </main>
      </div>

      <FloatingIcons />
      <GiftCard 
        leftImage={giftContactImage}
      />
      <FaqSection />
      <ReferEarn />
      
    </>
  );
};

export default ContactPage;