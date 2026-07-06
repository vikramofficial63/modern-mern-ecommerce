import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, RefreshCw } from 'lucide-react';

const categories = [
  { name: 'Electronics', count: '120+ items', icon: '📱' },
  { name: 'Fashion', count: '85+ items', icon: '👗' },
  { name: 'Home', count: '60+ items', icon: '🏠' },
  { name: 'Sports', count: '45+ items', icon: '⚽' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Verified Buyer', text: 'Luxora has the best curated products. Fast delivery and premium quality every time.', initial: 'P' },
  { name: 'Rahul Mehta', role: 'Premium Member', text: 'The shopping experience feels truly premium. Clean UI and smooth checkout flow.', initial: 'R' },
  { name: 'Ananya Patel', role: 'Verified Buyer', text: 'I showcase this store in my portfolio — the design and functionality are top-notch.', initial: 'A' },
];

const getImage = (item, i) =>
  item.image || `https://picsum.photos/seed/${item._id || i}/400/300`;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://modern-mern-ecommerce.onrender.com/products')
      .then((r) => r.json())
      .then((data) => setProducts(Array.isArray(data) ? data.slice(0, 4) : []))
      .catch(() => setProducts([]));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">✨ Premium E-Commerce Experience</div>
            <h1 className="hero-title">
              Shop the <span className="gradient">Future</span> of Retail
            </h1>
            <p className="hero-desc">
              Discover curated products with a seamless, modern shopping experience. Built with MERN stack for speed and reliability.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/signup" className="btn btn-outline">Create Account</Link>
            </div>
            <div className="hero-stat-row">
              <div className="hero-stat"><h3>500+</h3><p>Products</p></div>
              <div className="hero-stat"><h3>10K+</h3><p>Happy Customers</p></div>
              <div className="hero-stat"><h3>4.9</h3><p>Avg Rating</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-float-card side side-1 glass-card">
                <p style={{ color: 'var(--accent)', fontWeight: 700 }}>Free Shipping</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>On orders over ₹999</p>
              </div>
              <div className="hero-float-card main glass-card">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=280&fit=crop" alt="Store" style={{ borderRadius: 12, marginBottom: 12 }} />
                <p style={{ fontWeight: 600 }}>New Collection 2026</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Up to 40% off selected items</p>
              </div>
              <div className="hero-float-card side side-2 glass-card">
                <p style={{ color: 'var(--violet)', fontWeight: 700 }}>Secure Pay</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>100% protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <span className="section-label">Categories</span>
          <h2 className="section-title">Browse by Category</h2>
          <div className="category-grid" style={{ marginTop: '2rem' }}>
            {categories.map((c) => (
              <Link to="/shop" key={c.name} className="glass-card category-card">
                <div className="category-icon" style={{ fontSize: '1.5rem' }}>{c.icon}</div>
                <h3>{c.name}</h3>
                <p>{c.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <span className="section-label">Featured</span>
          <h2 className="section-title">Trending Products</h2>
          <div className="product-grid" style={{ marginTop: '2rem' }}>
            {products.length > 0 ? products.map((item, i) => (
              <div key={item._id} className="glass-card product-card">
                <div className="product-card-image">
                  <img src={getImage(item, i)} alt={item.name} />
                  <span className="product-card-badge">{item.category}</span>
                </div>
                <div className="product-card-body">
                  <p className="product-card-brand">{item.company}</p>
                  <h3 className="product-card-name">{item.name}</h3>
                  <p className="product-card-price">₹{item.price}</p>
                </div>
              </div>
            )) : (
              <p className="section-subtitle">Add products from admin panel to see featured items here.</p>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/shop" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <span className="section-label">Why Luxora</span>
          <h2 className="section-title">Built for Premium Shopping</h2>
          <div className="features-grid" style={{ marginTop: '2rem' }}>
            {[
              { icon: Truck, title: 'Free Delivery', desc: 'Fast shipping on all orders' },
              { icon: Shield, title: 'Secure Payment', desc: '100% protected transactions' },
              { icon: Headphones, title: '24/7 Support', desc: 'Always here to help you' },
              { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card feature-card">
                <div className="feature-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">What Customers Say</h2>
          <div className="testimonial-grid" style={{ marginTop: '2rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#d4af37" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box glass-card">
            <h2 className="section-title">Stay in the Loop</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Get exclusive deals and new arrivals delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input className="form-input" type="email" placeholder="Enter your email" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
