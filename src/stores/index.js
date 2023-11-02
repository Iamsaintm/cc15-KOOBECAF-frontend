import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        category: categorySlice,
    },
});

export default store;
