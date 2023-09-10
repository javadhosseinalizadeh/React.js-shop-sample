import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
    },
    incrementQuantity: (state, action) => {
      const itemIdToIncrement = action.payload;
      const itemToIncrement = state.cartItems.find((item) => item.id === itemIdToIncrement);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIdToDecrement = action.payload;
      const itemToDecrement = state.cartItems.find((item) => item.id === itemIdToDecrement);
      if (itemToDecrement) {
        if (itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToDecrement.id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
