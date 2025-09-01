// src/components/ProductSlider/ProductSlider.jsx
import React, { useState, useRef } from 'react';
import styles from './ProductSlider.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { CATEGORIES, PRODUCTS } from '../../Data/products';
import leftArrow from '../../assets/icons/right.png';
import rightArrow from '../../assets/icons/left.png';


const ProductSlider = () => {
  const sliderRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('cots-cradles');

  const filteredProducts = PRODUCTS.filter(p => p.categoryId === activeFilter);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Products for Your Little One</h2>
          <p>Premium products for your loved ones</p>
        </div>

        <div className={styles.filters}>
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${activeFilter === category.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

       <div className={styles.sliderWrapper}>
  <button 
    className={`${styles.arrow} ${styles.leftArrow}`} 
    onClick={() => scroll('left')}
    aria-label="Previous products"
  >
    <img src={leftArrow} alt="Previous" className={styles.arrowIcon} />
  </button>
  
  <div className={styles.slider} ref={sliderRef}>
    {filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  
  <button 
    className={`${styles.arrow} ${styles.rightArrow}`} 
    onClick={() => scroll('right')}
    aria-label="Next products"
  >
    <img src={rightArrow} alt="Next" className={styles.arrowIcon} />
  </button>
</div>
      </div>
    </section>
  );
};

export default ProductSlider;