import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem'; // Import CartItem component
import './App.css';
import { Provider } from 'react-redux';
import store from './store'; // Assuming your store setup is in 'store.js'

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
            <div className="background-image"></div>
            <div className="content">
              <div className="landing_content">
                <h1>Welcome To Paradise Nursery</h1>
                <div className="divider"></div>
                <p>Where Green Meets Serenity</p>
                <button className="get-started-button" onClick={handleGetStartedClick}>
                  Get Started
                </button>
              </div>
              <div className="aboutus_container">
                <AboutUs />
              </div>
            </div>
          </div>
          <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} /> {/* Route to the cart */}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
