// src/components/FaqSection/FaqSection.jsx (बिना डायनामिक - स्टैटिक कोड)

import React, { useState } from 'react';
import styles from './FaqSection.module.css';

// --- सवाल-जवाब सीधे यहीं लिखे गए हैं ---
const faqData = [
  {
    question: 'Is this made from real wood ?',
    answer: 'This cot is made out of reinforced engineered wood making it stronger and stable.'
  },
  {
    question: 'Can I join it with my bed?',
    answer: 'Yes, the design allows for easy attachment to most standard adult beds, ensuring your baby is always close by.'
  },
  {
    question: 'Can the sleeping level be the same as my bed?',
    answer: 'The cot comes with multiple adjustable height levels. You can easily set it to match the height of your bed.'
  },
  {
    question: 'Are the wheels lockable ?',
    answer: 'Absolutely. The wheels are designed with a secure locking mechanism to ensure the cot stays firmly in place.'
  },
  {
    question: 'Is the paint/polish safe for the baby?',
    answer: 'Yes, we only use non-toxic, child-safe paints and polishes that are certified to be free of any harmful chemicals.'
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // पहला सवाल खुला रहेगा

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Got Questions? We’ve Got Answers.</h2>
      <p className={styles.subtitle}>
        Find answers to common questions from our customers. Still need help?
      </p>

      <div className={styles.accordion}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.questionButton} onClick={() => handleToggle(index)}>
              <span className={styles.questionText}>{faq.question}</span>
              <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}></span>
            </button>
            {openIndex === index && (
              <div className={styles.answerPanel}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;