import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="navbar-brand">
            <ShoppingBag size={22} color="#d4af37" />
            <span>Luxora</span>
          </div>
          <p>Premium e-commerce store built with MERN stack. Curated products, seamless shopping experience.</p>
        </div>
        <div>
          <h4 className="footer-heading">Shop</h4>
          <ul className="footer-links">
            <li><NavLink to="/shop">All Products</NavLink></li>
            <li><NavLink to="/shop">New Arrivals</NavLink></li>
            <li><NavLink to="/shop">Categories</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Account</h4>
          <ul className="footer-links">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/addproduct">Add Product</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="mailto:support@luxora.com">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Luxora E-Commerce Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
