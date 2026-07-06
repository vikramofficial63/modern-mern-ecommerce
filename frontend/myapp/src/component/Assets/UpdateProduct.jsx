import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  // ✅ FIXED: function inside useEffect scope (no ESLint issue)
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const res = await fetch(
          `https://modern-mern-ecommerce.onrender.com/product/${params.id}`
        );
        const result = await res.json();

        if (result.name) {
          setName(result.name);
          setPrice(result.price);
          setCategory(result.category);
          setCompany(result.company);
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to load product details');
      }
    };

    getProductDetails();
  }, [params.id]);

  const updateProduct = async () => {
    try {
      const res = await fetch(
        `https://modern-mern-ecommerce.onrender.com/product/${params.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ name, price, category, company }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      await res.json();
      toast.success('Product updated!');
      navigate('/shop');
    } catch (error) {
      console.log(error);
      toast.error('Update failed');
    }
  };

  return (
    <div className="form-page">
      <div className="glass-card form-card">
        <h1>Update Product</h1>
        <p>Edit the product details below</p>

        <div className="form-group">
          <label className="form-label">Product Name</label>
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price (₹)</label>
          <input
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <input
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Brand</label>
          <input
            className="form-input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={updateProduct}>
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;