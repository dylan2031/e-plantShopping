import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';  // Importing the action to add items to the cart
import './ProductList.css'; // Assuming you have a CSS file for styling

const ProductList = () => {
  // Sample products - this could be fetched from an API or props
  const products = [
    { name: 'Ficus', image: 'ficus.jpg', cost: 19.99 },
    { name: 'Cactus', image: 'cactus.jpg', cost: 9.99 },
    { name: 'Fern', image: 'fern.jpg', cost: 14.99 },
  ];

  // Accessing the cart state to get current cart items and their quantities
  const cart = useSelector(state => state.cart.items);  
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));  // Dispatching the addItem action to add the product
  };

  // Function to get the quantity of a specific product in the cart
  const getCartItemQuantity = (productName) => {
    const item = cart.find(item => item.name === productName);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.cost.toFixed(2)}</p>
            <div className="cart-actions">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <p>Quantity in Cart: {getCartItemQuantity(product.name)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
