import { createSlice } from '@reduxjs/toolkit';

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
                    quantity: 1, 
                });

                state.totalUniqueItems++; 
            }
        },

        increaseItem: (state, action) => {
            console.log('Increase action dispatched');
        },

        decreaseItem: (state, action) => {
            console.log('Decrease action dispatched');
        },

        removeItem: (state, action) => {
            console.log('Remove action dispatched');
        }
    },
});

export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;