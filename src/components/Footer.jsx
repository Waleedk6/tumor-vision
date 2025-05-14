import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHospital, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="app-footer"
    >
      <div className="footer-container">
        <div className="footer-section">
          <h3>NeuroScan AI</h3>
          <p>Advanced brain tumor detection system for medical professionals.</p>
          <div className="social-links">
            <a href="https://github.com" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#api">API</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <div className="compliance-badge">
            <FaShieldAlt className="badge-icon" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="hospital-partner">
            <FaHospital className="partner-icon" />
            <span>Partner Hospitals</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NeuroScan AI. All rights reserved.</p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;