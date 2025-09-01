import React, { useRef } from 'react';
import styles from './SignatureProjects.module.css';
import projectClouds from '../../assets/images/cloud.png';
import projectPerch from '../../assets/images/perch.png';
import LeftIcon from '../../assets/icons/right.png'; // ध्यान दें: 'right.png' से LeftIcon इम्पोर्ट हो रहा है।
import RightIcon from '../../assets/icons/left.png'; // ध्यान दें: 'left.png' से RightIcon इम्पोर्ट हो रहा है।

const projects = [
  { id: 1, image: projectClouds, name: 'In The Clouds Theme' },
  { id: 2, image: projectPerch, name: 'Perch Theme' },
  { id: 3, image: projectClouds, name: 'Another Theme' },
  { id: 4, image: projectPerch, name: 'Yet Another Theme' },
  { id: 5, image: projectClouds, name: 'Final Theme' },
];

const SignatureProjects = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    // पहले प्रोजेक्ट कार्ड का साइज़ और गैप पता करें
    const firstCard = sliderRef.current.querySelector(`.${styles.projectCard}`);
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    // गैप को CSS से पढ़ें, यदि उपलब्ध हो
    const gap = parseFloat(getComputedStyle(sliderRef.current).gap || '0px');

    const scrollAmount = cardWidth + gap; // एक कार्ड की चौड़ाई और उसके बाद का गैप

    if (direction === 'left') {
      sliderRef.current.scrollLeft -= scrollAmount;
    } else {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Signature Projects</h2>
        <p>little spaces, big love</p>
      </div>
      <div className={styles.sliderContainer}>
        <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => scroll('left')} aria-label="Previous project">
          {/* नोट: LeftIcon अभी 'right.png' से इम्पोर्ट हो रहा है। यदि यह बाएँ तरफ इशारा करना चाहिए, तो सुनिश्चित करें कि इमेज फाइल सही है। */}
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
          {/* नोट: RightIcon अभी 'left.png' से इम्पोर्ट हो रहा है। यदि यह दाहिने तरफ इशारा करना चाहिए, तो सुनिश्चित करें कि इमेज फाइल सही है। */}
          <img src={RightIcon} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default SignatureProjects;