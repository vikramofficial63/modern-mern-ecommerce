import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) navigate('/');
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) return toast.error('Please fill all fields');
    const res = await fetch('https://modern-mern-ecommerce.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      toast.success(`Welcome back, ${result.name}!`);
      navigate('/');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-visual-glow" />
        <div className="auth-visual-content">
          <h2>Welcome to Luxora</h2>
          <p>Sign in to manage products, explore exclusive deals, and enjoy premium shopping.</p>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-form-box">
          <h1>Sign In</h1>
          <p>Enter your credentials to access your account</p>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={handleLogin}>
            Sign In
          </button>
          <p className="auth-switch">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
