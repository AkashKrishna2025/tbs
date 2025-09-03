// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // अपने प्रोजेक्ट के अनुसार सही पाथ दें
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  // CartContext से हमें अब और फंक्शन और डेटा चाहिए
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  if (!product) {
    return null;
  }

  // यह जांचें कि क्या यह प्रोडक्ट पहले से कार्ट में है
  const itemInCart = cartItems.find(item => item.id === product.id);

  const displayImage = Array.isArray(product.images) && product.images.length > 0
    ? product.images[0]
    : product.image;

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.productLink}>
        <div className={styles.imageContainer}>
          <img src={displayImage} alt={product.name} className={styles.productImage} />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.rating}>
            <span className={styles.ratingStars}>★  </span>
            <span>{product.rating}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.reviewCount}>{product.reviews} happy parents</span>
          </div>

          <h3 className={styles.productName}>{product.name}</h3>

          <div className={styles.priceContainer}>
            {product.originalPrice && (
              <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
            <span className={styles.currentPrice}>₹{product.discountedPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </Link>

      {/* --- मुख्य लॉजिक यहाँ है --- */}
      <div className={styles.buttonContainer}>
        {itemInCart ? (
          // अगर आइटम कार्ट में है, तो क्वांटिटी सिलेक्टर दिखाएं
          <div className={styles.quantitySelector}>
            <button onClick={() => decreaseQuantity(product.id)} aria-label="Decrease quantity">-</button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => increaseQuantity(product.id)} aria-label="Increase quantity">+</button>
          </div>
        ) : (
          // अगर नहीं, तो "Add to Cart" बटन दिखाएं
          <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;