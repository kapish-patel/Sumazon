import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getProducts',async () => {
        const response = await fetch(`/api/products`);
        return response.json();
    }
);

const initialState = {
    products: [],
    status: 'idle',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'Succeeded';
            })
    }
});

export default productsSlice.reducer;