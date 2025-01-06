import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Ensure the path to CartSlice is correct

const ProductList = ({ plantsArray }) => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the action to add the product to the cart
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-price">${plant.price}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
