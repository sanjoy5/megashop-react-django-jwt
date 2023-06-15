import { configureStore } from '@reduxjs/toolkit'
import ProductReducers from './reducers/ProductReducers'
import cartReducers from './reducers/cartReducers'

export const store = configureStore({
    reducer: {
        allProducts: ProductReducers,
        cart: cartReducers,
    }
})

