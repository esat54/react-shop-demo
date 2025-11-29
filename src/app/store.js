import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slices/apiSlice';

import cartSlice from '../slices/cartSlice';


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});