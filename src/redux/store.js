import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
