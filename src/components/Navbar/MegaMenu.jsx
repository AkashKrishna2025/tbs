import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenu.module.css';

const MegaMenu = ({ category }) => {
  if (!category) return null;

  return (
    <div className={styles.megaMenu}>
      <div className={styles.container}>
        {/* Left Section - Category Navigation */}
        <div className={styles.leftSection}>
          <div className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>
              <Link to={`/collection/${category.id}`}>
                {category.name}
              </Link>
            </h3>
            
            <ul className={styles.subCategoryList}>
              {category.subCategories?.map(sub => (
                <li key={sub.id}>
                  <Link to={`/collection/${category.id}?sub=${sub.id}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Featured Products */}
        <div className={styles.rightSection}>
          <div className={styles.featuredProducts}>
            {category.featuredProducts?.slice(0, 3).map(product => (
              <div key={product.id} className={styles.featuredProduct}>
                <Link to={`/product/${product.id}`}>
                  <div className={styles.productImageContainer}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={styles.productOverlay}>
                    <button className={styles.viewProductBtn}>View Product</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Promotional Banner (if uncommented in JSX) */}
          {/* You can uncomment and add your promo banner content here if you have one */}
          {/* <div className={styles.promoBanner}>
            <div className={styles.promoContent}>
              <p className={styles.promoText}>Exclusive Offer!</p>
              <h4 className={styles.promoHighlight}>Get 10% Off Your First Order</h4>
            </div>
            <div className={styles.promoImage}>
              <img src="/path/to/promo-image.png" alt="Promo" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;