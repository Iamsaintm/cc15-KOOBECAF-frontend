import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productData: null,
        loading: false,
        error: "",
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
