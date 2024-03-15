// CartPage.jsx
import React from 'react';
import './CartPage.css';

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">
                  ${item.price} x {item.quantity} = ${item.price * item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-cart-message">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
