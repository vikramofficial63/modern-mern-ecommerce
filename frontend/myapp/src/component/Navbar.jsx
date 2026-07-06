import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const user = auth ? JSON.parse(auth) : null;
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const links = auth
    ? [
        { to: '/', label: 'Home' },
        { to: '/shop', label: 'Shop' },
        { to: '/addproduct', label: 'Add Product' },
      ]
    : [
        { to: '/', label: 'Home' },
        { to: '/shop', label: 'Shop' },
        { to: '/login', label: 'Login' },
        { to: '/signup', label: 'Sign Up' },
      ];

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="navbar-brand">
          <ShoppingBag size={26} color="#d4af37" />
          <span>Luxora</span>
        </NavLink>

        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} onClick={() => setMenuOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {auth && (
            <>
              <span className="navbar-user">
                Hi, <strong>{user.name}</strong>
              </span>
              <button className="btn btn-outline btn-sm" onClick={logout}>
                Logout
              </button>
            </>
          )}
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} onClick={() => setMenuOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
          {auth && (
            <li>
              <button className="btn btn-outline btn-sm" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
