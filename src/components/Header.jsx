import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <Logo>
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }}>
              <span className="logo-icon">🧠</span>
              <span className="logo-text">NeuroScan</span>
            </motion.div>
          </Link>
        </Logo>

        <NavLinks isOpen={isOpen}>
          <Link to="#features">Features</Link>
          <Link to="#how-it-works">How It Works</Link>
          <Link to="/login" className="btn-outline">Login</Link>
          <Link to="/register" className="btn-primary">Get Started</Link>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.shadowSm};
  z-index: 1000;
  padding: 2rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.div`
  .logo-icon {
    font-size: 2.4rem;
    margin-right: 1rem;
  }

  .logo-text {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 500;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .btn-outline {
    padding: 1rem 2rem;
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.primary};
    font-weight: 600;

    &:hover {
      background: ${({ theme }) => theme.primaryLight};
    }
  }

  .btn-primary {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.primary};
    border-radius: 0.5rem;
    color: white;
    font-weight: 600;

    &:hover {
      background: ${({ theme }) => theme.primaryDark};
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 8rem;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.surface};
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    box-shadow: ${({ theme }) => theme.shadowMd};
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    transition: transform 0.3s ease-in-out;
    gap: 2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;