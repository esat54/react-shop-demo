import { combineReducers, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        items: [],
        totalAmount: 0,
        totalQuantity: 0,
        totalUniqueItems: 0
    },

    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;     
            state.totalAmount += newItem.price; 

            if (existingItem) {
                existingItem.quantity++;       
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1
                });

                state.totalUniqueItems++;
            }
        },

        increaseItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {
                existingItem.quantity++;

                state.totalQuantity++;

                state.totalAmount += existingItem.price;
            }
        },

        decreaseItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {

                state.totalQuantity--;  
                state.totalAmount -= existingItem.price;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== itemId);

                    state.totalUniqueItems--;

                } else {
                    existingItem.quantity--;
                }
            }
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {
                state.items = state.items.filter(item => item.id !== itemId);

                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= (existingItem.price * existingItem.quantity);

                state.totalUniqueItems--;
            }
        }
    },
});

export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

