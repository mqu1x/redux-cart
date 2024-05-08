import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    item: [],
    total: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload);
        },
        removeItem: (state, action) => {
            state.item = state.item.filter((item) => item.id !== action.payload.id);
            state.total = state.item.reduce((acc, item) => acc + item.price, 0);
        },
        clearCart: (state) => {
            state.item = [];
            state.total = 0;
        },
        calculateTotal: (state) => {
            state.total = state.item.reduce((acc, item) => acc + item.price, 0);
        },
    },
});

export const { addItem, removeItem, clearCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
