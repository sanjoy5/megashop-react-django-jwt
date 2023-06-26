import { configureStore } from '@reduxjs/toolkit'
import ProductReducers from './reducers/ProductReducers'
import cartReducers from './reducers/cartReducers'
import UserLoginReducer from './reducers/UserLoginReducer'
import UserRegisterReducer from './reducers/UserRegisterReducer'
import UserDetailsReducer from './reducers/UserDetailsReducer'
import UpdateProfileReducer from './reducers/UpdateProfileReducer'
import OrderReducers from './reducers/OrderReducers'
import OrderDetailsReducers from './reducers/OrderDetailsReducers'
import OrderPayReducer from './reducers/OrderPayReducer'
import MyOrderReducers from './reducers/MyOrderReducers'
import UsersReducers from './reducers/UsersReducers'
import UserDeleteReducers from './reducers/UserDeleteReducers'
import UserUpdateReducer from './reducers/UserUpdateReducer'

export const store = configureStore({
    reducer: {
        allProducts: ProductReducers,
        cart: cartReducers,
        userLogin: UserLoginReducer,
        userRegister: UserRegisterReducer,
        userDetails: UserDetailsReducer,
        updateProfile: UpdateProfileReducer,
        usersList: UsersReducers,
        userUpdate: UserUpdateReducer,
        userDelete: UserDeleteReducers,
        orderCreate: OrderReducers,
        orderDetails: OrderDetailsReducers,
        orderPay: OrderPayReducer,
        myOrders: MyOrderReducers,
    }
})

