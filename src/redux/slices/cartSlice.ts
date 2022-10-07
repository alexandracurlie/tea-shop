import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogItem } from '../../types';

type CartState = {
  cart: CatalogItem[];
}

const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CatalogItem>) {
      state.cart = [...state.cart, action.payload];
    },
    removeItem(state, action: PayloadAction<string>) {
      const items = state.cart.filter(item => item.id !== action.payload);
      state.cart = [...items];
    },
    decreaseCount(state, action: PayloadAction<string>) {
      const items = [...state.cart];
      const index = state.cart.findIndex(item => item.id === action.payload);
      items.splice(index, 1);
      state.cart = [...items];
    },
    clearCart(state) {
      state.cart = [];
    },
  }
})

export const { addItem, removeItem, decreaseCount, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
