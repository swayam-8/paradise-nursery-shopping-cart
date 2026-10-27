import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart', initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      if (!state.items.some(item => item.id === payload.id)) state.items.push({ ...payload, quantity: 1 });
    },
    removeItem(state, { payload }) { state.items = state.items.filter(item => item.id !== payload); },
    increaseQuantity(state, { payload }) { const item = state.items.find(item => item.id === payload); if (item) item.quantity++; },
    decreaseQuantity(state, { payload }) {
      const item = state.items.find(item => item.id === payload);
      if (item?.quantity > 1) item.quantity--;
      else state.items = state.items.filter(item => item.id !== payload);
    }
  }
});
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
export default cartSlice.reducer;
