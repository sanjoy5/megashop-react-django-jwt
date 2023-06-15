
import { createSlice } from "@reduxjs/toolkit";


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartItemsFromStorage,
    },
    reducers: {
        add_cart_item: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        },
        cart_remove_item: (state, action) => {
            console.log(action, 'action');
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        }

    }

})

export const { add_cart_item, cart_remove_item } = cartSlice.actions
export default cartSlice.reducer