import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';  // Importing the necessary actions
import './CartItem.css'; // Assuming you have a CSS file for styling

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);  // Fetching cart items from Redux store
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
  };

  // Handle continue shopping action
  const handleContinueShopping = () => {
    onContinueShopping();  // Callback to go back to the product list
  };

  // Handle increment of item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrement of item quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));  // Remove the item if quantity is 1
    }
  };

  // Handle removal of item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));  // Remove item from cart
  };

  // Calculate total cost for a specific item
  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>  {/* Display total cart amount */}
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty. Start shopping!</p>  {/* If cart is empty */}
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">${item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}  // Decrement button
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}  // Increment button
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>  {/* Total cost for item */}
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>  {/* Remove button */}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>  {/* Continue shopping button */}
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={() => alert('Functionality to be added for future reference')}>
          Checkout  {/* Placeholder button */}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
