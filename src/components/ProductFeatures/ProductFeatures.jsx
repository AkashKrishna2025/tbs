// src/components/ProductFeatures/ProductFeatures.jsx (पूरा और फ़ाइनल कोड)

import React from 'react';
import styles from './ProductFeatures.module.css';

// आइकन्स को इम्पोर्ट करें
import nonToxicIcon from '../../assets/icons/toxic.png';
import qualityIcon from '../../assets/icons/qulity.png';
import safetyIcon from '../../assets/icons/safety.png';
import builtToLastIcon from '../../assets/icons/build.png';

// फीचर्स का डेटा एक ऐरे में रखें ताकि कोड साफ़ रहे
const featuresData = [
  {
    icon: nonToxicIcon,
    title: 'Non Toxic Finish',
    description: 'All our products are finished with non toxic & food grade materials. We ensure that they are safe your little ones.',
  },
  {
    icon: qualityIcon,
    title: '6 Stage Quality Checks',
    description: 'Right from the time your order is received, till the product is delivered, our quality check division inspects the products at every stage. From cutting, carving, finishing, assembly, paint/ polish and packaging - thorough quality checks are conducted.',
  },
  {
    icon: safetyIcon,
    title: 'Safety Compliant',
    description: 'Tbs studio ensures all aspects of the product adhere to international levels of safety. We have developed and set standards for all stages and aspects of production after intense research.',
  },
  {
    icon: builtToLastIcon,
    title: 'Built To Last',
    description: 'Tbs studio products are made with strengthened materials to withstand the test of time. They have been tested against usage for babies as they tend to roll and jump. Our furniture lasts generations.',
  },
];


const ProductFeatures = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Product Features</h2>
      <div className={styles.featuresGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <img src={feature.icon} alt={feature.title} className={styles.icon} />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;