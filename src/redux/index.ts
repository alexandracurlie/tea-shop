import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './slices/catalogSlice';
import { cartReducer } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    data: catalogReducer,
    cart: cartReducer,
  }
});
