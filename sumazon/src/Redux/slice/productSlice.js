import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getProducts', async () => {
        const response = await fetch(`/api/products`);
        return response.json();
    }
);


const initialState = {
    products: [],
    status: 'idle',
    currentSelectedProduct: {},
    productCart: {}
};

// check if local storage has data
const localProducts = JSON.parse(localStorage.getItem('products'));
// const localCurrentProduct = JSON.parse(localStorage.getItem('currentProduct'));
const localProductCart = JSON.parse(localStorage.getItem('productCart'));

if (localProducts) {
    initialState.products = localProducts;
}

// if (localCurrentProduct) {
//     initialState.currentSelectedProduct = localCurrentProduct;
// }

if (localProductCart) {
    initialState.productCart = localProductCart;
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            state.currentSelectedProduct = action.payload;
            // save to local storage
            localStorage.setItem('currentProduct', JSON.stringify(action.payload));
        },

        addToCart: (state, action) => {
            const productId = action.payload;
            if (state.productCart[productId]) {
                state.productCart[productId] += 1; // Increment quantity if product already in cart
            } else {
                state.productCart[productId] = 1; // Add new product with quantity
            }
            localStorage.setItem('productCart', JSON.stringify(state.productCart));
        },

        removeOneFromCart: (state, action) => {
            const productId = action.payload;
            if (state.productCart[productId] > 1) {
                state.productCart[productId] -= 1; // Decrement quantity if product already in cart
            } else {
                delete state.productCart[productId]; // Remove product if quantity is 1
            }
            localStorage.setItem('productCart', JSON.stringify(state.productCart));
        },

        removeFromCart: (state, action) => {
            const productId = action.payload;
            delete state.productCart[productId];
            localStorage.setItem('productCart', JSON.stringify(state.productCart));
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'Succeeded';

                // save to local storage
                localStorage.setItem('products', JSON.stringify(action.payload));
            })
    }
});

export default productsSlice.reducer;
export const { setCurrentProduct, addToCart, removeFromCart, removeOneFromCart } = productsSlice.actions;
