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
    productCart: []
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
            state.productCart.push(action.payload);
            // save to local storage
            localStorage.setItem('productCart', JSON.stringify(state.productCart));
        },

        removeFromCart: (state, action) => {
            console.log("Removing from cart", action.payload);
            const updatedCart = state.productCart.filter(productId => productId !== action.payload);

            // save to local storage
            localStorage.setItem('productCart', JSON.stringify(updatedCart));
            return { ...state, productCart: updatedCart };

        }
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
export const { setCurrentProduct, addToCart, removeFromCart } = productsSlice.actions;
