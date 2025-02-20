import React from 'react';
import './Cart.css';

interface CartProps {
  cart: any[];
  removeFromCart: (item: number) => void;
  getTotal: () => number;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, getTotal }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <span className="item-price">${item.price}</span>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  <i className="fas fa-trash-alt"></i> Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <div className="cart-total">Total: ${getTotal()}</div>
            <button className="checkout-button">
              <i className="fas fa-shopping-cart"></i> Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
