// src/pages/MyOrdersPage.jsx
import React, { useEffect, useState } from 'react';
import styles from './MyOrdersPage.module.css';

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
        // Show the most recent orders first
        setOrders(storedOrders.reverse()); 
    }, []);

    if (orders.length === 0) {
        return <div className={styles.noOrders}>You have not placed any orders yet.</div>;
    }

    return (
        <div className={styles.ordersContainer}>
            <h1>My Orders</h1>
            {orders.map(order => (
                <div key={order.id} className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                        <div>
                            <span>ORDER PLACED</span>
                            <span>{order.date}</span>
                        </div>
                        <div>
                            <span>TOTAL</span>
                            <span>₹{order.total.toLocaleString('en-IN')}</span>
                        </div>
                        <div>
                            <span>ORDER # {order.id}</span>
                        </div>
                    </div>
                    <div className={styles.orderDetails}>
                        <h3>{order.status}</h3>
                        <p>Estimated Arrival: {order.arrivalDate}</p>
                        {order.items.map(item => (
                            <div key={item.id} className={styles.orderItem}>
                                <img src={item.images ? item.images[0] : ''} alt={item.name} />
                                <div>
                                    <strong>{item.name}</strong>
                                    <span>Qty: {item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyOrdersPage;