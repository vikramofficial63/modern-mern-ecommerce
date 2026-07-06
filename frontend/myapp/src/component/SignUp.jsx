import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) navigate('/');
  }, [navigate]);

  const collectData = async () => {
    if (!name || !email || !password) return toast.error('Please fill all fields');
    const res = await fetch('https://modern-mern-ecommerce.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    if (result._id || result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      toast.success('Account created successfully!');
      navigate('/');
    } else {
      toast.error('Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-visual-glow" />
        <div className="auth-visual-content">
          <h2>Join Luxora</h2>
          <p>Create your account and start exploring our premium product collection today.</p>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-form-box">
          <h1>Create Account</h1>
          <p>Fill in your details to get started</p>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={collectData}>
            Create Account
          </button>
          <p className="auth-switch">Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
