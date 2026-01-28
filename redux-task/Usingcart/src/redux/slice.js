import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, actions) => {
            state.items.push(actions.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))

        },
        removeItem: (state, actions) => {
            const cartData = state.items.filter((item) => item.id != actions.payload.id)
            state.items = cartData
            localStorage.setItem('cart', JSON.stringify(cartData))

        },
        removeAllItem: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action) => {
            const { id, qty } = action.payload
            const item = state.items.find(item => item.id === id)
            if (item) {
                item.qty = qty
            }
        }

    }
})

export const { addItem, removeItem, removeAllItem, updateQuantity } = addToCart.actions
export default addToCart.reducer