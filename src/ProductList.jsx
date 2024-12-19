import React, { useState } from 'react';
import CartItem from './CartItem'; // Ensure this path is correct for your project structure
import { Modal } from './Modal'; // If you're using a custom Modal component, ensure it's implemented and the path is correct

const ProductList = () => {
  // 1. Cart state: To store products added to the cart
  const [cart, setCart] = useState([]);

  // 2. Cart visibility state: To toggle the cart modal visibility
  const [showCart, setShowCart] = useState(false);

  // 3. Dummy product data (replace with your actual data or fetch from an API)
  const products = [
    { id: 1, name: 'Plant 1', price: 10 },
    { id: 2, name: 'Plant 2', price: 15 },
    { id: 3, name: 'Plant 3', price: 20 },
  ];

  // 4. Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // 5. Remove product from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 6. Toggle the cart modal visibility
  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <div>
      {/* Button to toggle cart visibility */}
      <button onClick={toggleCart}>Cart ({cart.length})</button> 
      
      {/* Cart Modal */}
      {showCart && (
        <Modal>
          <h2>Your Cart</h2>
          {/* If cart has items, show them, otherwise display an empty cart message */}
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem 
                key={index} // You can use the index here as a key if the product id is not unique
                product={item} 
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <button onClick={toggleCart}>Close</button>
        </Modal>
      )}
      
      {/* Displaying the list of products */}
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
