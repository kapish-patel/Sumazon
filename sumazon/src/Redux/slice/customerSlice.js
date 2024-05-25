import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const getEmptyCustomerDetails = () => ({
    id: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
});

export const addNewCustomer = createAsyncThunk(
    'customer/addNewCustomer', async (customerDetails) => {
    const response = await fetch(`api/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerDetails),
    });
    return response.json();
});

export const loginCustomer = createAsyncThunk(
    'customer/loginCustomer', async (credentials) => {
    const response = await fetch(`api/customers/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
});

export const updateCustomer = createAsyncThunk(
    'customer/updateCustomer', async (customerDetails) => {
    const response = await fetch(`api/customers`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify(customerDetails),  
    });
    return response.json();
});


const initialState = {
    customerDetails: getEmptyCustomerDetails(),
    isLoggedIn: false,
    isRegistered: false,
    status: 'idle',
};

const persistedCustomer = JSON.parse(localStorage.getItem('customerDetails'));
const persistedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

if (persistedCustomer && persistedIsLoggedIn) {
    initialState.customerDetails = persistedCustomer;
    initialState.isLoggedIn = true;
}

export const customers = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        logout: (state) => {
            // Clear the local storage
            state.customerDetails = getEmptyCustomerDetails();
            state.isLoggedIn = false;
            state.status = 'idle';

            localStorage.removeItem('customerDetails');
            localStorage.removeItem('isLoggedIn');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewCustomer.fulfilled, (state, action) => {
                console.log('action.payload', action.payload);
                if (action.payload == "Customer created") 
                    state.isRegistered = true;
                else
                    state.isRegistered = false;
            })

            .addCase(loginCustomer.fulfilled, (state, action) => {
                console.log('action.payload', action.payload);
                if (action.payload.status){ 
                    state.customerDetails = action.payload.data;
                    state.isLoggedIn = true;
                    state.isRegistered = true;
                    state.status = 'Succeeded';

                    // Store the customer details in local storage
                    localStorage.setItem('customerDetails', JSON.stringify(state.customerDetails));
                    localStorage.setItem('isLoggedIn', state.isLoggedIn);
                }
                else
                    state.isLoggedIn = false;
            })

            .addCase(updateCustomer.fulfilled, (state, action) => {
                if (action.payload.status){ 
                    state.customerDetails = action.payload.data;
                    state.status = 'Succeeded';

                    // Store the customer details in local storage
                    localStorage.setItem('customerDetails', JSON.stringify(state.customerDetails));
                    localStorage.setItem('isLoggedIn', state.isLoggedIn);
                }
                else
                    state.status = 'Failed';
            })
        }
    }
);

export const { logout } = customers.actions;
export default customers.reducer;