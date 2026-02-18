import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("Products", async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
});

const initialState = {
    items: [],
    status: undefined,
    error: null,
};

const productslice = createSlice({
    name: "productslice",
    initialState,
    extraReducers: (builder) => {
     builder
        .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
       })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

        
    }
})


export default productslice.reducer