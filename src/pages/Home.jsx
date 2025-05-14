import React from 'react';
import Header from '../components/Header';
import UploadArea from '../components/UploadArea';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Advanced Brain Tumor Detection</h1>
            <p className="subtitle">
              AI-powered analysis of MRI scans for accurate tumor detection and classification
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="/assets/mri-scan.png" alt="MRI Scan" />
          </div>
        </section>
        
        <UploadArea />
        
        <section className="features-section">
          <h2>Why Choose Our System</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Analysis</h3>
              <p>Get results in seconds with our optimized deep learning models</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>High Accuracy</h3>
              <p>State-of-the-art algorithms with 98%+ accuracy in clinical trials</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>HIPAA-compliant data handling with end-to-end encryption</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;