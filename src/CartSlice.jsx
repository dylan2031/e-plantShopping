import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add a new item to the cart
    addItem: (state, action) => {
      const newItem = action.payload; // Get the item from the action payload
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.items.push(newItem);
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload; // Get the item name from the action payload
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Get the name and new quantity from the action payload
      const item = state.items.find(item => item.name === name);

      if (item) {
        item.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
