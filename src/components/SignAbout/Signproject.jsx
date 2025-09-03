// src/components/SignAbout/Signproject.jsx
import React, { useRef } from 'react';
import styles from './SignProjects.module.css'; // इस CSS मॉड्यूल का नाम SignProjects है, सुनिश्चित करें कि यह सही है या इसे Signproject.module.css में बदलें यदि आवश्यक हो।
import projectClouds from '../../assets/images/cloud.png';
import projectPerch from '../../assets/images/perch.png';
import LeftIcon from '../../assets/icons/right.png';
import RightIcon from '../../assets/icons/left.png';

const projects = [
  { id: 1, image: projectClouds, name: 'In The Clouds Theme' },
  { id: 2, image: projectPerch, name: 'Perch Theme' },
  { id: 3, image: projectClouds, name: 'Another Theme' },
  { id: 4, image: projectPerch, name: 'Yet Another Theme' },
  { id: 5, image: projectClouds, name: 'Final Theme' },
];

// 'SignatureProjects' को 'Signproject' में बदलें
const Signproject = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.querySelector(`.${styles.projectCard}`);
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(getComputedStyle(sliderRef.current).gap || '0px');

    const scrollAmount = cardWidth + gap;

    if (direction === 'left') {
      sliderRef.current.scrollLeft -= scrollAmount;
    } else {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className={`${styles.section} ${styles.sectionMarginTop}`}>
      <div className={styles.header}>
        <h2>Signature Projects</h2>
        <p>little spaces, big love</p>
      </div>
      <div className={styles.sliderContainer}>
        <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => scroll('left')} aria-label="Previous project">
          <img src={LeftIcon} alt="Previous" />
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.image} alt={project.name} className={styles.projectImage} />
              <a href="#" className={styles.cardCaption}>
                {project.name} &rarr;
              </a>
            </div>
          ))}
        </div>
        <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => scroll('right')} aria-label="Next project">
          <img src={RightIcon} alt="Next" />
        </button>
      </div>
    </section>
  );
};

// अब यह एक्सपोर्ट फ़ंक्शन के नाम से मेल खाता है
export default Signproject;