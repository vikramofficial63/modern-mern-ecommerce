import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return toast.error('Please fill all fields');
    }
    const res = await fetch('https://modern-mern-ecommerce.onrender.com/add-product', {
      method: 'POST',
      body: JSON.stringify({ name, price, category, company }),
      headers: { 'Content-Type': 'application/json' },
    });
    await res.json();
    toast.success('Product added successfully!');
    navigate('/shop');
  };

  return (
    <div className="form-page">
      <div className="glass-card form-card">
        <h1>Add New Product</h1>
        <p>Fill in the product details below</p>
        <div className="form-group">
          <label className="form-label">Product Name</label>
          <input className="form-input" placeholder="e.g. Wireless Headphones" value={name} onChange={(e) => setName(e.target.value)} />
          {error && !name && <p className="form-error">Name is required</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Price (₹)</label>
          <input className="form-input" placeholder="e.g. 2999" value={price} onChange={(e) => setPrice(e.target.value)} />
          {error && !price && <p className="form-error">Price is required</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Category</label>
          <input className="form-input" placeholder="e.g. Electronics" value={category} onChange={(e) => setCategory(e.target.value)} />
          {error && !category && <p className="form-error">Category is required</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Brand</label>
          <input className="form-input" placeholder="e.g. Sony" value={company} onChange={(e) => setCompany(e.target.value)} />
          {error && !company && <p className="form-error">Brand is required</p>}
        </div>
        <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
