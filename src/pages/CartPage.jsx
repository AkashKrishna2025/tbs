// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './CartPage.module.css';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate(); // Hook to navigate programmatically

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <h2>Your Shopping Cart is Empty</h2>
        <Link to="/" className={styles.continueShoppingBtn}>Continue Shopping</Link>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.discountedPrice.replace(/,/g, ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Shopping Cart</h1>
      <div className={styles.cartContent}>
        <div className={styles.cartItemsList}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImage}>
                {item.images && item.images.length > 0 ? (
                  <img src={item.images[0]} alt={item.name} />
                ) : (
                  <div className={styles.imagePlaceholder}>No Image</div>
                )}
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>₹{item.discountedPrice}</span>
              </div>
              <div className={styles.quantityControl}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <div className={styles.itemTotal}>
                ₹{(parseFloat(item.discountedPrice.replace(/,/g, '')) * item.quantity).toLocaleString('en-IN')}
              </div>
              <div className={styles.itemActions}>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <div className={styles.subtotal}>
            <span>Subtotal:</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          {/* Navigate to checkout page on click */}
          <button onClick={() => navigate('/checkout')} className={styles.checkoutBtn}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;