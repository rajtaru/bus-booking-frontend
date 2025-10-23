import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div>
        <h2 className="register-title">Register</h2>
      <form className="register-form">
        <div className="form-grid">
          <div className="form-group">
            <label>PIN Number:</label>
            <input type="text" placeholder="Enter your PIN" />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input type="text" placeholder="Department" />
          </div>

          <div className="form-group">
            <label>Year of Study:</label>
            <input type="text" placeholder="Year of Study" />
          </div>
          <div className="form-group">
            <label>Set Password:</label>
            <input type="password" placeholder="Enter your Password" />
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your Password" />
          </div>
        </div>

        <p className="login-text">
          Already have an account? <Link to="/">Login</Link>
        </p>

        <button type="submit" className="register-btn">Register</button>
      </form>
      </div>
    </div>
  );
};

export default Register;
