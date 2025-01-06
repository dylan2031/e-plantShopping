import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds a new item to the cart, or increments its quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Check if the item already exists in the cart by name
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item exists, increment its quantity
        existingItem.quantity++;
      } else {
        // If item doesn't exist, add a new item with quantity set to 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // Removes an item from the cart by its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Updates the quantity of a specific item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item to update by its name
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Update the item's quantity if it's found
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exporting the action creators to be used in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the store configuration
export default CartSlice.reducer;
