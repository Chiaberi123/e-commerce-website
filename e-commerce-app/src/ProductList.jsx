// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Shirt', price: 20, image: '/shirt.jpg' },
  { id: 2, name: 'Jeans', price: 30, image: '/jeans.jpg' },
  // Add more products
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      <div className="auth-buttons">
        <Link to="/login" className="auth-button login-button">
          Login
        </Link>
        <Link to="/signup" className="auth-button signup-button">
          Sign Up
        </Link>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      <Link to="/cart" className="cart-link">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
