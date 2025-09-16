import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import styles from './MegaMenu.module.css';

const MegaMenu = ({ category }) => {
  if (!category) return null;

  return (
    <div className={styles.megaMenu}>
      <div className={styles.container}>
        {/* Left Section - No Changes Here */}
        <div className={styles.leftSection}>
          <div className={styles.categorySection}>
            <h3 className={`${styles.categoryTitle} ${category.name === 'Nursery, Bedding & Accessories' ? styles.longCategoryTitle : ''}`}>
              <Link to={`/collection/${category.id}`}>
                {category.name}
              </Link>
            </h3>
            
            <ul className={styles.subCategoryList}>
              {category.subCategories?.map(sub => (
                <li key={sub.id}>
                  <Link to={`/collection/${category.id}?sub=${sub.id}`}>
                    <FaChevronRight className={styles.subCategoryIcon} style={{ color: 'black' }} /> {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Updated Product Mapping */}
        <div className={styles.rightSection}>
          <div className={styles.featuredProducts}>
            {category.featuredProducts?.slice(0, 3).map(product => (
              // The <Link> is now our main product card container
              <Link to={`/product/${product.id}`} key={product.id} className={styles.featuredProduct}>
                <div className={styles.productImageContainer}>
                  <img src={product.image} alt={product.name} />
                </div>
                {/* The button is positioned relative to the Link container */}
                <div className={styles.viewProductBtn}>
                  View Product
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;