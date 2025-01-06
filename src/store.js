import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice'; // Ensure the path to CartSlice is correct

const store = configureStore({
  reducer: {
    cart: CartReducer, // Attach the CartSlice reducer to the store
  },
});

export default store;
