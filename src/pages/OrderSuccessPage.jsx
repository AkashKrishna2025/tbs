// src/pages/OrderSuccessPage.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './OrderSuccessPage.module.css';

const OrderSuccessPage = () => {
    const location = useLocation();
    const orderId = location.state?.orderId;

    // Retrieve the specific order from localStorage to get the arrival date
    const allOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
    const currentOrder = allOrders.find(order => order.id === orderId);

    if (!currentOrder) {
        return (
            <div className={styles.successContainer}>
                <h2>Thank You For Your Order!</h2>
                <p>Your order details could not be found, but we have received your order.</p>
                <Link to="/my-orders" className={styles.actionButton}>View My Orders</Link>
            </div>
        );
    }
    
    return (
        <div className={styles.successContainer}>
            <h2>Store has received your order!</h2>
            <p>Thank you for your purchase.</p>
            <p>Your Order ID is: <strong>{currentOrder.id}</strong></p>
            <p className={styles.arrival}>Estimated Arrival Date: <strong>{currentOrder.arrivalDate}</strong></p>
            <Link to="/my-orders" className={styles.actionButton}>View My Orders</Link>
        </div>
    );
};

export default OrderSuccessPage;