import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getProducts', async () => {
        const response = await fetch(`/api/products`);
        return response.json();
    }
);

export const addToCart = createAsyncThunk(
    'products/addToCart', async (data) => {
        const response = await fetch(`/api/cart/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );
        return response.json();
    }
);

export const removeFromCart = createAsyncThunk(
    'products/removeFromCart', async (data) => {
        const response = await fetch(`/api/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
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

        // addToCart: (state, action) => {
        //     const productId = action.payload;
        //     if (state.productCart[productId]) {
        //         state.productCart[productId] += 1; // Increment quantity if product already in cart
        //     } else {
        //         state.productCart[productId] = 1; // Add new product with quantity
        //     }
        //     localStorage.setItem('productCart', JSON.stringify(state.productCart));
        // },

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

            .addCase(addToCart.fulfilled, (state, action) => {
                console.log('action.payload', action.payload);
    
                if (action.payload.status) {
                    console.log('action.payload.cart', action.payload.data.cart);
                    state.productCart = action.payload.data.cart;
                    console.log('state.productCart', state.productCart);

                    // Store the product cart in local storage
                    localStorage.setItem('productCart', JSON.stringify(state.productCart));
                } else
                    state.status = 'Failed';
            })

            .addCase(removeFromCart.fulfilled, (state, action) => {
                console.log('action.payload', action.payload);
                if (action.payload.status) {
                    state.productCart = action.payload.data.cart;
                    localStorage.setItem('productCart', JSON.stringify(state.productCart));
                } else
                    state.status = 'Failed';
            });
    }
});

export default productsSlice.reducer;
export const { setCurrentProduct, removeOneFromCart } = productsSlice.actions;
