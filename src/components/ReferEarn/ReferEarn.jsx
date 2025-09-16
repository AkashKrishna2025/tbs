// src/components/ReferEarn/ReferEarn.jsx

import React from 'react';
import styles from './ReferEarn.module.css';

// --- Import the background image and individual product images ---
import referEarnBgImg from '../../assets/images/refer-and-earn-bg.png';
import referEarnLeftImg from '../../assets/images/refer-and-earn-left-img.png';
import referEarnRightImg from '../../assets/images/refer-and-earn-right-img.png';
import referEarnLine from '../../assets/images/refer-and-earn-line.png';

const ReferEarn = () => {
  return (
    <>
      <section className={styles.referEarnSection}>
        <h2 className={styles.title}>Refer & Earn Rewards</h2>
        <p className={styles.subtitle}>
          This is a limited-time offer, so don't wait! Tell your friends today and start earning rewards. 
        </p>
      </section>

       <section className={styles.stepSection}>
          <img
            src={referEarnLine}
            alt="Refer and Earn Line"
            className={styles.line}
          />
         <div className={styles.backgroundImage}>
          
           <img
             src={referEarnLeftImg}
             alt="Refer Left - Baby Products"
             className={styles.leftImage}
           />
           <img
             src={referEarnRightImg}
             alt="Refer Right - Baby Crib"
             className={styles.rightImage}
           />
           <p className={styles.contactText}>
             Need more details? Give us a call at 9811130502, 8929385402- we're here to help!
           </p>
           <img
             src={referEarnBgImg}
             alt="Refer and Earn Background"
             className={styles.bgImage}
           />
         </div>

         <div className={styles.stepsContent}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepTitle}>Step I</div>
            <div className={styles.stepDesc}>
              Shop for awesome goodies<br />
              from TBS Studio and tell a<br />
              friend about the fun!
            </div>
          </div>

          <div className={styles.stepItem + ' ' + styles.secondStepItem}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepTitle}>Step II</div>
            <div className={styles.stepDesc}>
              If your friend grabs some cool<br />
              stuff worth ₹50,000 or more,<br />
              you're in for a treat!
            </div>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepTitle}>Step III</div>
            <div className={styles.stepDesc}>
              You'll win a super fun cash<br />
              prize of ₹3000 to spend on<br />
              your favorite things!
            </div>
          </div>
         </div>
       </section>
      
      
    </>
  );
};

export default ReferEarn;