import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

// Main Banner Images (Ensure these paths are correct and images exist)
// IMPORTANT: Yeh images mein hi ab aapke saare decorative elements (ribbons, polaroids,
// stars, moons, clouds, wavy bottoms, dotted borders) hone chahiye, jaisa aapne bataya.
import heroBackground1 from '../../assets/images/hero-background.png'; 
import heroBackground2 from '../../assets/images/banner2.png';    
import heroBackground3 from '../../assets/images/banner3.jpg';     

// Trust Bar & Floating Action Icons (these are separate icons, so they are kept)
import happyCustomersIcon from '../../assets/icons/customers.png';
import nonToxicIcon from '../../assets/icons/non-toxic.png';
import certificateIcon from '../../assets/icons/certificate.png';
import yearsIcon from '../../assets/icons/years.png';
import giftIcon from '../../assets/icons/gift.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

const HeroSection = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Define your banners here. Ab koi bhi decorative element properties jaise hasRibbon, polaroidImages nahi honge.
  const banners = [
    {
      image: heroBackground1, // Use a suitable image for this one
      alt: "Nursery with elegant furniture",
      title: "From Sketch to Storybook Spaces",
      description: "Luxury furniture and bespoke nursery interiors,<br />crafted for your little one's world.",
      buttonText: "Shop Now",
      buttonLink: "/shop",
      overlayShapeClass: styles.overlaySolidPanel, // Simple solid green panel
      contentPositionClass: styles.contentLeft,
      customClassName: 'banner-one',
    },
    {
      // Matches your provided screenshot for "Dream Nurseries, Realized"
      // Assuming banner2.png has the moon/stars/clouds in the top-left and the background scene.
      // The green panel's wavy bottom will be done with CSS clip-path.
      image: heroBackground2,
      alt: "Cozy baby room with wooden crib",
      title: "Your Style, Your Story",
      description: "Designs that feel like you, down to the smallest detail.",
      buttonText: "Talk to Our Stylist",
      buttonLink: "/shop",
      overlayShapeClass: styles.overlayWavyBottomPanel, // New class for wavy bottom panel
      contentPositionClass: styles.contentLeft,
      customClassName: 'banner-two',
    },
    {
      image: heroBackground3, // This image should include the ribbon, polaroids, and dotted border
      alt: "Designed with Love for Little Ones",
      title: "Designed with Love for <br /> Little Ones",
      description: "Beautiful designs that brighten their day and yours.",
      buttonText: "Talk to Our Stylist",
      buttonLink: "/contact",
      overlayShapeClass: styles.overlaySolidPanel, // A simple solid panel over the pre-existing green area
      contentPositionClass: styles.contentLeft,
      customClassName: 'banner-three',
    },
  ];

  const trustFeatures = [
    { icon: happyCustomersIcon, title: '10,000+', text: 'Happy Customers' },
    { icon: nonToxicIcon, title: '100%', text: 'Non Toxic' },
    { icon: certificateIcon, title: 'ISO', text: 'Certified' },
    { icon: yearsIcon, title: '10+', text: 'Years of Trust' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        (prevIndex + 1) % banners.length
      );
    }, 10000); // Change banner every 5 seconds (adjust if needed)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [banners.length]);

  const currentBanner = banners[currentBannerIndex];

  return (
    <section>
      <div className={styles.heroContainer}>
        {/* The main banner image. All background decorative elements are part of this image. */}
        <img
          src={currentBanner.image}
          alt={currentBanner.alt}
          className={`${styles.heroImage} ${(currentBanner.customClassName === 'banner-two' || currentBanner.customClassName === 'banner-three') ? styles.heroImageLeft : ''}`}
        />

        {/* This wrapper applies the green overlay panel's shape/background,
            and positions the text content block inside it. */}
        <div className={`${styles.bannerContentWrapper} ${currentBanner.overlayShapeClass} ${currentBanner.customClassName ? styles[currentBanner.customClassName] : ''}`}>

          <div className={styles['banner-text']}>
            {/* This div holds the actual text content and button */}
            <div className={`${styles.heroContent} ${currentBanner.contentPositionClass}`}>
              <h1>
                {currentBanner.title.split('<br />').map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 ? <span className={styles.paddedTitleLine}>{line}</span> : line}
                    {index < currentBanner.title.split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <p className={styles.heroDescription}> {/* Corrected className */}
                {currentBanner.description.split('<br />').map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 ? <span className={styles.paddedLine}>{line}</span> : line}
                    {index < currentBanner.description.split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <Link to={currentBanner.buttonLink}>
                  <button className={styles.shopButton}>
                    {currentBanner.customClassName === 'banner-two' && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon}>
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#29A71A"/>
                        <path d="M14.409 5.59103C13.3686 4.54023 11.9869 3.89582 10.5132 3.77401C9.0395 3.65221 7.57078 4.06104 6.37196 4.92676C5.17314 5.79248 4.32315 7.0581 3.97529 8.49534C3.62744 9.93257 3.80463 11.4468 4.4749 12.7649L3.81695 15.9592C3.81012 15.991 3.80993 16.0239 3.81638 16.0557C3.82283 16.0876 3.83579 16.1178 3.85445 16.1444C3.88178 16.1849 3.92079 16.216 3.96627 16.2336C4.01176 16.2513 4.06155 16.2547 4.10899 16.2433L7.23968 15.5013C8.55407 16.1546 10.0576 16.3204 11.4828 15.9691C12.9079 15.6179 14.1623 14.7725 15.0226 13.5833C15.8829 12.394 16.2934 10.9381 16.181 9.47466C16.0687 8.01117 15.4408 6.635 14.409 5.59103ZM13.4329 13.3819C12.713 14.0998 11.786 14.5736 10.7826 14.7367C9.77915 14.8998 8.74983 14.7439 7.83968 14.291L7.40331 14.0751L5.48399 14.5297L5.48968 14.5058L5.8874 12.574L5.67377 12.1524C5.20872 11.2391 5.04467 10.202 5.20511 9.18972C5.36556 8.17745 5.84227 7.24192 6.56695 6.51717C7.47752 5.60688 8.71236 5.0955 9.9999 5.0955C11.2875 5.0955 12.5223 5.60688 13.4329 6.51717C13.4406 6.52606 13.449 6.53441 13.4579 6.54217C14.3571 7.45481 14.8592 8.68596 14.8545 9.96721C14.8498 11.2485 14.3388 12.4759 13.4329 13.3819Z" fill="white"/>
                        <path d="M13.2622 11.9649C13.027 12.3354 12.6554 12.7888 12.1884 12.9013C11.3702 13.099 10.1145 12.9081 8.55199 11.4513L8.53268 11.4342C7.15881 10.1604 6.80199 9.10014 6.88836 8.25923C6.93608 7.78196 7.33381 7.35014 7.66904 7.06833C7.72204 7.02309 7.78489 6.99089 7.85256 6.97429C7.92023 6.95769 7.99084 6.95715 8.05876 6.97272C8.12667 6.98829 8.19 7.01954 8.24368 7.06396C8.29736 7.10838 8.3399 7.16475 8.3679 7.22855L8.87358 8.36492C8.90644 8.4386 8.91862 8.51984 8.90881 8.59991C8.899 8.67999 8.86758 8.75589 8.8179 8.81946L8.56222 9.15128C8.50736 9.21979 8.47425 9.30316 8.46717 9.39064C8.46008 9.47813 8.47933 9.56574 8.52245 9.64219C8.66563 9.89332 9.00881 10.2626 9.38949 10.6047C9.81677 10.9911 10.2906 11.3445 10.5906 11.4649C10.6709 11.4977 10.7592 11.5057 10.844 11.4879C10.9289 11.4701 11.0065 11.4272 11.0668 11.3649L11.3634 11.0661C11.4206 11.0096 11.4918 10.9694 11.5696 10.9494C11.6475 10.9294 11.7292 10.9305 11.8065 10.9524L13.0077 11.2933C13.0739 11.3136 13.1347 11.3489 13.1852 11.3963C13.2358 11.4436 13.2748 11.502 13.2994 11.5668C13.324 11.6316 13.3334 11.7012 13.3269 11.7702C13.3205 11.8392 13.2984 11.9058 13.2622 11.9649Z" fill="white"/>
                      </svg>
                      
                    )}
                    {currentBanner.buttonText}
                  </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Bar Overlay */}
        <div className={styles.trustBarOverlay}>
          <div className={styles.trustBarContainer}>
            {trustFeatures.map((feature, index) => (
              <div key={index} className={styles.trustItem}>
                <img src={feature.icon} alt={feature.text} />
                <div className={styles.trustText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;