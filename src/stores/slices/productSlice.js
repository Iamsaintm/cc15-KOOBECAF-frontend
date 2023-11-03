import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProduct = createAsyncThunk("products/featchAllProducts", async (payload, thunkAPI) => {
    try {
        const res = await axios.get("/product/allProduct");
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchProductByUserId = createAsyncThunk("product/fetchProductByUserId", async (payload, thunkAPI) => {
    try {
        const res = await axios.get(`/product/search/${payload}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        productData: null,
        productByUserId: null,
        loading: false,
        error: "",
        success: false,
    },
    reducers: {
        logoutProduct: (state, { payload }) => {
            state.productData = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchAllProduct.fulfilled, (state, { payload }) => {
                state.productData = payload.allProduct;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchAllProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });

        builder
            .addCase(fetchProductByUserId.pending, (state, { payload }) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchProductByUserId.fulfilled, (state, { payload }) => {
                state.productByUserId = payload.product;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchProductByUserId.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { logoutProduct } = productSlice.actions;

export default productSlice.reducer;
