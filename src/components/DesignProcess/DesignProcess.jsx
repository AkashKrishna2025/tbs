import React from 'react';
import styles from './DesignProcess.module.css';

// Import number images from your local system
import number01 from '../../assets/icons/01.png';
import number02 from '../../assets/icons/02.png';
import number03 from '../../assets/icons/03.png';
import number04 from '../../assets/icons/04.png';
import number05 from '../../assets/icons/05.png';

const designSteps = [
  {
    number: '01',
    image: number01,
    title: 'Consultation',
    description: 'Understand your style & needs',
  },
  {
    number: '02',
    image: number02,
    title: 'Mood Board & 3D',
    description: 'Visualize the space',
  },
  {
    number: '03',
    image: number03,
    title: 'Bespoke Manufacturing',
    description: 'Crafted by our team',
  },
  {
    number: '04',
    image: number04,
    title: 'On-Site Execution',
    description: 'Precision installation',
  },
  {
    number: '05',
    image: number05,
    title: 'Final Styling',
    description: 'Ready for your little one',
  },
];

const DesignProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header section with heading and button */}
        <div className={styles.header}>
          <h2>Our Design Process</h2>
          <button className={styles.startButton}>
            Start Your Design Journey Here <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>

        {/* Grid for the five design process steps */}
        <div className={styles.stepsGrid}>
          {designSteps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepCard} ${index === designSteps.length - 1 ? styles.lastStepCard : ''}`}
            >
              {/* Image container for the number icon */}
              <div className={styles.stepNumberImageContainer}>
                <img src={step.image} alt={`Step ${step.number}`} className={styles.stepNumberImage} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;