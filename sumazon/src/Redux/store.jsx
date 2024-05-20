import {configureStore} from '@reduxjs/toolkit';
import customerSlice from './slice/customerSlice';
import productsSlice from './slice/productSlice';

const store = configureStore({
    reducer: {
        // Reducers

        customer: customerSlice,
        // cart: cartSlice,
        products: productsSlice,
        // order: orderSlice,
    }
});

export default store;