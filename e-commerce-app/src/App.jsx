// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import ProductList from './ProductList';
import CartPage from './CartPage';

const App = () => {
  // Sample cart state
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    // Add your logic to update the cart state
    // This is just a simple example, you may need to update based on your application's logic
    setCart([...cart, { ...product, quantity }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
