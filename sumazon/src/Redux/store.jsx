import {configureStore} from '@reduxjs/toolkit';
import customerSlice from './slice/customerSlice';

const store = configureStore({
    reducer: {
        // Reducers

        customer: customerSlice,
        // cart: cartSlice,
        // products: productsSlice,
        // order: orderSlice,
    }
});

export default store;