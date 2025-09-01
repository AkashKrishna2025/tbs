// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSendOtp = (e) => {
    e.preventDefault();
    // In a real app, you would call an API here.
    // For now, we just pretend an OTP was sent.
    console.log(`Sending OTP to ${mobile}`);
    setOtpSent(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (otp === '0000') {
      login(); // Set authenticated state
      navigate('/cart'); // Redirect to cart page after successful login
    } else {
      alert('Invalid OTP. Please enter 0000.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login / Signup</h2>
        {!otpSent ? (
          <form onSubmit={handleSendOtp}>
            <p>Enter your mobile number to continue</p>
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <button type="submit">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <p>Enter the OTP sent to {mobile}</p>
            <input 
              type="text" 
              placeholder="0000"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;