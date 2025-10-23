import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP sent to:', mobile);
    // You can later integrate with backend OTP API here
  };

  return (
    <div className="forgot-container">
      <h2 className="forgot-title">Forgot Password</h2>
      <form className="forgot-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <p className="login-link">
          Have Password? <Link to="/">Login</Link>
        </p>

        <button type="submit" className="otp-btn">
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
