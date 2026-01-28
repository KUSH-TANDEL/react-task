import { createAsyncThunk } from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("Products", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});

const initialState = {
    items:[],
    status : undefined,
    error : null,
};

const productslice = createSlice({
    name :"productslice",
    initialState,
    extraReducers :(builder) =>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items=action.payload

        })
    }
})


export default productslice.reducer