import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="login-page">
      <Header />
      
      <main className="login-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="login-card"
        >
          <h2>Doctor Login</h2>
          <p className="login-subtitle">Access the Brain Tumor Prediction System</p>
          
          <form className="login-form">
            <div className="login-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your hospital email"
                required
              />
            </div>
            
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <Link to="/register">Request access</Link></p>
            <p><Link to="/forgot-password">Forgot password?</Link></p>
          </div>
        </motion.div>
        
        <div className="login-security-features">
          <h3>Secure Access</h3>
          <p>This portal is restricted to authorized medical professionals only.</p>
          <div className="login-security-badges">
            <div className="login-badge">
              <span>🔒</span> End-to-end encryption
            </div>
            <div className="login-badge">
              <span>🏥</span> HIPAA compliant
            </div>
            <div className="login-badge">
              <span>🛡️</span> Two-factor authentication
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;