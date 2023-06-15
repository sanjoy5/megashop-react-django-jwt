import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'allProducts',
    initialState: {
        loading: true,
        products: [],
        product: { reviews: [] },
        error: ''
    },
    reducers: {
        isLoading: (state) => {
            state.loading = true
            state.products = []
        },
        getProducts: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        productDetails: (state, action) => {
            state.loading = false
            state.product = action.payload
        },
        isError: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { isLoading, getProducts, productDetails, isError } = productsSlice.actions
export default productsSlice.reducer