import { configureStore } from '@reduxjs/toolkit'
import ProductReducers from './reducers/ProductReducers'
import cartReducers from './reducers/cartReducers'
import UserLoginReducer from './reducers/UserLoginReducer'
import UserRegisterReducer from './reducers/UserRegisterReducer'
import UserDetailsReducer from './reducers/UserDetailsReducer'
import UpdateProfileReducer from './reducers/UpdateProfileReducer'

export const store = configureStore({
    reducer: {
        allProducts: ProductReducers,
        cart: cartReducers,
        userLogin: UserLoginReducer,
        userRegister: UserRegisterReducer,
        userDetails: UserDetailsReducer,
        updateProfile: UpdateProfileReducer,
    }
})

