// src/components/TestimonialSection/TestimonialSection.jsx (New and Functional Code)

import React, { useState } from 'react'; // Import useState
import styles from './TestimonialSection.module.css';

// Import assets
import testimonialImage1 from '../../assets/images/partner.png';
import authorAvatar1 from '../../assets/images/avtar.png';
import quoteIcon from '../../assets/icons/q-icon.png';
import testImage from '../../assets/images/test-bg.jpg'

// Create a dummy data array for the slider
const testimonials = [
  {
    id: 1,
    image: testimonialImage1,
    quote: "Well-designed and useful, inexpensive products.",
    avatar: authorAvatar1,
    name: "Siddhant Rana",
    title: "(Market Development Head)"
  },
  {
    id: 2,
    image: testimonialImage1, // Using the same image for dummy data
    quote: "The quality and design exceeded all our expectations. Highly recommended!",
    avatar: authorAvatar1, // Using the same avatar
    name: "Jane Doe",
    title: "(Happy Parent)"
  },
  {
    id: 3,
    image: testimonialImage1, // Using the same image for dummy data
    quote: "A perfect blend of style and safety for our little one's room.",
    avatar: authorAvatar1, // Using the same avatar
    name: "John Smith",
    title: "(Interior Designer)"
  }
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Trusted by Parents</h2>
        <p>We can create one of a kind piece of baby furniture suited to your needs.</p>
      </div>

      {/* Slider Wrapper */}
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {/* Map over the testimonials array */}
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.slide}>
              <div className={styles.imageContainer}>
                <img src={testimonial.image} alt="Parent with child and cot" />
              </div>
              <div
  className={styles.testimonialCard}>
 


                
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.quoteText}>{testimonial.quote}</p>
                <div className={styles.author}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination */}
      <div className={styles.pagination}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;