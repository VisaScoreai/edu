/**
 * Login component
 *
 * Authentication form for users to log into the SMM panel
 */

import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (credentials.email && credentials.password) {
      // For now, simulate successful login
      onLogin(credentials.email);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="login" className="min-height">
      <div className="login-container">
        <div className="login-form">
          <h1>SMM Panel Login</h1>
          <p>Welcome back! Please login to your account.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="#register">Register here</a></p>
            <p><a href="#forgot">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;