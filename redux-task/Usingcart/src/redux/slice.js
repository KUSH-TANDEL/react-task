import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
};

const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,actions)=>{
            state.items.push(actions.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
            
        },
        removeItem:(state,actions)=>{
            const cartData = state.items.filter((item)=>item.id != actions.payload.id )
            state.items=cartData
            localStorage.setItem('cart',JSON.stringify(cartData))
           
        },
        removeAllItem:(state)=>{
            state.items=[];
        }
    }
})

export const {addItem, removeItem, removeAllItem} = addToCart.actions
export default addToCart.reducer