import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1>Advanced Brain Tumor Detection</h1>
            <p className="subtitle">
              AI-powered diagnostic tool to assist medical professionals in detecting brain tumors with 96.7% accuracy
            </p>
            <div className="cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Link to="/register">Get Started</Link>
              </motion.button>
              <button className="btn-outline">
                <Link to="/login">Medical Login</Link>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose TumorVision</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Rapid Analysis</h3>
              <p>Get results in under 30 seconds with our optimized deep learning models</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>96.7% Accuracy</h3>
              <p>Clinically validated models outperforming human radiologists</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>HIPAA Compliant</h3>
              <p>End-to-end encrypted data with strict access controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How TumorVision Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload MRI Scan</h3>
              <p>Drag and drop DICOM or standard image files</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Processing</h3>
              <p>Our model analyzes the scan for abnormalities</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p>Receive detailed report with highlighted areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Enhance Your Diagnostic Process?</h2>
          <Link to="/register" className="btn-primary">Start Free Trial</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;