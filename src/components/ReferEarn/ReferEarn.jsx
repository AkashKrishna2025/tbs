// src/components/ReferEarn/ReferEarn.jsx (पूरा और फ़ाइनल कोड)

import React from 'react';
import styles from './ReferEarn.module.css';

// --- अपनी पूरी बैकग्राउंड इमेज को यहाँ इम्पोर्ट करें ---
import referEarnBg from '../../assets/images/refer.png';

const ReferEarn = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.referSection}>
        {/* बैकग्राउंड इमेज */}
        <img src={referEarnBg} alt="Refer and Earn Rewards background" className={styles.backgroundImage} />

        {/* --- सारा टेक्स्ट कंटेंट --- */}
        <div className={styles.contentOverlay}>

          {/* हेडर */}


          {/* स्टेप्स */}






          {/* फुटर */}

        </div>
      </div>
    </div>
  );
};

export default ReferEarn;