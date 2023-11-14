import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";
import paymentSlice from "./slices/paymentSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        category: categorySlice,
        payment: paymentSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
