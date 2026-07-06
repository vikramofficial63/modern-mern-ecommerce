import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Trash2, Edit } from 'lucide-react';
import toast from 'react-hot-toast';

const getImage = (item, i) =>
  item.image || `https://picsum.photos/seed/${item._id || i}/400/300`;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const auth = localStorage.getItem('user');

  useEffect(() => { getProducts(); }, []);

  const getProducts = async () => {
    try {
      const res = await fetch('https://modern-mern-ecommerce.onrender.com/products');
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch {
      setProducts([]);
    }
  };

  const deleteProduct = async (id) => {
    const res = await fetch(`https://modern-mern-ecommerce.onrender.com/product/${id}`, { method: 'DELETE' });
    const result = await res.json();
    if (result) {
      toast.success('Product deleted');
      getProducts();
    }
  };

  const searchHandle = async (e) => {
    const key = e.target.value;
    if (key) {
      const res = await fetch(`https://modern-mern-ecommerce.onrender.com/search/${key}`);
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } else {
      getProducts();
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="page-header">
        <h1>Our Products</h1>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Explore our curated collection of premium products
        </p>
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search by name, price, category, brand..." onChange={searchHandle} />
        </div>
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((item, i) => (
            <div key={item._id} className="glass-card product-card">
              <div className="product-card-image">
                <img src={getImage(item, i)} alt={item.name} />
                <span className="product-card-badge">{item.category}</span>
              </div>
              <div className="product-card-body">
                <p className="product-card-brand">{item.company}</p>
                <h3 className="product-card-name">{item.name}</h3>
                <p className="product-card-price">₹{item.price}</p>
                {auth && (
                  <div className="product-card-actions">
                    <NavLink to={`/updateproduct/${item._id}`} className="btn btn-outline btn-sm" style={{ flex: 1 }}>
                      <Edit size={14} /> Edit
                    </NavLink>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(item._id)}>
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state glass-card">
          <h3>No Products Found</h3>
          <p>{auth ? 'Add your first product to get started.' : 'Check back soon for new arrivals.'}</p>
          {auth && (
            <NavLink to="/addproduct" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Add Product
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
