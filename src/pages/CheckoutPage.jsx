// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1); // 1 for address, 2 for payment
  const [addressInfo, setAddressInfo] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (addressInfo.name && addressInfo.address && addressInfo.city && addressInfo.pincode) {
      setStep(2); // Move to payment step
    } else {
      alert('Please fill in all address fields.');
    }
  };

  const handlePlaceOrder = (paymentMethod) => {
    // 1. Calculate dates
    const orderDate = new Date();
    const arrivalDate = new Date();
    arrivalDate.setDate(orderDate.getDate() + 5);

    // 2. Create the order object
    const newOrder = {
      id: `TBS-${Date.now()}`, // Simple unique ID
      date: orderDate.toLocaleDateString(),
      arrivalDate: arrivalDate.toLocaleDateString(),
      status: 'Store received your order',
      items: cartItems,
      address: addressInfo,
      paymentMethod,
      total: subtotal,
    };

    // 3. Save order to localStorage (simulating a backend)
    const existingOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
    localStorage.setItem('myOrders', JSON.stringify([...existingOrders, newOrder]));

    // 4. Clear the cart
    clearCart();

    // 5. Redirect to success page
    navigate('/order-success', { state: { orderId: newOrder.id } });
  };
  
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.discountedPrice.replace(/,/g, ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className={styles.checkoutContainer}>
      {step === 1 && (
        <form onSubmit={handleSaveAddress} className={styles.addressForm}>
          <h2>Shipping Address</h2>
          <input type="text" name="name" placeholder="Full Name" value={addressInfo.name} onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Address" value={addressInfo.address} onChange={handleInputChange} required />
          <input type="text" name="city" placeholder="City" value={addressInfo.city} onChange={handleInputChange} required />
          <input type="text" name="pincode" placeholder="Pincode" value={addressInfo.pincode} onChange={handleInputChange} required />
          <button type="submit">Save and Continue</button>
        </form>
      )}

      {step === 2 && (
        <div className={styles.paymentSection}>
          <h2>Payment Options</h2>
          <div className={styles.orderSummary}>
            <h3>Order Summary</h3>
            {cartItems.map(item => (
              <p key={item.id}>{item.name} x {item.quantity}</p>
            ))}
            <h4>Total: ₹{subtotal.toLocaleString('en-IN')}</h4>
          </div>
          <div className={styles.paymentButtons}>
            <button onClick={() => handlePlaceOrder('Pay Now (Simulated)')}>Pay Now</button>
            <button onClick={() => handlePlaceOrder('Cash on Delivery')} className={styles.codButton}>Cash on Delivery (COD)</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;