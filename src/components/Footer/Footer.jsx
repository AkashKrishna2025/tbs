// src/components/Footer/Footer.jsx
import React, { useState } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/logo.png';
import emailIcon from '../../assets/icons/mail.png';
import phoneIcon from '../../assets/icons/call.png';
import locationIcon from '../../assets/icons/location.png';
import facebookIcon from '../../assets/icons/facebook.png';
import instagramIcon from '../../assets/icons/insta.png';
import FooterImage from '../../assets/images/footer.png'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      alert('Please enter a valid email');
      return;
    }

    setIsSubscribed(true);
    setEmail('');

    // 5 sec baad message hide karne ke liye
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        {/* Column 1: Contact Info */}
        <div className={styles.contactInfo}>
          <img src={logo} alt="TBS Studio" className={styles.logo} />
          <ul className={styles.contactList}>
            <li><img src={emailIcon} alt="email"/>admin@tbs.studio</li>
            <li><img src={phoneIcon} alt="phone"/>(+91) 9811130502, 8929381402, 011-45591254</li>
            <li><img src={locationIcon} alt="location"/>The Studio Unit no.201 & 202, 2nd Floor, opp. Metro pillar no.9, The Marquee Building, M. G. Road, Sultanpur, New Delhi - 110030</li>
          </ul>
        </div>
        
        {/* Link Columns */}
        <div className={styles.linksColumn}>
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Blogs & News</a></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Cots, Beds & Cradles</a></li>
            <li><a href="#">Changing Tables</a></li>
            <li><a href="#">Storage & Lifestyle</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Mattresses</a></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Thoughts, news & Information</a></li>
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div className={styles.newsletter}>
          <h4>Join our email list</h4>
          <p>Subscribe to our newsletter to receive your 10% discount code.</p>

          {isSubscribed ? (
            <div className={styles.successMessage}>
              ✅ Mail Subscribe Successfully!
            </div>
          ) : (
            <form className={styles.emailInput} onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              <button type="submit">&rarr;</button>
            </form>
          )}

          <div className={styles.socialIcons}>
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <img src={FooterImage} alt="Little Spaces Big Love" className={styles.footerWatermark} />
      
      <div className={styles.footerBottom}>
        <p>© 2025 Tbs.studio, Powered by Shopify</p>
      </div>
    </footer>
  );
};

export default Footer;
